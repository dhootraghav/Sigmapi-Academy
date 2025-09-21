import { useState, useRef, useEffect } from "react";
import "../styles/boards.css";

const IGCSE_UNITS = [
  { unit: "Unit 1: Data Representation", topics: ["Binary systems", "Hexadecimal", "Data storage"] },
  { unit: "Unit 2: Communication & Internet Tech", topics: ["Data transmission", "Security aspects", "Internet principles of operation"] },
  { unit: "Unit 3: Hardware & Software", topics: ["Logic gates", "Computer architecture & fetch–execute cycle", "I/O devices", "Memory & storage", "Operating systems", "High/low-level languages & translators"] },
  { unit: "Unit 4: Security", topics: ["Cybersecurity fundamentals, threats, prevention"] },
  { unit: "Unit 5: Ethics", topics: ["Ethical & social implications of computing"] },
  { unit: "Unit 6: Algorithm Design & Problem Solving", topics: ["Problem-solving and design", "Pseudocode and flowcharts"] },
  { unit: "Unit 7: Programming Concepts", topics: ["Variables & operators", "Algorithm design", "Subroutines", "GUI apps", "Sequences & strings", "Selection & iteration", "System design & arrays", "Input validation", "Testing & debugging", "File handling & DB use", "Scenario prep", "Exam practice"] },
];

export default function IGCSE() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const listRef = useRef(null);

  // ✅ replace with your IGCSE Google Form /viewform link
  const registerLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSeyZgTWWf5IFBLrn-JGaN14JcjDvOpE67p3-QlZyBhwgTXuGw/viewform";
  const iframeSrc = registerLink ? (registerLink.includes("embedded=true") ? registerLink : `${registerLink}?embedded=true`) : "";

  // scroll-lock like Home
  useEffect(() => {
    const body = document?.body;
    if (!body) return;
    if (modalOpen) {
      const y = window.scrollY || window.pageYOffset;
      body.style.position = "fixed";
      body.style.top = `-${y}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.overflow = "hidden";
      body.setAttribute("data-scroll-y", String(y));
    } else {
      const stored = body.getAttribute("data-scroll-y");
      if (stored) {
        const y = parseInt(stored, 10) || 0;
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.overflow = "";
        body.removeAttribute("data-scroll-y");
        window.scrollTo(0, y);
      }
    }
    return () => {
      const stored = body.getAttribute("data-scroll-y");
      if (stored) {
        const y = parseInt(stored, 10) || 0;
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.overflow = "";
        body.removeAttribute("data-scroll-y");
        window.scrollTo(0, y);
      }
    };
  }, [modalOpen]);

  const openSyllabus = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen) {
      requestAnimationFrame(() => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };

  return (
    <div className="board-page">
      {/* Hero */}
      <section className="board-hero">
        <h1 className="board-main-title">IGCSE</h1>
        <p className="board-main-subtitle">International General Certificate of Secondary Education</p>
      </section>

      <div className="board-content">
        {/* Buttons row above Why Choose */}
        <section className="board-section board-cta-row">
          <div className="btn-row">
            <button className="primary-btn" onClick={openSyllabus} aria-expanded={open} aria-controls="igcse-syllabus">
              View Syllabus
            </button>
            <button className="secondary-btn" onClick={() => setModalOpen(true)}>
              Register
            </button>
          </div>

          {open && (
            <div ref={listRef} id="igcse-syllabus" className="syllabus-inline">
              {IGCSE_UNITS.map(({ unit, topics }, idx) => (
                <details key={idx} className="syllabus-unit">
                  <summary>{unit}</summary>
                  <ul>{topics.map((t, i) => <li key={i}>{t}</li>)}</ul>
                </details>
              ))}
            </div>
          )}
        </section>

        {/* Why Choose */}
        <section className="board-section">
          <h2>Why Choose Our IGCSE Program?</h2>
          <div className="board-features">
            <div className="board-feature"><h3>📘 Cambridge-Aligned</h3><p>Coverage mapped to the latest IGCSE spec.</p></div>
            <div className="board-feature"><h3>👩‍🏫 1:1 Live Classes</h3><p>Focused sessions with structured feedback.</p></div>
            <div className="board-feature"><h3>📝 Past Paper Mastery</h3><p>Mark-scheme style practice to sharpen exam technique.</p></div>
            <div className="board-feature"><h3>🎯 Concept → Application</h3><p>Real-world examples and extension problems.</p></div>
            <div className="board-feature"><h3>📂 Notes & Recordings</h3><p>Concise notes from each session, with recordings.</p></div>
            <div className="board-feature"><h3>🔁 Custom Plans</h3><p>Adaptive plans for term tests, prelims, and finals.</p></div>
          </div>
        </section>
      </div>

      {/* Modal (same CSS classes as Home) */}
      {modalOpen && (
        <div className="custom-modal" id="registerModal" style={{ display: "block" }}>
          <div className="modal-overlay" onClick={() => setModalOpen(false)} />
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <img src="/pictures/SigmaPi Logo.png" width="30" height="30" alt="Logo" />
              <span className="close-button" onClick={() => setModalOpen(false)}>×</span>
            </div>
            <div className="modal-body">
              {iframeSrc ? (
                <iframe style={{ width: "100%", height: "70vh", border: "none" }} src={iframeSrc} title="IGCSE Registration">
                  Loading…
                </iframe>
              ) : (
                <p style={{ padding: "1rem" }}>Registration link not configured.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
