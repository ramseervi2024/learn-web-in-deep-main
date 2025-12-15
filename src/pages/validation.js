import * as Yup from "yup";

// Convert "09:30" → minutes
const toMinutes = (t) => {
  if (!t) return null;
  const [h, m] = t.split(":");
  return Number(h) * 60 + Number(m);
};

// Check overlap of two ranges
const isOverlapping = (aStart, aEnd, bStart, bEnd) =>
  Math.max(aStart, bStart) < Math.min(aEnd, bEnd);

export const WorkTimeSchema = Yup.object().shape({
  start: Yup.string().required("Start time required"),
  end: Yup.string().required("End time required")
    .test("time-valid", "End must be after start", function (value) {
      const { start } = this.parent;
      return toMinutes(value) > toMinutes(start);
    }),

  breaks: Yup.array().of(
    Yup.object().shape({
      start: Yup.string().required("Break start required"),
      end: Yup.string().required("Break end required")
        .test("break-valid", "Break end must be after start", function (value) {
          const { start } = this.parent;
          return toMinutes(value) > toMinutes(start);
        })
    })
  )
    .test("break-inside-workhours", "Break must be inside working hours", function (breaks) {
      const { start, end } = this.parent;
      const ws = toMinutes(start);
      const we = toMinutes(end);

      for (const br of breaks) {
        if (!br.start || !br.end) continue;
        const bs = toMinutes(br.start);
        const be = toMinutes(br.end);
        if (bs < ws || be > we) return false;
      }
      return true;
    })
    .test("no-overlap", "Breaks cannot overlap", function (breaks) {
      for (let i = 0; i < breaks.length; i++) {
        const a = breaks[i];
        if (!a.start || !a.end) continue;
        const aStart = toMinutes(a.start);
        const aEnd = toMinutes(a.end);

        for (let j = i + 1; j < breaks.length; j++) {
          const b = breaks[j];
          if (!b.start || !b.end) continue;
          const bStart = toMinutes(b.start);
          const bEnd = toMinutes(b.end);

          if (isOverlapping(aStart, aEnd, bStart, bEnd)) {
            return false;
          }
        }
      }
      return true;
    }),
});
