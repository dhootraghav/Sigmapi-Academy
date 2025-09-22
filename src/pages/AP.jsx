import { useState, useRef, useEffect } from "react";
import "../styles/boards.css";

const AP_CSA_UNITS = [
  { unit: "Unit 1: Primitive Types", topics: ["Primitive data types: int, double, boolean", "Arithmetic expression evaluation", "Assignment operators and value production", "Combining variables and operators for result formation", "In the exam: 2.5% – 5%"] },
  { unit: "Unit 2: Using Objects", topics: ["Objects and classes", "Constructors", "Integer/Double libraries", "Methods (static/void/params)", "String methods", "API/library usage", "In the exam: 5% – 7.5%"] },
  { unit: "Unit 3: Boolean + if", topics: ["Relational ops", "if / if-else / multi-branch", "Equivalent boolean expressions", "References & aliasing", "In the exam: 15% – 17.5%"] },
  { unit: "Unit 4: Iteration", topics: ["Loop construction", "for/while", "Nested loops", "String/Arithmetic algos", "In the exam: 17.5% – 22.5%"] },
  { unit: "Unit 5: Writing Classes", topics: ["Public/private fields", "Constructors", "Doc/comments", "Static/void/non-void methods", "Scope", "Modularization", "Ethics/IP", "In the exam: 5% – 7.5%"] },
  { unit: "Unit 6: Array", topics: ["Representing data with arrays", "Traversals", "Array algorithms", "In the exam: 10% – 15%"] },
  { unit: "Unit 7: ArrayList", topics: ["References in ArrayList", "Traversal/iteration", "Search/sort", "Data privacy ethics", "In the exam: 2.5% – 7.5%"] },
  { unit: "Unit 8: 2D Array", topics: ["2D representation", "Nested iteration", "In the exam: 7.5% – 10%"] },
  { unit: "Unit 9: Inheritance", topics: ["Super/subclass", "Overriding", "Polymorphism", "In the exam: 5% – 10%"] },
  { unit: "Unit 10: Recursion", topics: ["Recursive methods", "Binary search / merge sort", "In the exam: 5% – 7.5%"] },
];

export default function AP() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const listRef = useRef(null);

  // ✅ replace with your AP Google Form /viewform link
  const registerLink =
  "https://docs.google.com/forms/d/e/1FAIpQLSclbMAhX3EiJuh5-gwkTjlTqGQjNSFkPYnIQ7J8Tt5Gsutv8Q/viewform";
  const iframeSrc = registerLink ? (registerLink.includes("embedded=true") ? registerLink : `${registerLink}?embedded=true`) : "";

  // scroll-lock body when modal is open (same as your Home.jsx)
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
        <h1 className="board-main-title">AP</h1>
        <p className="board-main-subtitle">Advanced Placement — Computer Science</p>
      </section>

      <div className="board-content">
        {/* Buttons row (above Why Choose) */}
        <section className="board-section board-cta-row">
          <div className="btn-row">
            <button className="primary-btn" onClick={openSyllabus} aria-expanded={open} aria-controls="ap-syllabus">
              View Syllabus
            </button>
            <button className="secondary-btn" onClick={() => setModalOpen(true)}>
              Register
            </button>
          </div>

          {open && (
            <div ref={listRef} id="ap-syllabus" className="syllabus-inline">
              {AP_CSA_UNITS.map(({ unit, topics }, idx) => (
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
          <h2>Why Choose Our AP Program?</h2>
          <div className="board-features">
            <div className="board-feature"><h3>🎯 Exam-First Design</h3><p>Mapped to AP CED with targeted MCQ/FRQ practice.</p></div>
            <div className="board-feature"><h3>👩‍🏫 1:1 Mentoring</h3><p>Personalized plans and weekly checkpoints.</p></div>
            <div className="board-feature"><h3>🧠 Concept → Code</h3><p>From algorithm intuition to clean Java implementations.</p></div>
            <div className="board-feature"><h3>📚 Notes & Recordings</h3><p>Structured notes and session recordings.</p></div>
            <div className="board-feature"><h3>📈 Timed Mocks</h3><p>Full-length simulations with examiner-style feedback.</p></div>
          </div>
        </section>
      </div>

      {/* Modal (same classes as Home) */}
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
                <iframe style={{ width: "100%", height: "70vh", border: "none" }} src={iframeSrc} title="AP Registration">
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
