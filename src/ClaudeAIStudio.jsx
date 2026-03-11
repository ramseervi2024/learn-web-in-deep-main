import { useState, useRef, useEffect, useCallback } from "react";

const FEATURES = [
  { id: "chat", label: "AI Chat", icon: "💬", desc: "Multi-turn conversations" },
  { id: "summarize", label: "Summarizer", icon: "📋", desc: "Condense any text" },
  { id: "translate", label: "Translator", icon: "🌍", desc: "Translate to any language" },
  { id: "code", label: "Code Gen", icon: "⌨️", desc: "Write & explain code" },
  { id: "image", label: "Image Analyzer", icon: "🖼️", desc: "Analyze uploaded images" },
  { id: "sentiment", label: "Sentiment", icon: "🎭", desc: "Emotion & tone analysis" },
  { id: "qa", label: "Q&A / RAG", icon: "🔍", desc: "Ask questions on your text" },
  { id: "rewrite", label: "Rewriter", icon: "✍️", desc: "Improve & rewrite text" },
  { id: "brainstorm", label: "Brainstorm", icon: "🧠", desc: "Generate creative ideas" },
  { id: "classify", label: "Classifier", icon: "🏷️", desc: "Categorize any content" },
  { id: "json", label: "JSON Extract", icon: "📦", desc: "Structured data from text" },
  { id: "stream", label: "Streaming", icon: "⚡", desc: "Real-time streamed output" },
];

const LANGUAGES = ["Spanish","French","German","Japanese","Chinese","Arabic","Hindi","Portuguese","Korean","Italian","Russian","Dutch"];

async function callClaude(messages, system = "") {
  const body = {
    model: "claude-sonnet-4-20250514",
    max_tokens: 1000,
    messages,
  };
  if (system) body.system = system;
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.content.map(b => b.text || "").join("");
}

async function* streamClaude(messages, system = "") {
  const body = {
    model: "claude-sonnet-4-20250514",
    max_tokens: 1000,
    stream: true,
    messages,
  };
  if (system) body.system = system;
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json", "anthropic-version": "2023-06-01" },
    body: JSON.stringify(body),
  });
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop();
    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const raw = line.slice(6).trim();
        if (raw === "[DONE]") return;
        try {
          const ev = JSON.parse(raw);
          if (ev.type === "content_block_delta" && ev.delta?.text) {
            yield ev.delta.text;
          }
        } catch {}
      }
    }
  }
}

// ── Components ──────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <span className="inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin opacity-70" />
  );
}

function OutputBox({ text, loading, label = "Output" }) {
  if (!text && !loading) return null;
  return (
    <div className="mt-4 rounded-2xl bg-[#0d1117] border border-[#30363d] overflow-hidden">
      <div className="px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
        <span className="text-xs font-mono text-[#7ee787] uppercase tracking-widest">{label}</span>
        {loading && <Spinner />}
      </div>
      <pre className="p-4 text-sm text-[#e6edf3] font-mono whitespace-pre-wrap leading-relaxed min-h-[60px]">
        {text || (loading ? "Generating…" : "")}
      </pre>
    </div>
  );
}

function Btn({ onClick, loading, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#238636] hover:bg-[#2ea043] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all active:scale-95 ${className}`}
    >
      {loading ? <Spinner /> : null}
      {children}
    </button>
  );
}

function TextArea({ value, onChange, placeholder, rows = 5 }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full rounded-xl bg-[#0d1117] border border-[#30363d] text-[#e6edf3] placeholder-[#6e7681] p-3 text-sm font-mono resize-none focus:outline-none focus:border-[#388bfd] transition-colors"
    />
  );
}

// ── Feature Panels ───────────────────────────────────────────────────────────

function ChatPanel() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [history]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    const newHistory = [...history, userMsg];
    setHistory(newHistory);
    setInput("");
    setLoading(true);
    try {
      const reply = await callClaude(newHistory);
      setHistory(h => [...h, { role: "assistant", content: reply }]);
    } catch (e) {
      setHistory(h => [...h, { role: "assistant", content: `Error: ${e.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[520px]">
      <div className="flex-1 overflow-y-auto space-y-3 pr-1 mb-3">
        {history.length === 0 && (
          <div className="text-center text-[#6e7681] text-sm mt-16">Start a conversation with Claude ✨</div>
        )}
        {history.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              m.role === "user"
                ? "bg-[#1f6feb] text-white rounded-br-sm"
                : "bg-[#161b22] border border-[#30363d] text-[#e6edf3] rounded-bl-sm"
            }`}>
              <pre className="whitespace-pre-wrap font-sans">{m.content}</pre>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl rounded-bl-sm px-4 py-3">
              <Spinner />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
          placeholder="Type a message… (Enter to send)"
          className="flex-1 rounded-xl bg-[#0d1117] border border-[#30363d] text-[#e6edf3] placeholder-[#6e7681] px-4 py-2.5 text-sm focus:outline-none focus:border-[#388bfd] transition-colors"
        />
        <Btn onClick={send} loading={loading}>Send</Btn>
      </div>
    </div>
  );
}

function SummarizePanel() {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!text.trim()) return;
    setLoading(true); setOut("");
    try { setOut(await callClaude([{ role: "user", content: `Summarize this text concisely:\n\n${text}` }])); }
    catch (e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };
  return (
    <div>
      <TextArea value={text} onChange={setText} placeholder="Paste any text to summarize…" rows={7} />
      <div className="mt-3"><Btn onClick={run} loading={loading}>Summarize</Btn></div>
      <OutputBox text={out} loading={loading} label="Summary" />
    </div>
  );
}

function TranslatePanel() {
  const [text, setText] = useState("");
  const [lang, setLang] = useState("Spanish");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!text.trim()) return;
    setLoading(true); setOut("");
    try { setOut(await callClaude([{ role: "user", content: `Translate the following text to ${lang}. Return only the translation:\n\n${text}` }])); }
    catch (e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };
  return (
    <div>
      <TextArea value={text} onChange={setText} placeholder="Enter text to translate…" rows={5} />
      <div className="mt-3 flex items-center gap-3 flex-wrap">
        <select value={lang} onChange={e => setLang(e.target.value)}
          className="rounded-xl bg-[#0d1117] border border-[#30363d] text-[#e6edf3] px-3 py-2.5 text-sm focus:outline-none focus:border-[#388bfd]">
          {LANGUAGES.map(l => <option key={l}>{l}</option>)}
        </select>
        <Btn onClick={run} loading={loading}>Translate →</Btn>
      </div>
      <OutputBox text={out} loading={loading} label={`Translation (${lang})`} />
    </div>
  );
}

function CodePanel() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("generate");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!prompt.trim()) return;
    setLoading(true); setOut("");
    const msg = mode === "generate"
      ? `Write clean, well-commented code for: ${prompt}`
      : `Explain this code step by step:\n\n${prompt}`;
    try { setOut(await callClaude([{ role: "user", content: msg }])); }
    catch (e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };
  return (
    <div>
      <div className="flex gap-2 mb-3">
        {["generate","explain","debug"].map(m => (
          <button key={m} onClick={() => setMode(m)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${mode===m ? "bg-[#1f6feb] text-white" : "bg-[#161b22] text-[#6e7681] hover:text-[#e6edf3] border border-[#30363d]"}`}>
            {m}
          </button>
        ))}
      </div>
      <TextArea value={prompt} onChange={setPrompt}
        placeholder={mode === "generate" ? "Describe what code you need…" : "Paste code to explain/debug…"} rows={6} />
      <div className="mt-3"><Btn onClick={run} loading={loading}>Run</Btn></div>
      <OutputBox text={out} loading={loading} label="Code Output" />
    </div>
  );
}

function ImagePanel() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [question, setQuestion] = useState("");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  const onFile = e => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    const r = new FileReader();
    r.onload = ev => setPreview(ev.target.result);
    r.readAsDataURL(f);
  };

  const run = async () => {
    if (!file || !preview) return;
    setLoading(true); setOut("");
    try {
      const base64 = preview.split(",")[1];
      const mediaType = file.type;
      const q = question.trim() || "Describe this image in detail.";
      const reply = await callClaude([{
        role: "user",
        content: [
          { type: "image", source: { type: "base64", media_type: mediaType, data: base64 } },
          { type: "text", text: q }
        ]
      }]);
      setOut(reply);
    } catch (e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };

  return (
    <div>
      <label className="block w-full border-2 border-dashed border-[#30363d] hover:border-[#388bfd] rounded-2xl p-8 text-center cursor-pointer transition-colors">
        <input type="file" accept="image/*" onChange={onFile} className="hidden" />
        {preview
          ? <img src={preview} alt="preview" className="max-h-48 mx-auto rounded-xl object-contain" />
          : <div className="text-[#6e7681]"><div className="text-4xl mb-2">🖼️</div><div className="text-sm">Click to upload an image</div></div>
        }
      </label>
      <div className="mt-3">
        <input value={question} onChange={e => setQuestion(e.target.value)}
          placeholder="Ask something about the image… (optional)"
          className="w-full rounded-xl bg-[#0d1117] border border-[#30363d] text-[#e6edf3] placeholder-[#6e7681] px-4 py-2.5 text-sm focus:outline-none focus:border-[#388bfd] transition-colors" />
      </div>
      <div className="mt-3"><Btn onClick={run} loading={loading} className={!file ? "opacity-50" : ""}>Analyze Image</Btn></div>
      <OutputBox text={out} loading={loading} label="Analysis" />
    </div>
  );
}

function SentimentPanel() {
  const [text, setText] = useState("");
  const [out, setOut] = useState(null);
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!text.trim()) return;
    setLoading(true); setOut(null);
    try {
      const raw = await callClaude([{
        role: "user",
        content: `Analyze the sentiment and emotions in this text. Respond ONLY with valid JSON in this format: {"sentiment":"positive|negative|neutral|mixed","score":0.0-1.0,"emotions":["emotion1","emotion2"],"tone":"formal|informal|aggressive|friendly|etc","summary":"one sentence"}.\n\nText: ${text}`
      }]);
      const clean = raw.replace(/```json|```/g, "").trim();
      setOut(JSON.parse(clean));
    } catch (e) { setOut({ error: e.message }); }
    finally { setLoading(false); }
  };
  const colors = { positive: "#7ee787", negative: "#f85149", neutral: "#8b949e", mixed: "#d29922" };
  return (
    <div>
      <TextArea value={text} onChange={setText} placeholder="Enter text to analyze sentiment…" rows={5} />
      <div className="mt-3"><Btn onClick={run} loading={loading}>Analyze Sentiment</Btn></div>
      {out && !out.error && (
        <div className="mt-4 rounded-2xl bg-[#0d1117] border border-[#30363d] p-4 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold" style={{ color: colors[out.sentiment] }}>
              {out.sentiment?.toUpperCase()}
            </span>
            <div className="flex-1 bg-[#161b22] rounded-full h-2">
              <div className="h-2 rounded-full transition-all" style={{ width: `${(out.score||0)*100}%`, background: colors[out.sentiment] }} />
            </div>
            <span className="text-xs text-[#6e7681]">{Math.round((out.score||0)*100)}%</span>
          </div>
          {out.emotions?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {out.emotions.map(e => (
                <span key={e} className="px-2.5 py-1 rounded-full text-xs bg-[#161b22] border border-[#30363d] text-[#8b949e]">{e}</span>
              ))}
            </div>
          )}
          <p className="text-sm text-[#8b949e]">Tone: <span className="text-[#e6edf3]">{out.tone}</span></p>
          <p className="text-sm text-[#8b949e]">{out.summary}</p>
        </div>
      )}
      {out?.error && <OutputBox text={`Error: ${out.error}`} loading={false} label="Error" />}
    </div>
  );
}

function QAPanel() {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!context.trim() || !question.trim()) return;
    setLoading(true); setOut("");
    try {
      setOut(await callClaude(
        [{ role: "user", content: `Based on the provided context, answer the question.\n\nContext:\n${context}\n\nQuestion: ${question}` }],
        "You are a precise Q&A assistant. Answer only based on the provided context. If the answer is not in the context, say so."
      ));
    } catch (e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };
  return (
    <div className="space-y-3">
      <div>
        <label className="text-xs text-[#8b949e] mb-1 block">Your Document / Context</label>
        <TextArea value={context} onChange={setContext} placeholder="Paste your document or context here…" rows={6} />
      </div>
      <div>
        <label className="text-xs text-[#8b949e] mb-1 block">Question</label>
        <input value={question} onChange={e => setQuestion(e.target.value)}
          placeholder="Ask a question about the text above…"
          className="w-full rounded-xl bg-[#0d1117] border border-[#30363d] text-[#e6edf3] placeholder-[#6e7681] px-4 py-2.5 text-sm focus:outline-none focus:border-[#388bfd] transition-colors" />
      </div>
      <Btn onClick={run} loading={loading}>Ask</Btn>
      <OutputBox text={out} loading={loading} label="Answer" />
    </div>
  );
}

function RewritePanel() {
  const [text, setText] = useState("");
  const [style, setStyle] = useState("professional");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const styles = ["professional","casual","academic","persuasive","simplified","expanded","concise","creative"];
  const run = async () => {
    if (!text.trim()) return;
    setLoading(true); setOut("");
    try { setOut(await callClaude([{ role: "user", content: `Rewrite the following text in a ${style} style. Keep the core meaning:\n\n${text}` }])); }
    catch (e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };
  return (
    <div>
      <TextArea value={text} onChange={setText} placeholder="Enter text to rewrite…" rows={6} />
      <div className="mt-3 flex flex-wrap gap-2 mb-3">
        {styles.map(s => (
          <button key={s} onClick={() => setStyle(s)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${style===s ? "bg-[#1f6feb] text-white" : "bg-[#161b22] text-[#6e7681] hover:text-[#e6edf3] border border-[#30363d]"}`}>
            {s}
          </button>
        ))}
      </div>
      <Btn onClick={run} loading={loading}>Rewrite</Btn>
      <OutputBox text={out} loading={loading} label={`Rewritten (${style})`} />
    </div>
  );
}

function BrainstormPanel() {
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(5);
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!topic.trim()) return;
    setLoading(true); setOut("");
    try { setOut(await callClaude([{ role: "user", content: `Generate ${count} creative, diverse, and actionable ideas for: "${topic}". Number each idea and include a brief explanation.` }])); }
    catch (e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };
  return (
    <div>
      <input value={topic} onChange={e => setTopic(e.target.value)}
        placeholder="Enter a topic, problem, or goal to brainstorm…"
        className="w-full rounded-xl bg-[#0d1117] border border-[#30363d] text-[#e6edf3] placeholder-[#6e7681] px-4 py-2.5 text-sm focus:outline-none focus:border-[#388bfd] transition-colors" />
      <div className="mt-3 flex items-center gap-4">
        <label className="text-sm text-[#8b949e]">Ideas:</label>
        {[3,5,10,15].map(n => (
          <button key={n} onClick={() => setCount(n)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${count===n ? "bg-[#1f6feb] text-white" : "bg-[#161b22] text-[#6e7681] border border-[#30363d] hover:text-[#e6edf3]"}`}>
            {n}
          </button>
        ))}
      </div>
      <div className="mt-3"><Btn onClick={run} loading={loading}>🧠 Brainstorm</Btn></div>
      <OutputBox text={out} loading={loading} label="Ideas" />
    </div>
  );
}

function ClassifyPanel() {
  const [text, setText] = useState("");
  const [categories, setCategories] = useState("Technology, Business, Science, Arts, Sports, Politics, Health");
  const [out, setOut] = useState(null);
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!text.trim()) return;
    setLoading(true); setOut(null);
    try {
      const raw = await callClaude([{
        role: "user",
        content: `Classify the following text into ONE of these categories: ${categories}.\n\nRespond ONLY with valid JSON: {"category":"chosen category","confidence":0.0-1.0,"reasoning":"brief reason"}\n\nText: ${text}`
      }]);
      setOut(JSON.parse(raw.replace(/```json|```/g, "").trim()));
    } catch(e) { setOut({ error: e.message }); }
    finally { setLoading(false); }
  };
  return (
    <div>
      <TextArea value={text} onChange={setText} placeholder="Enter text to classify…" rows={5} />
      <div className="mt-3">
        <label className="text-xs text-[#8b949e] mb-1 block">Categories (comma-separated)</label>
        <input value={categories} onChange={e => setCategories(e.target.value)}
          className="w-full rounded-xl bg-[#0d1117] border border-[#30363d] text-[#e6edf3] px-4 py-2.5 text-sm focus:outline-none focus:border-[#388bfd] transition-colors" />
      </div>
      <div className="mt-3"><Btn onClick={run} loading={loading}>Classify</Btn></div>
      {out && !out.error && (
        <div className="mt-4 rounded-2xl bg-[#0d1117] border border-[#30363d] p-4 space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-[#388bfd]">{out.category}</span>
            <div className="flex-1 bg-[#161b22] rounded-full h-2">
              <div className="h-2 rounded-full bg-[#388bfd] transition-all" style={{ width: `${(out.confidence||0)*100}%` }} />
            </div>
            <span className="text-xs text-[#6e7681]">{Math.round((out.confidence||0)*100)}%</span>
          </div>
          <p className="text-sm text-[#8b949e]">{out.reasoning}</p>
        </div>
      )}
    </div>
  );
}

function JSONPanel() {
  const [text, setText] = useState("");
  const [schema, setSchema] = useState('{"name":"","email":"","date":"","amount":0}');
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!text.trim()) return;
    setLoading(true); setOut("");
    try {
      const raw = await callClaude([{
        role: "user",
        content: `Extract structured data from the following text and return ONLY valid JSON matching this schema: ${schema}\n\nText: ${text}`
      }]);
      const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());
      setOut(JSON.stringify(parsed, null, 2));
    } catch(e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };
  return (
    <div>
      <TextArea value={text} onChange={setText} placeholder="Enter unstructured text to extract data from…" rows={5} />
      <div className="mt-3">
        <label className="text-xs text-[#8b949e] mb-1 block">JSON Schema</label>
        <TextArea value={schema} onChange={setSchema} rows={3} placeholder='{"field":"type"}' />
      </div>
      <div className="mt-3"><Btn onClick={run} loading={loading}>Extract JSON</Btn></div>
      <OutputBox text={out} loading={loading} label="Extracted JSON" />
    </div>
  );
}

function StreamPanel() {
  const [prompt, setPrompt] = useState("");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);
  const run = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true); setOut("");
    try {
      for await (const chunk of streamClaude([{ role: "user", content: prompt }])) {
        setOut(prev => prev + chunk);
      }
    } catch(e) { setOut(`Error: ${e.message}`); }
    finally { setLoading(false); }
  };
  return (
    <div>
      <TextArea value={prompt} onChange={setPrompt} placeholder="Enter any prompt to see real-time streaming output…" rows={4} />
      <div className="mt-3 flex items-center gap-3">
        <Btn onClick={run} loading={loading}>⚡ Stream</Btn>
        {loading && <span className="text-xs text-[#7ee787] animate-pulse">Streaming live…</span>}
      </div>
      <OutputBox text={out} loading={false} label="Streamed Output" />
    </div>
  );
}

const PANELS = { chat: ChatPanel, summarize: SummarizePanel, translate: TranslatePanel, code: CodePanel, image: ImagePanel, sentiment: SentimentPanel, qa: QAPanel, rewrite: RewritePanel, brainstorm: BrainstormPanel, classify: ClassifyPanel, json: JSONPanel, stream: StreamPanel };

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState("chat");
  const feature = FEATURES.find(f => f.id === active);
  const Panel = PANELS[active];

  return (
    <div className="min-h-screen bg-[#010409] text-[#e6edf3]" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
      {/* Header */}
      <div className="border-b border-[#21262d] px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#388bfd] to-[#bc8cff] flex items-center justify-center text-white font-black text-sm">AI</div>
        <h1 className="text-base font-bold text-[#e6edf3]">Claude AI Studio</h1>
        <span className="ml-2 px-2 py-0.5 rounded-full bg-[#388bfd22] border border-[#388bfd44] text-[#388bfd] text-xs">12 Features</span>
      </div>

      <div className="flex h-[calc(100vh-57px)]">
        {/* Sidebar */}
        <div className="w-56 border-r border-[#21262d] overflow-y-auto py-3 shrink-0">
          {FEATURES.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              className={`w-full text-left px-4 py-3 transition-all ${active===f.id ? "bg-[#161b22] border-r-2 border-[#388bfd]" : "hover:bg-[#0d1117]"}`}>
              <div className="flex items-center gap-2.5">
                <span className="text-base">{f.icon}</span>
                <div>
                  <div className={`text-xs font-semibold ${active===f.id ? "text-[#388bfd]" : "text-[#e6edf3]"}`}>{f.label}</div>
                  <div className="text-[10px] text-[#6e7681] mt-0.5">{f.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-5">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{feature.icon}</span>
                <h2 className="text-lg font-bold">{feature.label}</h2>
              </div>
              <p className="text-sm text-[#6e7681]">{feature.desc}</p>
            </div>
            <div className="rounded-2xl bg-[#0d1117] border border-[#21262d] p-5">
              <Panel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}