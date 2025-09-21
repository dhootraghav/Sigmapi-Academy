// src/pages/WBSyllabus.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/** 🔧 Placeholder syllabi per subject — edit later */
const WB_SYLLABUS = {
  "computer-science": {
    title: "Computer Science",
    units: [
      { unit: "Unit 1: Programming Basics", topics: ["Syntax & variables", "Conditionals", "Loops"] },
      { unit: "Unit 2: OOP Concepts", topics: ["Classes/Objects", "Constructors", "Methods"] },
      { unit: "Unit 3: Data Handling", topics: ["Arrays/Lists", "Strings", "Searching/Sorting"] },
      { unit: "Unit 4: Files & DB (intro)", topics: ["Text files", "CSV basics", "SQL (intro)"] },
    ],
    registerLink: "",
  },
  "ai-robotics": {
    title: "AI & Robotics",
    units: [
      { unit: "Unit 1: Robotics Basics", topics: ["Types & applications", "Components", "DoF"] },
      { unit: "Unit 2: AI Foundations", topics: ["Data & models", "Basic ML tasks", "Ethics"] },
      { unit: "Unit 3: Python Essentials", topics: ["Data types", "Control flow", "Functions"] },
      { unit: "Unit 4: Project Cycle", topics: ["Problem → Data → Model → Evaluate"] },
    ],
    registerLink: "",
  },
  "java-programming": {
    title: "Programming with Java",
    units: [
      { unit: "Unit 1: Core Java", topics: ["Types & operators", "OOP", "Packages"] },
      { unit: "Unit 2: Collections", topics: ["Lists/Sets/Maps", "Iterators", "Algorithms"] },
      { unit: "Unit 3: Errors & Files", topics: ["Exceptions", "I/O", "Mini-project"] },
    ],
    registerLink: "",
  },
  "data-structures": {
    title: "Data Structures",
    units: [
      { unit: "Unit 1: Linear DS", topics: ["Arrays", "Stacks", "Queues"] },
      { unit: "Unit 2: Non-linear (intro)", topics: ["Trees", "Graphs"] },
      { unit: "Unit 3: Algorithms", topics: ["Sorting", "Searching", "Complexity"] },
    ],
    registerLink: "",
  },
  "web-development": {
    title: "Web Development",
    units: [
      { unit: "Unit 1: HTML/CSS", topics: ["Semantic HTML", "Layouts", "Responsive basics"] },
      { unit: "Unit 2: JavaScript", topics: ["DOM", "Events", "Fetch (intro)"] },
      { unit: "Unit 3: Project", topics: ["Forms", "Basic API", "Deploy (intro)"] },
    ],
    registerLink: "",
  },
};

export default function WBSyllabus() {
  const { grade, subject } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const sCfg = WB_SYLLABUS[subject];

  // Scroll-lock body while modal open
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
      const stored = document?.body?.getAttribute?.("data-scroll-y");
      if (stored) {
        const y = parseInt(stored, 10) || 0;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        document.body.removeAttribute("data-scroll-y");
        window.scrollTo(0, y);
      }
    };
  }, [modalOpen]);

  if (!sCfg) {
    return (
      <div className="board-page">
        <section className="board-hero">
          <h1 className="board-main-title">Not Found</h1>
          <p className="board-main-subtitle">Unknown subject for Class {grade}.</p>
        </section>
        <div className="board-content">
          <Link to={`/wb/class-${grade}`} className="primary-btn">← Back to Class {grade}</Link>
        </div>
      </div>
    );
  }

  const iframeSrc =
    sCfg.registerLink && !sCfg.registerLink.includes("embedded=true")
      ? `${sCfg.registerLink}?embedded=true`
      : sCfg.registerLink || "";

  return (
    <div className="board-page">
      {/* Hero */}
      <section className="board-hero">
        <div className="board-logo-container">
          <img src="/pictures/wb logo final.jpg" alt="WB Board Logo" className="board-main-logo" />
          <h1 className="board-main-title">WB — Class {grade}</h1>
          <p className="board-main-subtitle">{sCfg.title}</p>
        </div>
      </section>

      {/* Syllabus */}
      <div className="board-content">
        <section className="board-section">
          <div className="table-header">
            <h2>Detailed Syllabus</h2>
            <Link to={`/wb/class/${grade}`} className="explore-link">
              ← Back to Class {grade} subjects
            </Link>
          </div>

          <div className="table-responsive">
            <table className="syllabus-table">
              <thead>
                <tr>
                  <th style={{ width: "28%" }}>Unit</th>
                  <th>Topics</th>
                </tr>
              </thead>
              <tbody>
                {(sCfg.units || []).map(({ unit, topics }, i) => (
                  <tr key={i}>
                    <td><strong>{unit}</strong></td>
                    <td>
                      <ul>{(topics || []).map((t, j) => <li key={j}>{t}</li>)}</ul>
                    </td>
                  </tr>
                ))}
                {!sCfg.units?.length && (
                  <tr>
                    <td colSpan={2}>Syllabus coming soon.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="syllabus-actions" style={{ justifyContent: "center", gap: 12 }}>
            <button
              className="secondary-btn"
              onClick={() => setModalOpen(true)}
              disabled={!sCfg.registerLink}
              title={sCfg.registerLink ? "Register" : "Add registerLink in WB_SYLLABUS to enable"}
            >
              Register
            </button>
          </div>
        </section>
      </div>

      {/* Register modal */}
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
                <iframe
                  style={{ width: "100%", height: "70vh", border: "none" }}
                  src={iframeSrc}
                  title={`${sCfg.title} Registration`}
                >
                  Loading…
                </iframe>
              ) : (
                <p style={{ padding: "0.75rem 0" }}>
                  Registration link not configured.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
