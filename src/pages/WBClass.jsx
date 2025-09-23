// src/pages/WBClass.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/** 🔧 Edit these placeholders later (titles, bullets, register links) */
const WB_SUBJECTS = {
  11: [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    img: "/pictures/AI-SEO.png",
    summary: ["Computer Fundamental","Python Programming","Linear Algebra","AI search", "Knowledge representation", "Chatbots & uncertainty"],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdi_65IbXCWaMPM064LFaGC_ml_EOYMLihTuuxeQ9HwnCtH5A/viewform",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    img: "/pictures/cybersecurity.jpeg",
    highlights: [
      "Computer Networks",
      "Cryptography I",
      "Internet Security"
    ],
    summary: ["Computer Systems","Computer Networks","Cybersecurity","Network Security", "Cryptography - Part I", "Internet Security"],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeuJF3oo6qHR8uOqVNYc2fff49m-AkrwdUk7ZDS9sGcJg53CQ/viewform",
  },
  {
    slug: "computer-application",
    title: "Computer Application",
    img: "/pictures/programming.webp",
    summary: [
  "Computer System and Organisation",
  "Programming Fundamentals",
  "Data Visualization using Spreadsheet",
  "Data Structure",
  "Computer Networks",
  "Ethics"
],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScVBpcpp2FDUPqrSFAx7wX187qO0bhn3DlmKeBnn6HafUkJMA/viewform",
  },
  {
    slug: "computer-science",
    title: "Computer Science",
    img: "/pictures/computer system.jpeg",
    summary: [
  "Computer System and Organisation",
  "Programming Fundamentals",
  "Introduction to C",
  "Data Structures",
  "Computer Networks",
  "Ethics"
],

    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScCcj3wErkqPok0Ji1u3-AlFiViSeKoSJWhUu49BeDDRykNyw/viewform",
  },
  {
    slug: "data-science",
    title: "Data Science",
    img: "/pictures/data visualization.jpeg",
    summary: [
  "Computer Fundamental",
  "Python Programming",
  "History of AI and Introduction to Linear Algebra",
  "History of data science and statistics",
  "Data Visualization",
  "Database Management",
  "Basics of Business Theory"
],

    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScqSeh34U-WU8HM3dDXte3AhqQMB66QZ_BNyIQMvkwXdQWq_g/viewform",
  },
],

  12: [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    img: "/pictures/AI-SEO.png",
    summary: [
  "Foundation of Statistics for Machine Learning",
  "Introduction to Machine Learning",
  "Supervised Learning",
  "Unsupervised Learning",
  "Artificial Neural Network",
  "Ethics in AI"
],

    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeNpKBAaHQ8nUXFcgAldu9FEh5X56J1LVMIVGEpPFvcqY4sDg/viewform",
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    img: "/pictures/cybersecurity.jpeg",
    summary: [
  "Web Security",
  "Malicious Software",
  "Mobile Device Security",
  "Cryptography - Part II",
  "Ethical Hacking",
  "Ethical & Legal Considerations",
  "Emerging Trends"
],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSenxmd-E68gTbuvEG1OroyQa5ttW4y8AMJHq7Ix4k1r6ACkQQ/viewform",
  },
  {
    slug: "computer-application",
    title: "Computer Application",
    img: "/pictures/programming.webp",
    summary: [
  "Python Programming",
  "E-Commerce",
  "Database Management System",
  "Data Warehousing and Data Mining",
  "Foundation of Artificial Intelligence (AI)"
],

    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe1H82bwjL0b1rQGNbLLRrCJxQ9BrtsYzrTTZxi2-pkdTSoPw/viewform",
  },
  {
    slug: "computer-science",
    title: "Computer Science",
    img: "/pictures/computer system.jpeg",
    summary: [
  "Python Programming",
  "E-Commerce",
  "Database Management System",
  "Foundation of Artificial Intelligence (AI)"
],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSebtWt4J6F5_NRz6J0-IaD2irs2D9j2_nkxwL-OfQEA9J8G5Q/viewform",
  },
  {
    slug: "data-science",
    title: "Data Science",
    img: "/pictures/data visualization.jpeg",
    summary: [
    "Foundation of statistics for machine learning",
    "Introduction to machine learning",
    "Supervised learning",
    "Decision tree learning and Unsupervised learning",
    "Data visualization technique",
    "Artificial neural network",
    "Case studies in data science"
  ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc5OMtbVKAuXfvTtM1cEKbVZMry_RSbN0ndBHdWcC0hUS7XbQ/viewform",
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
                        {s.summary.slice(0, 7).map((item, i) => (
                        <div key={i} className="subject-highlight">
                            <span>{item}</span>
                        </div>
                        ))}
                    </div>
                    ) : null}

                  <div className="card-actions">
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

      {/* Register Modal */}
{modalOpen && (
  <div className="custom-modal" id="registerModal">
    {/* Overlay */}
    <div
      className="modal-overlay"
      onClick={() => setModalOpen(false)}
    />

    {/* Content */}
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-header">
        <img
          src="/pictures/SigmaPi Logo.png"
          width="30"
          height="30"
          alt="Logo"
        />
        <span
          className="close-button"
          onClick={() => setModalOpen(false)}
        >
          &times;
        </span>
      </div>

      <div className="modal-body">
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title={`${subjectForRegister || "Subject"} Registration`}
            style={{
              width: "100%",
              height: "70vh",
              border: "none",
              display: "block",
              margin: "0 auto",
            }}
          >
            Loading…
          </iframe>
        ) : (
          <p style={{ padding: "1rem", textAlign: "center" }}>
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
