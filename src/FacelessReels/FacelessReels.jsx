import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Icons (inline SVG to avoid import issues) ───────────────────────────────
const Icon = ({ d, size = 20, color = "currentColor", strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const ICONS = {
  video:     "M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z",
  zap:       "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  download:  "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
  eye:       "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z",
  film:      "M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z",
  settings:  "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
  x:         "M18 6L6 18M6 6l12 12",
  plus:      "M12 5v14M5 12h14",
  check:     "M20 6L9 17l-5-5",
  clock:     "M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2",
  heart:     "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
  dollar:    "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  bar:       "M18 20V10M12 20V4M6 20v-6",
  upload:    "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",
  play:      "M5 3l14 9-14 9V3z",
  stop:      "M18 18H6V6h12v12z",
};

// ─── Style Configs ─────────────────────────────────────────────────────────────
const STYLES = {
  viral:       { name: "Viral Glow",        bg: ["#1a0533","#4a0080"],   accent: "#e040fb", text: "#fff" },
  neon:        { name: "Neon Night",         bg: ["#001a1a","#003333"],   accent: "#00ffcc", text: "#e0fff9" },
  fire:        { name: "Fire & Energy",      bg: ["#1a0500","#4a1000"],   accent: "#ff6600", text: "#fff5e0" },
  ocean:       { name: "Deep Ocean",         bg: ["#000d1a","#001a33"],   accent: "#00aaff", text: "#e0f4ff" },
  gold:        { name: "Luxury Gold",        bg: ["#0d0a00","#2a2000"],   accent: "#ffcc00", text: "#fffbe0" },
  minimal:     { name: "Clean Minimal",      bg: ["#0a0a0a","#1a1a1a"],   accent: "#ffffff", text: "#cccccc" },
};

const TOPICS = [
  "AI Tools Changing Everything",
  "10 Secrets of Millionaires",
  "Productivity Hacks That Actually Work",
  "How to Make Money Online in 2025",
  "Social Media Growth Strategies",
  "The Future of Technology",
  "Health Tips Most People Ignore",
  "Travel Destinations You Must Visit",
];

// ─── Canvas Video Renderer ─────────────────────────────────────────────────────
function renderFrame(canvas, ctx, topic, style, progress, frame, totalFrames) {
  const cfg = STYLES[style] || STYLES.viral;
  const W = canvas.width, H = canvas.height;
  const t = frame / totalFrames;

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, cfg.bg[0]);
  bg.addColorStop(1, cfg.bg[1]);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Animated particle field
  ctx.save();
  for (let i = 0; i < 30; i++) {
    const seed = (i * 1.618) % 1;
    const px = ((seed * W + frame * (0.5 + seed * 0.5)) % W);
    const py = ((i * 83 + frame * (0.2 + seed * 0.3)) % H);
    const alpha = 0.05 + Math.abs(Math.sin(t * Math.PI * 2 + i)) * 0.15;
    const r = 1 + seed * 3;
    ctx.beginPath();
    ctx.arc(px, py, r, 0, Math.PI * 2);
    ctx.fillStyle = cfg.accent + Math.floor(alpha * 255).toString(16).padStart(2, "0");
    ctx.fill();
  }
  ctx.restore();

  // Glowing horizontal bars (animated)
  const barAlpha = 0.03 + Math.sin(t * Math.PI * 4) * 0.02;
  for (let i = 0; i < 12; i++) {
    const y = ((i / 12) * H + frame * 0.8) % H;
    ctx.fillStyle = cfg.accent + "08";
    ctx.fillRect(0, y, W, 2);
  }

  // Waveform / accent line
  ctx.beginPath();
  ctx.strokeStyle = cfg.accent + "55";
  ctx.lineWidth = 2;
  for (let x = 0; x <= W; x += 4) {
    const wave = Math.sin((x / W) * Math.PI * 6 + t * Math.PI * 2) * 30;
    if (x === 0) ctx.moveTo(x, H / 2 + wave);
    else ctx.lineTo(x, H / 2 + wave);
  }
  ctx.stroke();

  // ── Text: TOPIC ──────────────────────────────────────────────────
  const words = topic.split(" ");
  const chunks = [];
  let line = "";
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (test.length > 18 && line) { chunks.push(line); line = w; }
    else line = test;
  }
  if (line) chunks.push(line);

  const startFade = 0.1, endFade = 0.9;
  const textAlpha = t < startFade ? t / startFade
    : t > endFade ? 1 - (t - endFade) / (1 - endFade)
    : 1;

  const baseSize = Math.floor(W * 0.078);
  ctx.save();
  ctx.globalAlpha = textAlpha;

  // Glow shadow
  ctx.shadowColor = cfg.accent;
  ctx.shadowBlur = 40;

  const totalH = chunks.length * baseSize * 1.3;
  const startY = H / 2 - totalH / 2 - 40;

  chunks.forEach((chunk, ci) => {
    const slide = Math.max(0, Math.min(1, (t * totalFrames - ci * 8) / 20));
    const x = W / 2 + (1 - slide) * 60;
    const y = startY + ci * baseSize * 1.35;

    ctx.font = `900 ${baseSize}px 'Arial Black', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = cfg.text;
    ctx.fillText(chunk.toUpperCase(), x, y);

    // Accent underline on last word
    if (ci === chunks.length - 1) {
      const metrics = ctx.measureText(chunk.toUpperCase());
      const lw = metrics.width;
      const lineProgress = Math.min(1, (t * totalFrames - ci * 8 - 15) / 20);
      ctx.shadowBlur = 20;
      ctx.strokeStyle = cfg.accent;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x - lw / 2, y + baseSize * 0.7);
      ctx.lineTo(x - lw / 2 + lw * lineProgress, y + baseSize * 0.7);
      ctx.stroke();
    }
  });

  ctx.restore();

  // ── Progress bar ─────────────────────────────────────────────────
  ctx.fillStyle = cfg.accent + "22";
  ctx.fillRect(0, H - 8, W, 8);
  ctx.fillStyle = cfg.accent;
  ctx.fillRect(0, H - 8, W * progress, 8);

  // ── Corner branding ───────────────────────────────────────────────
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.font = `bold ${Math.floor(W * 0.03)}px Arial, sans-serif`;
  ctx.fillStyle = cfg.accent;
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  ctx.fillText("FacelessReels", W - 24, 24);
  ctx.restore();
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FacelessReels() {
  const [activeTab, setActiveTab] = useState("create");
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("viral");
  const [duration, setDuration] = useState(15);
  const [isRecording, setIsRecording] = useState(false);
  const [recordProgress, setRecordProgress] = useState(0);
  const [recordingStatus, setRecordingStatus] = useState("");
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  const canvasRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const rafRef = useRef(null);
  const previewRafRef = useRef(null);

  // Live preview animation
  useEffect(() => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    const fps = 30;
    const total = fps * 10;
    const animate = () => {
      frame = (frame + 1) % total;
      renderFrame(canvas, ctx, topic || "Your Topic Here", style, frame / total, frame, total);
      previewRafRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(previewRafRef.current);
  }, [topic, style]);

  const generateVideo = useCallback(() => {
    if (!topic.trim()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    setIsRecording(true);
    setRecordProgress(0);
    chunksRef.current = [];

    const fps = 30;
    const totalFrames = fps * duration;
    let frame = 0;

    // Check MediaRecorder support
    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
      ? "video/webm;codecs=vp9"
      : MediaRecorder.isTypeSupported("video/webm;codecs=vp8")
      ? "video/webm;codecs=vp8"
      : "video/webm";

    const stream = canvas.captureStream(fps);
    const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 5_000_000 });
    recorderRef.current = recorder;

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: mimeType });
      const url = URL.createObjectURL(blob);
      const newVid = {
        id: Date.now(),
        title: topic,
        style,
        duration: `0:${String(duration).padStart(2, "0")}`,
        blob,
        url,
        size: (blob.size / 1024 / 1024).toFixed(1) + " MB",
        mimeType,
        ext: mimeType.includes("mp4") ? "mp4" : "webm",
      };
      setVideos((v) => [newVid, ...v]);
      setIsRecording(false);
      setRecordingStatus("✅ Video ready!");
      setTimeout(() => setRecordingStatus(""), 3000);
      cancelAnimationFrame(rafRef.current);
    };

    recorder.start(100); // collect data every 100ms

    const tick = () => {
      if (frame >= totalFrames) {
        recorder.stop();
        return;
      }
      const progress = frame / totalFrames;
      renderFrame(canvas, ctx, topic, style, progress, frame, totalFrames);
      setRecordProgress(Math.round(progress * 100));
      setRecordingStatus(`Recording… ${Math.round(progress * 100)}%`);
      frame++;
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
  }, [topic, style, duration]);

  const stopRecording = () => {
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
    cancelAnimationFrame(rafRef.current);
    setIsRecording(false);
  };

  const downloadVideo = (v) => {
    const a = document.createElement("a");
    a.href = v.url;
    a.download = `${v.title.replace(/[^a-z0-9]/gi, "_")}.${v.ext}`;
    a.click();
  };

  const cfg = STYLES[style];

  return (
    <div style={{ minHeight: "100vh", background: "#050508", fontFamily: "'Segoe UI', sans-serif", color: "#e8e8f0" }}>
      {/* Hidden recording canvas */}
      <canvas ref={canvasRef} width={720} height={1280} style={{ display: "none" }} />

      {/* ── Header ── */}
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg,#9c27b0,#e040fb)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon d={ICONS.film} size={18} color="#fff" />
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>FacelessReels</span>
          <span style={{ fontSize: 11, color: "#888", background: "rgba(255,255,255,0.06)", padding: "2px 8px", borderRadius: 20 }}>REAL VIDEO GEN</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["create","library","analytics"].map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              padding: "7px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600,
              background: activeTab === t ? "linear-gradient(135deg,#7b1fa2,#e040fb)" : "rgba(255,255,255,0.06)",
              color: activeTab === t ? "#fff" : "#aaa", transition: "all 0.2s",
            }}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ── Create Tab ── */}
      {activeTab === "create" && (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 28 }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Topic */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#bbb", textTransform: "uppercase", letterSpacing: 1 }}>Video Topic</h3>
              <textarea
                value={topic}
                onChange={e => setTopic(e.target.value)}
                placeholder="Enter your video topic…"
                style={{ width: "100%", minHeight: 80, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "12px 14px", color: "#fff", fontSize: 15, resize: "vertical", outline: "none", boxSizing: "border-box" }}
              />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                {TOPICS.map(tp => (
                  <button key={tp} onClick={() => setTopic(tp)} style={{
                    padding: "4px 12px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)",
                    color: "#aaa", fontSize: 12, cursor: "pointer", transition: "all 0.15s",
                  }}>
                    {tp}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#bbb", textTransform: "uppercase", letterSpacing: 1 }}>Visual Style</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                {Object.entries(STYLES).map(([id, s]) => (
                  <button key={id} onClick={() => setStyle(id)} style={{
                    padding: "14px 10px", borderRadius: 12, cursor: "pointer", border: style === id ? `2px solid ${s.accent}` : "2px solid transparent",
                    background: `linear-gradient(135deg,${s.bg[0]},${s.bg[1]})`,
                    color: s.text, fontSize: 13, fontWeight: 700, transition: "all 0.2s",
                    boxShadow: style === id ? `0 0 20px ${s.accent}44` : "none",
                  }}>
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#bbb", textTransform: "uppercase", letterSpacing: 1 }}>
                Duration — <span style={{ color: cfg.accent }}>{duration}s</span>
              </h3>
              <input type="range" min={5} max={60} value={duration} onChange={e => setDuration(+e.target.value)}
                style={{ width: "100%", accentColor: cfg.accent }} />
              <div style={{ display: "flex", justifyContent: "space-between", color: "#666", fontSize: 12, marginTop: 6 }}>
                <span>5s (Reel)</span><span>30s (Short)</span><span>60s (Story)</span>
              </div>
            </div>

            {/* How it works note */}
            <div style={{ background: `linear-gradient(135deg,${cfg.bg[0]}88,${cfg.bg[1]}88)`, border: `1px solid ${cfg.accent}33`, borderRadius: 12, padding: 16, fontSize: 13, color: "#ccc", lineHeight: 1.6 }}>
              <strong style={{ color: cfg.accent }}>ℹ️ How real video generation works:</strong><br />
              Your browser's <strong>MediaRecorder API</strong> captures an animated canvas in real time and encodes it into a genuine <strong>.webm video file</strong> you can download and play in any modern browser or video player.
            </div>
          </div>

          {/* Right — Preview + Generate */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Live Preview */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Live Preview</div>
              <canvas ref={previewCanvasRef} width={270} height={480} style={{ width: "100%", borderRadius: 10, display: "block" }} />
            </div>

            {/* Generate Button */}
            {isRecording ? (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
                <div style={{ fontSize: 13, color: "#aaa", marginBottom: 10, textAlign: "center" }}>{recordingStatus}</div>
                <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden", marginBottom: 16 }}>
                  <div style={{ height: "100%", width: recordProgress + "%", background: `linear-gradient(90deg,${cfg.accent},${cfg.bg[1]})`, transition: "width 0.1s", borderRadius: 99 }} />
                </div>
                <button onClick={stopRecording} style={{
                  width: "100%", padding: "12px", borderRadius: 10, border: "none", background: "#c62828", color: "#fff",
                  fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}>
                  <Icon d={ICONS.stop} size={16} color="#fff" /> Stop Recording
                </button>
              </div>
            ) : (
              <button onClick={generateVideo} disabled={!topic.trim()} style={{
                padding: "16px", borderRadius: 12, border: "none", cursor: topic.trim() ? "pointer" : "not-allowed",
                background: topic.trim() ? `linear-gradient(135deg,${cfg.bg[1]},${cfg.accent})` : "#333",
                color: "#fff", fontSize: 15, fontWeight: 800, letterSpacing: "0.5px",
                boxShadow: topic.trim() ? `0 0 30px ${cfg.accent}44` : "none", transition: "all 0.25s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              }}>
                <Icon d={ICONS.zap} size={18} color="#fff" />
                Generate Real Video
              </button>
            )}

            {recordingStatus.startsWith("✅") && (
              <div style={{ background: "rgba(76,175,80,0.15)", border: "1px solid rgba(76,175,80,0.3)", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#81c784", textAlign: "center" }}>
                {recordingStatus} Check your Library →
              </div>
            )}

            {/* Stats */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 20 }}>
              {[
                ["Videos Generated", videos.length],
                ["Total Size", videos.reduce((s, v) => s + v.blob.size, 0) > 0 ? (videos.reduce((s, v) => s + v.blob.size, 0) / 1024 / 1024).toFixed(1) + " MB" : "0 MB"],
                ["Avg Duration", videos.length ? Math.round(videos.reduce((s, v) => s + parseInt(v.duration.split(":")[1]), 0) / videos.length) + "s" : "—"],
              ].map(([l, v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: 13 }}>
                  <span style={{ color: "#888" }}>{l}</span>
                  <span style={{ color: "#fff", fontWeight: 700 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Library Tab ── */}
      {activeTab === "library" && (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 24px" }}>Generated Videos</h2>
          {videos.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#555" }}>
              <Icon d={ICONS.film} size={48} color="#333" />
              <p style={{ marginTop: 16 }}>No videos yet — go to Create and generate your first!</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 }}>
              {videos.map(v => {
                const sc = STYLES[v.style];
                return (
                  <motion.div key={v.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden", cursor: "pointer" }}
                    onClick={() => setSelected(v)}>
                    <div style={{ aspectRatio: "9/16", background: `linear-gradient(135deg,${sc.bg[0]},${sc.bg[1]})`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, gap: 8 }}>
                      <video src={v.url} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
                    </div>
                    <div style={{ padding: "12px 14px" }}>
                      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.title}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#666" }}>
                        <span>{v.duration}</span>
                        <span>{v.size}</span>
                      </div>
                      <button onClick={e => { e.stopPropagation(); downloadVideo(v); }} style={{
                        marginTop: 10, width: "100%", padding: "8px", borderRadius: 8, border: "none",
                        background: `linear-gradient(135deg,${sc.bg[1]},${sc.accent || sc.bg[0]})`,
                        color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      }}>
                        <Icon d={ICONS.download} size={13} color="#fff" /> Download .{v.ext}
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Analytics Tab ── */}
      {activeTab === "analytics" && (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 24px" }}>Analytics</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
            {[
              { l: "Videos", v: videos.length, icon: ICONS.video, color: "#7c4dff" },
              { l: "Total Size", v: (videos.reduce((s, v) => s + v.blob.size, 0) / 1024 / 1024).toFixed(1) + " MB", icon: ICONS.bar, color: "#00bcd4" },
              { l: "Avg Duration", v: videos.length ? Math.round(videos.reduce((s, v) => s + parseInt(v.duration.split(":")[1] || 0), 0) / videos.length) + "s" : "0s", icon: ICONS.clock, color: "#ff7043" },
              { l: "Styles Used", v: [...new Set(videos.map(v => v.style))].length, icon: ICONS.heart, color: "#e91e63" },
            ].map(s => (
              <div key={s.l} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 22 }}>
                <Icon d={s.icon} size={20} color={s.color} />
                <div style={{ fontSize: 28, fontWeight: 800, margin: "12px 0 4px", color: s.color }}>{s.v}</div>
                <div style={{ fontSize: 13, color: "#777" }}>{s.l}</div>
              </div>
            ))}
          </div>
          {videos.length > 0 && (
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24 }}>
              <h3 style={{ margin: "0 0 18px", fontSize: 15, fontWeight: 700 }}>Video History</h3>
              {videos.map((v, i) => (
                <div key={v.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg,${STYLES[v.style].bg[0]},${STYLES[v.style].bg[1]})`, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{v.title}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{v.style} · {v.duration} · {v.size}</div>
                  </div>
                  <button onClick={() => downloadVideo(v)} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "rgba(255,255,255,0.08)", color: "#ccc", fontSize: 12, cursor: "pointer" }}>
                    ↓ Download
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24 }}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              style={{ background: "#0f0f18", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, maxWidth: 560, width: "100%", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: 16, fontWeight: 800 }}>Video Details</span>
                <button onClick={() => setSelected(null)} style={{ background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 8, padding: 8, cursor: "pointer" }}>
                  <Icon d={ICONS.x} size={16} color="#ccc" />
                </button>
              </div>
              <div style={{ padding: 24 }}>
                <video src={selected.url} controls style={{ width: "100%", borderRadius: 12, maxHeight: 400, background: "#000", marginBottom: 20 }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                  {[["Title", selected.title], ["Style", selected.style], ["Duration", selected.duration], ["File Size", selected.size]].map(([l, v]) => (
                    <div key={l} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 14px" }}>
                      <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>{l}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v}</div>
                    </div>
                  ))}
                </div>
                <button onClick={() => downloadVideo(selected)} style={{
                  width: "100%", padding: "14px", borderRadius: 12, border: "none", cursor: "pointer",
                  background: `linear-gradient(135deg,${STYLES[selected.style].bg[1]},${STYLES[selected.style].accent || "#e040fb"})`,
                  color: "#fff", fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                }}>
                  <Icon d={ICONS.download} size={18} color="#fff" /> Download .{selected.ext}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}