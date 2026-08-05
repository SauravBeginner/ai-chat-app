import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  ChevronRight,
  Cpu,
  FileText,
  Mic,
  MoreHorizontal,
  Moon,
  Plus,
  Sparkles,
  Smile,
  Sun,
  Wand2,
} from "lucide-react";

const conversations = [
  {
    title: "Weekend planner",
    preview: "Kolkata food walk, museum, and a calm Sunday",
    time: "2m",
    active: true,
  },
  {
    title: "Product launch copy",
    preview: "Refine the hero section and CTA tone",
    time: "18m",
    active: false,
  },
  {
    title: "Voice note summary",
    preview: "Turn the transcript into 3 bullets",
    time: "Today",
    active: false,
  },
];

const messages = [
  {
    role: "assistant",
    name: "Nova",
    content:
      "I can keep this short and polished. Start with Indian Museum, grab coffee on Park Street, then end with a slow dinner.",
    meta: "Drafted in 4s",
  },
  {
    role: "user",
    name: "You",
    content: "Can you make it more premium and include a voice reply?",
    meta: "Sent just now",
  },
  {
    role: "assistant",
    name: "Nova",
    content:
      "Absolutely. I’ll tighten the language, add a warm audio response, and keep the plan easy to skim on mobile.",
    meta: "Ready to play",
  },
];

const quickPrompts = [
  "Summarize this thread",
  "Rewrite in a friendly tone",
  "Turn into action items",
  "Make it voice-friendly",
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="app-shell">
      <section className="hero card">
        <div className="hero-copy">
          <div className="hero-topbar">
            <div className="eyebrow">
              <Sparkles size={14} />
              <span>Shadcn-style chat UI</span>
            </div>

            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              type="button"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              <span>{theme === "light" ? "Dark" : "Light"} mode</span>
            </button>
          </div>

          <h1>Chat interface with a cleaner shadcn look.</h1>
          <p>
            Soft borders, calm surfaces, compact actions, and a focused layout
            that feels closer to a polished product than a demo screen.
          </p>

          <div className="hero-actions">
            <button className="button button-primary">
              <Plus size={16} />
              New chat
            </button>
            <button className="button button-secondary">
              <ArrowUpRight size={16} />
              View template
            </button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="stat-card">
            <span>Active chats</span>
            <strong>12</strong>
            <small>2 new since morning</small>
          </div>
          <div className="stat-card accent">
            <span>Voice replies</span>
            <strong>Ready</strong>
            <small>Playback enabled</small>
          </div>
        </div>
      </section>

      <section className="workspace">
        <aside className="sidebar card">
          <div className="sidebar-header">
            <div>
              <p className="section-label">Chats</p>
              <h2>Recent conversations</h2>
            </div>
            <button className="icon-button" aria-label="More options">
              <MoreHorizontal size={16} />
            </button>
          </div>

          <div className="conversation-list">
            {conversations.map((conversation) => (
              <button
                className={`conversation ${conversation.active ? "active" : ""}`}
                key={conversation.title}
              >
                <div className="conversation-copy">
                  <strong>{conversation.title}</strong>
                  <span>{conversation.preview}</span>
                </div>
                <small>{conversation.time}</small>
              </button>
            ))}
          </div>

          <div className="sidebar-card">
            <div className="sidebar-card-title">
              <Wand2 size={16} />
              <span>Quick prompts</span>
            </div>
            <div className="prompt-grid">
              {quickPrompts.map((prompt) => (
                <button className="prompt-chip" key={prompt}>
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="chat card">
          <header className="chat-header">
            <div className="chat-title">
              <div className="avatar">
                <Bot size={18} />
              </div>
              <div>
                <h2>Nova AI</h2>
                <p>Responsive assistant with text and voice modes</p>
              </div>
            </div>

            <div className="chat-badges">
              <span className="badge">
                <Cpu size={12} />
                Reasoning on
              </span>
              <span className="badge muted">
                <FileText size={12} />
                Notes saved
              </span>
            </div>
          </header>

          <div className="message-stream">
            {messages.map((message) => (
              <article
                className={`message ${message.role === "assistant" ? "assistant" : "user"}`}
                key={`${message.role}-${message.meta}`}
              >
                <div className="message-top">
                  <strong>{message.name}</strong>
                  <span>{message.meta}</span>
                </div>
                <p>{message.content}</p>
              </article>
            ))}
          </div>

          <div className="composer card-inner">
            <button className="icon-button mic-button" aria-label="Start voice input">
              <Mic size={16} />
            </button>

            <div className="composer-input">
              <span>Ask anything, or dictate a reply...</span>
            </div>

            <button className="button button-primary send-button">
              Send
              <ChevronRight size={16} />
            </button>
          </div>
        </section>

        <aside className="insights card">
          <div className="sidebar-header">
            <div>
              <p className="section-label">Workspace</p>
              <h2>Assistant tools</h2>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-title">
              <Smile size={16} />
              <span>Tone controls</span>
            </div>
            <p>Make replies warmer, shorter, or more executive-ready.</p>
          </div>

          <div className="insight-card">
            <div className="insight-title">
              <Sparkles size={16} />
              <span>Voice mode</span>
            </div>
            <div className="waveform" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index} style={{ height: `${24 + ((index * 19) % 42)}px` }} />
              ))}
            </div>
            <p>Live playback with subtle motion and clear visual hierarchy.</p>
          </div>

          <button className="secondary-callout">
            <span>
              <strong>Open chat template</strong>
              <small>Ready for more conversations</small>
            </span>
            <ChevronRight size={16} />
          </button>
        </aside>
      </section>
    </main>
  );
}

export default App;
