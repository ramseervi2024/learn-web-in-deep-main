import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const I = ({ d, size = 18, color = "currentColor", sw = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);
const IC = {
  film:  "M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z",
  zap:   "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  dl:    "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
  x:     "M18 6L6 18M6 6l12 12",
  trash: "M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",
  edit:  "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
  copy:  "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
  check: "M20 6L9 17l-5-5",
  stop:  "M18 18H6V6h12v12z",
  wand:  "M15 4V2m0 2v2m0-2h-2m2 0h2M5 8V6m0 2v2m0-2H3m2 0h2m8 2l-8 8M9 14l-5 5",
  type:  "M4 7V4h16v3M9 20h6M12 4v16",
  badge: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  eye:   "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z",
};

const STYLES = {
  viral:   { name:"Viral Glow",    bg:["#1a0533","#4a0080"], accent:"#e040fb", text:"#fff" },
  neon:    { name:"Neon Night",    bg:["#001a1a","#003333"], accent:"#00ffcc", text:"#e0fff9" },
  fire:    { name:"Fire & Energy", bg:["#1a0500","#4a1000"], accent:"#ff6600", text:"#fff5e0" },
  ocean:   { name:"Deep Ocean",    bg:["#000d1a","#001a33"], accent:"#00aaff", text:"#e0f4ff" },
  gold:    { name:"Luxury Gold",   bg:["#0d0a00","#2a2000"], accent:"#ffcc00", text:"#fffbe0" },
  minimal: { name:"Clean Minimal", bg:["#0a0a0a","#1a1a1a"], accent:"#ffffff", text:"#cccccc" },
  sunset:  { name:"Sunset Vibes",  bg:["#1a001a","#3a0020"], accent:"#ff4081", text:"#fce4ec" },
  matrix:  { name:"Matrix Code",   bg:["#000800","#001200"], accent:"#00ff41", text:"#ccffcc" },
};
const LAYOUTS = {
  center:     { name:"Center Reveal",   icon:"⬛" },
  typewriter: { name:"Typewriter",      icon:"⌨️" },
  bullets:    { name:"Bullet Points",   icon:"📋" },
  countdown:  { name:"Countdown Intro", icon:"🔢" },
  split:      { name:"Split Screen",    icon:"⬜" },
  zoom:       { name:"Zoom Punch",      icon:"🔍" },
};
const RATIOS = {
  "9:16": { w:720,  h:1280, label:"Vertical (Reels/Shorts)" },
  "1:1":  { w:1080, h:1080, label:"Square (Feed)" },
  "16:9": { w:1280, h:720,  label:"Horizontal (YouTube)" },
};
const FONTS = [
  { id:"arial-black", label:"Arial Black",  css:"'Arial Black',sans-serif",  style:"font-weight:900" },
  { id:"georgia",     label:"Georgia",      css:"Georgia,serif",              style:"font-style:italic" },
  { id:"courier",     label:"Courier",      css:"'Courier New',monospace",    style:"font-family:monospace" },
  { id:"impact",      label:"Impact",       css:"Impact,sans-serif",          style:"letter-spacing:2px" },
  { id:"trebuchet",   label:"Trebuchet",    css:"'Trebuchet MS',sans-serif",  style:"" },
  { id:"palatino",    label:"Palatino",     css:"Palatino,serif",             style:"" },
];
const TEXT_POSITIONS = ["top","middle","bottom"];
const TEXT_SHADOWS   = ["none","soft","hard","neon","outline"];
const BG_PATTERNS    = ["particles","grid","waves","rings","none"];
const FRAME_STYLES   = ["none","thin","thick","rounded","neon-border","film-strip"];
const WM_POSITIONS   = ["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","center"];
const TOPICS = [
  "AI Tools Changing Everything","10 Secrets of Millionaires",
  "Productivity Hacks That Work","Make Money Online in 2025",
  "Social Media Growth Hacks","Future of Technology",
  "Health Tips Most Ignore","Travel Destinations You Must Visit",
];

// ─── helpers ──────────────────────────────────────────────────────────────────
function wrapWords(ctx, text, maxW) {
  const words = text.split(" "); const lines = []; let cur = "";
  for (const w of words) {
    const test = cur ? cur + " " + w : w;
    if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = w; } else cur = test;
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 8);
}
function applyTextTransform(text, tf) {
  if (tf === "upper")  return text.toUpperCase();
  if (tf === "lower")  return text.toLowerCase();
  if (tf === "title")  return text.replace(/\b\w/g, c => c.toUpperCase());
  return text;
}
function setShadow(ctx, shadowType, acc) {
  ctx.shadowBlur = 0; ctx.shadowColor = "transparent";
  if (shadowType === "soft")    { ctx.shadowColor = "rgba(0,0,0,0.7)"; ctx.shadowBlur = 12; }
  if (shadowType === "hard")    { ctx.shadowColor = "#000"; ctx.shadowBlur = 0; ctx.shadowOffsetX = 3; ctx.shadowOffsetY = 3; }
  if (shadowType === "neon")    { ctx.shadowColor = acc; ctx.shadowBlur = 40; }
  if (shadowType === "outline") { /* handled via stroke */ }
}

// ─── RENDER FRAME ─────────────────────────────────────────────────────────────
function renderFrame(canvas, ctx, o) {
  const {
    topic, script, style, layout, progress, frame, totalFrames,
    fontSizePx, fontFamily, textColor, textTransform, textPosition, textShadow,
    accentOverride, bgOverride, bgPattern, frameStyle,
    watermark, wmText, wmPosition, wmFontSize, wmColor, wmOpacity, wmEmoji, wmBg,
    subtitles, introCard, outroCard, outroText, introDuration, outroDuration,
  } = o;

  const cfg  = STYLES[style] || STYLES.viral;
  const acc  = accentOverride || cfg.accent;
  const bg0  = bgOverride?.[0] || cfg.bg[0];
  const bg1  = bgOverride?.[1] || cfg.bg[1];
  const txC  = textColor || cfg.text;
  const W = canvas.width, H = canvas.height;
  const t = frame / totalFrames;
  const fps = 30;

  // ── intro card ──
  const introFrames = introCard ? introDuration * fps : 0;
  const outroFrames = outroCard ? outroDuration * fps : 0;
  const mainStart   = introFrames;
  const mainEnd     = totalFrames - outroFrames;

  // ── BACKGROUND ──
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, bg0); bgGrad.addColorStop(1, bg1);
  ctx.fillStyle = bgGrad; ctx.fillRect(0, 0, W, H);

  // ── BG PATTERN ──
  if (bgPattern === "particles") {
    for (let i = 0; i < 40; i++) {
      const seed = (i * 1.618) % 1;
      const px = ((seed * W + frame * (0.4 + seed * 0.6)) % W);
      const py = ((i * 97 + frame * (0.15 + seed * 0.35)) % H);
      const alpha = 0.04 + Math.abs(Math.sin(t * Math.PI * 2 + i)) * 0.12;
      ctx.beginPath(); ctx.arc(px, py, 1 + seed * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = acc + Math.floor(alpha * 255).toString(16).padStart(2, "0"); ctx.fill();
    }
  } else if (bgPattern === "grid") {
    ctx.strokeStyle = acc + "14"; ctx.lineWidth = 1;
    const gs = Math.floor(W / 10);
    for (let x = 0; x < W; x += gs) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += gs) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    // moving highlight
    const hx = ((frame * 4) % (W + gs)) - gs;
    ctx.strokeStyle = acc + "30"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(hx, 0); ctx.lineTo(hx, H); ctx.stroke();
  } else if (bgPattern === "waves") {
    for (let layer = 0; layer < 3; layer++) {
      ctx.beginPath(); ctx.strokeStyle = acc + ["15","0d","08"][layer]; ctx.lineWidth = 2;
      for (let x = 0; x <= W; x += 3) {
        const y = H * (0.3 + layer * 0.2) + Math.sin((x / W) * Math.PI * (4 + layer) + t * Math.PI * 2 + layer) * (40 + layer * 20);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  } else if (bgPattern === "rings") {
    for (let i = 0; i < 6; i++) {
      const r = (W * 0.1 + i * W * 0.12 + (frame * 0.5) % (W * 0.12));
      const alpha = Math.max(0, 0.15 - i * 0.025);
      ctx.beginPath(); ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
      ctx.strokeStyle = acc + Math.floor(alpha * 255).toString(16).padStart(2, "0");
      ctx.lineWidth = 2; ctx.stroke();
    }
  }
  // scan lines always
  for (let i = 0; i < 14; i++) {
    const y = ((i / 14) * H + frame * 0.7) % H;
    ctx.fillStyle = acc + "06"; ctx.fillRect(0, y, W, 2);
  }

  // ── INTRO CARD ──
  if (introCard && frame < introFrames) {
    const ip = frame / introFrames;
    ctx.save();
    ctx.globalAlpha = ip < 0.2 ? ip / 0.2 : ip > 0.8 ? (1 - ip) / 0.2 : 1;
    ctx.font = `900 ${Math.floor(W * 0.07)}px 'Arial Black',sans-serif`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = acc; ctx.shadowColor = acc; ctx.shadowBlur = 50;
    ctx.fillText("▶  NOW PLAYING", W / 2, H / 2 - W * 0.08);
    ctx.font = `700 ${Math.floor(W * 0.045)}px Arial,sans-serif`;
    ctx.fillStyle = txC; ctx.shadowBlur = 0;
    ctx.fillText(applyTextTransform(topic, textTransform), W / 2, H / 2 + W * 0.04);
    ctx.restore();
    drawProgressBar(ctx, W, H, progress, acc);
    drawWatermark(ctx, W, H, wmText, wmPosition, wmFontSize, wmColor, wmOpacity, wmEmoji, wmBg, acc, watermark);
    return;
  }

  // ── OUTRO CARD ──
  if (outroCard && frame >= mainEnd) {
    const op = (frame - mainEnd) / outroFrames;
    ctx.save();
    ctx.globalAlpha = op < 0.15 ? op / 0.15 : 1;
    // dark overlay
    ctx.fillStyle = "rgba(0,0,0,0.5)"; ctx.fillRect(0, 0, W, H);
    ctx.font = `900 ${Math.floor(W * 0.065)}px 'Arial Black',sans-serif`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = acc; ctx.shadowColor = acc; ctx.shadowBlur = 40;
    ctx.fillText("FOLLOW FOR MORE", W / 2, H / 2 - W * 0.1);
    ctx.font = `bold ${Math.floor(W * 0.048)}px Arial,sans-serif`;
    ctx.fillStyle = txC; ctx.shadowBlur = 0;
    const lines = (outroText || "Like & Subscribe!").split("\n");
    lines.forEach((l, i) => ctx.fillText(l, W / 2, H / 2 + W * 0.02 + i * W * 0.07));
    // CTA box
    const bw = W * 0.6, bh = H * 0.08, bx = (W - bw) / 2, by = H * 0.72;
    const gr = ctx.createLinearGradient(bx, by, bx + bw, by);
    gr.addColorStop(0, acc); gr.addColorStop(1, cfg.bg[1]);
    ctx.fillStyle = gr;
    if (ctx.roundRect) ctx.roundRect(bx, by, bw, bh, 14); else ctx.rect(bx, by, bw, bh);
    ctx.fill();
    ctx.font = `bold ${Math.floor(W * 0.042)}px Arial,sans-serif`;
    ctx.fillStyle = "#fff"; ctx.shadowBlur = 0;
    ctx.fillText("👍  LIKE  •  🔔  SUBSCRIBE", W / 2, by + bh / 2);
    ctx.restore();
    drawProgressBar(ctx, W, H, progress, acc);
    drawWatermark(ctx, W, H, wmText, wmPosition, wmFontSize, wmColor, wmOpacity, wmEmoji, wmBg, acc, watermark);
    return;
  }

  // ── MAIN CONTENT ──
  const mainProgress = totalFrames > introFrames + outroFrames
    ? (frame - introFrames) / (totalFrames - introFrames - outroFrames) : t;
  const mainFrame = frame - introFrames;
  const mainTotal = totalFrames - introFrames - outroFrames;

  ctx.save();
  const baseSize = fontSizePx;
  const fam = FONTS.find(f => f.id === fontFamily)?.css || "'Arial Black',sans-serif";

  if (layout === "countdown") {
    const countSecs = Math.min(3, mainTotal / 30);
    const countF = countSecs * 30;
    if (mainFrame < countF) {
      const num = Math.ceil(countSecs - mainFrame / 30);
      const sc = 1 + Math.sin((mainFrame % 30) / 30 * Math.PI) * 0.3;
      ctx.save(); ctx.translate(W / 2, H / 2); ctx.scale(sc, sc);
      ctx.font = `900 ${Math.floor(W * 0.35)}px ${fam}`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.shadowColor = acc; ctx.shadowBlur = 60; ctx.fillStyle = acc;
      ctx.fillText(String(num), 0, 0); ctx.restore();
    } else {
      drawMainText(ctx, W, H, topic, mainProgress, mainFrame, mainTotal, baseSize, fam, txC, acc, textPosition, textTransform, textShadow);
    }
  } else if (layout === "bullets") {
    drawBullets(ctx, W, H, script || topic, mainProgress, mainFrame, mainTotal, baseSize, fam, txC, acc, textShadow);
  } else if (layout === "typewriter") {
    drawTypewriter(ctx, W, H, topic, mainProgress, baseSize, fam, txC, acc, textTransform, textShadow);
  } else if (layout === "split") {
    drawSplit(ctx, W, H, topic, mainProgress, mainFrame, baseSize, fam, txC, acc, bg0, textTransform, textShadow);
  } else if (layout === "zoom") {
    drawZoom(ctx, W, H, topic, mainProgress, baseSize, fam, txC, acc, textTransform, textShadow);
  } else {
    drawMainText(ctx, W, H, topic, mainProgress, mainFrame, mainTotal, baseSize, fam, txC, acc, textPosition, textTransform, textShadow);
  }
  ctx.restore();

  // ── RICH SUBTITLES ──
  if (subtitles && o.solutionBlocks && o.solutionBlocks.length > 0) {
    drawRichSubtitles(ctx, W, H, o.solutionBlocks, frame, totalFrames, acc, o.subStyle, o.subPosition, o.subFontSize, o.subTextColor, o.subBgColor, o.subBgOpacity, o.subHighlightColor, o.subWordsPerSec);
  }

  // ── FRAME STYLE ──
  if (frameStyle !== "none") drawFrame(ctx, W, H, frameStyle, acc);

  // ── WAVEFORM ──
  ctx.beginPath(); ctx.strokeStyle = acc + "44"; ctx.lineWidth = 2.5;
  for (let x = 0; x <= W; x += 3) {
    const wave = Math.sin((x / W) * Math.PI * 8 + t * Math.PI * 4) * 18 + Math.sin((x / W) * Math.PI * 3 + t * Math.PI * 2) * 9;
    x === 0 ? ctx.moveTo(x, H * 0.84 + wave) : ctx.lineTo(x, H * 0.84 + wave);
  } ctx.stroke();

  drawProgressBar(ctx, W, H, progress, acc);
  drawWatermark(ctx, W, H, wmText, wmPosition, wmFontSize, wmColor, wmOpacity, wmEmoji, wmBg, acc, watermark);
}

// ─── RICH SUBTITLE ENGINE ─────────────────────────────────────────────────────
// Parses solution text into typed blocks, then renders them one section per time-slice

function parseSolutionBlocks(text) {
  // Each block: { type: "paragraph"|"bullet"|"table"|"heading", content, rows? }
  if (!text || !text.trim()) return [];
  const lines = text.split("\n");
  const blocks = [];
  let tableRows = [];
  let inTable = false;

  const flushTable = () => {
    if (tableRows.length > 0) { blocks.push({ type:"table", rows:[...tableRows] }); tableRows = []; inTable = false; }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { flushTable(); continue; }

    // Table row: | col | col |
    if (line.startsWith("|") && line.endsWith("|")) {
      if (line.replace(/[\s|:-]/g,"") === "") continue; // separator row
      inTable = true;
      tableRows.push(line.slice(1,-1).split("|").map(c=>c.trim()));
      continue;
    }
    flushTable();

    // Heading: # text
    if (line.startsWith("# ")) { blocks.push({ type:"heading", content: line.slice(2) }); continue; }
    if (line.startsWith("## ")) { blocks.push({ type:"heading2", content: line.slice(3) }); continue; }

    // Bullet: - text  or  * text  or  1. text
    if (/^[-*•]\s/.test(line) || /^\d+\.\s/.test(line)) {
      const content = line.replace(/^[-*•]\s/,"").replace(/^\d+\.\s/,"");
      blocks.push({ type:"bullet", content }); continue;
    }

    // Plain paragraph
    blocks.push({ type:"paragraph", content: line });
  }
  flushTable();
  return blocks;
}

function drawRichSubtitles(ctx, W, H, blocks, frame, totalFrames, acc, subStyle, subPosition, subFontSize, subTextColor, subBgColor, subBgOpacity, subHighlightColor, subWordsPerSec) {
  if (!blocks || blocks.length === 0) return;
  const fps = 30;
  const sec = frame / fps;
  const wps = subWordsPerSec || 2.5;

  // Count total "words" across all blocks to map time
  const allWords = blocks.flatMap(b => {
    if (b.type === "table") return b.rows.flat();
    return (b.content || "").split(/\s+/).filter(Boolean);
  });
  const totalWords = allWords.length || 1;
  const videoDuration = totalFrames / fps;
  const adjustedWps = totalWords / videoDuration;

  // Current word index
  const wordIdx = Math.min(Math.floor(sec * adjustedWps), totalWords - 1);

  // Which block are we in?
  let cumWords = 0;
  let activeBlock = blocks[blocks.length - 1];
  let blockWordStart = 0;
  for (const block of blocks) {
    const bWords = block.type === "table"
      ? block.rows.flat().length
      : (block.content || "").split(/\s+/).filter(Boolean).length;
    if (wordIdx < cumWords + bWords) { activeBlock = block; blockWordStart = cumWords; break; }
    cumWords += bWords;
  }

  // Position band
  const bandH = H * 0.30;
  let bandY;
  if (subPosition === "top")    bandY = H * 0.05;
  else if (subPosition === "middle") bandY = H * 0.35;
  else                          bandY = H * 0.65;

  const sz = subFontSize || 32;
  const pad = 16;

  ctx.save();

  // Background band
  const bgAlpha = subBgOpacity !== undefined ? subBgOpacity : 0.72;
  ctx.fillStyle = subBgColor || `rgba(0,0,0,${bgAlpha})`;
  if (ctx.roundRect) ctx.roundRect(20, bandY - pad, W - 40, bandH + pad * 2, 14);
  else ctx.rect(20, bandY - pad, W - 40, bandH + pad * 2);
  ctx.fill();

  const textCol = subTextColor || "#ffffff";
  const hlCol   = subHighlightColor || acc;
  const maxW    = W - 80;

  if (activeBlock.type === "heading" || activeBlock.type === "heading2") {
    const hSz = activeBlock.type === "heading" ? sz * 1.4 : sz * 1.15;
    ctx.font = `900 ${hSz}px 'Arial Black',sans-serif`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = hlCol; ctx.shadowColor = hlCol; ctx.shadowBlur = 20;
    ctx.fillText(activeBlock.content, W / 2, bandY + bandH / 2);

  } else if (activeBlock.type === "bullet") {
    // Show up to 3 surrounding bullets
    const bulletBlocks = blocks.filter(b => b.type === "bullet");
    const myIdx = bulletBlocks.indexOf(activeBlock);
    const start = Math.max(0, myIdx - 1);
    const visible = bulletBlocks.slice(start, start + 3);
    const lineH = sz * 1.6;
    const startY = bandY + pad + sz / 2;
    visible.forEach((b, i) => {
      const isCurrent = b === activeBlock;
      const y = startY + i * lineH;
      // Bullet dot
      ctx.beginPath(); ctx.arc(44, y, sz * 0.18, 0, Math.PI * 2);
      ctx.fillStyle = isCurrent ? hlCol : textCol + "66"; ctx.shadowColor = isCurrent ? hlCol : "transparent"; ctx.shadowBlur = isCurrent ? 12 : 0;
      ctx.fill();
      // Text
      ctx.font = `${isCurrent ? 700 : 400} ${isCurrent ? sz : sz * 0.88}px Arial,sans-serif`;
      ctx.textAlign = "left"; ctx.textBaseline = "middle";
      ctx.fillStyle = isCurrent ? textCol : textCol + "88"; ctx.shadowBlur = 0;
      // Highlight active words within active bullet
      if (isCurrent && subStyle === "karaoke") {
        const bWords = b.content.split(" ");
        const localIdx = wordIdx - blockWordStart;
        let xOff = 60;
        bWords.forEach((w, wi) => {
          ctx.fillStyle = wi <= localIdx ? hlCol : textCol + "99";
          ctx.fillText(w + " ", xOff, y);
          xOff += ctx.measureText(w + " ").width;
        });
      } else {
        // wrap text
        const wlines = wrapWords(ctx, b.content, maxW - 70);
        wlines.forEach((wl, wli) => ctx.fillText(wl, 60, y + wli * sz * 1.1));
      }
    });

  } else if (activeBlock.type === "table") {
    const rows = activeBlock.rows;
    if (!rows || rows.length === 0) { ctx.restore(); return; }
    const cols = rows[0].length;
    const colW = (W - 60) / cols;
    const rowH = Math.min(sz * 1.5, bandH / rows.length);
    rows.forEach((row, ri) => {
      const isHeader = ri === 0;
      const y = bandY + pad + ri * rowH;
      row.forEach((cell, ci) => {
        const x = 30 + ci * colW;
        // cell bg
        ctx.fillStyle = isHeader ? hlCol + "44" : ri % 2 === 0 ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.02)";
        ctx.fillRect(x, y, colW - 4, rowH - 2);
        // cell text
        ctx.font = `${isHeader ? 700 : 400} ${sz * 0.72}px Arial,sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillStyle = isHeader ? hlCol : textCol;
        ctx.shadowBlur = 0;
        // clip text to cell
        ctx.save();
        ctx.rect(x + 4, y, colW - 12, rowH);
        ctx.clip();
        ctx.fillText(cell, x + colW / 2, y + rowH / 2);
        ctx.restore();
      });
    });

  } else {
    // paragraph — karaoke word-by-word or full text
    const paraWords = (activeBlock.content || "").split(/\s+/).filter(Boolean);
    const localIdx = wordIdx - blockWordStart;

    if (subStyle === "karaoke") {
      // word-by-word highlight
      ctx.font = `600 ${sz}px Arial,sans-serif`;
      const lines = []; let cur = []; let curW = 0;
      paraWords.forEach((w, wi) => {
        const ww = ctx.measureText(w + " ").width;
        if (curW + ww > maxW && cur.length) { lines.push(cur); cur = [{ w, wi }]; curW = ww; }
        else { cur.push({ w, wi }); curW += ww; }
      });
      if (cur.length) lines.push(cur);

      const visibleLines = lines.slice(0, 3);
      const totalH = visibleLines.length * sz * 1.4;
      const startY = bandY + (bandH - totalH) / 2 + sz * 0.5;
      visibleLines.forEach((line, li) => {
        let xOff = W / 2 - line.reduce((s, {w}) => s + ctx.measureText(w + " ").width, 0) / 2;
        const y = startY + li * sz * 1.4;
        line.forEach(({ w, wi }) => {
          ctx.fillStyle = wi <= localIdx ? hlCol : textCol + "66";
          ctx.shadowColor = wi === localIdx ? hlCol : "transparent"; ctx.shadowBlur = wi === localIdx ? 18 : 0;
          ctx.textAlign = "left"; ctx.textBaseline = "middle";
          ctx.fillText(w, xOff, y);
          xOff += ctx.measureText(w + " ").width;
        });
      });

    } else if (subStyle === "scroll") {
      // rolling lines
      ctx.font = `500 ${sz}px Arial,sans-serif`;
      const allLines = wrapWords(ctx, activeBlock.content, maxW);
      const wordsPerLine = Math.ceil(paraWords.length / allLines.length);
      const currentLine = Math.floor(localIdx / wordsPerLine);
      const visible = allLines.slice(Math.max(0, currentLine - 1), currentLine + 3);
      visible.forEach((line, i) => {
        const isCur = i === Math.min(1, currentLine);
        ctx.font = `${isCur ? 700 : 400} ${isCur ? sz : sz * 0.85}px Arial,sans-serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillStyle = isCur ? textCol : textCol + "66";
        ctx.shadowColor = isCur ? hlCol : "transparent"; ctx.shadowBlur = isCur ? 10 : 0;
        ctx.fillText(line, W / 2, bandY + pad + sz / 2 + i * sz * 1.45);
      });

    } else {
      // plain — show full paragraph wrapped, fade in
      ctx.font = `500 ${sz * 0.88}px Arial,sans-serif`;
      const lines = wrapWords(ctx, activeBlock.content, maxW);
      const lineH = sz * 1.35;
      const startY = bandY + (bandH - lines.length * lineH) / 2 + lineH / 2;
      lines.forEach((line, i) => {
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillStyle = textCol; ctx.shadowBlur = 0;
        ctx.fillText(line, W / 2, startY + i * lineH);
      });
    }
  }

  ctx.restore();
}

// ─── draw helpers ─────────────────────────────────────────────────────────────
function textY(H, position, totalH) {
  if (position === "top")    return H * 0.18 + totalH / 2;
  if (position === "bottom") return H * 0.72 - totalH / 2;
  return H / 2;
}

function drawMainText(ctx, W, H, topic, t, frame, total, size, fam, txC, acc, position, tf, shadow) {
  ctx.font = `900 ${size}px ${fam}`;
  const lines = wrapWords(ctx, applyTextTransform(topic, tf), W - 80);
  const lh = size * 1.35;
  const startY = textY(H, position, lines.length * lh) - (lines.length * lh) / 2;
  lines.forEach((line, ci) => {
    const slide = Math.max(0, Math.min(1, (t * total - ci * 8) / 20));
    const x = W / 2 + (1 - slide) * 70;
    const y = startY + ci * lh;
    ctx.save();
    setShadow(ctx, shadow, acc);
    ctx.font = `900 ${size}px ${fam}`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = txC;
    if (shadow === "outline") { ctx.strokeStyle = acc; ctx.lineWidth = Math.max(2, size * 0.04); ctx.strokeText(line, x, y); }
    ctx.fillText(line, x, y);
    if (ci === lines.length - 1) {
      const lw = ctx.measureText(line).width;
      const lp = Math.min(1, (t * total - ci * 8 - 15) / 20);
      ctx.shadowColor = acc; ctx.shadowBlur = 16; ctx.strokeStyle = acc; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(x - lw / 2, y + size * 0.75); ctx.lineTo(x - lw / 2 + lw * lp, y + size * 0.75); ctx.stroke();
    }
    ctx.restore();
  });
}

function drawBullets(ctx, W, H, text, t, frame, total, size, fam, txC, acc, shadow) {
  const lines = wrapWords(ctx, text, W - 130).slice(0, 5);
  const sz = Math.min(size, Math.floor(W * 0.055));
  const lh = sz * 1.75;
  const startY = H / 2 - (lines.length * lh) / 2;
  lines.forEach((line, ci) => {
    const appear = Math.max(0, Math.min(1, (t * total - ci * 15) / 18));
    if (appear <= 0) return;
    ctx.save(); ctx.globalAlpha = appear;
    const y = startY + ci * lh;
    ctx.beginPath(); ctx.arc(56, y, sz * 0.22, 0, Math.PI * 2);
    ctx.fillStyle = acc; ctx.shadowColor = acc; ctx.shadowBlur = 14; ctx.fill();
    ctx.font = `700 ${sz}px ${fam}`; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    setShadow(ctx, shadow, acc); ctx.fillStyle = txC;
    ctx.fillText(line, 90, y); ctx.restore();
  });
}

function drawTypewriter(ctx, W, H, topic, t, size, fam, txC, acc, tf, shadow) {
  const full = applyTextTransform(topic, tf);
  const chars = Math.floor(t * full.length * 1.15);
  const visible = full.slice(0, Math.min(chars, full.length));
  const cursor = chars <= full.length && Math.sin(t * Math.PI * 8) > 0 ? "█" : "";
  ctx.font = `900 ${size}px ${fam}`;
  const lines = wrapWords(ctx, visible + cursor, W - 60);
  const lh = size * 1.4;
  lines.forEach((l, i) => {
    ctx.save(); setShadow(ctx, shadow, acc);
    ctx.font = `900 ${size}px ${fam}`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = txC;
    ctx.fillText(l, W / 2, H / 2 - ((lines.length - 1) * lh / 2) + i * lh); ctx.restore();
  });
}

function drawSplit(ctx, W, H, topic, t, frame, size, fam, txC, acc, bg0, tf, shadow) {
  ctx.fillStyle = "rgba(0,0,0,0.38)"; ctx.fillRect(0, 0, W / 2, H);
  ctx.strokeStyle = acc; ctx.lineWidth = 3; ctx.shadowColor = acc; ctx.shadowBlur = 18;
  ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();
  for (let i = 0; i < 5; i++) {
    const y = H * (0.15 + i * 0.17); const r = 18 + Math.sin(frame / 22 + i) * 7;
    ctx.beginPath(); ctx.arc(W * 0.25, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = acc + "77"; ctx.lineWidth = 2; ctx.shadowBlur = 0; ctx.stroke();
  }
  ctx.save(); ctx.beginPath(); ctx.rect(W / 2 + 18, 0, W / 2 - 18, H); ctx.clip();
  const lines = wrapWords(ctx, applyTextTransform(topic, tf), W / 2 - 40).slice(0, 5);
  const sz = Math.min(size, Math.floor(W * 0.06));
  lines.forEach((l, i) => {
    const appear = Math.max(0, Math.min(1, (t * 100 - i * 12) / 15));
    ctx.globalAlpha = appear;
    ctx.font = `900 ${sz}px ${fam}`; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    setShadow(ctx, shadow, acc); ctx.fillStyle = txC;
    ctx.fillText(l, W / 2 + 28, H * 0.3 + i * sz * 1.4);
  });
  ctx.restore(); ctx.globalAlpha = 1;
}

function drawZoom(ctx, W, H, topic, t, size, fam, txC, acc, tf, shadow) {
  const pulse = 1 + Math.sin(t * Math.PI * 4) * 0.055;
  const scale = (0.3 + t * 0.9) * pulse;
  ctx.save(); ctx.translate(W / 2, H / 2); ctx.scale(scale, scale);
  ctx.globalAlpha = Math.min(1, t * 3);
  const lines = wrapWords(ctx, applyTextTransform(topic, tf), W - 80);
  const lh = size * 1.3;
  lines.forEach((l, i) => {
    setShadow(ctx, shadow, acc);
    ctx.font = `900 ${size}px ${fam}`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillStyle = txC;
    ctx.fillText(l, 0, -(lines.length - 1) * lh / 2 + i * lh);
  });
  ctx.restore();
}

function drawProgressBar(ctx, W, H, progress, acc) {
  ctx.fillStyle = acc + "22"; ctx.fillRect(0, H - 8, W, 8);
  const pg = ctx.createLinearGradient(0, 0, W * progress, 0);
  pg.addColorStop(0, acc); pg.addColorStop(1, "#fff");
  ctx.fillStyle = pg; ctx.fillRect(0, H - 8, W * progress, 8);
}

function drawWatermark(ctx, W, H, wmText, wmPosition, wmFontSize, wmColor, wmOpacity, wmEmoji, wmBg, acc, enabled) {
  if (!enabled || !wmText) return;
  const label = (wmEmoji ? wmEmoji + " " : "") + wmText;
  ctx.save();
  ctx.font = `700 ${wmFontSize}px Arial,sans-serif`;
  ctx.textBaseline = "middle";
  const tw = ctx.measureText(label).width;
  const pad = 10, bh = wmFontSize + 12;

  let bx, by, ta;
  const positions = {
    "top-left":      { x: 16,             y: 16 + bh / 2,        ta: "left"   },
    "top-center":    { x: W / 2 - tw / 2, y: 16 + bh / 2,        ta: "left"   },
    "top-right":     { x: W - tw - 32,    y: 16 + bh / 2,        ta: "left"   },
    "bottom-left":   { x: 16,             y: H - 40 - bh / 2,    ta: "left"   },
    "bottom-center": { x: W / 2 - tw / 2, y: H - 40 - bh / 2,    ta: "left"   },
    "bottom-right":  { x: W - tw - 32,    y: H - 40 - bh / 2,    ta: "left"   },
    "center":        { x: W / 2 - tw / 2, y: H / 2,               ta: "left"   },
  };
  const pos = positions[wmPosition] || positions["top-right"];
  bx = pos.x; by = pos.y - bh / 2;

  ctx.globalAlpha = wmOpacity;
  if (wmBg) {
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    if (ctx.roundRect) ctx.roundRect(bx - pad, by, tw + pad * 2, bh, 8); else ctx.rect(bx - pad, by, tw + pad * 2, bh);
    ctx.fill();
  }
  ctx.fillStyle = wmColor || acc;
  ctx.textAlign = "left";
  ctx.fillText(label, bx, by + bh / 2);
  ctx.restore();
}

function drawFrame(ctx, W, H, frameStyle, acc) {
  if (frameStyle === "thin") {
    ctx.strokeStyle = acc + "66"; ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, W - 4, H - 4);
  } else if (frameStyle === "thick") {
    ctx.strokeStyle = acc; ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, W - 14, H - 14);
  } else if (frameStyle === "rounded") {
    ctx.strokeStyle = acc + "99"; ctx.lineWidth = 8;
    ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(6, 6, W - 12, H - 12, 40); else ctx.rect(6, 6, W - 12, H - 12); ctx.stroke();
  } else if (frameStyle === "neon-border") {
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = acc + ["ff","88","33"][i]; ctx.lineWidth = [2, 5, 9][i];
      ctx.shadowColor = acc; ctx.shadowBlur = [0, 10, 25][i];
      ctx.strokeRect(4 + i * 3, 4 + i * 3, W - 8 - i * 6, H - 8 - i * 6);
    }
    ctx.shadowBlur = 0;
  } else if (frameStyle === "film-strip") {
    const sw = W * 0.045, sh = H * 0.025, sy = sh * 0.3, gap = sh * 0.5;
    ctx.fillStyle = acc + "99";
    for (let side = 0; side < 2; side++) {
      const fx = side === 0 ? sy : W - sy - sw;
      for (let i = 0; i < 18; i++) {
        const fy = i * (sh + gap) + gap;
        if (ctx.roundRect) ctx.roundRect(fx, fy, sw, sh, 3); else ctx.rect(fx, fy, sw, sh);
        ctx.fill();
      }
    }
  }
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function FacelessReels() {
  const [tab,            setTab]            = useState("create");
  // content
  const [topic,          setTopic]          = useState("");
  const [script,         setScript]         = useState("");
  const [hashtags,       setHashtags]       = useState([]);
  // style
  const [style,          setStyle]          = useState("viral");
  const [layout,         setLayout]         = useState("center");
  const [ratio,          setRatio]          = useState("9:16");
  const [duration,       setDuration]       = useState(15);
  // text
  const [fontSizePx,     setFontSizePx]     = useState(56);
  const [fontFamily,     setFontFamily]     = useState("arial-black");
  const [textColor,      setTextColor]      = useState("");
  const [textTransform,  setTextTransform]  = useState("upper");
  const [textPosition,   setTextPosition]   = useState("middle");
  const [textShadow,     setTextShadow]     = useState("neon");
  // colors
  const [accentColor,    setAccentColor]    = useState("");
  const [bgColor1,       setBgColor1]       = useState("");
  const [bgColor2,       setBgColor2]       = useState("");
  // bg / frame
  const [bgPattern,      setBgPattern]      = useState("particles");
  const [frameStyle,     setFrameStyle]     = useState("none");
  // watermark / branding
  const [watermark,      setWatermark]      = useState(true);
  const [wmText,         setWmText]         = useState("FacelessReels");
  const [wmPosition,     setWmPosition]     = useState("top-right");
  const [wmFontSize,     setWmFontSize]     = useState(26);
  const [wmColor,        setWmColor]        = useState("#ffffff");
  const [wmOpacity,      setWmOpacity]      = useState(0.55);
  const [wmEmoji,        setWmEmoji]        = useState("🎬");
  const [wmBg,           setWmBg]           = useState(true);
  // subtitles & solution
  const [subtitles,         setSubtitles]         = useState(false);
  const [subStyle,          setSubStyle]          = useState("karaoke");   // karaoke|scroll|plain
  const [subPosition,       setSubPosition]       = useState("bottom");    // top|middle|bottom
  const [subFontSize,       setSubFontSize]       = useState(32);
  const [subTextColor,      setSubTextColor]      = useState("#ffffff");
  const [subBgColor,        setSubBgColor]        = useState("rgba(0,0,0,0.72)");
  const [subBgOpacity,      setSubBgOpacity]      = useState(0.72);
  const [subHighlightColor, setSubHighlightColor] = useState("");
  const [subWordsPerSec,    setSubWordsPerSec]    = useState(2.5);
  const [solutionFormat,    setSolutionFormat]    = useState("paragraph"); // paragraph|bullets|table|mixed
  // intro / outro
  const [introCard,      setIntroCard]      = useState(false);
  const [outroCard,      setOutroCard]      = useState(false);
  const [outroText,      setOutroText]      = useState("Follow for more!\nNew videos daily");
  const [introDuration,  setIntroDuration]  = useState(2);
  const [outroDuration,  setOutroDuration]  = useState(3);
  // record
  const [aiLoading,      setAiLoading]      = useState(false);
  const [aiStep,         setAiStep]         = useState("");
  const [isRec,          setIsRec]          = useState(false);
  const [recPct,         setRecPct]         = useState(0);
  const [recStatus,      setRecStatus]      = useState("");
  const [videos,         setVideos]         = useState([]);
  const [selected,       setSelected]       = useState(null);
  const [renaming,       setRenaming]       = useState(null);
  const [renameVal,      setRenameVal]      = useState("");
  const [copied,         setCopied]         = useState(false);
  const [activeSection,  setActiveSection]  = useState("content");
  const [converting,     setConverting]     = useState({});
  const [preferMp4,      setPreferMp4]      = useState(true);

  const canvasRef  = useRef(null);
  const previewRef = useRef(null);
  const recRef     = useRef(null);
  const chunksRef  = useRef([]);
  const rafRef     = useRef(null);
  const prevRafRef = useRef(null);
  const ffmpegRef  = useRef(null);

  const cfg = STYLES[style];
  const acc = accentColor || cfg.accent;
  const ratioW = RATIOS[ratio].w, ratioH = RATIOS[ratio].h;

  const getRenderOpts = useCallback((frame, totalFrames) => ({
    topic, script, style, layout,
    progress: frame / totalFrames, frame, totalFrames,
    fontSizePx, fontFamily, textColor, textTransform, textPosition, textShadow,
    accentOverride: acc,
    bgOverride: (bgColor1 && bgColor2) ? [bgColor1, bgColor2] : null,
    bgPattern, frameStyle,
    watermark, wmText, wmPosition, wmFontSize, wmColor, wmOpacity, wmEmoji, wmBg,
    subtitles,
    solutionBlocks: subtitles ? parseSolutionBlocks(script) : [],
    subStyle, subPosition, subFontSize, subTextColor, subBgColor, subBgOpacity, subHighlightColor, subWordsPerSec,
    introCard, outroCard, outroText, introDuration, outroDuration,
  }), [topic, script, style, layout, fontSizePx, fontFamily, textColor, textTransform,
      textPosition, textShadow, acc, bgColor1, bgColor2, bgPattern, frameStyle,
      watermark, wmText, wmPosition, wmFontSize, wmColor, wmOpacity, wmEmoji, wmBg,
      subtitles, subStyle, subPosition, subFontSize, subTextColor, subBgColor, subBgOpacity,
      subHighlightColor, subWordsPerSec, introCard, outroCard, outroText, introDuration, outroDuration]);

  // Live preview
  useEffect(() => {
    const canvas = previewRef.current;
    if (!canvas) return;
    canvas.width = ratioW; canvas.height = ratioH;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    const total = 30 * 10;
    const go = () => {
      renderFrame(canvas, ctx, getRenderOpts(frame, total));
      frame = (frame + 1) % total;
      prevRafRef.current = requestAnimationFrame(go);
    };
    go();
    return () => cancelAnimationFrame(prevRafRef.current);
  }, [getRenderOpts, ratioW, ratioH]);

  // AI generation
  const generateAI = async () => {
    if (!topic.trim()) return;
    setAiLoading(true); setAiStep("✍️ Writing script…");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 2000,
          messages: [{ role: "user", content: `You are a viral short-video scriptwriter. The PROBLEM/TOPIC is: "${topic}". Solution format requested: "${solutionFormat}".

Write a solution that will be burned as subtitles into a video. Format rules:
- If "paragraph": write 2-3 short punchy paragraphs (plain text, one paragraph per line, blank line between)
- If "bullets": write 4-7 bullet points using "- " prefix
- If "table": write a markdown table with | col | col | format, max 4 cols, 4-6 rows
- If "mixed": write a heading (# Heading), then 2 bullets, then a short paragraph

Keep it concise — this is VIDEO text, not an essay.
Return ONLY valid JSON: {"script": "<formatted solution text here>","hashtags":["tag1","tag2","tag3","tag4","tag5","tag6","tag7","tag8"]}` }]
        })
      });
      const data = await res.json();
      const raw = data.content?.[0]?.text || "{}";
      const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
      setScript(parsed.script || ""); setHashtags(parsed.hashtags || []);
      setAiStep("✅ Done!");
    } catch { setAiStep("⚠️ AI unavailable — write your own below"); }
    setAiLoading(false); setTimeout(() => setAiStep(""), 3000);
  }; // deps: topic, solutionFormat

  // Record
  const generateVideo = useCallback(() => {
    if (!topic.trim()) return;
    const canvas = canvasRef.current; if (!canvas) return;
    canvas.width = ratioW; canvas.height = ratioH;
    const ctx = canvas.getContext("2d");
    setIsRec(true); setRecPct(0); chunksRef.current = [];
    const fps = 30, totalFrames = fps * duration;
    let frame = 0;
    const mimeType = ["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"]
      .find(t => MediaRecorder.isTypeSupported(t)) || "video/webm";
    const recorder = new MediaRecorder(canvas.captureStream(fps), { mimeType, videoBitsPerSecond: 6_000_000 });
    recRef.current = recorder;
    recorder.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: mimeType });
      const reader = new FileReader();
      reader.onload = () => {
        setVideos(v => [{
          id: Date.now(), title: topic, style, layout, ratio,
          duration: `0:${String(duration).padStart(2, "0")}`,
          blob, url: reader.result,
          size: (blob.size / 1024 / 1024).toFixed(1) + " MB",
          ext: "webm", hashtags: [...hashtags], script,
          createdAt: new Date().toLocaleString(),
          settings: { fontFamily, textPosition, textShadow, bgPattern, frameStyle },
        }, ...v]);
        setIsRec(false); setRecStatus("✅ Video ready!");
        setTimeout(() => setRecStatus(""), 3500);
        cancelAnimationFrame(rafRef.current);
      };
      reader.readAsDataURL(blob);
    };
    recorder.start(100);
    const tick = () => {
      if (frame >= totalFrames) { recorder.stop(); return; }
      renderFrame(canvas, ctx, getRenderOpts(frame, totalFrames));
      setRecPct(Math.round((frame / totalFrames) * 100));
      setRecStatus(`Recording… ${Math.round((frame / totalFrames) * 100)}%`);
      frame++; rafRef.current = requestAnimationFrame(tick);
    };
    tick();
  }, [getRenderOpts, topic, style, layout, ratio, duration, hashtags, script,
      fontFamily, textPosition, textShadow, bgPattern, frameStyle, ratioW, ratioH]);

  const stopRec = () => {
    if (recRef.current?.state !== "inactive") recRef.current.stop();
    cancelAnimationFrame(rafRef.current); setIsRec(false);
  };
  const loadFFmpeg = async () => {
    if (ffmpegRef.current) return ffmpegRef.current;
    const { FFmpeg } = window.FFmpegWASM;
    const ff = new FFmpeg();
    ff.on("log", ({ message }) => console.log("[FFmpeg]", message));
    ffmpegRef.current = { ff };
    return ffmpegRef.current;
  };

  const downloadAsMp4 = async (v) => {
    const id = v.id;
    setConverting(c => ({ ...c, [id]: 1 }));
    try {
      const { ff } = await loadFFmpeg();
      if (!ff.loaded) { 
        setConverting(c => ({ ...c, [id]: "loading" })); 
        // new Worker() requires same-origin (satisfies via toBlobURL) but importScripts() allows cross-origin
        const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
        const ffmpegURL = "https://unpkg.com/@ffmpeg/ffmpeg@0.12.10/dist/umd";
        await ff.load({
          coreURL: `${baseURL}/ffmpeg-core.js`,
          wasmURL: `${baseURL}/ffmpeg-core.wasm`,
          workerURL: await toBlobURL(`${ffmpegURL}/814.ffmpeg.js`, "text/javascript"),
        }); 
      }
      setConverting(c => ({ ...c, [id]: 5 }));
      
      await ff.writeFile("in.webm", await fetchFile(v.blob));
      const dur = parseInt(v.duration.split(":")[1]) || 15;
      
      ff.on("log", ({ message }) => {
        const m = message.match(/time=(\d+):(\d+):([\d.]+)/);
        if (m) { 
          const s = +m[1]*3600 + +m[2]*60 + parseFloat(m[3]); 
          setConverting(c => ({ ...c, [id]: Math.min(95, Math.round(5+(s/dur)*88)) })); 
        }
      });
      
      await ff.exec([
        "-i", "in.webm",
        "-c:v", "libx264", 
        "-preset", "ultrafast", 
        "-pix_fmt", "yuv420p",
        "-movflags", "+faststart", 
        "out.mp4"
      ]);
      const data = await ff.readFile("out.mp4");
      try { await ff.deleteFile("in.webm"); await ff.deleteFile("out.mp4"); } catch(_){}
      
      const blob = new Blob([data.buffer], { type:"video/mp4" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href=url;
      a.download=`${v.title.replace(/[^a-z0-9]/gi,"_")}.mp4`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 15000);
      setConverting(c => ({ ...c, [id]: "done" }));
      setTimeout(() => setConverting(c => { const n={...c}; delete n[id]; return n; }), 3000);
    } catch(err) {
      console.error("MP4 err:", err);
      setConverting(c => ({ ...c, [id]: "error" }));
      setTimeout(() => setConverting(c => { const n={...c}; delete n[id]; return n; }), 4000);
      downloadWebm(v);
    }
  };

  const downloadWebm = v => {
    try {
      const a = document.createElement("a"); a.href=v.url;
      a.download=`${v.title.replace(/[^a-z0-9]/gi,"_")}.webm`;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    } catch { window.open(v.url,"_blank"); }
  };

  const downloadVideo = v => {
    // Always try MP4 conversion first, fallback to WebM only if MP4 fails
    downloadAsMp4(v);
  };
  const deleteVideo = (id, e) => {
    e?.stopPropagation();
    setVideos(vs => vs.filter(v => v.id !== id));
    if (selected?.id === id) setSelected(null);
  };
  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags.map(h => "#" + h).join(" "));
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  // ── UI primitives ──────────────────────────────────────────────────────────
  const Card = ({ children, style: s }) => (
    <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:14, padding:20, ...s }}>{children}</div>
  );
  const SectionBtn = ({ id, label }) => (
    <button onClick={() => setActiveSection(id)} style={{
      flex:1, padding:"8px 0", borderRadius:8, border:"none", cursor:"pointer", fontSize:12, fontWeight:700,
      background: activeSection===id ? `${acc}33` : "transparent",
      color: activeSection===id ? acc : "#666",
      borderBottom: activeSection===id ? `2px solid ${acc}` : "2px solid transparent",
      transition:"all 0.2s",
    }}>{label}</button>
  );
  const Row = ({ children, gap=10 }) => <div style={{ display:"flex", alignItems:"center", flexWrap:"wrap", gap }}>{children}</div>;
  const Label = ({ children }) => <div style={{ fontSize:11, fontWeight:700, color:"#666", textTransform:"uppercase", letterSpacing:1, marginBottom:8 }}>{children}</div>;
  const Slider = ({ label, val, min, max, set, unit="" }) => (
    <div>
      <div style={{ fontSize:12, color:"#888", marginBottom:5 }}>{label} — <span style={{ color:acc, fontWeight:700 }}>{val}{unit}</span></div>
      <input type="range" min={min} max={max} value={val} onChange={e => set(+e.target.value)} style={{ width:"100%", accentColor:acc }} />
    </div>
  );
  const DownloadBtn = ({ v, compact=false }) => {
    const st=converting[v.id], isPct=typeof st==="number", isDone=st==="done", isErr=st==="error", isLoad=st==="loading", busy=isPct||isLoad;
    const sc=STYLES[v.style], bAcc=sc?.accent||acc;
    if(isDone) return <div style={{padding:compact?"5px 9px":"9px 12px",borderRadius:8,background:"rgba(76,175,80,0.18)",border:"1px solid rgba(76,175,80,0.3)",color:"#81c784",fontSize:compact?10:12,fontWeight:700,whiteSpace:"nowrap"}}>✅ Saved!</div>;
    if(isErr)  return <div style={{padding:compact?"5px 9px":"9px 12px",borderRadius:8,background:"rgba(255,60,60,0.12)",border:"1px solid rgba(255,60,60,0.25)",color:"#e57373",fontSize:compact?10:12,fontWeight:700}}>⚠️ .webm fallback</div>;
    if(busy) return (
      <div style={{minWidth:compact?80:110}}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#aaa",marginBottom:3}}>
          <span>{isLoad?"Loading FFmpeg…":"Converting…"}</span><span style={{color:bAcc}}>{isPct?st+"%":""}</span>
        </div>
        <div style={{height:5,background:"rgba(255,255,255,0.08)",borderRadius:99,overflow:"hidden"}}>
          <div style={{height:"100%",width:isLoad?"35%":st+"%",background:`linear-gradient(90deg,${bAcc},#fff)`,transition:"width 0.3s",borderRadius:99}}/>
        </div>
      </div>
    );
    return (
      <button onClick={()=>downloadVideo(v)} style={{
        flex:compact?undefined:1,padding:compact?"6px 10px":"9px 13px",borderRadius:8,border:"none",cursor:"pointer",
        background:"linear-gradient(135deg,#0d47a1,#42a5f5)",
        color:"#fff",fontSize:compact?11:13,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:5,
        boxShadow:"0 0 14px rgba(66,165,245,0.35)",whiteSpace:"nowrap",
      }}>
        <I d={IC.dl} size={compact?11:13} color="#fff"/>
        ⬇ MP4
      </button>
    );
  };

  const ColorRow = ({ label, val, def, set }) => (
    <div>
      <div style={{ fontSize:11, color:"#777", marginBottom:4 }}>{label}</div>
      <div style={{ display:"flex", alignItems:"center", gap:7 }}>
        <input type="color" value={val || def} onChange={e => set(e.target.value)}
          style={{ width:32, height:26, borderRadius:6, border:"none", cursor:"pointer", background:"none" }} />
        <span style={{ fontSize:10, color:"#555" }}>{val || def}</span>
        {val && <button onClick={() => set("")} style={{ fontSize:10, color:"#555", background:"none", border:"none", cursor:"pointer", padding:0 }}>↺</button>}
      </div>
    </div>
  );
  const ChipGroup = ({ label, options, value, set }) => (
    <div>
      <Label>{label}</Label>
      <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
        {options.map(opt => {
          const id = typeof opt === "string" ? opt : opt.id;
          const name = typeof opt === "string" ? opt : opt.name;
          return (
            <button key={id} onClick={() => set(id)} style={{
              padding:"5px 12px", borderRadius:7, border:"none", cursor:"pointer", fontSize:12, fontWeight:600,
              background: value===id ? `${acc}33` : "rgba(255,255,255,0.06)",
              color: value===id ? acc : "#888",
              outline: value===id ? `1px solid ${acc}66` : "none",
              transition:"all 0.15s",
            }}>{name}</button>
          );
        })}
      </div>
    </div>
  );

  const styleCount = Object.keys(STYLES).reduce((a, s) => { a[s] = videos.filter(v => v.style === s).length; return a; }, {});
  const maxCount = Math.max(1, ...Object.values(styleCount));

  return (
    <div style={{ minHeight:"100vh", background:"#050508", fontFamily:"'Segoe UI',system-ui,sans-serif", color:"#e8e8f0" }}>
      <canvas ref={canvasRef} style={{ display:"none" }} />

      {/* HEADER */}
      <div style={{ background:"rgba(255,255,255,0.025)", borderBottom:"1px solid rgba(255,255,255,0.07)", padding:"12px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:50, backdropFilter:"blur(12px)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:32, height:32, borderRadius:9, background:`linear-gradient(135deg,${cfg.bg[1]},${acc})`, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <I d={IC.film} size={15} color="#fff" />
          </div>
          <span style={{ fontSize:17, fontWeight:900, letterSpacing:"-0.5px" }}>FacelessReels</span>
          <span style={{ fontSize:10, color:"#555", background:"rgba(255,255,255,0.06)", padding:"2px 7px", borderRadius:20 }}>AI VIDEO</span>
        </div>
        <div style={{ display:"flex", gap:4 }}>
          {[["create","🎬 Create"],["library","📁 Library"],["analytics","📊 Analytics"]].map(([id, label]) => (
            <button key={id} onClick={() => setTab(id)} style={{
              padding:"6px 14px", borderRadius:8, border:"none", cursor:"pointer", fontSize:12, fontWeight:700,
              background: tab===id ? `linear-gradient(135deg,${cfg.bg[1]},${acc})` : "rgba(255,255,255,0.06)",
              color: tab===id ? "#fff" : "#888",
              boxShadow: tab===id ? `0 0 14px ${acc}44` : "none", transition:"all 0.2s",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* ══ CREATE ══ */}
      {tab === "create" && (
        <div style={{ maxWidth:1180, margin:"0 auto", padding:"24px 16px", display:"grid", gridTemplateColumns:"1fr 300px", gap:20 }}>

          {/* LEFT: tabbed settings */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {/* Section tabs */}
            <div style={{ display:"flex", background:"rgba(255,255,255,0.03)", borderRadius:10, padding:4, gap:2 }}>
              {[["content","📝 Content"],["text","✏️ Text"],["branding","🏷️ Branding"],["effects","✨ Effects"],["cards","🎭 Cards"]].map(([id, label]) => (
                <SectionBtn key={id} id={id} label={label} />
              ))}
            </div>

            {/* ── CONTENT ── */}
            {activeSection === "content" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

                {/* PROBLEM */}
                <Card>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                    <div style={{ width:28, height:28, borderRadius:8, background:"rgba(255,80,80,0.2)", border:"1px solid rgba(255,80,80,0.35)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>❓</div>
                    <div>
                      <div style={{ fontSize:13, fontWeight:800, color:"#fff" }}>Problem / Topic</div>
                      <div style={{ fontSize:11, color:"#666" }}>This appears as the main title on the video</div>
                    </div>
                  </div>
                  <textarea value={topic} onChange={e => setTopic(e.target.value)}
                    placeholder="e.g. Why do most people fail to save money?"
                    style={{ width:"100%", minHeight:64, background:"rgba(255,80,80,0.08)", border:"1px solid rgba(255,80,80,0.25)", borderRadius:10, padding:"10px 13px", color:"#fff", fontSize:14, resize:"vertical", outline:"none", boxSizing:"border-box" }} />
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginTop:9 }}>
                    {TOPICS.map(tp => (
                      <button key={tp} onClick={() => setTopic(tp)} style={{ padding:"3px 9px", borderRadius:20, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.04)", color:"#999", fontSize:11, cursor:"pointer" }}>{tp}</button>
                    ))}
                  </div>
                </Card>

                {/* SOLUTION FORMAT picker + AI button */}
                <Card>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <div style={{ width:28, height:28, borderRadius:8, background:`${acc}22`, border:`1px solid ${acc}44`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>✅</div>
                      <div>
                        <div style={{ fontSize:13, fontWeight:800, color:"#fff" }}>Solution / Script</div>
                        <div style={{ fontSize:11, color:"#666" }}>Burned as rich subtitles into the video</div>
                      </div>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:7 }}>
                      <button onClick={generateAI} disabled={!topic.trim() || aiLoading} style={{
                        padding:"7px 14px", borderRadius:9, border:"none", cursor: topic.trim() ? "pointer":"not-allowed",
                        background: topic.trim() ? `linear-gradient(135deg,${cfg.bg[1]},${acc})` : "#222",
                        color:"#fff", fontSize:12, fontWeight:700, display:"flex", alignItems:"center", gap:6,
                        boxShadow: topic.trim() ? `0 0 14px ${acc}33` : "none",
                      }}>
                        <I d={IC.wand} size={13} color="#fff" />
                        {aiLoading ? "…" : "AI Generate"}
                      </button>
                      {aiStep && <span style={{ fontSize:11, color:"#888" }}>{aiStep}</span>}
                    </div>
                  </div>

                  {/* Solution format selector */}
                  <Label>Solution Format</Label>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:7, marginBottom:14 }}>
                    {[
                      { id:"paragraph", icon:"📄", name:"Paragraph" },
                      { id:"bullets",   icon:"📋", name:"Bullets" },
                      { id:"table",     icon:"📊", name:"Table" },
                      { id:"mixed",     icon:"🗂️", name:"Mixed" },
                    ].map(f => (
                      <button key={f.id} onClick={() => setSolutionFormat(f.id)} style={{
                        padding:"10px 6px", borderRadius:9, cursor:"pointer", textAlign:"center",
                        border: solutionFormat===f.id ? `2px solid ${acc}` : "2px solid rgba(255,255,255,0.07)",
                        background: solutionFormat===f.id ? `${acc}22` : "rgba(255,255,255,0.04)",
                        color: solutionFormat===f.id ? acc : "#888", transition:"all 0.15s",
                      }}>
                        <div style={{ fontSize:18, marginBottom:3 }}>{f.icon}</div>
                        <div style={{ fontSize:11, fontWeight:700 }}>{f.name}</div>
                      </button>
                    ))}
                  </div>

                  {/* Format hint */}
                  <div style={{ fontSize:11, color:"#666", background:"rgba(255,255,255,0.03)", borderRadius:8, padding:"8px 11px", marginBottom:12 }}>
                    {solutionFormat === "paragraph" && "✏️ Write plain text paragraphs. Separate paragraphs with a blank line."}
                    {solutionFormat === "bullets"   && "✏️ Start each line with  -  or  •  for bullets. e.g.  - Save 20% of income"}
                    {solutionFormat === "table"     && "✏️ Use markdown table format:  | Col1 | Col2 |  with a  |---|---|  separator row."}
                    {solutionFormat === "mixed"     && "✏️ Use # for headings, - for bullets, plain text for paragraphs. Mix freely."}
                  </div>

                  <textarea value={script} onChange={e => setScript(e.target.value)}
                    placeholder={
                      solutionFormat === "paragraph" ? "Write your solution as paragraphs...\nBreak paragraphs with a blank line." :
                      solutionFormat === "bullets" ? "- First key point\n- Second key point\n- Third key point" :
                      solutionFormat === "table" ? "| Step | Action | Result |\n|------|--------|--------|\n| 1 | Budget | Save more |\n| 2 | Invest | Grow money |" :
                      "# Heading\n- Bullet one\n- Bullet two\n\nClosing paragraph text here."
                    }
                    style={{ width:"100%", minHeight:130, background:"rgba(255,255,255,0.04)", border:`1px solid ${acc}33`, borderRadius:10, padding:"11px 13px", color:"#ddd", fontSize:13, resize:"vertical", outline:"none", lineHeight:1.75, fontFamily:"'Courier New',monospace", boxSizing:"border-box" }} />

                  {/* Subtitle toggle */}
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:12, padding:"10px 13px", background:"rgba(255,255,255,0.03)", borderRadius:9 }}>
                    <label style={{ display:"flex", alignItems:"center", gap:9, cursor:"pointer" }}>
                      <input type="checkbox" checked={subtitles} onChange={e => setSubtitles(e.target.checked)} style={{ accentColor:acc, width:15, height:15 }} />
                      <span style={{ fontSize:13, fontWeight:700, color: subtitles ? "#fff" : "#888" }}>🔥 Burn solution as subtitles into video</span>
                    </label>
                    {subtitles && <span style={{ fontSize:11, color:acc }}>✓ Active</span>}
                  </div>
                </Card>

                {/* SUBTITLE SETTINGS — shown only when subtitles enabled */}
                {subtitles && (
                  <Card>
                    <Label>🎬 Subtitle Display Settings</Label>

                    {/* Render Style */}
                    <div style={{ marginBottom:14 }}>
                      <div style={{ fontSize:12, color:"#888", marginBottom:7 }}>Render Style</div>
                      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:7 }}>
                        {[
                          { id:"karaoke", icon:"🎤", name:"Karaoke", desc:"Words highlight as spoken" },
                          { id:"scroll",  icon:"📜", name:"Scroll",  desc:"Lines scroll progressively" },
                          { id:"plain",   icon:"📄", name:"Plain",   desc:"Full text static display" },
                        ].map(s => (
                          <button key={s.id} onClick={() => setSubStyle(s.id)} style={{
                            padding:"10px 8px", borderRadius:9, cursor:"pointer", textAlign:"center",
                            border: subStyle===s.id ? `2px solid ${acc}` : "2px solid rgba(255,255,255,0.07)",
                            background: subStyle===s.id ? `${acc}22` : "rgba(255,255,255,0.04)",
                            transition:"all 0.15s",
                          }}>
                            <div style={{ fontSize:18, marginBottom:3 }}>{s.icon}</div>
                            <div style={{ fontSize:12, fontWeight:700, color: subStyle===s.id ? acc : "#888" }}>{s.name}</div>
                            <div style={{ fontSize:10, color:"#555", marginTop:2 }}>{s.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Position */}
                    <div style={{ marginBottom:14 }}>
                      <div style={{ fontSize:12, color:"#888", marginBottom:7 }}>Band Position</div>
                      <div style={{ display:"flex", gap:7 }}>
                        {["top","middle","bottom"].map(p => (
                          <button key={p} onClick={() => setSubPosition(p)} style={{
                            flex:1, padding:"7px", borderRadius:8, border: subPosition===p ? `1px solid ${acc}` : "1px solid rgba(255,255,255,0.1)",
                            background: subPosition===p ? `${acc}22` : "rgba(255,255,255,0.04)", color: subPosition===p ? acc : "#888",
                            fontSize:12, fontWeight:700, cursor:"pointer",
                          }}>{p.charAt(0).toUpperCase()+p.slice(1)}</button>
                        ))}
                      </div>
                    </div>

                    {/* Sliders */}
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 }}>
                      <Slider label="Font Size" val={subFontSize} min={18} max={56} set={setSubFontSize} unit="px" />
                      <Slider label="Words/sec" val={subWordsPerSec} min={1} max={5} set={setSubWordsPerSec} unit="x" />
                    </div>

                    {/* Colors */}
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
                      <div>
                        <div style={{ fontSize:11, color:"#777", marginBottom:4 }}>Text Color</div>
                        <div style={{ display:"flex", gap:6, alignItems:"center" }}>
                          <input type="color" value={subTextColor} onChange={e => setSubTextColor(e.target.value)}
                            style={{ width:30, height:26, borderRadius:6, border:"none", cursor:"pointer" }} />
                          <span style={{ fontSize:10, color:"#555" }}>{subTextColor}</span>
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize:11, color:"#777", marginBottom:4 }}>Highlight Color</div>
                        <div style={{ display:"flex", gap:6, alignItems:"center" }}>
                          <input type="color" value={subHighlightColor || acc} onChange={e => setSubHighlightColor(e.target.value)}
                            style={{ width:30, height:26, borderRadius:6, border:"none", cursor:"pointer" }} />
                          {subHighlightColor && <button onClick={() => setSubHighlightColor("")} style={{ fontSize:10, color:"#555", background:"none", border:"none", cursor:"pointer" }}>↺</button>}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize:11, color:"#777", marginBottom:4 }}>BG Opacity</div>
                        <input type="range" min={0} max={100} value={Math.round(subBgOpacity*100)} onChange={e => setSubBgOpacity(e.target.value/100)}
                          style={{ width:"100%", accentColor:acc }} />
                        <div style={{ fontSize:10, color:"#555" }}>{Math.round(subBgOpacity*100)}%</div>
                      </div>
                    </div>

                    {/* Live solution preview (DOM) */}
                    {script && (
                      <div style={{ marginTop:14 }}>
                        <div style={{ fontSize:11, color:"#888", marginBottom:7 }}>Parsed blocks preview:</div>
                        <div style={{ background:"rgba(0,0,0,0.4)", borderRadius:9, padding:12, maxHeight:160, overflowY:"auto" }}>
                          {parseSolutionBlocks(script).map((block, bi) => (
                            <div key={bi} style={{ marginBottom:6 }}>
                              {block.type === "heading" && <div style={{ fontSize:13, fontWeight:900, color:acc }}>📌 {block.content}</div>}
                              {block.type === "heading2" && <div style={{ fontSize:12, fontWeight:800, color:acc+"cc" }}>▸ {block.content}</div>}
                              {block.type === "bullet" && <div style={{ fontSize:12, color:"#bbb" }}>  • {block.content}</div>}
                              {block.type === "paragraph" && <div style={{ fontSize:12, color:"#999", fontStyle:"italic" }}>"{block.content.slice(0,60)}{block.content.length>60?"…":""}"</div>}
                              {block.type === "table" && <div style={{ fontSize:11, color:"#777" }}>📊 Table: {block.rows.length} rows × {block.rows[0]?.length} cols</div>}
                            </div>
                          ))}
                          {parseSolutionBlocks(script).length === 0 && <div style={{ fontSize:12, color:"#555" }}>No content yet</div>}
                        </div>
                      </div>
                    )}
                  </Card>
                )}

                {hashtags.length > 0 && (
                  <Card>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10 }}>
                      <Label>🏷️ Hashtags</Label>
                      <button onClick={copyHashtags} style={{ display:"flex", alignItems:"center", gap:5, padding:"4px 11px", borderRadius:7, border:"none", background:"rgba(255,255,255,0.07)", color:"#ccc", fontSize:12, cursor:"pointer" }}>
                        <I d={copied ? IC.check : IC.copy} size={12} color={copied ? "#81c784":"#ccc"} />
                        {copied ? "Copied!" : "Copy All"}
                      </button>
                    </div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                      {hashtags.map(h => (
                        <span key={h} style={{ padding:"3px 11px", borderRadius:20, background:`${acc}22`, border:`1px solid ${acc}44`, color:acc, fontSize:12, fontWeight:600 }}>#{h}</span>
                      ))}
                    </div>
                  </Card>
                )}

                <Card>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                    <Slider label="Duration" val={duration} min={5} max={60} set={setDuration} unit="s" />
                    <div>
                      <Label>Aspect Ratio</Label>
                      <div style={{ display:"flex", gap:6 }}>
                        {Object.entries(RATIOS).map(([r]) => (
                          <button key={r} onClick={() => setRatio(r)} style={{
                            flex:1, padding:"6px 4px", borderRadius:7, border: ratio===r ? `1px solid ${acc}` : "1px solid rgba(255,255,255,0.1)",
                            background: ratio===r ? `${acc}22` : "rgba(255,255,255,0.04)", color: ratio===r ? acc : "#888",
                            fontSize:11, fontWeight:700, cursor:"pointer",
                          }}>{r}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <Label>🎨 Visual Style</Label>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:7 }}>
                    {Object.entries(STYLES).map(([id, s]) => (
                      <button key={id} onClick={() => setStyle(id)} style={{
                        padding:"9px 5px", borderRadius:9, cursor:"pointer",
                        border: style===id ? `2px solid ${s.accent}` : "2px solid transparent",
                        background:`linear-gradient(135deg,${s.bg[0]},${s.bg[1]})`,
                        color:s.text, fontSize:11, fontWeight:700,
                        boxShadow: style===id ? `0 0 14px ${s.accent}55` : "none", transition:"all 0.2s",
                      }}>{s.name}</button>
                    ))}
                  </div>
                </Card>

                <Card>
                  <Label>🎬 Animation Layout</Label>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:7 }}>
                    {Object.entries(LAYOUTS).map(([id, l]) => (
                      <button key={id} onClick={() => setLayout(id)} style={{
                        padding:"9px 6px", borderRadius:9, cursor:"pointer", textAlign:"center",
                        border: layout===id ? `2px solid ${acc}` : "2px solid rgba(255,255,255,0.07)",
                        background: layout===id ? `${acc}22` : "rgba(255,255,255,0.04)",
                        color: layout===id ? acc : "#777", fontSize:12, fontWeight:700, transition:"all 0.2s",
                      }}>
                        <div style={{ fontSize:17, marginBottom:3 }}>{l.icon}</div>{l.name}
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* ── TEXT ── */}
            {activeSection === "text" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <Card>
                  <Label>🔤 Font Family</Label>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:7, marginBottom:16 }}>
                    {FONTS.map(f => (
                      <button key={f.id} onClick={() => setFontFamily(f.id)} style={{
                        padding:"10px 12px", borderRadius:9, cursor:"pointer", textAlign:"left",
                        border: fontFamily===f.id ? `2px solid ${acc}` : "2px solid rgba(255,255,255,0.07)",
                        background: fontFamily===f.id ? `${acc}22` : "rgba(255,255,255,0.04)",
                        transition:"all 0.15s",
                      }}>
                        <div style={{ fontFamily:f.css, fontWeight:900, fontSize:16, color:"#fff" }}>Aa</div>
                        <div style={{ fontSize:11, color: fontFamily===f.id ? acc : "#777", marginTop:3 }}>{f.label}</div>
                      </button>
                    ))}
                  </div>

                  <Slider label="Font Size" val={fontSizePx} min={24} max={110} set={setFontSizePx} unit="px" />
                </Card>

                <Card>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                    <ChipGroup label="Text Transform" options={[{id:"upper",name:"UPPER"},{id:"title",name:"Title"},{id:"lower",name:"lower"},{id:"none",name:"As-is"}]} value={textTransform} set={setTextTransform} />
                    <ChipGroup label="Text Position" options={TEXT_POSITIONS.map(p=>({id:p,name:p.charAt(0).toUpperCase()+p.slice(1)}))} value={textPosition} set={setTextPosition} />
                    <ChipGroup label="Text Shadow" options={TEXT_SHADOWS.map(s=>({id:s,name:s.charAt(0).toUpperCase()+s.slice(1)}))} value={textShadow} set={setTextShadow} />
                    <ColorRow label="Text Color" val={textColor} def={cfg.text} set={setTextColor} />
                  </div>
                </Card>

                <Card>
                  <Label>🎨 Colors</Label>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
                    <ColorRow label="Accent" val={accentColor} def={cfg.accent} set={setAccentColor} />
                    <ColorRow label="BG Top" val={bgColor1} def={cfg.bg[0]} set={setBgColor1} />
                    <ColorRow label="BG Bottom" val={bgColor2} def={cfg.bg[1]} set={setBgColor2} />
                  </div>
                </Card>
              </div>
            )}

            {/* ── BRANDING ── */}
            {activeSection === "branding" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <Card>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
                    <Label>🏷️ Company / Channel Branding</Label>
                    <label style={{ display:"flex", alignItems:"center", gap:7, cursor:"pointer", fontSize:13, color:watermark?acc:"#666" }}>
                      <input type="checkbox" checked={watermark} onChange={e => setWatermark(e.target.checked)} style={{ accentColor:acc, width:15, height:15 }} />
                      {watermark ? "Enabled" : "Disabled"}
                    </label>
                  </div>

                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, opacity: watermark ? 1 : 0.35, pointerEvents: watermark ? "all" : "none" }}>
                    <div style={{ gridColumn:"1/-1" }}>
                      <div style={{ fontSize:12, color:"#888", marginBottom:5 }}>Brand / Company Name</div>
                      <input value={wmText} onChange={e => setWmText(e.target.value)} placeholder="Your brand name…"
                        style={{ width:"100%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:8, padding:"9px 12px", color:"#fff", fontSize:14, outline:"none", boxSizing:"border-box" }} />
                    </div>

                    <div>
                      <div style={{ fontSize:12, color:"#888", marginBottom:5 }}>Logo Emoji</div>
                      <input value={wmEmoji} onChange={e => setWmEmoji(e.target.value)} placeholder="🎬" maxLength={4}
                        style={{ width:"100%", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:8, padding:"9px 12px", color:"#fff", fontSize:20, outline:"none", boxSizing:"border-box", textAlign:"center" }} />
                    </div>

                    <div>
                      <div style={{ fontSize:12, color:"#888", marginBottom:5 }}>Text Color</div>
                      <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                        <input type="color" value={wmColor} onChange={e => setWmColor(e.target.value)}
                          style={{ width:34, height:30, borderRadius:7, border:"none", cursor:"pointer" }} />
                        <span style={{ fontSize:10, color:"#555" }}>{wmColor}</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {watermark && (
                  <>
                    <Card>
                      <Label>📍 Position</Label>
                      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:6 }}>
                        {WM_POSITIONS.map(pos => (
                          <button key={pos} onClick={() => setWmPosition(pos)} style={{
                            padding:"8px 5px", borderRadius:8, cursor:"pointer", fontSize:11, fontWeight:700, textAlign:"center",
                            border: wmPosition===pos ? `1px solid ${acc}` : "1px solid rgba(255,255,255,0.08)",
                            background: wmPosition===pos ? `${acc}22` : "rgba(255,255,255,0.03)",
                            color: wmPosition===pos ? acc : "#777", transition:"all 0.15s",
                          }}>{pos.replace("-"," ")}</button>
                        ))}
                      </div>
                    </Card>

                    <Card>
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                        <Slider label="Font Size" val={wmFontSize} min={14} max={60} set={setWmFontSize} unit="px" />
                        <Slider label="Opacity" val={Math.round(wmOpacity*100)} min={10} max={100} set={v => setWmOpacity(v/100)} unit="%" />
                        <div style={{ gridColumn:"1/-1" }}>
                          <label style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", fontSize:13, color:"#aaa" }}>
                            <input type="checkbox" checked={wmBg} onChange={e => setWmBg(e.target.checked)} style={{ accentColor:acc, width:14, height:14 }} />
                            Dark background pill behind text
                          </label>
                        </div>
                      </div>
                    </Card>

                    {/* Live preview of watermark */}
                    <Card style={{ padding:16 }}>
                      <Label>Preview</Label>
                      <div style={{ background:`linear-gradient(135deg,${cfg.bg[0]},${cfg.bg[1]})`, borderRadius:10, padding:20, minHeight:70, position:"relative", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <div style={{
                          fontSize: wmFontSize * 0.55, fontWeight:700, color: wmColor, opacity: wmOpacity,
                          background: wmBg ? "rgba(0,0,0,0.55)" : "transparent",
                          padding:"4px 10px", borderRadius:6,
                        }}>
                          {wmEmoji && <span style={{ marginRight:5 }}>{wmEmoji}</span>}
                          {wmText || "Your Brand"}
                        </div>
                      </div>
                    </Card>
                  </>
                )}
              </div>
            )}

            {/* ── EFFECTS ── */}
            {activeSection === "effects" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <Card>
                  <ChipGroup label="🌌 Background Pattern" options={BG_PATTERNS.map(p=>({id:p,name:p.charAt(0).toUpperCase()+p.slice(1)}))} value={bgPattern} set={setBgPattern} />
                </Card>
                <Card>
                  <ChipGroup label="🖼️ Frame / Border Style" options={FRAME_STYLES.map(f=>({id:f,name:f==="none"?"None":f.replace("-"," ").replace(/\b\w/g,c=>c.toUpperCase())}))} value={frameStyle} set={setFrameStyle} />
                </Card>
              </div>
            )}

            {/* ── CARDS ── */}
            {activeSection === "cards" && (
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <Card>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                    <Label>🎬 Intro Card</Label>
                    <label style={{ display:"flex", alignItems:"center", gap:7, cursor:"pointer", fontSize:13, color:introCard?acc:"#666" }}>
                      <input type="checkbox" checked={introCard} onChange={e => setIntroCard(e.target.checked)} style={{ accentColor:acc, width:14, height:14 }} />
                      {introCard ? "On" : "Off"}
                    </label>
                  </div>
                  {introCard && (
                    <div style={{ opacity:1 }}>
                      <div style={{ fontSize:12, color:"#888", marginBottom:6 }}>Displays "▶ NOW PLAYING" + your topic for this many seconds at the start</div>
                      <Slider label="Duration" val={introDuration} min={1} max={5} set={setIntroDuration} unit="s" />
                    </div>
                  )}
                </Card>

                <Card>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
                    <Label>🎭 Outro / Call-to-Action Card</Label>
                    <label style={{ display:"flex", alignItems:"center", gap:7, cursor:"pointer", fontSize:13, color:outroCard?acc:"#666" }}>
                      <input type="checkbox" checked={outroCard} onChange={e => setOutroCard(e.target.checked)} style={{ accentColor:acc, width:14, height:14 }} />
                      {outroCard ? "On" : "Off"}
                    </label>
                  </div>
                  {outroCard && (
                    <>
                      <Slider label="Duration" val={outroDuration} min={1} max={6} set={setOutroDuration} unit="s" />
                      <div style={{ marginTop:12 }}>
                        <div style={{ fontSize:12, color:"#888", marginBottom:5 }}>Custom outro message (one line per row)</div>
                        <textarea value={outroText} onChange={e => setOutroText(e.target.value)} rows={3}
                          style={{ width:"100%", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, padding:"9px 12px", color:"#ddd", fontSize:13, resize:"vertical", outline:"none", boxSizing:"border-box" }} />
                      </div>
                    </>
                  )}
                </Card>
              </div>
            )}
          </div>

          {/* RIGHT: preview + generate */}
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            <Card style={{ padding:13 }}>
              <Label>👁️ Live Preview</Label>
              <canvas ref={previewRef} style={{ width:"100%", borderRadius:10, display:"block" }} />
              <div style={{ fontSize:11, color:"#555", textAlign:"center", marginTop:6 }}>
                {ratio} · {duration}s · {LAYOUTS[layout].name}
                {(introCard || outroCard) && <span style={{ color:acc }}> + {introCard?"intro":""}{introCard&&outroCard?"+":""}{outroCard?"outro":""}</span>}
              </div>
            </Card>

            {isRec ? (
              <Card style={{ padding:15 }}>
                <div style={{ fontSize:12, color:"#aaa", textAlign:"center", marginBottom:8 }}>{recStatus}</div>
                <div style={{ height:7, background:"rgba(255,255,255,0.06)", borderRadius:99, overflow:"hidden", marginBottom:12 }}>
                  <div style={{ height:"100%", width:recPct+"%", background:`linear-gradient(90deg,${acc},#fff)`, transition:"width 0.1s", borderRadius:99 }} />
                </div>
                <button onClick={stopRec} style={{ width:"100%", padding:"10px", borderRadius:9, border:"none", background:"#c62828", color:"#fff", fontSize:13, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:7 }}>
                  <I d={IC.stop} size={14} color="#fff" /> Stop Recording
                </button>
              </Card>
            ) : (
              <button onClick={generateVideo} disabled={!topic.trim()} style={{
                padding:"14px", borderRadius:12, border:"none", cursor: topic.trim()?"pointer":"not-allowed",
                background: topic.trim() ? `linear-gradient(135deg,${cfg.bg[1]},${acc})` : "#1a1a1a",
                color:"#fff", fontSize:14, fontWeight:900, display:"flex", alignItems:"center", justifyContent:"center", gap:9,
                boxShadow: topic.trim() ? `0 0 28px ${acc}44` : "none", transition:"all 0.25s",
              }}>
                <I d={IC.zap} size={17} color="#fff" /> Generate Real Video
              </button>
            )}

            {recStatus.startsWith("✅") && (
              <div style={{ background:"rgba(76,175,80,0.1)", border:"1px solid rgba(76,175,80,0.22)", borderRadius:10, padding:"10px 14px", fontSize:12, color:"#81c784", textAlign:"center" }}>
                {recStatus} → Check <strong>Library</strong>
              </div>
            )}

            <Card style={{ padding:16 }}>
              {[
                ["Videos",       videos.length],
                ["Total Size",   (videos.reduce((s,v)=>s+(v.blob?.size||0),0)/1024/1024).toFixed(1)+" MB"],
                ["Avg Duration", videos.length ? Math.round(videos.reduce((s,v)=>s+parseInt(v.duration.split(":")[1]||0),0)/videos.length)+"s" : "—"],
              ].map(([l,v]) => (
                <div key={l} style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:"1px solid rgba(255,255,255,0.05)", fontSize:12 }}>
                  <span style={{ color:"#666" }}>{l}</span>
                  <span style={{ color:"#fff", fontWeight:700 }}>{v}</span>
                </div>
              ))}
            </Card>
          </div>
        </div>
      )}

      {/* ══ LIBRARY ══ */}
      {tab === "library" && (
        <div style={{ maxWidth:1180, margin:"0 auto", padding:"24px 16px" }}>
          <h2 style={{ margin:"0 0 18px", fontSize:19, fontWeight:900 }}>
            Library <span style={{ fontSize:13, color:"#555", fontWeight:400 }}>({videos.length})</span>
          </h2>
          {videos.length === 0 ? (
            <div style={{ textAlign:"center", padding:"80px 0", color:"#444" }}>
              <I d={IC.film} size={50} color="#2a2a2a" />
              <p style={{ marginTop:16, fontSize:14 }}>No videos yet — go to <strong style={{ color:"#666" }}>Create</strong></p>
            </div>
          ) : (
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", gap:15 }}>
              {videos.map(v => {
                const sc = STYLES[v.style];
                return (
                  <motion.div key={v.id} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
                    style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, overflow:"hidden", cursor:"pointer" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = sc.accent}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
                    onClick={() => setSelected(v)}>
                    <div style={{ aspectRatio: v.ratio==="16:9"?"16/9":v.ratio==="1:1"?"1/1":"9/16", background:`linear-gradient(135deg,${sc.bg[0]},${sc.bg[1]})`, position:"relative", overflow:"hidden" }}>
                      <video src={v.url} style={{ width:"100%", height:"100%", objectFit:"cover" }} muted />
                      <div style={{ position:"absolute", top:6, right:6, background:"rgba(0,0,0,0.6)", borderRadius:5, padding:"2px 6px", fontSize:10, color:"#ddd" }}>{v.ratio}</div>
                      <div style={{ position:"absolute", top:6, left:6, fontSize:14 }}>{LAYOUTS[v.layout]?.icon}</div>
                    </div>
                    <div style={{ padding:"11px 12px" }}>
                      {renaming === v.id ? (
                        <input autoFocus value={renameVal}
                          onChange={e => setRenameVal(e.target.value)}
                          onBlur={() => { setVideos(vs => vs.map(x => x.id===v.id?{...x,title:renameVal}:x)); setRenaming(null); }}
                          onKeyDown={e => { if(e.key==="Enter"){ setVideos(vs => vs.map(x => x.id===v.id?{...x,title:renameVal}:x)); setRenaming(null); } }}
                          onClick={e => e.stopPropagation()}
                          style={{ width:"100%", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", borderRadius:6, padding:"4px 7px", color:"#fff", fontSize:12, outline:"none", boxSizing:"border-box" }} />
                      ) : (
                        <div style={{ fontSize:12, fontWeight:700, marginBottom:4, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{v.title}</div>
                      )}
                      <div style={{ fontSize:10, color:"#666", marginBottom:9 }}>{v.duration} · {v.size}</div>
                      <div style={{ display:"flex", gap:5 }}>
                        <div onClick={e=>e.stopPropagation()} style={{ flex:2,display:"flex" }}><DownloadBtn v={v} compact={true}/></div>
                        <button onClick={e=>{e.stopPropagation();setRenaming(v.id);setRenameVal(v.title);}} style={{ flex:1, padding:"6px", borderRadius:7, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.04)", color:"#aaa", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <I d={IC.edit} size={11} color="#aaa" />
                        </button>
                        <button onClick={e=>deleteVideo(v.id,e)} style={{ flex:1, padding:"6px", borderRadius:7, border:"1px solid rgba(255,60,60,0.18)", background:"rgba(255,60,60,0.07)", color:"#e57373", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                          <I d={IC.trash} size={11} color="#e57373" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ══ ANALYTICS ══ */}
      {tab === "analytics" && (
        <div style={{ maxWidth:1180, margin:"0 auto", padding:"24px 16px" }}>
          <h2 style={{ margin:"0 0 18px", fontSize:19, fontWeight:900 }}>Analytics</h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, marginBottom:18 }}>
            {[
              { l:"Videos",       v:videos.length, color:"#7c4dff" },
              { l:"Total Size",   v:(videos.reduce((s,v)=>s+(v.blob?.size||0),0)/1024/1024).toFixed(1)+" MB", color:"#00bcd4" },
              { l:"Avg Duration", v:videos.length?Math.round(videos.reduce((s,v)=>s+parseInt(v.duration.split(":")[1]||0),0)/videos.length)+"s":"0s", color:"#ff7043" },
              { l:"Styles Used",  v:[...new Set(videos.map(v=>v.style))].length, color:"#e91e63" },
            ].map(s => (
              <motion.div key={s.l} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:18 }}>
                <div style={{ fontSize:24, fontWeight:900, color:s.color, marginBottom:4 }}>{s.v}</div>
                <div style={{ fontSize:12, color:"#666" }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginBottom:18 }}>
            <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:18 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#888", marginBottom:14 }}>VIDEOS BY STYLE</div>
              {Object.entries(STYLES).map(([id, s]) => (
                <div key={id} style={{ marginBottom:8 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, marginBottom:3 }}>
                    <span style={{ color:"#bbb" }}>{s.name}</span><span style={{ color:s.accent, fontWeight:700 }}>{styleCount[id]}</span>
                  </div>
                  <div style={{ height:5, background:"rgba(255,255,255,0.06)", borderRadius:99, overflow:"hidden" }}>
                    <motion.div initial={{width:0}} animate={{width:`${(styleCount[id]/maxCount)*100}%`}} transition={{duration:0.8}}
                      style={{ height:"100%", background:s.accent, borderRadius:99 }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:18 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#888", marginBottom:14 }}>VIDEOS BY LAYOUT</div>
              {Object.entries(LAYOUTS).map(([id, l]) => {
                const cnt = videos.filter(v=>v.layout===id).length;
                return (
                  <div key={id} style={{ marginBottom:8 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, marginBottom:3 }}>
                      <span style={{ color:"#bbb" }}>{l.icon} {l.name}</span><span style={{ color:acc, fontWeight:700 }}>{cnt}</span>
                    </div>
                    <div style={{ height:5, background:"rgba(255,255,255,0.06)", borderRadius:99, overflow:"hidden" }}>
                      <motion.div initial={{width:0}} animate={{width:`${(cnt/Math.max(1,videos.length))*100}%`}} transition={{duration:0.8}}
                        style={{ height:"100%", background:acc, borderRadius:99 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {videos.length > 0 && (
            <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:18 }}>
              <div style={{ fontSize:12, fontWeight:700, color:"#888", marginBottom:12 }}>VIDEO HISTORY</div>
              {videos.map(v => {
                const sc = STYLES[v.style];
                return (
                  <div key={v.id} style={{ display:"flex", alignItems:"center", gap:12, padding:"9px 0", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ width:26, height:26, borderRadius:6, background:`linear-gradient(135deg,${sc.bg[0]},${sc.bg[1]})`, flexShrink:0 }} />
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ fontSize:13, fontWeight:600, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{v.title}</div>
                      <div style={{ fontSize:11, color:"#666" }}>{sc.name} · {v.ratio} · {v.duration} · {v.size} · {v.createdAt}</div>
                    </div>
                    <div style={{ flexShrink:0 }}><DownloadBtn v={v} compact={true}/></div>
                    <button onClick={()=>deleteVideo(v.id)} style={{ padding:"5px 9px", borderRadius:7, border:"none", background:"rgba(255,60,60,0.07)", color:"#e57373", fontSize:12, cursor:"pointer", flexShrink:0 }}>✕</button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            onClick={()=>setSelected(null)}
            style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.88)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:200, padding:18 }}>
            <motion.div initial={{scale:0.92}} animate={{scale:1}} exit={{scale:0.92}}
              onClick={e=>e.stopPropagation()}
              style={{ background:"#0c0c16", border:"1px solid rgba(255,255,255,0.09)", borderRadius:20, maxWidth:620, width:"100%", maxHeight:"92vh", overflowY:"auto" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"15px 20px", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ fontSize:14, fontWeight:800 }}>Video Details</span>
                <button onClick={()=>setSelected(null)} style={{ background:"rgba(255,255,255,0.08)", border:"none", borderRadius:8, padding:6, cursor:"pointer", display:"flex" }}>
                  <I d={IC.x} size={14} color="#ccc" />
                </button>
              </div>
              <div style={{ padding:20 }}>
                <video src={selected.url} controls style={{ width:"100%", borderRadius:11, maxHeight:360, background:"#000", marginBottom:15, display:"block" }} />
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14 }}>
                  {[["Title",selected.title],["Style",STYLES[selected.style]?.name],["Layout",LAYOUTS[selected.layout]?.name],["Ratio",selected.ratio],["Duration",selected.duration],["Size",selected.size]].map(([l,v]) => (
                    <div key={l} style={{ background:"rgba(255,255,255,0.04)", borderRadius:8, padding:"9px 11px" }}>
                      <div style={{ fontSize:10, color:"#555", marginBottom:2 }}>{l}</div>
                      <div style={{ fontSize:12, fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{v}</div>
                    </div>
                  ))}
                </div>
                {selected.hashtags?.length > 0 && (
                  <div style={{ marginBottom:14 }}>
                    <div style={{ fontSize:10, color:"#555", marginBottom:7 }}>HASHTAGS</div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                      {selected.hashtags.map(h => <span key={h} style={{ padding:"3px 10px", borderRadius:20, background:`${acc}22`, color:acc, fontSize:11 }}>#{h}</span>)}
                    </div>
                  </div>
                )}
                {selected.script && (
                  <div style={{ marginBottom:15, background:"rgba(255,255,255,0.03)", borderRadius:9, padding:12 }}>
                    <div style={{ fontSize:10, color:"#555", marginBottom:5 }}>SCRIPT</div>
                    <div style={{ fontSize:12, color:"#ccc", lineHeight:1.7 }}>{selected.script}</div>
                  </div>
                )}
                <DownloadBtn v={selected} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}