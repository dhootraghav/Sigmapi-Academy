// src/pages/CBSESyllabus.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/** Placeholder syllabi per subject — edit freely */
const CBSE_SYLLABUS = {
  // ---------------- CLASS 9 ----------------
  "9-computer-applications": {
    title: "Computer Applications",
    units: [
      { unit: "Unit 1: Basics of Information Technology", topics: [
        "Components of a computer system: CPU, memory, storage, I/O devices",
        "Types of memory: RAM, ROM, cache, secondary",
        "Storage devices: HDD, SSD, DVD, flash drives",
        "Networking basics: PAN, LAN, MAN, WAN; wired vs wireless",
        "Multimedia: images, audio, video, animation"
      ]},
      { unit: "Unit 2: Cyber-safety", topics: [
        "Safe browsing & social networking",
        "Identity protection & password safety",
        "Privacy, confidentiality & reporting cybercrimes",
        "Malware types: viruses, spyware, adware"
      ]},
      { unit: "Unit 3: Office Tools", topics: [
        "Word processing: formatting text, tables, headers/footers",
        "Presentation software: slide design, animations, transitions",
        "Spreadsheets: formulas, functions, charts"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScEoAUbR9nPl549lH0ScUVRiljDtnNlRfgxdxfLH3Rq61N_eg/viewform?embedded=true"
  },

  "9-ai": {
    title: "Artificial Intelligence",
    units: [
      { unit: "Unit 1: AI Reflection, Project Cycle & Ethics", topics: [
        "Introduction to AI & its real-life applications",
        "Realms of AI: Computer Vision, NLP, Data Science",
        "AI project cycle: scoping, data, modeling, evaluation",
        "Ethics: bias, fairness, transparency, access"
      ]},
      { unit: "Unit 2: Data Literacy", topics: [
        "Data privacy & security",
        "Acquisition, processing, interpretation",
        "Visualization & dashboards"
      ]},
      { unit: "Unit 3: Math for AI", topics: [
        "Statistics basics: mean, median, mode, std dev",
        "Probability concepts & real-life applications"
      ]},
      { unit: "Unit 4: Introduction to Generative AI", topics: [
        "Generative vs conventional AI",
        "Applications, benefits & ethical challenges"
      ]},
      { unit: "Unit 5: Python Basics", topics: [
        "Syntax, variables, operators",
        "Input/output functions",
        "Conditionals & loops",
        "Intro to lists"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeTrJ0ICsq37o341a5ZlXgS_EnU1qviido3T8q7yrvXJcxbeQ/viewform?embedded=true"
  },

  // ---------------- CLASS 10 ----------------
  "10-computer-applications": {
    title: "Computer Applications",
    units: [
      { unit: "Unit 1: Networking", topics: [
        "Internet basics: WWW, web servers, clients",
        "Protocols: TCP/IP, SMTP, POP3, HTTP/HTTPS",
        "Remote login & file transfer: SSH, FTP, Telnet",
        "Mobile technologies: 3G, 4G, 5G"
      ]},
      { unit: "Unit 2: HTML", topics: [
        "HTML basics: structure, tags, formatting",
        "Lists, tables, forms, images, media",
        "CSS basics for styling webpages"
      ]},
      { unit: "Unit 3: Cyber Ethics", topics: [
        "Responsible digital behaviour & netiquette",
        "Software licenses, open source & IPR",
        "E-commerce: privacy, fraud, secure data"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScZ8KfVkeBPQgqmcKRk2Cy6DMgjTjIbX3RD48Bd2rW3MKE_kA/viewform?embedded=true"
  },

  "10-ai": {
    title: "Artificial Intelligence",
    units: [
      { unit: "Unit 1: Introduction to AI", topics: [
        "Human vs machine intelligence",
        "AI domains: CV, NLP, Data Science",
        "Applications & ethics"
      ]},
      { unit: "Unit 2: AI Project Cycle", topics: [
        "Problem scoping & planning",
        "Rule-based vs learning-based models",
        "Evaluation metrics"
      ]},
      { unit: "Unit 3: Advanced Python", topics: [
        "Interactive vs script mode",
        "Control structures & functions",
        "Problem-solving with Python"
      ]},
      { unit: "Unit 4: Data Science", topics: [
        "Basics of acquisition, exploration & visualization",
        "NumPy, Pandas, Matplotlib",
        "Intro to statistics & KNN algorithm"
      ]},
      { unit: "Unit 5: Computer Vision", topics: [
        "Image basics: pixels, grayscale, RGB",
        "Object detection & segmentation"
      ]},
      { unit: "Unit 6: NLP Basics", topics: [
        "Applications: chatbots, sentiment analysis, summarization",
        "Bag-of-Words model, text normalization"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScwiDjkHxCTDfPM7a-ucGKZ2-Pb1GvG0ESH-trANyzHueMx6Q/viewform?embedded=tru"
  },

  // ---------------- CLASS 11 ----------------
  "11-computer-science": {
    title: "Computer Science",
    units: [
      { unit: "Unit 1: Computer Systems & Organisation", topics: [
        "CPU, memory, I/O devices",
        "Types of software: system, application, programming tools",
        "Boolean logic, number systems, encoding schemes"
      ]},
      { unit: "Unit 2: Computational Thinking & Programming – I", topics: [
        "Problem-solving steps, flowcharts, pseudocode",
        "Basics of Python: data types, operators, errors",
        "Control structures: conditionals, loops",
        "Strings, Lists, Tuples, Dictionaries"
      ]},
      { unit: "Unit 3: Society, Law and Ethics", topics: [
        "Digital footprints, etiquette",
        "Data protection and IPR",
        "Cybercrime and safety",
        "E-waste and IT Act"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScwNbfOzBHsRb7xNmaFYVqALucMAqYut6UzZDPNKSOm8Ochxw/viewform?embedded=true"
  },

  "11-informatics-practices": {
    title: "Informatics Practices",
    units: [
      { unit: "Unit 1: Introduction to Computer System", topics: [
        "Evolution of computing",
        "Components of a computer system",
        "Memory types",
        "Software types"
      ]},
      { unit: "Unit 2: Python Programming", topics: [
        "Execution modes",
        "Data types and operators",
        "Control structures",
        "Lists and Dictionaries",
        "Intro to NumPy"
      ]},
      { unit: "Unit 3: Database Concepts & SQL", topics: [
        "Relational data model",
        "SQL: CREATE, SELECT, INSERT, DELETE, UPDATE"
      ]},
      { unit: "Unit 4: Emerging Trends", topics: [
        "AI, ML, NLP",
        "Robotics, IoT, Big Data",
        "Cloud computing, Blockchain"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScx9BWJ6eZSVkFvLDMC9bDVwkFRA2_f8aU4Zhp6gaZp2Z0pDw/viewform?embedded=true"
  },

  "11-ai": {
    title: "Artificial Intelligence",
    units: [
      { unit: "Unit 1: Artificial Intelligence for Everyone", topics: [
        "Introduction to AI in daily life",
        "AI in health, education, business"
      ]},
      { unit: "Unit 2: Unlocking Your Future in AI", topics: [
        "Careers and roles",
        "Future opportunities in AI"
      ]},
      { unit: "Unit 3: Python Programming", topics: [
        "Data types, variables, operators",
        "Control flow and loops",
        "Functions"
      ]},
      { unit: "Unit 4: Introduction to Capstone Project", topics: [
        "Scoping problems",
        "Project planning basics"
      ]},
      { unit: "Unit 5: Data Literacy", topics: [
        "Data collection",
        "Data processing and visualization"
      ]},
      { unit: "Unit 6: Machine Learning Algorithms", topics: [
        "Regression and classification basics",
        "Model evaluation"
      ]},
      { unit: "Unit 7: Leveraging Linguistics & Computer Science", topics: [
        "Basics of NLP",
        "Applications: chatbots, translation"
      ]},
      { unit: "Unit 8: AI Ethics and Values", topics: [
        "Bias in AI systems",
        "Transparency and accountability"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeqwJQBrEkDjT13duldZcldnc1iN3tWmehKlK6v9NV7jjSZ4g/viewform?embedded=true"
  },

  // ---------------- CLASS 12 ----------------
  "12-informatics-practices": {
    title: "Informatics Practices",
    units: [
      { unit: "Unit 1: Data Handling using Pandas – I", topics: [
        "Pandas Series & DataFrames",
        "Creating Series from arrays, dictionaries",
        "DataFrame creation from dict, list, CSV files",
        "Row/column operations: add, delete, rename",
        "Importing/exporting data from CSV",
        "Data Visualization basics with Matplotlib: line plots, bar graphs, histograms"
      ]},
      { unit: "Unit 2: Database Query using SQL", topics: [
        "Revision of DBMS & SQL concepts from Class XI",
        "Math functions: POWER(), ROUND(), MOD()",
        "Text functions: UCASE(), LCASE(), MID(), LENGTH(), etc.",
        "Date functions: NOW(), DATE(), MONTH(), YEAR(), DAY()",
        "Aggregate functions: MAX(), MIN(), AVG(), SUM(), COUNT()",
        "GROUP BY, HAVING, ORDER BY",
        "Equi-join and working with multiple tables"
      ]},
      { unit: "Unit 3: Introduction to Computer Networks", topics: [
        "Network types: PAN, LAN, MAN, WAN",
        "Network devices: modem, hub, switch, router, gateway",
        "Topologies: Star, Bus, Tree, Mesh",
        "Introduction to Internet: URL, WWW, Web, Email, Chat, VoIP",
        "Websites: static vs dynamic, hosting, browsers & settings"
      ]},
      { unit: "Unit 4: Societal Impacts", topics: [
        "Digital footprint and online etiquette",
        "Intellectual Property Rights & licensing",
        "Cybercrime & Indian IT Act overview",
        "E-waste management & hazards",
        "Health concerns from technology usage"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfVmeYbpLMWC1Hg67sf_uf_KXXxe45oA8g4nzd69vvjHoxTXg/viewform?embedded=true"
  },

  "12-ai": {
    title: "Artificial Intelligence",
    units: [
      { unit: "Unit 1: Capstone Project", topics: [
        "Problem decomposition with Design Thinking",
        "Identifying data requirements",
        "Modeling approaches & algorithms",
        "Evaluation metrics: RMSE, MSE, MAPE",
        "Presenting findings through narrative"
      ]},
      { unit: "Unit 2: Model Lifecycle", topics: [
        "Training, testing, and validation",
        "Hyperparameters overview",
        "Tools and platforms for AI models",
        "Model stages: Build, Deploy, Retrain"
      ]},
      { unit: "Unit 3: Storytelling Through Data", topics: [
        "Importance of storytelling in AI & decision-making",
        "Choosing the right charts: wordclouds, bar, candlestick, maps",
        "Ethical considerations in communication",
        "Storytelling during data exploration & model evaluation"
      ]},
      { unit: "Unit 4: Advanced AI Applications", topics: [
        "ML models – regression, classification",
        "Neural Networks & Deep Learning",
        "Natural Language Processing basics",
        "Computer Vision concepts: detection, segmentation",
        "Ethics & bias in AI applications"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdzyOUf8aT_5DeM5NAr_Og2HCdyXpcEpGTEQE10rvFQlzuNvw/viewform?embedded=true"
  },

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
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdGQxYy8vTB4l0Byt5PYgn8Opkjdrc3dFjtkcytzyXccHR5tw/viewform?embedded=true"
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
          <img src="/pictures/CBSE LOGO FINAL.png" alt="CBSE Logo" className="board-main-logo cbse-logo" />
          <h1 className="board-main-title">CBSE — Class {grade}</h1>
          <p className="board-main-subtitle">{sCfg.title}</p>
        </div>
      </section>

      {/* Syllabus table */}
      <div className="board-content">
        <section className="board-section">
          <div className="table-header">
            <Link to={`/cbse/class/${grade}`} className="explore-link">
              ← Back to Class {grade}
            </Link>
            <h2>Detailed Syllabus</h2>
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
            title={`${sCfg.title} Registration`}
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
