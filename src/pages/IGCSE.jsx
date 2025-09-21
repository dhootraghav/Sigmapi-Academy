import { useState, useRef } from "react";
import "../styles/boards.css";

const IGCSE_UNITS = [
  {
    unit: "Unit 1: Data Representation",
    topics: [
      "Binary systems",
      "Hexadecimal",
      "Data storage",
    ],
  },
  {
    unit: "Unit 2: Communication and Internet Technologies",
    topics: [
      "Data transmission",
      "Security aspects",
      "Internet principles of operation",
    ],
  },
  {
    unit: "Unit 3: Hardware and Software",
    topics: [
      "Logic gates",
      "Computer architecture and the fetch–execute cycle",
      "Input and Output devices",
      "Memory, storage devices and media",
      "Operating systems",
      "High- and low-level languages and their translators",
    ],
  },
  {
    unit: "Unit 4: Security",
    topics: [
      "Cybersecurity fundamentals, threats, prevention techniques",
    ],
  },
  {
    unit: "Unit 5: Ethics",
    topics: [
      "Ethical and social implications of computing technology",
    ],
  },
  {
    unit: "Unit 6: Algorithm Design & Problem Solving",
    topics: [
      "Problem-solving and design",
      "Pseudocode and flowcharts",
    ],
  },
  {
    unit: "Unit 7: Programming Concepts",
    topics: [
      "Variables and arithmetic operators",
      "Algorithm design",
      "Subroutines",
      "GUI applications",
      "Sequence and strings",
      "Selection and iteration",
      "System design and arrays",
      "Input validation and error checking",
      "Testing and debugging",
      "File handling and database use",
      "Programming scenario task preparation",
      "Examination practice",
    ],
  },
];

export default function IGCSE() {
  const [open, setOpen] = useState(false);
  const listRef = useRef(null);

  const toggleSyllabus = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen) {
      requestAnimationFrame(() => {
        listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <div className="board-page">
      {/* Hero */}
      <section className="board-hero">
          <h1 className="board-main-title">IGCSE</h1>
          <p className="board-main-subtitle">
            International General Certificate of Secondary Education
          </p>
      </section>

      <div className="board-content">
        {/* View Syllabus (inline expansion) */}
        <section className="board-section board-cta-row">
          <button
            className="syllabus-toggle primary-btn"
            onClick={toggleSyllabus}
            aria-expanded={open}
            aria-controls="igcse-syllabus-block"
          >
            View Syllabus
          </button>

          {open && (
            <div ref={listRef} id="igcse-syllabus-block" className="syllabus-inline">
              {IGCSE_UNITS.map(({ unit, topics }, idx) => (
                <details key={idx} className="syllabus-unit">
                  <summary>{unit}</summary>
                  <ul>
                    {topics.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          )}
        </section>

        {/* Why Choose IGCSE */}
        <section className="board-section">
          <h2>Why Choose Our IGCSE Program?</h2>

          <div className="board-features">
            <div className="board-feature">
              <h3>📘 Cambridge-Aligned Content</h3>
              <p>Module-wise coverage mapped to the latest IGCSE specifications and examiner expectations.</p>
            </div>
            <div className="board-feature">
              <h3>👩‍🏫 1:1 Live Classes</h3>
              <p>Focused sessions with structured feedback, homework plans, and doubt clearing.</p>
            </div>
            <div className="board-feature">
              <h3>📝 Past Paper Mastery</h3>
              <p>Topic-tagged practice with mark-scheme style solutions to sharpen exam technique.</p>
            </div>
            <div className="board-feature">
              <h3>🎯 Concept → Application</h3>
              <p>Real-world examples and extension problems to build reasoning and confidence.</p>
            </div>
            <div className="board-feature">
              <h3>📂 Notes & Recordings</h3>
              <p>Concise notes from every session and access to class recordings for revision.</p>
            </div>
            <div className="board-feature">
              <h3>🔁 Custom Study Plans</h3>
              <p>Adaptive plans for term tests, prelims, and the final IGCSE exam window.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
