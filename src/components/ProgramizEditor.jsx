import React, { useState, useRef, useEffect } from 'react';
import { Play, Download, Upload, Copy, Trash2, Menu, X, Code, Terminal } from 'lucide-react';

export default function ProgramizEditor() {
  const [code, setCode] = useState(`// Welcome to JavaScript Online Compiler
// Write your code here

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));

// Try some examples:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);`);
  
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const textareaRef = useRef(null);
  const highlightRef = useRef(null);

  // Token types and their patterns
  const tokenTypes = [
    { type: 'comment', pattern: /(\/\/.*|\/\*[\s\S]*?\*\/)/ },
    { type: 'string', pattern: /(["'`])(?:(?=(\\?))\2.)*?\1/ },
    { type: 'keyword', pattern: /\b(function|const|let|var|if|else|for|while|do|switch|case|break|continue|return|try|catch|finally|throw|new|typeof|instanceof|void|in|of|await|async|yield|export|import|default|class|extends|super|this|static|true|false|null|undefined|NaN|Infinity)\b/ },
    { type: 'builtin', pattern: /\b(console|log|error|warn|info|debug|time|timeEnd|clear|assert|table|dir|group|groupEnd|count|countReset|Array|Object|String|Number|Boolean|Date|Math|JSON|Promise|Set|Map|WeakSet|WeakMap|Symbol|Proxy|Reflect|Intl|parseInt|parseFloat|isNaN|isFinite|decodeURI|encodeURI|decodeURIComponent|encodeURIComponent|alert|prompt|confirm)\b/ },
    { type: 'number', pattern: /\b(\d+(\.\d+)?|0x[\da-f]+|0b[01]+|0o[0-7]+)\b/ },
    { type: 'operator', pattern: /(===|!==|==|!=|<=|>=|<|>|\+|\-|\*|\/|%|\*\*|&&|\|\||!|\?|:|\.\.\.|=>|=|\+=|\-=|\*=|\/=|%=|\*\*=|\+\+|\-\-)/ },
    { type: 'function', pattern: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/ },
    { type: 'bracket', pattern: /([{}()[\]])/ },
  ];

  // Improved syntax highlighter using tokenization
  const highlightCode = (text) => {
    if (!text) return '';
    
    let result = '';
    let pos = 0;
    
    // Escape HTML
    const escapedText = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    while (pos < escapedText.length) {
      let tokenFound = false;
      
      // Check each token type
      for (const tokenType of tokenTypes) {
        const match = escapedText.slice(pos).match(tokenType.pattern);
        
        if (match && match.index === 0) {
          // Add any plain text before this token
          if (pos > 0 && escapedText.slice(0, pos) !== result.slice(-(pos))) {
            const plainText = escapedText.slice(result.length, pos);
            result += plainText;
          }
          
          // Add the token with appropriate class
          result += `<span class="token-${tokenType.type}">${match[0]}</span>`;
          pos += match[0].length;
          tokenFound = true;
          break;
        }
      }
      
      // If no token matched, add the character as plain text
      if (!tokenFound) {
        result += escapedText.charAt(pos);
        pos++;
      }
    }
    
    return result;
  };

  // Update highlighting when code changes
  useEffect(() => {
    if (highlightRef.current) {
      const highlighted = highlightCode(code);
      highlightRef.current.innerHTML = highlighted;
    }
  }, [code]);

  // Sync textarea scroll with highlight overlay
  const syncScroll = () => {
    if (highlightRef.current && textareaRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  // Handle textarea changes
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const executeCode = () => {
    setIsRunning(true);
    setOutput('');
    
    const logs = [];
    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn
    };

    console.log = (...args) => {
      logs.push(args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' '));
    };
    
    console.error = (...args) => {
      logs.push('Error: ' + args.join(' '));
    };
    
    console.warn = (...args) => {
      logs.push('Warning: ' + args.join(' '));
    };

    try {
      eval(code);
      setOutput(logs.length > 0 ? logs.join('\n') : 'Code executed successfully (no output)');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      console.log = originalConsole.log;
      console.error = originalConsole.error;
      console.warn = originalConsole.warn;
      setIsRunning(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2;
      }, 0);
    }
  };

  const clearCode = () => {
    setCode('');
    setOutput('');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.js';
    a.click();
    URL.revokeObjectURL(url);
  };

  const uploadCode = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCode(e.target.result);
      reader.readAsText(file);
    }
  };

  const examples = [
    {
      title: 'Hello World',
      code: `console.log("Hello, World!");`
    },
    {
      title: 'Variables & Data Types',
      code: `// Variables
let name = "John";
const age = 25;
var city = "New York";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// Data types
console.log(typeof name);
console.log(typeof age);`
    },
    {
      title: 'Functions',
      code: `// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 7));`
    },
    {
      title: 'Arrays',
      code: `const fruits = ["apple", "banana", "orange"];

// Array methods
fruits.push("grape");
console.log("Fruits:", fruits);

// Array iteration
fruits.forEach(fruit => {
  console.log("Fruit:", fruit);
});

// Array map
const upperFruits = fruits.map(f => f.toUpperCase());
console.log("Upper:", upperFruits);`
    },
    {
      title: 'Objects',
      code: `const person = {
  name: "Alice",
  age: 30,
  city: "Paris",
  greet: function() {
    return "Hello, I'm " + this.name;
  }
};

console.log(person.name);
console.log(person.greet());
console.log(JSON.stringify(person, null, 2));`
    },
    {
      title: 'Loops',
      code: `// For loop
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// While loop
let j = 1;
while (j <= 3) {
  console.log("While:", j);
  j++;
}

// For...of
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log("Color:", color);
}`
    }
  ];

  const loadExample = (exampleCode) => {
    setCode(exampleCode);
    setOutput('');
    setSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Add CSS for syntax highlighting */}
      <style>{`
        .token-keyword {
          color: #569cd6;
          font-weight: bold;
        }
        .token-builtin {
          color: #dcdcaa;
        }
        .token-function {
          color: #d7ba7d;
        }
        .token-string {
          color: #ce9178;
        }
        .token-number {
          color: #b5cea8;
        }
        .token-comment {
          color: #6a9955;
          font-style: italic;
        }
        .token-operator {
          color: #d4d4d4;
        }
        .token-bracket {
          color: #ffd700;
        }
        .editor-wrapper {
          position: relative;
          height: 100%;
          overflow: hidden;
        }
        .code-editor {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5;
          tab-size: 2;
          white-space: pre;
          word-wrap: normal;
          background: transparent;
          color: transparent;
          caret-color: #ffffff;
          resize: none;
          outline: none;
          border: none;
          padding: 16px;
          overflow: auto;
          z-index: 2;
        }
        .code-highlight {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.5;
          tab-size: 2;
          white-space: pre;
          word-wrap: normal;
          pointer-events: none;
          padding: 16px;
          overflow: hidden;
          background: #1e1e1e;
          color: #d4d4d4;
          z-index: 1;
        }
        .code-highlight span {
          position: relative;
        }
      `}</style>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-blue-500 rounded-lg transition"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Code size={28} />
              <h1 className="text-xl md:text-2xl font-bold">JavaScript Online Compiler</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-sm opacity-90">by Programiz</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-300 h-full overflow-y-auto`}>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Terminal size={20} />
              Code Examples
            </h2>
            <div className="space-y-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example.code)}
                  className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition text-sm font-medium text-gray-700"
                >
                  {example.title}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Editor Area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={executeCode}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition shadow-sm"
              >
                <Play size={18} />
                <span className="hidden sm:inline">Run</span>
              </button>
              <button
                onClick={copyCode}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
              >
                <Copy size={18} />
                <span className="hidden sm:inline">Copy</span>
              </button>
              <button
                onClick={downloadCode}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
              >
                <Download size={18} />
                <span className="hidden sm:inline">Download</span>
              </button>
              <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition cursor-pointer">
                <Upload size={18} />
                <span className="hidden sm:inline">Upload</span>
                <input
                  type="file"
                  accept=".js,.txt"
                  onChange={uploadCode}
                  className="hidden"
                />
              </label>
              <button
                onClick={clearCode}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
              >
                <Trash2 size={18} />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          {/* Editor and Output */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Code Editor */}
            <div className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-900">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <span className="text-sm font-semibold text-gray-200">Code Editor</span>
              </div>
              <div className="flex-1 relative overflow-hidden">
                <div className="editor-wrapper">
                  <pre 
                    ref={highlightRef}
                    className="code-highlight"
                  />
                  <textarea
                    ref={textareaRef}
                    value={code}
                    onChange={handleCodeChange}
                    onKeyDown={handleKeyDown}
                    onScroll={syncScroll}
                    className="code-editor"
                    spellCheck="false"
                    placeholder="Write your JavaScript code here..."
                  />
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="flex-1 flex flex-col bg-gray-900">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <span className="text-sm font-semibold text-gray-200">Output</span>
              </div>
              <div className="flex-1 p-4 overflow-auto">
                <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap break-words">
                  {output || 'Run your code to see output here...'}
                </pre>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-3 px-4">
        <div className="container mx-auto">
          <p className="text-sm text-gray-600 text-center">
            JavaScript Online Compiler • Write, Run, and Share JavaScript code
          </p>
        </div>
      </footer>
    </div>
  );
}