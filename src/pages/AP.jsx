import { useState, useRef } from "react";
import "../styles/boards.css";

const AP_CSA_UNITS = [
  {
    unit: "Unit 1: Primitive Types",
    topics: [
      "Primitive data types: int, double, boolean",
      "Arithmetic expression evaluation",
      "Assignment operators and value production",
      "Combining variables and operators for result formation",
      "**In the exam:** 2.5% – 5%",
    ],
  },
  {
    unit: "Unit 2: Using Objects",
    topics: [
      "Objects and classes: instances, attributes, behaviors",
      "Object creation via constructors",
      "Use of class libraries: Integer, Double",
      "Methods (static, Math class, void with/without parameters)",
      "String objects and methods",
      "API and library usage",
      "**In the exam:** 5% – 7.5%",
    ],
  },
  {
    unit: "Unit 3: Boolean Expressions and if Statements",
    topics: [
      "Boolean expressions with relational operators",
      "Conditional statements: if, if-else, multiple outcomes",
      "Equivalent Boolean expressions",
      "Object references and aliasing",
      "**In the exam:** 15% – 17.5%",
    ],
  },
  {
    unit: "Unit 4: Iteration",
    topics: [
      "Loop creation with conditions",
      "Arithmetic/String algorithms",
      "Iteration using for and while loops",
      "Nested loops and iterative process representation",
      "**In the exam:** 17.5% – 22.5%",
    ],
  },
  {
    unit: "Unit 5: Writing Classes",
    topics: [
      "Class structure: public/private attributes",
      "Constructors for attribute setup",
      "Use of comments for code documentation",
      "Object behaviors with static, void, and non-void methods",
      "Variable scope",
      "Modularization using methods",
      "Programming ethics and intellectual property",
      "**In the exam:** 5% – 7.5%",
    ],
  },
  {
    unit: "Unit 6: Array",
    topics: [
      "Representing data using arrays",
      "Array traversal with loops",
      "Algorithms using array traversals",
      "**In the exam:** 10% – 15%",
    ],
  },
  {
    unit: "Unit 7: ArrayList",
    topics: [
      "ArrayList representation of object references",
      "ArrayList traversal and iteration",
      "Searching and sorting with standard algorithms",
      "Ethical concerns with data privacy",
      "**In the exam:** 2.5% – 7.5%",
    ],
  },
  {
    unit: "Unit 8: 2D Array",
    topics: [
      "2D array structures and usage",
      "Nested iteration to access 2D array elements",
      "**In the exam:** 7.5% – 10%",
    ],
  },
  {
    unit: "Unit 9: Inheritance",
    topics: [
      "Superclasses and subclass relationships",
      "Overriding and defining methods",
      "Polymorphism through subclass–superclass association",
      "**In the exam:** 5% – 10%",
    ],
  },
  {
    unit: "Unit 10: Recursion",
    topics: [
      "Recursive method execution",
      "Sorting/searching: binary search, merge sort",
      "**In the exam:** 5% – 7.5%",
    ],
  },
];

export default function AP() {
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
        <h1 className="board-main-title">AP</h1>
        <p className="board-main-subtitle">Advanced Placement — Computer Science A</p>
      </section>

      <div className="board-content">
        {/* View Syllabus (inline expansion, above Why Choose) */}
        <section className="board-section board-cta-row">
          <button
            className="syllabus-toggle primary-btn"
            onClick={toggleSyllabus}
            aria-expanded={open}
            aria-controls="ap-syllabus-block"
          >
            View Syllabus
          </button>

          {open && (
            <div ref={listRef} id="ap-syllabus-block" className="syllabus-inline">
              {AP_CSA_UNITS.map(({ unit, topics }, idx) => (
                <details key={idx} className="syllabus-unit">
                  <summary>{unit}</summary>
                  <ul>
                    {topics.map((t, i) => (
                      <li key={i}>
                        {t.startsWith("**In the exam:**") ? (
                          <strong>{t.replace("**", "").replace("**", "")}</strong>
                        ) : (
                          t
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          )}
        </section>

        {/* Why Choose AP */}
        <section className="board-section">
          <h2>Why Choose Our AP Program?</h2>

          <div className="board-features">
            <div className="board-feature">
              <h3>🎯 Exam-First Design</h3>
              <p>Each lesson maps to the AP Course and Exam Description with targeted MCQ/FRQ practice.</p>
            </div>
            <div className="board-feature">
              <h3>👩‍🏫 1:1 Mentoring</h3>
              <p>Personalized study plans, weekly feedback, and checkpoints for steady score gains.</p>
            </div>
            <div className="board-feature">
              <h3>🧠 Concept → Code</h3>
              <p>From algorithm intuition to clean Java implementations, with debugging patterns.</p>
            </div>
            <div className="board-feature">
              <h3>📚 Notes & Recordings</h3>
              <p>Structured notes, annotated solutions, and class recordings for efficient revision.</p>
            </div>
            <div className="board-feature">
              <h3>📈 Timed Mocks</h3>
              <p>Full-length simulations with examiner-style feedback and a clear improvement plan.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
