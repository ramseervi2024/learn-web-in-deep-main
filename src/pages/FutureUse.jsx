import React, { useState } from 'react';
import { useFormik, Formik, Field, FieldArray, Form } from 'formik';
import * as Yup from 'yup';

const WorkDaysSchedule = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const timeOptions = [];

  // Generate time options from 00:00 to 23:30 in 30-minute intervals
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeOptions.push(time);
    }
  }

  // Convert time to minutes for easy comparison
  const timeToMinutes = (time) => {
    if (!time) return 0;
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + (minutes || 0);
  };

  // Convert minutes to time string
  const minutesToTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  // Validation schema for breaks
  const breakSchema = Yup.object().shape({
    start: Yup.string().required('Start time is required'),
    end: Yup.string()
      .required('End time is required')
      .test('is-after-start', 'End time must be after start time', function (value) {
        const { start } = this.parent;
        if (!start || !value) return true;
        return timeToMinutes(value) > timeToMinutes(start);
      }),
  });

  // Validation schema for work day
  const workDaySchema = Yup.object().shape({
    day: Yup.string().required(),
    isWorking: Yup.boolean(),
    workingHours: Yup.object().when('isWorking', {
      is: true,
      then: Yup.object().shape({
        start: Yup.string().required('Start time is required'),
        end: Yup.string()
          .required('End time is required')
          .test('is-after-start', 'End time must be after start time', function (value) {
            const { start } = this.parent;
            if (!start || !value) return true;
            return timeToMinutes(value) > timeToMinutes(start);
          }),
      }),
      otherwise: Yup.object().nullable(),
    }),
    breaks: Yup.array()
      .of(breakSchema)
      .test({
        name: 'no-break-overlaps',
        message: 'Breaks cannot overlap',
        test: function (breaks) {
          if (!breaks || breaks.length === 0) return true;

          const breakIntervals = breaks
            .map((b, index) => ({
              id: index,
              start: timeToMinutes(b.start),
              end: timeToMinutes(b.end),
            }))
            .sort((a, b) => a.start - b.start);

          for (let i = 0; i < breakIntervals.length - 1; i++) {
            if (breakIntervals[i].end > breakIntervals[i + 1].start) {
              return this.createError({
                path: `breaks[${breakIntervals[i + 1].id}].start`,
                message: 'Break overlaps with previous break',
              });
            }
          }
          return true;
        },
      })
      .test({
        name: 'breaks-within-working-hours',
        message: 'Breaks must be within working hours',
        test: function (breaks) {
          if (!breaks || breaks.length === 0) return true;
          const { workingHours, isWorking } = this.parent;

          if (!isWorking || !workingHours) return true;

          const workStart = timeToMinutes(workingHours.start);
          const workEnd = timeToMinutes(workingHours.end);

          for (let i = 0; i < breaks.length; i++) {
            const breakStart = timeToMinutes(breaks[i].start);
            const breakEnd = timeToMinutes(breaks[i].end);

            if (breakStart < workStart || breakEnd > workEnd) {
              return this.createError({
                path: `breaks[${i}].start`,
                message: 'Break must be within working hours',
              });
            }
          }
          return true;
        },
      }),
  });

  // Main validation schema
  const validationSchema = Yup.object({
    workDays: Yup.array().of(workDaySchema),
  });

  // Initial form values
  const initialValues = {
    workDays: [
      { day: 'Monday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
    //   { day: 'Tuesday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
    //   { day: 'Wednesday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
    //   { day: 'Thursday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
    //   { day: 'Friday', isWorking: true, workingHours: { start: '09:00', end: '17:00' }, breaks: [] },
    //   { day: 'Saturday', isWorking: false, workingHours: null, breaks: [] },
    //   { day: 'Sunday', isWorking: false, workingHours: null, breaks: [] },
    ],
  };

  const handleSubmit = (values) => {
    console.log('Submitted values:', values);
    setSubmittedData(values);
    alert('Schedule saved successfully!');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <h1 style={{ marginBottom: '24px', color: '#333' }}>Select Your Work Days</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, setFieldValue, handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit}>
            {values.workDays.map((day, dayIndex) => {
              const dayErrors = errors.workDays?.[dayIndex];
              const dayTouched = touched.workDays?.[dayIndex];

              return (
                <div
                  key={day.day}
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '16px',
                    marginBottom: '16px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <input
                      type="checkbox"
                      id={`day-${dayIndex}`}
                      checked={day.isWorking}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setFieldValue(`workDays[${dayIndex}].isWorking`, isChecked);
                        if (!isChecked) {
                          setFieldValue(`workDays[${dayIndex}].workingHours`, null);
                          setFieldValue(`workDays[${dayIndex}].breaks`, []);
                        } else {
                          setFieldValue(`workDays[${dayIndex}].workingHours`, {
                            start: '09:00',
                            end: '17:00',
                          });
                        }
                      }}
                      style={{ width: '20px', height: '20px', marginRight: '12px' }}
                    />
                    <label
                      htmlFor={`day-${dayIndex}`}
                      style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}
                    >
                      {day.day} {day.isWorking ? '(Working)' : '(Off)'}
                    </label>
                  </div>

                  {day.isWorking && (
                    <>
                      <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ marginBottom: '12px', color: '#555' }}>Working hours</h3>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                          <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', color: '#666', fontSize: '14px' }}>
                              Start
                            </label>
                            <select
                              name={`workDays[${dayIndex}].workingHours.start`}
                              value={day.workingHours?.start || ''}
                              onChange={handleChange}
                              style={{
                                width: '100%',
                                padding: '10px',
                                border: dayErrors?.workingHours?.start && dayTouched?.workingHours?.start
                                  ? '2px solid #d32f2f'
                                  : '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                              }}
                            >
                              <option value="">Select start time</option>
                              {timeOptions.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                            {dayErrors?.workingHours?.start && dayTouched?.workingHours?.start && (
                              <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>
                                {dayErrors.workingHours.start}
                              </div>
                            )}
                          </div>

                          <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', color: '#666', fontSize: '14px' }}>
                              End
                            </label>
                            <select
                              name={`workDays[${dayIndex}].workingHours.end`}
                              value={day.workingHours?.end || ''}
                              onChange={handleChange}
                              style={{
                                width: '100%',
                                padding: '10px',
                                border: dayErrors?.workingHours?.end && dayTouched?.workingHours?.end
                                  ? '2px solid #d32f2f'
                                  : '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                              }}
                            >
                              <option value="">Select end time</option>
                              {timeOptions.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </select>
                            {dayErrors?.workingHours?.end && dayTouched?.workingHours?.end && (
                              <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>
                                {dayErrors.workingHours.end}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                          <h3 style={{ color: '#555' }}>Breaks</h3>
                          <button
                            type="button"
                            onClick={() => {
                              if (!day.workingHours) return;

                              const workStart = timeToMinutes(day.workingHours.start);
                              const workEnd = timeToMinutes(day.workingHours.end);
                              const workDuration = workEnd - workStart;

                              let defaultStart = workStart + 60;
                              let defaultEnd = defaultStart + 60;

                              if (day.breaks.length > 0) {
                                const lastBreak = day.breaks[day.breaks.length - 1];
                                const lastBreakEnd = timeToMinutes(lastBreak.end);
                                defaultStart = lastBreakEnd + 30;
                                defaultEnd = defaultStart + 60;
                              }

                              if (defaultEnd > workEnd) {
                                defaultStart = workStart + 60;
                                defaultEnd = defaultStart + 60;
                              }

                              const newBreaks = [...day.breaks];
                              newBreaks.push({
                                start: minutesToTime(defaultStart),
                                end: minutesToTime(defaultEnd),
                              });

                              setFieldValue(`workDays[${dayIndex}].breaks`, newBreaks);
                            }}
                            style={{
                              padding: '8px 16px',
                              backgroundColor: '#2196f3',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontSize: '14px',
                            }}
                          >
                            + Add Break
                          </button>
                        </div>

                        {day.breaks.map((breakItem, breakIndex) => {
                          const breakError = dayErrors?.breaks?.[breakIndex];
                          const breakTouched = dayTouched?.breaks?.[breakIndex];

                          return (
                            <div
                              key={breakIndex}
                              style={{
                                backgroundColor: breakError ? '#ffebee' : '#f5f5f5',
                                border: '1px solid',
                                borderColor: breakError ? '#d32f2f' : '#ddd',
                                borderRadius: '4px',
                                padding: '12px',
                                marginBottom: '12px',
                              }}
                            >
                              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                                <div style={{ flex: 1 }}>
                                  <label style={{ display: 'block', marginBottom: '4px', color: '#666', fontSize: '14px' }}>
                                    Start
                                  </label>
                                  <select
                                    name={`workDays[${dayIndex}].breaks[${breakIndex}].start`}
                                    value={breakItem.start}
                                    onChange={handleChange}
                                    style={{
                                      width: '100%',
                                      padding: '8px',
                                      border: breakError?.start && breakTouched?.start
                                        ? '2px solid #d32f2f'
                                        : '1px solid #ccc',
                                      borderRadius: '4px',
                                      fontSize: '14px',
                                    }}
                                  >
                                    <option value="">Select start time</option>
                                    {timeOptions.map((time) => (
                                      <option key={time} value={time}>
                                        {time}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div style={{ flex: 1 }}>
                                  <label style={{ display: 'block', marginBottom: '4px', color: '#666', fontSize: '14px' }}>
                                    End
                                  </label>
                                  <select
                                    name={`workDays[${dayIndex}].breaks[${breakIndex}].end`}
                                    value={breakItem.end}
                                    onChange={handleChange}
                                    style={{
                                      width: '100%',
                                      padding: '8px',
                                      border: breakError?.end && breakTouched?.end
                                        ? '2px solid #d32f2f'
                                        : '1px solid #ccc',
                                      borderRadius: '4px',
                                      fontSize: '14px',
                                    }}
                                  >
                                    <option value="">Select end time</option>
                                    {timeOptions.map((time) => (
                                      <option key={time} value={time}>
                                        {time}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => {
                                    const newBreaks = [...day.breaks];
                                    newBreaks.splice(breakIndex, 1);
                                    setFieldValue(`workDays[${dayIndex}].breaks`, newBreaks);
                                  }}
                                  style={{
                                    padding: '8px 12px',
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    marginTop: '20px',
                                  }}
                                >
                                  Remove
                                </button>
                              </div>

                              {breakError && (
                                <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '8px' }}>
                                  {typeof breakError === 'object'
                                    ? breakError.start || breakError.end || breakError
                                    : breakError}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => {
                  setFieldValue('workDays', initialValues.workDays);
                }}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#f5f5f5',
                  color: '#333',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={!isValid}
                style={{
                  padding: '12px 24px',
                  backgroundColor: isValid ? '#4caf50' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isValid ? 'pointer' : 'not-allowed',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Save Schedule
              </button>
            </div>
          </form>
        )}
      </Formik>

      {submittedData && (
        <div style={{ marginTop: '32px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '12px', color: '#333' }}>Submitted Data:</h3>
          <pre style={{ 
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '12px',
            color: '#666',
            margin: 0,
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}>
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default WorkDaysSchedule;