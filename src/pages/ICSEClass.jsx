import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/* 🔧 Placeholder subjects per class — tweak freely */
const ICSE_SUBJECTS = {
  9: [
    {
      slug: "computer-application",
      title: "Computer Application",
      img: "/pictures/icons/java.png",
      highlights: [
        { img: "/pictures/icons/bullet-check.svg", text: "OOP & Java basics" },
        { img: "/pictures/icons/bullet-check.svg", text: "Operators & Input" },
        { img: "/pictures/icons/bullet-check.svg", text: "Conditionals & Loops" },
      ],
      registerLink: "", // /viewform (optional)
    },
    {
      slug: "ai-robotics",
      title: "AI & Robotics",
      img: "/pictures/icons/robotics.png",
      highlights: [
        { img: "/pictures/icons/bullet-check.svg", text: "Robotics foundations" },
        { img: "/pictures/icons/bullet-check.svg", text: "Python basics" },
        { img: "/pictures/icons/bullet-check.svg", text: "AI project cycle" },
      ],
      registerLink: "",
    },
  ],
  10: [
    {
      slug: "computer-application",
      title: "Computer Applications",
      img: "/pictures/icons/java.png",
      highlights: [
        { img: "/pictures/icons/bullet-check.svg", text: "Docs & Spreadsheets" },
        { img: "/pictures/icons/bullet-check.svg", text: "Web basics" },
        { img: "/pictures/icons/bullet-check.svg", text: "Cyber ethics" },
      ],
      registerLink: "",
    },
    {
      slug: "ai",
      title: "Artificial Intelligence (Skill)",
      img: "/pictures/icons/robotics.png",
      highlights: [
        { img: "/pictures/icons/bullet-check.svg", text: "AI concepts" },
        { img: "/pictures/icons/bullet-check.svg", text: "Data handling" },
        { img: "/pictures/icons/bullet-check.svg", text: "Model building" },
      ],
      registerLink: "",
    },
  ],
  11: [
    {
      slug: "computer-science",
      title: "Computer Science (Python)",
      img: "/pictures/icons/java.png",
      highlights: [
        { img: "/pictures/icons/bullet-check.svg", text: "Python basics" },
        { img: "/pictures/icons/bullet-check.svg", text: "Control & functions" },
        { img: "/pictures/icons/bullet-check.svg", text: "File handling" },
      ],
      registerLink: "",
    },
  ],
  12: [
    {
      slug: "computer-science",
      title: "Computer Science (Python)",
      img: "/pictures/icons/java.png",
      highlights: [
        { img: "/pictures/icons/bullet-check.svg", text: "OOP in Python" },
        { img: "/pictures/icons/bullet-check.svg", text: "Recursion & DSA" },
        { img: "/pictures/icons/bullet-check.svg", text: "SQL & Networks" },
      ],
      registerLink: "",
    },
  ],
};

export default function ICSEClass() {
  const { grade } = useParams(); // "9" | "10" | "11" | "12"
  const [modalOpen, setModalOpen] = useState(false);
  const [subjectForRegister, setSubjectForRegister] = useState(null);

  const subjects = ICSE_SUBJECTS[grade] || [];

  // lock scroll when modal open
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
      <section className="board-hero">
        <div className="board-logo-container">
          <img src="/pictures/isc.png" alt="ICSE Logo" className="board-main-logo icse-logo" />
          <h1 className="board-main-title">ICSE — Class {grade}</h1>
          <p className="board-main-subtitle">Choose a subject</p>
        </div>
      </section>

      <div className="board-content">
        <section className="curriculum-section subject-panel">
          <div className="curriculum-header">
            <h2>Subjects</h2>
            <Link to="/icse" className="explore-link">← Back to ICSE overview</Link>
          </div>

          {/* one-per-row grid */}
          <div className="curriculum-grid one-per-row">
            {subjects.map((s) => (
              <div key={s.slug} className="curriculum-card subject-card">
                {s.img && <img src={s.img} alt={s.title} />}
                <div className="curriculum-card-title">{s.title}</div>

                {s.highlights?.length ? (
                  <div className="highlights-row">
                    {s.highlights.map((h, i) => (
                      <div className="highlight-item" key={i}>
                        {h.img && <img src={h.img} alt="" aria-hidden="true" />}
                        <span>{h.text}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="card-actions right">
                  <Link to={`/icse/class/${grade}/${s.slug}`} className="primary-btn">
                    View detailed syllabus
                  </Link>
                  <button
                    className="secondary-btn"
                    onClick={() => { setSubjectForRegister(s.slug); setModalOpen(true); }}
                    disabled={!s.registerLink}
                    title={s.registerLink ? "Register" : "Add registerLink to enable"}
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* register modal */}
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
                <iframe style={{ width: "100%", height: "70vh", border: "none" }} src={iframeSrc} title={`${subjectForRegister} Registration`} />
              ) : (
                <p style={{ padding: "0.75rem 0" }}>Registration link not configured for this subject.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
