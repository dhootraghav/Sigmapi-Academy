// src/pages/CBSESyllabus.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/** 🔧 Placeholder syllabi per subject — edit later */
const CBSE_SYLLABUS = {
  "computer-application": {
    title: "Computer Applications",
    units: [
      { unit: "Unit 1: Docs & Sheets", topics: ["Styles/templates", "Formulas/functions", "Charts"] },
      { unit: "Unit 2: Web Basics", topics: ["HTML structure", "Forms", "Basic CSS"] },
      { unit: "Unit 3: Cyber Safety", topics: ["Passwords", "Phishing", "Digital footprint"] },
    ],
    registerLink: "",
  },
  "ai": {
    title: "Artificial Intelligence (Skill)",
    units: [
      { unit: "Unit 1: AI & Society", topics: ["What is AI", "Use-cases", "Impact"] },
      { unit: "Unit 2: Data for AI", topics: ["Types", "Collection", "Cleaning"] },
      { unit: "Unit 3: Python Intro", topics: ["Variables", "Operators", "Simple I/O"] },
    ],
    registerLink: "",
  },
  "computer-science": {
    title: "Computer Science (Python)",
    units: [
      { unit: "Unit 1: Python Basics", topics: ["Data types", "Operators", "Expressions"] },
      { unit: "Unit 2: Control & Functions", topics: ["if/elif/else", "Loops", "Functions"] },
      { unit: "Unit 3: Files & SQL", topics: ["Text/binary", "CSV", "SQL basics/joins"] },
    ],
    registerLink: "",
  },
  "informatics-practices": {
    title: "Informatics Practices",
    units: [
      { unit: "Unit 1: Pandas", topics: ["Series", "DataFrame", "Transform"] },
      { unit: "Unit 2: Visualization", topics: ["Line/Bar/Pie", "Histogram"] },
      { unit: "Unit 3: DB & Connectivity", topics: ["Relational model", "SQL", "Python-DB"] },
    ],
    registerLink: "",
  },
};

export default function CBSESyllabus() {
  const { grade, subject } = useParams();
  const sCfg = CBSE_SYLLABUS[subject];
  const [modalOpen, setModalOpen] = useState(false);

  // scroll-lock body while modal open
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
          <Link to={`/cbse/class-${grade}`} className="primary-btn">← Back to Class {grade}</Link>
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
          <img src="/pictures/CBSE LOGO FINAL.png" alt="CBSE Logo" className="board-main-logo" />
          <h1 className="board-main-title">CBSE — Class {grade}</h1>
          <p className="board-main-subtitle">{sCfg.title}</p>
        </div>
      </section>

      {/* Syllabus */}
      <div className="board-content">
        <section className="board-section">
          <div className="table-header">
            <h2>Detailed Syllabus</h2>
            <Link to={`/cbse/class-${grade}`} className="explore-link">
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

          <div className="syllabus-actions">
            <button
              className="secondary-btn"
              onClick={() => setModalOpen(true)}
              disabled={!sCfg.registerLink}
              title={sCfg.registerLink ? "Register" : "Add registerLink in CBSE_SYLLABUS to enable"}
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
