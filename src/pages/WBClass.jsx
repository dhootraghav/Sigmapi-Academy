// src/pages/WBClass.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/** 🔧 Edit these placeholders later (titles, bullets, register links) */
const WB_SUBJECTS = {
  11: [
    {
      slug: "computer-science",
      title: "Computer Science",
      img: "/pictures/icons/java.png",
      summary: ["Programming basics", "Data structures intro", "OOP concepts"],
      registerLink: "",
    },
    {
      slug: "ai-robotics",
      title: "AI & Robotics",
      img: "/pictures/icons/robotics.png",
      summary: ["Robotics foundations", "Python fundamentals", "AI project cycle"],
      registerLink: "",
    },
    {
      slug: "java-programming",
      title: "Programming with Java",
      img: "/pictures/icons/java.png",
      summary: ["Syntax & OOP", "Collections", "Exceptions"],
      registerLink: "",
    },
    {
      slug: "data-structures",
      title: "Data Structures",
      img: "/pictures/icons/java.png",
      summary: ["Arrays/Lists", "Stacks/Queues", "Sorting/Searching"],
      registerLink: "",
    },
    {
      slug: "web-development",
      title: "Web Development",
      img: "/pictures/icons/java.png",
      summary: ["HTML/CSS", "JavaScript basics", "Mini projects"],
      registerLink: "",
    },
  ],
  12: [
    {
      slug: "computer-science",
      title: "Computer Science (Advanced)",
      img: "/pictures/icons/java.png",
      summary: ["OOP deep dive", "Recursion & files", "SQL basics"],
      registerLink: "",
    },
    {
      slug: "ai-robotics",
      title: "AI & Robotics (Advanced)",
      img: "/pictures/icons/robotics.png",
      summary: ["Model basics", "Project lifecycle", "Ethics"],
      registerLink: "",
    },
    {
      slug: "java-programming",
      title: "Programming with Java (Advanced)",
      img: "/pictures/icons/java.png",
      summary: ["Interfaces/Inheritance", "Collections/Streams", "GUI"],
      registerLink: "",
    },
    {
      slug: "data-structures",
      title: "Data Structures & Algorithms",
      img: "/pictures/icons/java.png",
      summary: ["Trees/Graphs (intro)", "Greedy/DP (concepts)", "Complexity"],
      registerLink: "",
    },
    {
      slug: "web-development",
      title: "Web Development (Projects)",
      img: "/pictures/icons/java.png",
      summary: ["Forms/APIs", "Deploy basics", "Capstone site"],
      registerLink: "",
    },
  ],
};

export default function WBClass() {
  const { grade } = useParams(); // "11" | "12"
  const [modalOpen, setModalOpen] = useState(false);
  const [subjectForRegister, setSubjectForRegister] = useState(null);

  const subjects = WB_SUBJECTS[grade] || [];

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
            src="/pictures/wb logo final.jpg"
            alt="WB Board Logo"
            className="board-main-logo"
          />
          <h1 className="board-main-title">WB — Class {grade}</h1>
          <p className="board-main-subtitle">
            West Bengal Council of Higher Secondary Education
          </p>
        </div>
      </section>

      <div className="board-content">
        <section className="curriculum-section subject-panel">
          <div className="curriculum-header">
            <h2>Subjects</h2>
            <Link to="/wb" className="explore-link">← Back to WB overview</Link>
          </div>

          {!subjects.length ? (
            <div className="empty-note">
              Subjects for Class {grade} will be added soon.
            </div>
          ) : (
            <div className="curriculum-grid one-per-row">
              {subjects.map((s) => (
                <div key={s.slug} className="curriculum-card subject-card">
                  {s.img ? <img src={s.img} alt={s.title} /> : null}
                  <div className="curriculum-card-title">{s.title}</div>

                  {(s.summary && s.summary.length) ? (
                    <div className="subject-highlights">
                        {s.summary.slice(0, 3).map((item, i) => (
                        <div key={i} className="subject-highlight">
                            {s.img ? (
                            <img src={s.img} alt="" className="mini-icon" aria-hidden />
                            ) : (
                            <span className="mini-emoji" aria-hidden>📘</span>
                            )}
                            <span>{item}</span>
                        </div>
                        ))}
                    </div>
                    ) : null}

                  <div className="card-actions">
                    {/* relative link: resolves to /wb/class-<grade>/<slug> */}
                    <Link to={`/wb/class/${grade}/${s.slug}`} className="primary-btn">
                        View detailed syllabus
                    </Link>

                    <button
                      className="secondary-btn"
                      onClick={() => {
                        setSubjectForRegister(s.slug);
                        setModalOpen(true);
                      }}
                      disabled={!s.registerLink}
                      title={s.registerLink ? "Register" : "Add registerLink in WB_SUBJECTS to enable"}
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
              <img src="/pictures/SigmaPi Logo.png" width="30" height="30" alt="Logo" />
              <span className="close-button" onClick={() => setModalOpen(false)}>×</span>
            </div>
            <div className="modal-body">
              {iframeSrc ? (
                <iframe
                  style={{ width: "100%", height: "70vh", border: "none" }}
                  src={iframeSrc}
                  title={`${subjectForRegister || "subject"} Registration`}
                >
                  Loading…
                </iframe>
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
