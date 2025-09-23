// src/pages/CBSEClass.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

const CBSE_SUBJECTS = {
  9: [
    {
      slug: "computer-applications",
      title: "Computer Applications",
      img: "/pictures/programming.webp",
      summary: [
        "Basics of Information Technology",
        "Cyber-safety",
        "Office Tools"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScEoAUbR9nPl549lH0ScUVRiljDtnNlRfgxdxfLH3Rq61N_eg/viewform?embedded=true"
    },
    {
      slug: "ai",
      title: "Artificial Intelligence",
      img: "/pictures/ethics ai.png",
      summary: [
        "AI Reflection, Project Cycle & Ethics",
        "Data Literacy",
        "Math for AI",
        "Introduction to Generative AI",
        "Python Basics"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTrJ0ICsq37o341a5ZlXgS_EnU1qviido3T8q7yrvXJcxbeQ/viewform?embedded=true"
    }
  ],

  10: [
    {
      slug: "computer-applications",
      title: "Computer Applications",
      img: "/pictures/programming.webp",
      summary: [
        "Networking",
        "HTML",
        "Cyber Ethics"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScZ8KfVkeBPQgqmcKRk2Cy6DMgjTjIbX3RD48Bd2rW3MKE_kA/viewform?embedded=true"
    },
    {
      slug: "ai",
      title: "Artificial Intelligence",
      img: "/pictures/ethics ai.png",
      summary: [
        "Introduction to AI",
        "AI Project Cycle",
        "Advanced Python",
        "Data Science",
        "Computer Vision",
        "NLP Basics"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScwiDjkHxCTDfPM7a-ucGKZ2-Pb1GvG0ESH-trANyzHueMx6Q/viewform?embedded=tru"
    }
  ],

  11: [
    {
      slug: "computer-science",
      title: "Computer Science",
      img: "/pictures/computer system.jpeg",
      summary: [
        "Computer Systems & Organisation",
        "Computational Thinking & Programming – I",
        "Society, Law and Ethics"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScwNbfOzBHsRb7xNmaFYVqALucMAqYut6UzZDPNKSOm8Ochxw/viewform?embedded=true"
    },
    {
      slug: "informatics-practices",
      title: "Informatics Practices",
      img: "/pictures/programming.webp",
      summary: [
        "Introduction to Computer System",
        "Python Programming",
        "Database Concepts & SQL",
        "Emerging Trends"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScx9BWJ6eZSVkFvLDMC9bDVwkFRA2_f8aU4Zhp6gaZp2Z0pDw/viewform?embedded=true"
    },
    {
      slug: "ai",
      title: "Artificial Intelligence",
      img: "/pictures/ethics ai.png",
      summary: [
        "Artificial Intelligence for Everyone",
        "Unlocking Your Future in AI",
        "Python Programming",
        "Introduction to Capstone Project",
        "Data Literacy",
        "Machine Learning Algorithms",
        "Leveraging Linguistics & Computer Science",
        "AI Ethics and Values"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeqwJQBrEkDjT13duldZcldnc1iN3tWmehKlK6v9NV7jjSZ4g/viewform?embedded=true"
    }
  ],

  12: [
    {
      slug: "informatics-practices",
      title: "Informatics Practices",
      img: "/pictures/programming.webp",
      summary: [
        "Data Handling using Pandas – I",
        "Database Query using SQL",
        "Introduction to Computer Networks",
        "Societal Impacts"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVmeYbpLMWC1Hg67sf_uf_KXXxe45oA8g4nzd69vvjHoxTXg/viewform?embedded=true"
    },
    {
      slug: "ai",
      title: "Artificial Intelligence",
      img: "/pictures/ethics ai.png",
      summary: [
        "Capstone Project",
        "Model Lifecycle",
        "Storytelling Through Data",
        "Advanced AI Applications"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdzyOUf8aT_5DeM5NAr_Og2HCdyXpcEpGTEQE10rvFQlzuNvw/viewform?embedded=true"
    },
    {
      slug: "computer-science",
      title: "Computer Science",
      img: "/pictures/computer system.jpeg",
      summary: [
        "Computer Systems & Organisation",
        "Computational Thinking & Programming – II",
        "Data Structures & Algorithms",
        "Society, Law and Ethics"
      ],
      registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGQxYy8vTB4l0Byt5PYgn8Opkjdrc3dFjtkcytzyXccHR5tw/viewform?embedded=true"
    }
  ]
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
            src="/pictures/CBSE LOGO FINAL.png"
            alt="CBSE LOGO"
            className="board-main-logo cbse-logo"
          />
          <h1 className="board-main-title">CBSE — Class {grade}</h1>
          <p className="board-main-subtitle">Choose a subject</p>
        </div>
      </section>

      <div className="board-content">
        <section className="curriculum-section subject-panel">
          <div className="curriculum-header">
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

      {modalOpen && (
  <div className="custom-modal" id="registerModal">
    {/* Dark overlay */}
    <div
      className="modal-overlay"
      onClick={() => setModalOpen(false)}
    />

    {/* Modal content */}
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
            title={`${subjectForRegister} Registration`}
            style={{ width: "100%", height: "70vh", border: "none" }}
          >
            Loading…
          </iframe>
        ) : (
          <p style={{ padding: "1rem" }}>
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
