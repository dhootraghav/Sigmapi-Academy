// src/pages/CBSESyllabus.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/** Placeholder syllabi per subject — edit freely */
const CBSE_SYLLABUS = {
  // ---------------- CLASS 11 ----------------
  "11-computer-science": {
    title: "Computer Science",
    units: [
      { unit: "Unit 1: Number Systems & Logic", topics: [
        "Binary, Octal, Decimal, Hexadecimal",
        "1’s & 2’s complement arithmetic",
        "Boolean algebra, Logic Gates"
      ]},
      { unit: "Unit 2: Python Programming", topics: [
        "Data types, Variables, Operators",
        "Control Structures (if, loops)",
        "Functions & Recursion",
        "String and List operations"
      ]},
      { unit: "Unit 3: Data Structures", topics: [
        "Stacks and Queues",
        "Implementation using Python"
      ]},
      { unit: "Unit 4: File Handling", topics: [
        "Text and Binary files",
        "Reading, Writing, Updating"
      ]},
      { unit: "Unit 5: DBMS", topics: [
        "Relational databases",
        "SQL basics: SELECT, INSERT, UPDATE, DELETE"
      ]},
    ],
    registerLink: "",
  },

  "11-informatics-practices": {
    title: "Informatics Practices",
    units: [
      { unit: "Unit 1: Python Basics", topics: [
        "Variables, Data types, Operators",
        "Conditional statements, Loops"
      ]},
      { unit: "Unit 2: Data Handling", topics: [
        "NumPy arrays",
        "Pandas series and dataframes"
      ]},
      { unit: "Unit 3: Data Visualization", topics: [
        "Matplotlib charts: line, bar, histogram, scatter"
      ]},
      { unit: "Unit 4: Database Concepts", topics: [
        "RDBMS concepts",
        "Basic SQL queries"
      ]},
      { unit: "Unit 5: IT Applications", topics: [
        "Data security and privacy",
        "Social impacts of IT"
      ]},
    ],
    registerLink: "",
  },

  "11-ai": {
    title: "Artificial Intelligence",
    units: [
      { unit: "Unit 1: Introduction to AI", topics: [
        "Definition and scope",
        "AI vs Human Intelligence",
        "Applications of AI"
      ]},
      { unit: "Unit 2: Machine Learning Basics", topics: [
        "Supervised vs Unsupervised",
        "Simple Regression",
        "Classification overview"
      ]},
      { unit: "Unit 3: Data Science Concepts", topics: [
        "Data collection and processing",
        "Data visualization basics"
      ]},
      { unit: "Unit 4: Ethics in AI", topics: [
        "Bias and fairness",
        "Accountability and transparency"
      ]},
    ],
    registerLink: "",
  },

  "11-cyber-security": {
    title: "Cyber Security",
    units: [
      { unit: "Unit 1: Fundamentals", topics: [
        "Need for security",
        "Digital footprints",
        "Types of threats"
      ]},
      { unit: "Unit 2: Cyber Crimes", topics: [
        "Phishing, Hacking, Malware",
        "Ransomware, Cyber bullying"
      ]},
      { unit: "Unit 3: Safety Measures", topics: [
        "Identity protection",
        "Safe browsing habits"
      ]},
      { unit: "Unit 4: Laws & Ethics", topics: [
        "IT Act",
        "Cyber laws in India"
      ]},
    ],
    registerLink: "",
  },

  // ---------------- CLASS 12 ----------------
  "12-computer-science": {
    title: "Computer Science",
    units: [
      { unit: "Unit 1: Python Advanced", topics: [
        "OOP in Python",
        "Inheritance, Polymorphism"
      ]},
      { unit: "Unit 2: Data Structures", topics: [
        "Stacks, Queues, Linked Lists",
        "Implementation in Python"
      ]},
      { unit: "Unit 3: SQL", topics: [
        "Advanced queries",
        "Joins, Group by, Aggregate functions"
      ]},
      { unit: "Unit 4: Networking", topics: [
        "Basics of computer networks",
        "Protocols and topologies"
      ]},
    ],
    registerLink: "",
  },

  "12-informatics-practices": {
    title: "Informatics Practices",
    units: [
      { unit: "Unit 1: Data Handling", topics: [
        "Pandas advanced",
        "Merging and grouping"
      ]},
      { unit: "Unit 2: Data Visualization", topics: [
        "Line, bar, histogram, scatter, pie"
      ]},
      { unit: "Unit 3: Database Management", topics: [
        "SQL joins",
        "Constraints and keys"
      ]},
      { unit: "Unit 4: IT Applications", topics: [
        "Data security, cyber ethics",
        "Case studies"
      ]},
    ],
    registerLink: "",
  },

  "12-ai": {
    title: "Artificial Intelligence",
    units: [
      { unit: "Unit 1: ML Models", topics: [
        "Regression and Classification",
        "Model training and evaluation"
      ]},
      { unit: "Unit 2: Neural Networks", topics: [
        "Perceptron and Multi-layer NN",
        "Activation functions"
      ]},
      { unit: "Unit 3: NLP", topics: [
        "Text preprocessing",
        "Tokenization, Classification"
      ]},
      { unit: "Unit 4: Ethics in AI", topics: [
        "Bias, fairness, employment impact"
      ]},
    ],
    registerLink: "",
  },

  "12-cyber-security": {
    title: "Cyber Security",
    units: [
      { unit: "Unit 1: Threats", topics: [
        "Advanced cyber threats",
        "Phishing, Trojans, Worms"
      ]},
      { unit: "Unit 2: Cryptography", topics: [
        "Symmetric vs Asymmetric encryption",
        "Hashing basics"
      ]},
      { unit: "Unit 3: Forensics", topics: [
        "Cyber forensics basics",
        "Tracking digital evidence"
      ]},
      { unit: "Unit 4: Cyber Laws", topics: [
        "IT Act 2000",
        "Recent amendments"
      ]},
    ],
    registerLink: "",
  },
};

export default function CBSESyllabus() {
  const { grade, subject } = useParams();
  const key = `${grade}-${subject}`; // matches "11-computer-science"
  const sCfg = CBSE_SYLLABUS[key];

  const [modalOpen, setModalOpen] = useState(false);

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
          <Link to={`/cbse/class-${grade}`} className="primary-btn">
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
          <img src="/pictures/cbse.png" alt="CBSE Logo" className="board-main-logo cbse-logo" />
          <h1 className="board-main-title">CBSE — Class {grade}</h1>
          <p className="board-main-subtitle">{sCfg.title}</p>
        </div>
      </section>

      {/* Syllabus table */}
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
