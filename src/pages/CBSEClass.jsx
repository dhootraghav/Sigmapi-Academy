// src/pages/ICSESyllabus.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/** Placeholder syllabi per subject — edit freely */
const ICSE_SYLLABUS = {
  "computer-application": {
    title: "Computer Application",
    units: [
      { unit: "Unit 1: Introduction to OOP", topics: [
        "OOP principles (Abstraction, Encapsulation, Inheritance, Polymorphism)",
        "Procedure vs OOP",
        "Java program types (Applets/Applications)",
        "Compilation process: Source → Bytecode → JVM"
      ]},
      { unit: "Unit 2: Objects & Classes", topics: [
        "Modeling entities with objects",
        "Class as blueprint; attributes & methods",
        "Class as user-defined type"
      ]},
      { unit: "Unit 3: Values & Data Types", topics: [
        "Character set, ASCII, Unicode",
        "Tokens & Literals; Escape sequences",
        "Primitive vs Non-primitive types",
        "Type conversion: implicit & explicit"
      ]},
      { unit: "Unit 4: Operators", topics: [
        "Arithmetic, Relational, Logical, Assignment",
        "Unary/++/--, Ternary",
        "Precedence & Associativity"
      ]},
      { unit: "Unit 5: Input in Java", topics: [
        "Scanner class (nextInt, nextDouble, nextLine)",
        "Syntax/runtime/logical errors",
        "Comments & formatting"
      ]},
    ],
    registerLink: "", // add your Google Form /viewform link
  },

  "ai-robotics": {
    title: "AI & Robotics",
    units: [
      { unit: "Unit 1: Intro to Robotics", topics: [
        "Definition, characteristics, benefits",
        "Evolution; Laws of Robotics",
        "Classification & Applications"
      ]},
      { unit: "Unit 2: Robot as a System", topics: [
        "Mechanical, Electronic, Computational blocks",
        "Sensors & Actuators (overview)"
      ]},
      { unit: "Unit 3: Intro to AI", topics: [
        "History & milestones",
        "Turing test; Applications",
        "Ethics & societal impact"
      ]},
      { unit: "Unit 4: Python Basics", topics: [
        "Data types, variables, operators",
        "Control flow & functions (intro)",
        "Simple problem solving"
      ]},
    ],
    registerLink: "", // add your Google Form /viewform link
  },
};

export default function ICSESyllabus() {
  const { grade, subject } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const sCfg = ICSE_SYLLABUS[subject];

  // Scroll-lock body while modal is open
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
          <Link to={`/icse/class-${grade}`} className="primary-btn">
            ← Back to Class {grade}
          </Link>
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
          <img src="/pictures/isc.png" alt="ICSE Logo" className="board-main-logo icse-logo" />
          <h1 className="board-main-title">ICSE — Class {grade}</h1>
          <p className="board-main-subtitle">{sCfg.title}</p>
        </div>
      </section>

      {/* Syllabus table */}
      <div className="board-content">
        <section className="board-section">
          <div className="table-header">
            <h2>Detailed Syllabus</h2>
            <Link to={`/icse/class-${grade}`} className="explore-link">
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
                      <ul>
                        {(topics || []).map((t, j) => <li key={j}>{t}</li>)}
                      </ul>
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
              title={sCfg.registerLink ? "Register" : "Add registerLink in ICSE_SYLLABUS to enable"}
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
