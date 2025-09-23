// src/pages/ICSESyllabus.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

/** Placeholder syllabi per subject — edit freely */
const ICSE_SYLLABUS = {
  // ---------------- CLASS 9 ----------------
  "9-computer-application": {
    title: "Computer Application",
    units: [
      { unit: "Unit 1: Introduction to Object Oriented Programming", topics: [
        "Principles of OOP: Abstraction, Inheritance, Polymorphism, Encapsulation",
        "Procedure vs Object-Oriented Programming",
        "Types of Java Programs: Applets, Applications",
        "Java Compilation Process: Source → Bytecode → JVM",
        "Features of Java: Simple, Robust, Secured, Platform Independent"
      ]},
      { unit: "Unit 2: Elementary Concept of Objects & Classes", topics: [
        "Modelling entities with objects",
        "Class as blueprint for creating objects",
        "Objects encapsulate state (attributes) and behaviour (methods)",
        "Class as user-defined data type"
      ]},
      { unit: "Unit 3: Values & Data Types", topics: [
        "Character set, ASCII, Unicode",
        "Escape sequences (\\n, \\t, \\\\, etc.)",
        "Tokens: keywords, identifiers, literals, punctuators, operators",
        "Constants and Variables",
        "Primitive vs Non-Primitive types",
        "Size of primitive types",
        "Implicit & Explicit Type Conversion"
      ]},
      { unit: "Unit 4: Operators in Java", topics: [
        "Forms: Unary, Binary, Ternary",
        "Types: Arithmetic, Relational, Logical, Assignment, Increment, Decrement",
        "Counters and Accumulators",
        "Precedence & Associativity",
        "new operator, dot operator",
        "System.out.print / println"
      ]},
      { unit: "Unit 5: Input in Java", topics: [
        "Initialization, Parameters, Packages",
        "Scanner Methods: nextInt(), nextDouble(), nextLine(), next().charAt(0)",
        "Types of Errors: Syntax, Runtime, Logical",
        "Comments: // and /* */"
      ]},
      { unit: "Unit 6: Mathematical Library Methods", topics: [
        "Math.pow(), sqrt(), cbrt(), ceil(), floor(), round(), abs(), max(), min(), random()"
      ]},
      { unit: "Unit 7: Conditional Constructs", topics: [
        "if, if-else, nested if, if-else-if ladder",
        "switch-case, default, break",
        "Fall-through conditions",
        "Menu-driven programs",
        "System.exit(0)"
      ]},
      { unit: "Unit 8: Iterative Constructs", topics: [
        "for, while, do-while",
        "Loop variations: break, continue, nested, finite/infinite",
        "Loop conversions: for ↔ while ↔ do while"
      ]},
      { unit: "Unit 9: Nested for Loops", topics: [
        "Examples: rectangular & triangular patterns",
        "Single-variable series",
        "Break/continue inside nested loops"
      ]},
      { unit: "Unit 10: Computing & Ethics", topics: [
        "Ethical issues in computing",
        "Intellectual property rights, Privacy, Data protection",
        "Spam, Piracy, Cybercrime, Hacking, Malware",
        "Good etiquette and ethical practices"
      ]},
      { unit: "Unit 11: Internal Assessment", topics: [
        "Minimum 20 programming assignments",
        "Programs using operators, Math methods, conditionals, loops, nested loops, menu-driven"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfaS0kpAQfoyo0yj6et36sKKr7XEJs-QD3QF1aJtW5EqAfvkw/viewform",
  },

  "9-ai-robotics": {
    title: "AI & Robotics",
    units: [
      { unit: "Unit 1: Introduction to Robotics", topics: [
        "Definition, characteristics, benefits",
        "Evolution of Robots; Asimov’s Laws",
        "Classification: terrain-based, control-based, bio-inspired",
        "Applications: domestic, industrial, medical, defense, entertainment, agriculture"
      ]},
      { unit: "Unit 2: Robot as a System", topics: [
        "Mechanical, Electronic, Computational components",
        "Industrial robots, humanoids, mobile robots"
      ]},
      { unit: "Unit 3: Concepts in Robotics", topics: [
        "Motion: Linear, Angular, Circular",
        "Joints: Prismatic, Revolute, Spherical",
        "Links: Rigid, Soft",
        "Degree of Freedom: definition and examples"
      ]},
      { unit: "Unit 4: Introduction to AI", topics: [
        "Definition, 1956 McCarthy, Turing Test",
        "Applications & Benefits of AI",
        "Ethical Issues: bias, accountability, transparency"
      ]},
      { unit: "Unit 5: Data, Information & Computing Evolution", topics: [
        "Types of Data: audio, visual, numeric, text",
        "Binary logic, deterministic vs probabilistic computing"
      ]},
      { unit: "Unit 6: Python Basics", topics: [
        "Introduction to Python",
        "Data types & Variables: numeric, Boolean, sequences, sets, dictionaries",
        "Operators: arithmetic, logical, comparison, identity, membership"
      ]},
      { unit: "Unit 7: Python – Control & Functions", topics: [
        "if, if-else, elif",
        "Loops: for, while, nested, break, continue",
        "Functions: built-in vs user-defined, arguments, returns"
      ]},
      { unit: "Unit 8: AI Project Framework", topics: [
        "Problem Scoping, Data Acquisition, Data Exploration, Modelling, Evaluation"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdAOCAPOR55-J0M8u-TWzEyOMabaEPkrnsxKjyhzgvfqs2Ptw/viewform",
  },

  // ---------------- CLASS 10 ----------------
  "10-computer-application": {
    title: "Computer Application",
    units: [
      { unit: "Unit 1: Revision of Class IX", topics: [
        "OOP basics, Objects & Classes, Values & Data Types, Operators",
        "Input, Math methods, Conditionals, Loops, Nested Loops"
      ]},
      { unit: "Unit 2: Class as Basis of Computation", topics: [
        "Encapsulation of state and behaviour",
        "Member variables, methods",
        "Primitive and composite types"
      ]},
      { unit: "Unit 3: User-defined Methods", topics: [
        "Static & non-static methods",
        "Overloading, signatures",
        "Pure vs Impure methods",
        "Call by value vs reference"
      ]},
      { unit: "Unit 4: Constructors", topics: [
        "Definition, types, overloading",
        "Constructor vs Method"
      ]},
      { unit: "Unit 5: Library Classes", topics: [
        "Wrapper classes, Autoboxing, Unboxing",
        "parseInt, isDigit, toUpperCase, etc."
      ]},
      { unit: "Unit 6: Encapsulation", topics: [
        "Access specifiers: private, public, protected",
        "Scope rules",
        "Types of variables"
      ]},
      { unit: "Unit 7: Arrays", topics: [
        "1D & 2D arrays, initialization",
        "Sorting: selection, bubble",
        "Searching: linear, binary",
        "Matrix operations"
      ]},
      { unit: "Unit 8: String Handling", topics: [
        "String methods: length, charAt, indexOf, substring, toLowerCase, toUpperCase, replace, equals, compareTo, valueOf",
        "Programs: palindrome, sorting, search"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScEibxhUUWxRHR0qUNhLARRyXJwzRG2rESltYM8kvP3kI8IIg/viewform",
  },

  "10-ai-robotics": {
    title: "AI & Robotics",
    units: [
      { unit: "Unit 1: New Age Robotic Systems", topics: [
        "Warehouse, Assistant, Smart Homes, Smart Mobility, Autonomous Cars & Drones",
        "Robotics in Medicine & Healthcare"
      ]},
      { unit: "Unit 2: From Robots to Cobots", topics: [
        "Machines vs Robots",
        "Cobots: human-in-loop, multi-robot interaction"
      ]},
      { unit: "Unit 3: Components of Robots", topics: [
        "Gears, Sensors, Actuators, Controllers",
        "Integration examples"
      ]},
      { unit: "Unit 4: Visualization & Design", topics: [
        "Tinkercad for mechanical design",
        "Simulation of motion"
      ]},
      { unit: "Unit 5: Integrating Robots", topics: [
        "Mobile robots, RR Mechanism, SBCs"
      ]},
      { unit: "Unit 6: Decision Making in Machines", topics: [
        "Automated vs Autonomous",
        "Machine Learning basics"
      ]},
      { unit: "Unit 7: Machine Intelligence & Cybersecurity", topics: [
        "Machine vs Human Intelligence",
        "Cybersecurity: fraud, hacking, viruses"
      ]},
      { unit: "Unit 8: AI Project Framework", topics: [
        "Scoping, Acquisition, Exploration, Modelling, Evaluation"
      ]},
      { unit: "Unit 9: Python Advanced", topics: [
        "NumPy, Pandas, Matplotlib basics",
        "Lists & Tuples",
        "String operations"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfP9s32rt6e5hSNFBIeZjp9-YBQYjNwY-IYujUQ9A2botmxOw/viewform",
  },

  // ---------------- CLASS 11 ----------------
  "11-computer-science": {
    title: "Computer Science",
    units: [
      { unit: "Numbers & Systems", topics: ["Binary, Octal, Decimal, Hexadecimal conversions", "1’s & 2’s complement arithmetic"] },
      { unit: "Encodings", topics: ["ASCII, ISCII, Unicode"] },
      { unit: "Logic & Hardware", topics: ["Propositional logic", "Logic gates, Adders"] },
      { unit: "OOP with Java", topics: ["Classes, Objects, Methods, Constructors", "BlueJ IDE"] },
      { unit: "Java Basics", topics: ["Primitive & Wrapper types", "Type casting", "Operators"] },
      { unit: "Control Structures", topics: ["if, switch, loops, continue, break"] },
      { unit: "Methods & Constructors", topics: ["Static methods", "Overloading", "this keyword"] },
      { unit: "Arrays & Strings", topics: ["1D & 2D arrays", "Java String methods"] },
      { unit: "I/O & File Handling", topics: ["Scanner, Printer", "Text & Binary Files"] },
      { unit: "Recursion", topics: ["Factorial, GCD, Binary Search, Base conversions"] },
      { unit: "Problem Solving", topics: ["Algorithm design, debugging, validation"] },
      { unit: "Packages", topics: ["User-defined packages, Java API"] },
      { unit: "Emerging Trends & Ethics", topics: ["AI, IoT, Cybersecurity, IP rights"] },
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSciWzOWDoBiBWVtjqpQa8Y39WusQ-WpBy8jGuRTI7GPJcw3fA/viewform",
  },

  "11-ai": {
    title: "Artificial Intelligence",
    units: [
      { unit: "Basic Concepts of AI", topics: [
        "Definition, evolution, applications",
        "Binary logic, deterministic vs probabilistic problems",
        "Decision-making, machine intelligence, cybersecurity",
        "AI project framework",
        "Python basics: data types, operators, control, functions"
      ]},
      { unit: "NLP, ML, and AI in Life", topics: [
        "History of ML, DL, NN",
        "Applications: image recognition, speech recognition",
        "NLP: text generation, translation, chatbots",
        "AI in healthcare, agriculture, disaster prediction"
      ]},
      { unit: "Mathematics for AI", topics: [
        "Matrices, Vectors, Sets, Statistics"
      ]},
      { unit: "Data Visualization", topics: [
        "Matplotlib, Seaborn, Excel, Pandas",
        "Graphs: bar, histogram, scatter, pie"
      ]},
      { unit: "Data Processing", topics: [
        "Cleaning with Pandas, handling duplicates",
        "Kaggle datasets, transformation, standardization"
      ]},
      { unit: "Data Modeling & Regression", topics: [
        "Dimensional, relational, ER models",
        "Regression types, linear regression"
      ]},
      { unit: "Ethical Practices in AI", topics: [
        "Bias, privacy, environment impact"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfF2smkVTC4_6d85NsWNm-ssAJV47tyFvF9FCSnmjESGMHZOQ/viewform",
  },

  "11-robotics": {
    title: "Robotics",
    units: [
      { unit: "Intro to Robotics", topics: [
        "Autonomous systems, Smart manufacturing, Healthcare robots",
        "Robot components: CAD, sensors, actuators, control"
      ]},
      { unit: "Mechanical Systems", topics: [
        "Frames, DOF, Planar & Spatial Mechanisms, Kinematics"
      ]},
      { unit: "Computing Systems", topics: [
        "Boolean operators, Microcontrollers, Embedded C"
      ]},
      { unit: "Electrical & Control", topics: [
        "Motors, Sensors, Batteries, Protocols (UART, I2C, SPI, CAN)"
      ]},
      { unit: "Applications", topics: [
        "Manipulators, Mobile Robots, Drones"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfRRV8YETiF2id31QPFfL05Z2Rchcm7pTq0gtqQmyAFQ-64jA/viewform?embedded=true%22",
  },

  // ---------------- CLASS 12 ----------------
  "12-computer-science": {
    title: "Computer Science",
    units: [
      { unit: "Applications of AI", topics: ["NLP, Statistics, Probability, Hypothesis Testing"] },
      { unit: "AI Paradigms", topics: ["ANN, ML, DL, CNN"] },
      { unit: "Practical ANN", topics: ["NumPy, Keras, TensorFlow, Training, Evaluation"] },
      { unit: "Practical ML", topics: ["Predictive Maintenance, Fraud Detection, Medical Diagnosis"] },
      { unit: "Computer Vision", topics: ["OpenCV, Image Classification, Object Detection, Tracking"] },
      { unit: "Boolean Algebra", topics: ["Propositional logic, Karnaugh maps, Adders"] },
      { unit: "Computer Hardware", topics: ["Logic gates, Circuits, Encoders, Multiplexers"] },
      { unit: "Algorithms & Java", topics: ["Structured algorithms, Debugging, Assignments"] },
      { unit: "Java Concepts", topics: ["OOP, Constructors, I/O, Methods, Abstraction"] },
      { unit: "Data Types & Strings", topics: ["Arrays, StringBuffer, Sorting, Manipulation"] },
      { unit: "Recursion", topics: ["Factorial, GCD, Binary Search, Tower of Hanoi"] },
      { unit: "OOP Advanced", topics: ["Inheritance, Abstract Classes, Interfaces, Polymorphism"] },
      { unit: "Data Structures", topics: ["Stacks, Queues, Linked Lists, Trees"] },
      { unit: "Computational Complexity", topics: ["Big O, Time Analysis"] },
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeW-99iTvL0WOMnVBSwWI1yTaV-bpYADUrisbNEvqQEE-jBbw/viewform",
  },

  "12-ai": {
    title: "Artificial Intelligence",
    units: [
      { unit: "Applications of AI", topics: [
        "NLP: NER, Summarization, Spam Detection",
        "Statistics & Probability",
        "Hypothesis Testing"
      ]},
      { unit: "AI Paradigms", topics: [
        "ANN, ML, DL concepts"
      ]},
      { unit: "Practical ANN", topics: [
        "Data Prep, Building NN, Training, Evaluation, Tuning"
      ]},
      { unit: "Practical ML", topics: [
        "Predictive Maintenance, Fraud Detection, Medical Diagnosis"
      ]},
      { unit: "Computer Vision", topics: [
        "OpenCV, Image Classification, Object Detection, Facial Recognition, Tracking"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScqJDSLnlq9T6C6pFl06jrsRN_H7JkGP4gSyOxcgINpXM1qTQ/viewform",
  },

  "12-robotics": {
    title: "Robotics",
    units: [
      { unit: "Intro to Robotics", topics: [
        "Design Parameters, ROS, Gazebo, Robotics Ethics"
      ]},
      { unit: "Robotics in Healthcare", topics: [
        "Surgical Robots, Assistance Robots, Diagnostic & Rehab Robots",
        "Examples: da Vinci Surgical System, Exoskeletons"
      ]},
      { unit: "Robotics in Agriculture", topics: [
        "Seeding, Ground Robots, Monitoring Robots"
      ]},
      { unit: "Smart Manufacturing & Industry 4.0", topics: [
        "Industrial Arms, Cobots, AGVs, Welding Robots"
      ]},
      { unit: "Space Robotics", topics: [
        "Rovers, Chandrayaan, Gaganyaan Humanoid"
      ]},
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdq4Sxhr5lQGeK3fB8xhdjcm_a9gtNjgYyDy27vB9B0-FPrPQ/viewform?embedded=true%22",
  },
};


export default function ICSESyllabus() {
  const { grade, subject } = useParams();
  const key = `${grade}-${subject}`; // already matches "9-computer-application"
  const sCfg = ICSE_SYLLABUS[key];

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
          <Link to={`/icse/class-${grade}`} className="primary-btn">
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
          <img src="/pictures/isc.png" alt="ICSE Logo" className="board-main-logo icse-logo" />
          <h1 className="board-main-title">ICSE/ISC — Class {grade}</h1>
          <p className="board-main-subtitle">{sCfg.title}</p>
        </div>
      </section>

      {/* Syllabus table */}
      <div className="board-content">
        <section className="board-section">
          <div className="table-header">
            <Link to={`/icse/class/${grade}`} className="explore-link">
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
              title={sCfg.registerLink ? "Register" : "Add registerLink in ICSE_SYLLABUS to enable"}
            >
              Register
            </button>
          </div>
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
