// src/pages/CBSEClass.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

const CBSE_SUBJECTS = {
  11: [
    {
      slug: "computer-science",
      title: "Computer Science",
      img: "/pictures/computer system.jpeg",
      summary: [
        "Logic Gates & Boolean Algebra",
        "Python Programming",
        "Functions & Recursion",
        "Data Structures – Stack, Queue",
        "File Handling",
        "Database Management System",
      ],
      registerLink: "", // add Google Form link
    },
    {
      slug: "informatics-practices",
      title: "Informatics Practices",
      img: "/pictures/programming.webp",
      summary: [
        "Python Basics",
        "NumPy, Pandas, Matplotlib",
        "Database Concepts",
        "SQL Queries",
        "Data Handling & Visualization",
        "Societal Impacts of IT",
      ],
      registerLink: "",
    },
    {
      slug: "ai",
      title: "Artificial Intelligence",
      img: "/pictures/ethics ai.png",
      summary: [
        "Introduction to AI",
        "Machine Learning Basics",
        "AI Applications",
        "Data Science Concepts",
        "Ethics in AI",
        "Case Studies",
      ],
      registerLink: "",
    },
    {
      slug: "cyber-security",
      title: "Cyber Security",
      img: "/pictures/cybersecurity.jpg",
      summary: [
        "Fundamentals of Cyber Security",
        "Digital Footprints",
        "Cyber Crimes & Safety",
        "Data Privacy & Protection",
        "Malware & Prevention",
        "Cyber Laws",
      ],
      registerLink: "",
    },
  ],
  12: [
    {
      slug: "computer-science",
      title: "Computer Science",
      img: "/pictures/computer system.jpeg",
      summary: [
        "Python Advanced Programming",
        "OOP Concepts",
        "Stacks, Queues, Linked Lists",
        "Database Management",
        "SQL Advanced Queries",
        "Networking Basics",
      ],
      registerLink: "",
    },
    {
      slug: "informatics-practices",
      title: "Informatics Practices",
      img: "/pictures/programming.webp",
      summary: [
        "Data Handling using Pandas",
        "Data Visualization",
        "MySQL Database",
        "Connecting Python with SQL",
        "Cyber Ethics",
        "IT Applications",
      ],
      registerLink: "",
    },
    {
      slug: "ai",
      title: "Artificial Intelligence",
      img: "/pictures/ethics ai.png",
      summary: [
        "ML Models – Regression, Classification",
        "Neural Networks",
        "NLP Basics",
        "AI in Real Life",
        "Data Processing & Modeling",
        "Ethics & Bias in AI",
      ],
      registerLink: "",
    },
    {
      slug: "cyber-security",
      title: "Cyber Security",
      img: "/pictures/cybersecurity.jpg",
      summary: [
        "Advanced Cyber Threats",
        "Network Security",
        "Cryptography Basics",
        "Cyber Forensics",
        "Cyber Laws & IT Act",
        "Case Studies",
      ],
      registerLink: "",
    },
  ],
};

export default function CBSEClass() {
  const { grade } = useParams(); // "11" | "12"
  const [modalOpen, setModalOpen] = useState(false);
  const [subjectForRegister, setSubjectForRegister] = useState(null);

  const subjects = CBSE_SUBJECTS[grade] || [];

  // scroll-lock when modal open
  useEffect(() => {
    const body = document.body;
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
        body.style.cssText = "";
        body.removeAttribute("data-scroll-y");
        window.scrollTo(0, y);
      }
    }
    return () => {
      const stored = document.body.getAttribute("data-scroll-y");
      if (stored) {
        const y = parseInt(stored, 10) || 0;
        document.body.style.cssText = "";
        document.body.removeAttribute("data-scroll-y");
        window.scrollTo(0, y);
      }
    };
  }, [modalOpen]);

  const currentRegisterLink = subjectForRegister
    ? subjects.find((s) => s.slug === subjectForRegister)?.registerLink || ""
    : "";
  const iframeSrc =
    currentRegisterLink && !currentRegisterLink.includes("embedded=true")
      ? `${currentRegisterLink}?embedded=true`
      : currentRegisterLink || "";

  return (
    <div className="board-page">
      {/* Hero */}
      <section className="board-hero">
        <div className="board-logo-container">
          <img
            src="/pictures/cbse.png"
            alt="CBSE Logo"
            className="board-main-logo cbse-logo"
          />
          <h1 className="board-main-title">CBSE — Class {grade}</h1>
          <p className="board-main-subtitle">Choose a subject</p>
        </div>
      </section>

      <div className="board-content">
        <section className="curriculum-section subject-panel">
          <div className="curriculum-header">
            <h2>Subjects</h2>
            <Link to="/cbse" className="explore-link">
              ← Back to CBSE overview
            </Link>
          </div>

          {!subjects.length ? (
            <div className="empty-note">
              Subjects for Class {grade} will be added soon.
            </div>
          ) : (
            <div className="curriculum-grid one-per-row">
              {subjects.map((s) => (
                <div key={s.slug} className="curriculum-card subject-card">
                  {s.img && <img src={s.img} alt={s.title} />}

                  {/* Title */}
                  <div className="curriculum-card-title">{s.title}</div>

                  {/* Summary */}
                  {s.summary?.length ? (
                    <div className="subject-highlights">
                      {s.summary.map((item, i) => (
                        <div key={i} className="subject-highlight">
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Actions */}
                  <div className="card-actions">
                    <Link
                      to={`/cbse/class/${grade}/${s.slug}`}
                      className="primary-btn"
                    >
                      View detailed syllabus
                    </Link>

                    <button
                      className="secondary-btn"
                      onClick={() => {
                        setSubjectForRegister(s.slug);
                        setModalOpen(true);
                      }}
                      disabled={!s.registerLink}
                      title={
                        s.registerLink ? "Register" : "Add registerLink to enable"
                      }
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Register modal */}
      {modalOpen && (
        <div className="custom-modal" id="registerModal" style={{ display: "block" }}>
          <div className="modal-overlay" onClick={() => setModalOpen(false)} />
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <img
                src="/pictures/SigmaPi Logo.png"
                width="30"
                height="30"
                alt="Logo"
              />
              <span className="close-button" onClick={() => setModalOpen(false)}>
                ×
              </span>
            </div>
            <div className="modal-body">
              {iframeSrc ? (
                <iframe
                  style={{ width: "100%", height: "70vh", border: "none" }}
                  src={iframeSrc}
                  title={`${subjectForRegister} Registration`}
                />
              ) : (
                <p style={{ padding: "0.75rem 0" }}>
                  Registration link not configured for this subject.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
