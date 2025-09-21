// src/pages/college/ProgramPage.jsx
import { useEffect, useRef, useState } from "react";
import "../../styles/boards.css";

export default function ProgramPage({
  title,
  subtitle,
  heroImage,
  syllabusUnits = [],
  whyFeatures = [],
  buttonLabel = "View Syllabus",
  registerLink,                // ← pass the course-specific Google Form URL (no need to include ?embedded=true)
}) {
  const [open, setOpen] = useState(false);       // syllabus
  const [modalOpen, setModalOpen] = useState(false); // register modal
  const listRef = useRef(null);

  // replicate your Home scroll-lock behavior
  useEffect(() => {
    const body = document?.body;
    if (!body) return;

    if (modalOpen) {
      const scrollY = window.scrollY || window.pageYOffset;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.overflow = "hidden";
      body.setAttribute("data-scroll-y", String(scrollY));
    } else {
      const stored = body.getAttribute("data-scroll-y");
      if (stored) {
        const scrollY = parseInt(stored, 10) || 0;
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.overflow = "";
        body.removeAttribute("data-scroll-y");
        window.scrollTo(0, scrollY);
      }
    }

    return () => {
      // cleanup if unmounted while open
      const stored = body.getAttribute("data-scroll-y");
      if (stored) {
        const scrollY = parseInt(stored, 10) || 0;
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.overflow = "";
        body.removeAttribute("data-scroll-y");
        window.scrollTo(0, scrollY);
      }
    };
  }, [modalOpen]);

  const toggleSyllabus = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen) {
      requestAnimationFrame(() => {
        listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  // ensure ?embedded=true on the iframe
  const iframeSrc = registerLink
    ? (registerLink.includes("embedded=true") ? registerLink : `${registerLink}?embedded=true`)
    : "";

  return (
    <div className="board-page">
      {/* Hero */}
      <section className="board-hero">
        <div className="board-logo-container">
          {heroImage && <img src={heroImage} alt={title} className="board-main-logo" />}
          <h1 className="board-main-title">{title}</h1>
          {subtitle && <p className="board-main-subtitle">{subtitle}</p>}
        </div>
      </section>

      <div className="board-content">
        {/* CTA row */}
        <section className="board-section board-cta-row">
          <div className="btn-row">
            <button
              className="primary-btn"
              onClick={toggleSyllabus}
              aria-expanded={open}
              aria-controls="program-syllabus-block"
            >
              {buttonLabel}
            </button>

            <button
              className="secondary-btn"
              onClick={() => setModalOpen(true)}
            >
              Register
            </button>
          </div>

          {open && (
            <div ref={listRef} id="program-syllabus-block" className="syllabus-inline">
              {syllabusUnits.map(({ unit, topics }, idx) => (
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

        {/* Why Choose */}
        <section className="board-section">
          <h2>Why Choose This Program?</h2>
          <div className="board-features">
            {whyFeatures.map((f, i) => (
              <div className="board-feature" key={i}>
                <h3>{f.icon ? `${f.icon} ${f.title}` : f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* REGISTER MODAL — matches your Home behavior */}
      {modalOpen && (
        <div className="custom-modal" id="registerModal" style={{ display: "block" }}>
          <div className="modal-overlay" id="modalOverlay" onClick={() => setModalOpen(false)} />
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <img src="/pictures/SigmaPi Logo.png" width="30" height="30" alt="Logo" />
              <span className="close-button" id="closeModal" onClick={() => setModalOpen(false)}>×</span>
            </div>
            <div className="modal-body">
              {iframeSrc ? (
                <iframe
                  style={{ width: "100%", height: "70vh", border: "none" }}
                  src={iframeSrc}
                  title={`${title} — Register Form`}
                >
                  Loading…
                </iframe>
              ) : (
                <p style={{ padding: "1rem" }}>Registration link not configured.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
