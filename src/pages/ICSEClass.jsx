// src/pages/ICSEClass.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

const ICSE_SUBJECTS = {
  9: [
    {
      slug: "computer-application",
      title: "Computer Application",
      img: "/pictures/programming.webp",
      summary: [
        "Objects and Classes",
        "Data Types",
        "Operators",
        "Input in Java",
        "Mathematical Library Methods",
        "Iterative Constructs in Java",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfaS0kpAQfoyo0yj6et36sKKr7XEJs-QD3QF1aJtW5EqAfvkw/viewform",
    },
    {
      slug: "ai-robotics",
      title: "AI & Robotics",
      img: "/pictures/chatbot.jpg",
      summary: [
        "Concepts in Robotics – Motion, Joints, Links, DOF",
        "Introduction to Artificial Intelligence",
        "Data, Information & Computing Evolution",
        "Programming with Python – Basics",
        "Programming with Python – Control & Functions",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdAOCAPOR55-J0M8u-TWzEyOMabaEPkrnsxKjyhzgvfqs2Ptw/viewform",
    },
  ],
  10: [
    {
      slug: "computer-application",
      title: "Computer Application",
      img: "/pictures/programming.webp",
      summary: [
        "Class as the Basis of all Computation",
        "User-defined Methods",
        "Constructors",
        "Encapsulation",
        "Arrays – 1D and 2D",
        "String Handling",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScEibxhUUWxRHR0qUNhLARRyXJwzRG2rESltYM8kvP3kI8IIg/viewform",
    },
    {
      slug: "ai-robotics",
      title: "AI & Robotics",
      img: "/pictures/chatbot.jpg",
      summary: [
        "From Robots to Cobots",
        "Components of Robots",
        "Visualization and Design",
        "Integrating Robots as a System",
        "Decision Making",
        "Machine Intelligence and Cybersecurity",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfP9s32rt6e5hSNFBIeZjp9-YBQYjNwY-IYujUQ9A2botmxOw/viewform",
    },
  ],
  11: [
    {
      slug: "computer-science",
      title: "Computer Science",
      img: "/pictures/computer system.jpeg",
      summary: [
        "Logic and Hardware – Gates, Adders",
        "Arrays and Strings",
        "Input/Output and File Handling",
        "Recursion",
        "Problem Solving and Implementation",
        "Packages in Java",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSciWzOWDoBiBWVtjqpQa8Y39WusQ-WpBy8jGuRTI7GPJcw3fA/viewform",
    },
    {
      slug: "ai",
      title: "AI",
      img: "/pictures/ethics ai.png",
      summary: [
        "NLP, ML, and AI in Real Life",
        "Mathematics for AI – Matrices, Vectors, Sets, Statistics",
        "Data Visualization",
        "Data Processing",
        "Data Modeling & Regression",
        "Ethical Practices in AI",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfF2smkVTC4_6d85NsWNm-ssAJV47tyFvF9FCSnmjESGMHZOQ/viewform",
    },
    {
      slug: "robotics",
      title: "Robotics",
      img: "/pictures/robotics.jpg",
      summary: [
        "Introduction to Robotics",
        "Frames, DOF, Kinematics",
        "Microcontrollers & Programming",
        "Electrical and Control Systems",
        "Applications of Robotic Systems",
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
        "NN, ML, DL",
        "Applications of ANN & ML",
        "Computer Vision (CV)",
        "Logic Gates and Circuits",
        "Recursion",
        "OOP Concepts – Inheritance & Interfaces",
        "Data Structures",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeW-99iTvL0WOMnVBSwWI1yTaV-bpYADUrisbNEvqQEE-jBbw/viewform",
    },
    {
      slug: "ai",
      title: "AI",
      img: "/pictures/ethics ai.png",
      summary: [
        "NLP, Statistics, Hypothesis Testing",
        "Neural Networks, ML, DL",
        "Applications of ANN",
        "Applications of ML",
        "Image Classification, Object Detection, Tracking",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScqJDSLnlq9T6C6pFl06jrsRN_H7JkGP4gSyOxcgINpXM1qTQ/viewform",
    },
    {
      slug: "robotics",
      title: "Robotics",
      img: "/pictures/robotics.jpg",
      summary: [
        "Design, ROS, Ethics",
        "Surgical, Assistance, Diagnostic, Rehabilitation",
        "Seeding, Monitoring, Precision Farming",
        "Smart Manufacturing & Industry",
        "Rovers, Chandrayaan, Gaganyaan",
      ],
      registerLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdq4Sxhr5lQGeK3fB8xhdjcm_a9gtNjgYyDy27vB9B0-FPrPQ/viewform",
    },
  ],
};

export default function ICSEClass() {
  const { grade } = useParams(); // "9" | "10" | "11" | "12"
  const [modalOpen, setModalOpen] = useState(false);
  const [subjectForRegister, setSubjectForRegister] = useState(null);

  const subjects = ICSE_SUBJECTS[grade] || [];

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
            src="/pictures/isc.png"
            alt="ICSE Logo"
            className="board-main-logo icse-logo"
          />
          <h1 className="board-main-title">ICSE — Class {grade}</h1>
          <p className="board-main-subtitle">Choose a subject</p>
        </div>
      </section>

      <div className="board-content">
        <section className="curriculum-section subject-panel">
          <div className="curriculum-header">
            <Link to="/icse" className="explore-link">
              ← Back to ICSE overview
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

                {/* ✅ Summary in pill/box style */}
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
                    <Link to={`/icse/class/${grade}/${s.slug}`} className="primary-btn">
                    View detailed syllabus
                    </Link>


                    <button
                    className="secondary-btn"
                    onClick={() => {
                        setSubjectForRegister(s.slug);
                        setModalOpen(true);
                    }}
                    disabled={!s.registerLink}
                    title={s.registerLink ? "Register" : "Add registerLink to enable"}
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

    {/* Modal Content */}
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
