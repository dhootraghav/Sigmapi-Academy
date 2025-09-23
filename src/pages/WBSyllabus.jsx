// src/pages/WBSyllabus.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/boards.css";

const WB_SYLLABUS = {
  // ---------------- Class 11 ----------------
  "11-artificial-intelligence": {
    title: "Artificial Intelligence",
    units: [
      { 
        unit: "Unit 1: Computer Fundamentals", 
        topics: [
          "History of Computers, Basic Computer Hardware, Input and Output Devices, Basic Computer Architecture, Memory and CPU, Networking Overview (LAN, MAN, WAN, Internet, WiFi, etc.), Types of Computers (Workstation, Desktop, Smartphone, Embedded Systems, etc.), Overview of Software (System vs Application Software), Functions of Operating Systems (Windows, Linux, Android).",
          "Bit, Byte and Word, Number Systems (Binary, Decimal, Octal, Hexadecimal) with Conversions, Boolean Logic and Gates, Boolean Operators (OR, AND, NOT), ASCII Code, Algorithm and Flowchart basics.",
          "Computer Programming Basics: High-Level, Assembly, Machine Language, Compiler vs Interpreter, Procedural vs Object-Oriented Programming with examples (BASIC, FORTRAN, C, C++, Java, Python)."
        ]
      },
      { 
        unit: "Unit 2: Introduction to Python Programming", 
        topics: [
          "Basics of Python: Hello World, Print, Variables, Data Types (int, float, string), Operators (assignment, logical, arithmetic).",
          "Conditionals (if, if-else, nested if), Loops (for, while, nested), Iterators, String operations (compare, concatenate, substring).",
          "Functions and Recursion.",
          "Linear & Non-Linear Data Structures (definitions, diagrams). Arrays (1D, 2D), Stack (push, pop), Queue (enqueue, dequeue).",
          "Python list methods for stack/queue, intro to NumPy arrays (arange, shape, ndim, dtype). Binary Tree (basic schematic).",
          "Searching & Sorting: Linear Search, Binary Search, Bubble Sort."
        ]
      },
      { 
        unit: "Unit 3: Introduction to Linear Algebra", 
        topics: [
          "Matrix operations: Addition, Subtraction, Multiplication, Transpose, Identity Matrix.",
          "Vectors: Unit vector, Normal vector, Euclidean space.",
          "Probability Concepts: Distribution, Frequency, Mean, Median, Mode, Variance, Standard Deviation, Gaussian Distribution.",
          "Distance Functions: Euclidean Norm, Distance in 2D/3D and generalization to n-Dimensions."
        ]
      },
      { 
        unit: "Unit 4: Foundation of AI & Search as Optimization", 
        topics: [
          "History of AI: Alan Turing, Enigma, Mark I Machines, 1956 AI birth, AI Winters, Expert Systems, Present-Day AI.",
          "Search as Optimization: Tic-Tac-Toe example, State Space Search, Uninformed (BFS, DFS) and Informed (Heuristic, Greedy, A*, Hill Climbing, Simulated Annealing).",
          "Evolutionary Algorithms: Darwin’s theory inspiration, crossover, mutation, survival of fittest, genetic algorithm basics."
        ]
      },
      { 
        unit: "Unit 5: Knowledge Representation and Reasoning", 
        topics: [
          "Propositional Logic, Truth Tables, Conjunction, Disjunction, Tautology, De Morgan’s Theorem.",
          "Logical propositions (atomic & compound), Implication, Biconditional, Proof by truth table.",
          "Unification, Clause, Inference basics, Answer Extraction System.",
          "Intro to Fuzzy Logic (concept only)."
        ]
      },
      { 
        unit: "Unit 6: Uncertainty Management", 
        topics: [
          "Handling uncertain knowledge, Rational Decision-Making, Probabilistic Reasoning.",
          "Bayes’ Rule, Conditional Probability, Combining Evidence."
        ]
      },
      { 
        unit: "Unit 7: Preliminary Concept of Chatbots", 
        topics: [
          "Definition of Chatbot, Examples of Chatbots.",
          "Flowchart describing chatbot working principle."
        ]
      },
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdi_65IbXCWaMPM064LFaGC_ml_EOYMLihTuuxeQ9HwnCtH5A/viewform"
  },

  "11-cyber-security": {
  title: "Cyber Security",
  units: [
    { 
      unit: "Unit 1: Computer Systems", 
      topics: [
        "Evolution of Computers: Generations of Computers, Quantum Computers (brief intro).",
        "Computer Organization: Logic Gates (AND, OR, NOT, XOR) with truth tables, functional components, memory organization, I/O devices.",
        "Encoding Schemes & Number Systems: ASCII, EBCDIC, Binary, Octal, Hexadecimal.",
        "Data vs Information: Definitions, examples, types of data.",
        "Operating Systems: Roles & functions, process/thread management, file systems.",
        "DBMS Overview: Importance, role of DBMS, relational databases, SQL intro.",
        "Programming Basics: Algorithms, Flowcharts, Compiler vs Interpreter, Languages (C, C++, Python, Java, JS)."
      ]
    },
    { 
      unit: "Unit 2: Computer Networks", 
      topics: [
        "Types of Networks: LAN, MAN, WAN, Wireless LAN, Internet.",
        "Network Components: Servers, NICs, Media (UTP, STP, Coaxial, Fibre, Wireless), Devices (Router, Switch, Hub, Gateway).",
        "Topologies: Mesh, Ring, Bus, Star, Tree, Hybrid.",
        "Channel Concepts: Bandwidth, Data transfer rate (bps → Tbps).",
        "Internet Basics: TCP/IP, IPv4 & IPv6, Subnet Mask, Default Gateway, ICMP.",
        "Applications: Email, WWW, DNS.",
        "IoT: Architecture, Sensors/Actuators, Protocols (MQTT, CoAP, Zigbee).",
        "Cloud Computing: IaaS, PaaS, SaaS; Public vs Private vs Hybrid; AWS/Azure/GCP overview."
      ]
    },
    { 
      unit: "Unit 3: Introduction to Cybersecurity", 
      topics: [
        "Definition & Relevance of Cybersecurity.",
        "History: Major incidents & their impact.",
        "CIA Triad: Confidentiality, Integrity, Availability.",
        "Key Concepts: Threats, Vulnerabilities, Exploits, Risks, Attacks.",
        "Types of Threats: Malware, Social Engineering, DoS/DDoS, Insider Threats, APTs, Data Breaches."
      ]
    },
    { 
      unit: "Unit 4: Network Security", 
      topics: [
        "Authentication & Authorization: Passwords, Biometrics, Hardware Tokens.",
        "Firewalls: Types (Packet-filtering, Stateful Inspection), NAT, IPTables.",
        "Intrusion Detection Systems (IDS): Host-based vs Network-based, Signature vs Anomaly Detection, Snort rules.",
        "Wireless Security: WPA2, WPA3 vulnerabilities.",
        "IoT Security: Threats & case studies, Privacy in IoT.",
        "Cloud Security: Common threats, storage security."
      ]
    },
    { 
      unit: "Unit 5: Cryptography – Part I", 
      topics: [
        "Encryption/Decryption basics, Symmetric vs Asymmetric cryptography.",
        "Ciphers: Substitution, Transposition, Steganography.",
        "Secret Key Cryptography: DES, AES, Block/Stream Ciphers.",
        "Public Key Cryptography: Principles, RSA basics."
      ]
    },
    { 
      unit: "Unit 6: Internet Security", 
      topics: [
        "Social Engineering: Phishing, Pretexting, Baiting, Vishing, Smishing.",
        "Email Security: Spoofing, Malware, Credential Theft.",
        "Case Studies: Banking frauds, Fake social profiles.",
        "Best Practices: Prevention & User Awareness."
      ]
    },
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeuJF3oo6qHR8uOqVNYc2fff49m-AkrwdUk7ZDS9sGcJg53CQ/viewform"
},

  "12-artificial-intelligence": {
  title: "Artificial Intelligence",
  units: [
    { 
      unit: "Unit 1: Foundation of Statistics for Machine Learning", 
      topics: [
        "Distance between Distributions: Euclidean Norm, Pearson Correlation Coefficient, Chi-Square Distance.",
        "Vector Algebra: Real n-dimensional space (ℝⁿ), Dot Product, Vector Projections.",
        "Pearson’s Correlation Coefficient: Definition and applications in measuring relationships.",
        "Chi-Square Test: Concept and use in comparing distributions.",
        "Probability & Bayes’ Theorem: Conditional Probability, Conditional Independence, Bayesian Probability."
      ]
    },
    { 
      unit: "Unit 2: Introduction to Machine Learning", 
      topics: [
        "What is Machine Learning? Difference between Traditional Programming and ML, Applications of ML.",
        "Types of ML: Supervised, Unsupervised, Semi-Supervised, Reinforcement Learning.",
        "Training & Hypothesis: Hypothesis Representation, Hypothesis Space, Bias in learning, Training examples.",
        "Loss Function and Training: Iterative trial-and-error, Mean Squared Error (MSE), Gradient Descent Algorithm, Effect of Learning Rate.",
        "Feature Engineering: Importance of Feature Scaling (Min-Max Normalization).",
        "Attributes & Features: Types (Continuous, Categorical), Training examples with multiple attributes.",
        "Linear Regression: With one and multiple variables, Polynomial Regression, Feature Cross."
      ]
    },
    { 
      unit: "Unit 3: Supervised Learning", 
      topics: [
        "Regression vs Classification: Concepts, real-world examples.",
        "Linear Classification: Threshold classifier, limitations, misclassification error, accuracy.",
        "Logistic Regression: Logistic function, probabilistic interpretation, binary and multiclass classification.",
        "Instance-Based Learning: K-Nearest Neighbor (KNN), Curse of Dimensionality.",
        "Classifier Performance: Confusion Matrix, TP/TN/FP/FN, Precision, Recall, F1-Score, Sensitivity, Specificity.",
        "Model Validation: K-Fold Cross Validation."
      ]
    },
    { 
      unit: "Unit 4: Unsupervised Learning", 
      topics: [
        "Definition of Unsupervised Learning, Differences from Supervised Learning.",
        "Clustering Concepts: Why clustering is unsupervised, clustering vs classification.",
        "Applications of Clustering in real-world scenarios.",
        "K-Means Algorithm: Steps, examples, and use cases."
      ]
    },
    { 
      unit: "Unit 5: Artificial Neural Networks", 
      topics: [
        "Biological Motivation: McCulloch & Pitts model (1943), Neurons, Activation functions (Threshold, Sigmoid).",
        "Perceptron: Linear classifier, Perceptron training rule, representing AND/OR functions.",
        "Limitations: XOR problem, need for hidden layers, role of non-linearity.",
        "Network Types: Feedforward vs Recurrent (concepts only).",
        "Backpropagation Algorithm: Training feedforward networks (concept only).",
        "Generalization vs Overfitting, Validation data.",
        "Convolutional Neural Networks (CNN): Role of convolution & pooling, 2D convolution example, Digit recognition case study."
      ]
    },
    { 
      unit: "Unit 6: Ethics in AI", 
      topics: [
        "Overview of Ethical Issues in AI: Bias, Accountability, Transparency, Privacy, Human Oversight.",
        "Impacts of AI on Society and Future Challenges."
      ]
    },
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeNpKBAaHQ8nUXFcgAldu9FEh5X56J1LVMIVGEpPFvcqY4sDg/viewform"
},

"12-cyber-security": {
  title: "Cyber Security",
  units: [
    { 
      unit: "Unit 1: Web Security", 
      topics: [
        "Web Basics: HTTP, static vs dynamic pages, 3-tier stack (client, server, DB).",
        "Browser Security: Rendering engine, vulnerabilities (XSS, CSRF, Clickjacking).",
        "Security Features: SOP, CSP, sandboxing, cookie handling."
      ]
    },
    { 
      unit: "Unit 2: Malicious Software", 
      topics: [
        "Types of Malware: Viruses, Worms, Trojans, Spyware, Ransomware.",
        "Propagation: Email, malicious sites, removable media, malvertising, botnets.",
        "Defense: Antivirus, updates, segmentation, backups, MFA."
      ]
    },
    { 
      unit: "Unit 3: Mobile Device Security", 
      topics: [
        "Privacy Concerns: Geolocation, data collection, personalized ads.",
        "App Security: Permissions, risky apps, social apps.",
        "Data Security: Encryption, secure messaging, cloud sync.",
        "Network Risks: Public Wi-Fi, MITM attacks.",
        "Physical Security: Theft, remote wipe, biometrics."
      ]
    },
    { 
      unit: "Unit 4: Cryptography – Part II", 
      topics: [
        "Hash Functions: Properties, SHA, applications (message auth, password storage).",
        "Digital Signatures: Definition, RSA signature basics.",
        "Digital Certificates: Public key certs, X.509.",
        "SSL/TLS: Architecture, handshake, vulnerabilities."
      ]
    },
    { 
      unit: "Unit 5: Ethical Hacking", 
      topics: [
        "Definition, Types, Five Phases (Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks).",
        "System Hacking: Password cracking, privilege escalation.",
        "Spoofing: Email, IP, DNS spoofing."
      ]
    },
    { 
      unit: "Unit 6: Ethical & Legal Considerations", 
      topics: [
        "Cyber Ethics: Responsible use of tech.",
        "IPR Basics: Copyrights, Patents, Licensing.",
        "Cyber Law: IT Act (India), Cyber Crime vs Traditional Crime, Cyber terrorism.",
        "Digital Personal Data Protection Act (overview)."
      ]
    },
    { 
      unit: "Unit 7: Emerging Trends", 
      topics: [
        "AI & ML in Cybersecurity.",
        "Blockchain for security.",
        "Generative AI: Opportunities and threats.",
        "Quantum Cryptography basics."
      ]
    },
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSenxmd-E68gTbuvEG1OroyQa5ttW4y8AMJHq7Ix4k1r6ACkQQ/viewform"
},

// ---------------- Class 11 ----------------
"11-computer-application": {
  title: "Computer Application",
  units: [
    { 
      unit: "Semester I - Unit 1: Computer System and Organisation", 
      topics: [
        "Basic Computer Organisation: CPU, RAM, ROM, Cache, Secondary storage, I/O devices, units of memory (bit to PB).",
        "Classification of Computers: Super, Mainframe, Mini, PC.",
        "Concepts of Software: System Software (Translators, Loaders, Linkers), OS (types and functions), Application Software, GUI vs CUI.",
        "Number System: Binary, Octal, Decimal, Hex, conversions, BCD, ASCII, 1's and 2's complement.",
        "Boolean Algebra: Logic gates, De Morgan's theorem, SOP, POS, K-Map simplification."
      ]
    },
    { 
      unit: "Semester I - Unit 2: Programming Fundamentals", 
      topics: [
        "Concept of Programming: Instructions, Programs, Languages (High, Low, Assembly), Procedural, Non-procedural, OOP, Structured programming.",
        "Algorithm Fundamentals: Definition, characteristics, flowcharts, pseudo code, Time/space complexity, Asymptotic Notation (Big O, Omega, Theta).",
        "Introduction to Problem Solving: Steps (analysis, algorithm, coding, testing, debugging)."
      ]
    },
    { 
      unit: "Semester I - Unit 3: Data Visualization using Spreadsheet", 
      topics: [
        "Introduction to Spreadsheets: Overview, creating/modifying workbooks, navigating interface.",
        "Data and Tables: Entering, revising, defining, managing tables.",
        "Data Calculations: Formulas (SUM, AVERAGE), conditional functions (IF, COUNTIF, etc).",
        "Appearance: Formatting cells, styles, themes.",
        "Data Analysis: Sorting/filtering, text functions, validation, logical ops.",
        "Advanced Features: Charts, graphs, import/export, goal seek.",
        "Reporting: Reports/dashboards, visualization best practices.",
        "Collaboration: Sharing, protecting workbooks, comments."
      ]
    },
    { 
      unit: "Semester II - Unit 4: Data Structure", 
      topics: [
        "Definition, types of data structure (linear and non-linear).",
        "Arrays: 1D, 2D and applications.",
        "Linked List: Single, circular, double linked list basics.",
        "Stack: Operations (push, pop), applications.",
        "Queue: Operations, circular & priority queue basics.",
        "Recursion: Definition, pros and cons.",
        "Searching & Sorting: Linear vs Binary search, Bubble Sort."
      ]
    },
    { 
      unit: "Semester II - Unit 5: Computer Networks", 
      topics: [
        "Analogue & digital communication, modes (simplex, half/full duplex).",
        "Network Architectures: Client-server, P2P.",
        "Transmission Modes: Serial vs Parallel, synchronous vs async, baseband vs broadband.",
        "Transmission Media: Wired (Twisted Pair, Co-axial, Fiber Optic) & Wireless (Radio, Microwave, Satellite).",
        "Network Devices: Modem, Ethernet card, Hub, Switch, Router, Gateway, Wi-Fi card.",
        "Types & Topologies: LAN, MAN, WAN; Bus, Star, Ring, Tree.",
        "Protocols: HTTP, FTP, PPP, SMTP, TCP/IP, POP3, TELNET, HTTPS, VoIP.",
        "OSI Model: Layers, devices & protocols.",
        "Web Services: WWW, HTML, XML, IP, Domain, URL, ISP, Browser, Server, Hosting."
      ]
    },
    { 
      unit: "Semester II - Unit 6: Ethics", 
      topics: [
        "Digital Footprints.",
        "Data Protection: Privacy, security.",
        "Cyber Crime: Hacking, phishing, ransomware, trolling, bullying.",
        "Cyber Safety: Safe browsing, ID protection.",
        "Malware: Viruses, trojans, adware.",
        "E-waste management.",
        "IT Act: Basic overview."
      ]
    }
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScVBpcpp2FDUPqrSFAx7wX187qO0bhn3DlmKeBnn6HafUkJMA/viewform"
},

// ---------------- Class 12 ----------------
"12-computer-application": {
  title: "Computer Application",
  units: [
    { 
      unit: "Semester III - Unit 1: Python Programming", 
      topics: [
        "Basics: Features, modes, tokens, variables, comments.",
        "Data Types: Numbers, Boolean, String, List, Tuple, Dictionary.",
        "Operators: Arithmetic, Relational, Logical, Assignment, Identity, Membership.",
        "Expressions & I/O: Conversion, input/output, precedence.",
        "Errors: Syntax, logical, runtime.",
        "Control Flow: if, if-else, loops, break/continue.",
        "Strings: Operations, slicing, methods (len, find, split, join).",
        "Lists: Indexing, methods, nested lists.",
        "Modules: Math, Random, Statistics.",
        "Functions: Built-in & user-defined, scope, parameters."
      ]
    },
    { 
      unit: "Semester III - Unit 2: E-Commerce", 
      topics: [
        "Intro: Goals, activities, scope, pros & cons, types (C2C, B2B, etc).",
        "Electronic Payment: Credit cards, fund transfer, e-cash, billing systems.",
        "Internet Marketing: Online shopping, marketing cycle, personalization, promotion."
      ]
    },
    { 
      unit: "Semester IV - Unit 3: Database Management System", 
      topics: [
        "DBMS Intro: Legacy vs DBMS, Architecture, Data Independence, Users, Data Dictionary.",
        "ER Model: Entities, attributes, keys, weak vs strong sets, specialization/generalization.",
        "Relational Model: Concepts, Algebra.",
        "Integrity: Domain constraints, referential integrity.",
        "SQL: DDL/DML, commands (create, drop, alter, select, update, delete), operators, clauses, aggregate functions, joins."
      ]
    },
    { 
      unit: "Semester IV - Unit 4: Data Warehousing & Data Mining", 
      topics: [
        "Data Warehouse: Concepts, data cube, OLAP, implementation.",
        "Data Mining: Types of data/patterns mined, cleaning, transformation.",
        "Applications: Sequence/time-series, symbolic, statistical, visual/audio, trends."
      ]
    },
    { 
      unit: "Semester IV - Unit 5: Foundation of AI", 
      topics: [
        "Introduction: Scope, milestones, AI vs Human intelligence.",
        "Subfields: ML, DL, NLP, Computer Vision.",
        "Applications: Finance (fraud detection), Customer Service, Education (personalized learning).",
        "Ethics: Bias, fairness, employment impact, inequality."
      ]
    }
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSe1H82bwjL0b1rQGNbLLRrCJxQ9BrtsYzrTTZxi2-pkdTSoPw/viewform"
},

// ---------------- Class 11 ----------------
"11-computer-science": {
  title: "Computer Science",
  units: [
    {
      unit: "Semester I - Unit 1: Computer System and Organisation",
      topics: [
        "Basic Computer Organisation: CPU, RAM, ROM, Cache, Secondary storage, I/O devices, Units of memory.",
        "Classification of Computers: Supercomputer, Mainframe, Mini, PC.",
        "Concepts of Software: System software (Translators, Loaders, Linkers), OS (types & functions), Application & Utility Software, GUI vs CUI.",
        "Number System: Binary, Octal, Decimal, Hexadecimal, conversions, BCD, Grey, Excess-3, ASCII, Unicode, 1’s & 2’s complement.",
        "Boolean Algebra: Postulates, Logic gates, Truth tables, De Morgan’s theorem, SOP & POS, Simplification with K-map."
      ]
    },
    {
      unit: "Semester I - Unit 2: Programming Fundamentals",
      topics: [
        "Concept of Programming: Instructions, Programs, Languages (High, Low, Assembly), Procedural vs Non-Procedural, OOP, Structured programming.",
        "Algorithm Fundamentals: Definition, Recursive & Non-Recursive, Flowchart & Pseudocode, Space/Time complexity, Asymptotic Notations (Big O, Ω, Θ).",
        "Problem Solving Steps: Analysis, Algorithm design, Coding, Testing, Debugging."
      ]
    },
    {
      unit: "Semester I - Unit 3: Introduction to C",
      topics: [
        "Basic Structure: Character set, Keywords, Identifiers, Constants, Variables, Type declaration, Pre-processor.",
        "Operators: Arithmetic, Relational, Logical, Assignment, Increment/Decrement, Conditional, Operator precedence.",
        "Branching & Looping: if, if-else, while, do-while, for.",
        "Arrays & Strings: 1D & 2D arrays, String handling & functions.",
        "Structures: Initialization, Arrays of structures, Nested structures.",
        "Functions: Call by value vs reference, Return types, Recursion.",
        "Pointers: Declaration, Operators, Pointers with Arrays, Strings, Functions."
      ]
    },
    {
      unit: "Semester II - Unit 1: Data Structure",
      topics: [
        "Introduction: Linear vs Non-linear DS, ADT.",
        "Arrays: 1D, 2D, Applications.",
        "Linked List: Single, Circular, Doubly linked list.",
        "Stack: Push/Pop, Implementation with arrays/lists, Applications.",
        "Queue: Operations, Circular Queue, Dequeue, Priority Queue.",
        "Recursion: Definition, Stack mechanism, Tail recursion.",
        "Searching & Sorting: Linear vs Binary search, Bubble sort."
      ]
    },
    {
      unit: "Semester II - Unit 2: Computer Networks",
      topics: [
        "Basics: Analog vs Digital, Simplex, Half/Full Duplex.",
        "Network Architecture: Client-server, P2P.",
        "Communication: Serial vs Parallel, Bandwidth, Baud, Sync vs Async, Baseband vs Broadband.",
        "Transmission Media: Twisted pair, Co-axial, Optical fiber, Radio, Microwave, Satellite.",
        "Devices: Modem, Ethernet, Hub, Switch, Router, Gateway, Wi-Fi card.",
        "Topologies: LAN, MAN, WAN; Bus, Star, Ring, Tree.",
        "Protocols: HTTP, FTP, SMTP, TCP/IP, POP3, TELNET, HTTPS, VoIP.",
        "OSI Model: Concepts, layers, devices.",
        "Web Services: WWW, HTML, XML, IP, Domain, URL, ISP, Hosting."
      ]
    },
    {
      unit: "Semester II - Unit 3: Ethics",
      topics: [
        "Digital Footprints.",
        "Data Protection & IPR: Copyright, Patent, Trademark, Open Source licensing (GPL, CC).",
        "Cyber Crime: Hacking, Phishing, Ransomware, Trolling, Bullying.",
        "Cyber Safety: Safe browsing, ID protection.",
        "Malware: Viruses, Trojans, Adware.",
        "E-waste Management.",
        "IT Act: Overview."
      ]
    }
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdqXW2qEXAMPLEFORM/viewform"
},

// ---------------- Class 12 ----------------
"12-computer-science": {
  title: "Computer Science",
  units: [
    {
      unit: "Semester III - Unit 1: Python Programming",
      topics: [
        "Intro to Python: Features, Interactive vs Script mode, Tokens, Variables, Comments.",
        "Data Types: Numbers, Boolean, String, List, Tuple, Dict, None, Mutable vs Immutable.",
        "Operators: Arithmetic, Relational, Logical, Assignment, Identity, Membership.",
        "Expressions & I/O: Precedence, Type conversion, Input/output functions.",
        "Errors: Syntax, Logical, Runtime.",
        "Flow of Control: Sequential, Conditional, Iterative.",
        "Conditionals: if, if-else, if-elif-else.",
        "Loops: for, while, break/continue, nested loops.",
        "Strings: Slicing, Traversal, Methods (len, find, join, split, replace, etc.).",
        "Lists: Indexing, Methods (append, pop, sort, etc.), Nested lists, Linear search.",
        "Tuples: Indexing, Methods (len, min, max, sum).",
        "Dictionaries: Keys/values/items, get(), update(), pop(), sorted().",
        "Modules: math, random, statistics.",
        "Functions: Built-in & user-defined, Scope, Parameters, Return values.",
        "Exception Handling: try, except, finally."
      ]
    },
    {
      unit: "Semester III - Unit 2: E-Commerce",
      topics: [
        "Definition, Goals, Activities, Advantages & Disadvantages.",
        "Types: C2C, B2C, B2B, C2G, G2C, etc.",
        "EDI: Concepts, Applications, Limitations.",
        "E-Payment Systems: Credit cards, Fund transfer, e-cash, Paperless billing.",
        "Internet Marketing: Techniques, Personalization, Pros & Cons."
      ]
    },
    {
      unit: "Semester IV - Unit 1: Database Management System",
      topics: [
        "Intro: Legacy vs DBMS, Advantages, Architecture, Data Models, DBA.",
        "ER Modelling: Entities, Keys, ER Diagrams, Weak/Strong sets, Generalization, Aggregation.",
        "Relational Model: Concepts, Algebra.",
        "Integrity Constraints: Domain, Referential, Views.",
        "SQL: DDL & DML, Data types, Constraints, create/alter/drop, insert/delete/update/select.",
        "Operators: Relational, Logical.",
        "Clauses: WHERE, IN, BETWEEN, ORDER BY, LIKE, NULL, GROUP BY, HAVING.",
        "Aggregate Functions: MAX, MIN, SUM, AVG, COUNT.",
        "Joins: Cartesian, Equi-join, Natural join."
      ]
    },
    {
      unit: "Semester IV - Unit 2: Foundation of AI",
      topics: [
        "Intro to AI: Scope, History, AI vs Human intelligence.",
        "Subfields: ML, DL, NLP, CV.",
        "Search: State space, BFS, DFS, A*.",
        "Applications: Finance, Customer Service, Education.",
        "Ethics: Bias, Fairness, Employment, Inequality."
      ]
    }
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc9CS12EXAMPLEFORM/viewform"
},

// ---------------- Class 11 ----------------
"11-data-science": {
  title: "Data Science",
  units: [
    {
      unit: "Semester I - Unit 1: Computer Fundamentals",
      topics: [
        "History of computers; basic hardware, CPU, memory, I/O devices",
        "Computer architecture overview; workstation, desktop, smartphone, embedded systems",
        "Networking basics: LAN, MAN, WAN, Internet, Wi-Fi",
        "Software overview: system vs application, OS functions (Windows, Linux, Android)",
        "Number systems: binary, decimal, octal, hex; conversions",
        "Boolean logic: OR, AND, NOT; logic gates; ASCII codes",
        "Concept of algorithms & flowcharts",
        "Programming levels: high-level, assembly, machine",
        "Compiler vs Interpreter (C, C++, Python)",
        "Procedural vs OOP (BASIC, FORTRAN, C vs C++, Java, Python)"
      ]
    },
    {
      unit: "Semester I - Unit 2: Introduction to Python Programming",
      topics: [
        "Python basics: Hello World, print, variables, data types (int, float, string)",
        "Class and object basics",
        "Operators: assignment, logical, arithmetic",
        "Input, conditionals: if-else, nested if",
        "Collections: List, Tuple, Set, Dictionary",
        "Loops: for, while, nested",
        "Iterators; string operations; functions & recursion",
        "Data structures: arrays (1D, 2D), stack (push/pop), queue (enqueue/dequeue)",
        "Python List methods for DS operations",
        "NumPy basics: arrange(), shape(), ndim(), dtype()",
        "Binary Tree overview",
        "Searching & Sorting: Linear, Binary, Bubble Sort"
      ]
    },
    {
      unit: "Semester I - Unit 3: History of AI & Linear Algebra",
      topics: [
        "History of AI: Turing, Enigma, Mark I, 1956 AI birth, AI Winter, Expert Systems, Modern AI",
        "Distinction: AI vs Pattern Recognition vs ML",
        "Linear Algebra: Matrix ops (add, sub, mult, transpose), identity matrix",
        "Vectors: unit, normal vectors, Euclidean space"
      ]
    },
    {
      unit: "Semester II - Unit 4: History of Data Science & Statistics",
      topics: [
        "History of Data Science; DS lifecycle: Capture, Maintain, Process, Analyze, Communicate",
        "Probability, mean, median, mode, variance, SD",
        "Gaussian distribution, Random sampling (uniform, t-distribution)",
        "Hypothesis testing",
        "Distance functions & Euclidean norm (2D, 3D, nD)",
        "DS Toolkits: Excel, Weka, R"
      ]
    },
    {
      unit: "Semester II - Unit 5: Data Visualization",
      topics: [
        "Data types: textual, signal, visual, sensor, multimodal",
        "Representations: text (tokens, histograms), audio (WAV, MP3), visual (RGB pixels)",
        "Sensor/remote sensing formats",
        "Data cleaning: abnormal/incomplete/corrupted data removal"
      ]
    },
    {
      unit: "Semester II - Unit 6: Database Management",
      topics: [
        "Relational DB concepts: tables, schema, tuples",
        "SQL basics: CREATE, SELECT, INSERT, UPDATE, DELETE",
        "Simple queries"
      ]
    },
    {
      unit: "Semester II - Unit 7: Basics of Business Theory",
      topics: [
        "Business models: B2B, B2C, aggregator, consultancy, turnkey service, content hosting",
        "Key concepts: profit, loss, revenue, break-even, valuation",
        "Data Science in business: banking, manufacturing, consultancy, targeted advertising"
      ]
    }
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdDS11EXAMPLEFORM/viewform"
},

// ---------------- Class 12 ----------------
"12-data-science": {
  title: "Data Science",
  units: [
    {
      unit: "Semester III - Unit 1: Foundation of Statistics for ML",
      topics: [
        "Distance between distributions: Euclidean norm, Pearson coefficient",
        "Chi-square basics",
        "Bayes’ theorem & Bayesian probability",
        "Vector algebra: ℝⁿ, dot product, projections",
        "Statistical measures: Pearson’s coefficient, conditional independence"
      ]
    },
    {
      unit: "Semester III - Unit 2: Introduction to Machine Learning",
      topics: [
        "What is ML? Traditional programming vs ML; ML vs AI",
        "Applications of ML; why machines need to learn",
        "Types: Supervised, Unsupervised, Semi-supervised, Reinforcement Learning",
        "Concepts: training, testing, validation, hypothesis space",
        "Loss functions, bias, linear regression, gradient descent, feature scaling"
      ]
    },
    {
      unit: "Semester III - Unit 3: Supervised Learning",
      topics: [
        "Regression vs Classification; examples",
        "Threshold classifiers, logistic regression, probabilistic interpretation",
        "Multi-class classification (One-vs-All)",
        "Naive Bayes Classifier",
        "Classifier performance: Confusion matrix, TP/TN/FP/FN, Accuracy, Precision, Recall, F1-score, Sensitivity, Specificity",
        "K-fold cross validation"
      ]
    },
    {
      unit: "Semester IV - Unit 4: Decision Trees & Unsupervised Learning",
      topics: [
        "Entropy, Information Gain, ID3 algorithm, Overfitting, Pruning",
        "Supervised vs Unsupervised learning",
        "Clustering: concept, applications, K-means algorithm"
      ]
    },
    {
      unit: "Semester IV - Unit 5: Data Visualization Techniques",
      topics: [
        "Visualization needs",
        "Techniques: Stem & Leaf, Histogram, Box Plot, Pie Chart, Scatter, Contour, Surface, Heatmap",
        "Platforms: Tableau, Google Charts"
      ]
    },
    {
      unit: "Semester IV - Unit 6: Artificial Neural Networks",
      topics: [
        "Biological motivation, neuron model (McCulloch & Pitts)",
        "Activation: Threshold, Sigmoid",
        "Perceptron, delta rule, XOR, hidden layers",
        "ANN architectures: Feedforward, Recurrent",
        "Backpropagation concepts",
        "CNN vs FFNN; Convolution, Pooling, Handwritten digit recognition example"
      ]
    },
    {
      unit: "Semester IV - Unit 7: Case Studies in DS",
      topics: [
        "Weather forecasting with ML",
        "Sentiment analysis",
        "Collaborative filtering recommendation systems"
      ]
    }
  ],
  registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdDS12EXAMPLEFORM/viewform"
},


};


export default function WBSyllabus() {
  const [modalOpen, setModalOpen] = useState(false);
const { grade, subject } = useParams();
const key = `${grade}-${subject}`; // e.g. "11-computer-science"
  const sCfg = WB_SYLLABUS[key];
  console.log("DEBUG:", grade, subject, key);


  // Scroll lock same as before…
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
  }, [modalOpen]);

  if (!sCfg) {
    return (
      <div className="board-page">
        <section className="board-hero">
          <h1 className="board-main-title">Not Found</h1>
          <p className="board-main-subtitle">Unknown subject for Class {grade}.</p>
        </section>
        <div className="board-content">
          <Link to={`/wb/class-${grade}`} className="primary-btn">← Back to Class {grade}</Link>
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
      <section className="board-hero">
        <div className="board-logo-container">
          <img src="/pictures/wb logo final.jpg" alt="WB Board Logo" className="board-main-logo" />
          <h1 className="board-main-title">WB — Class {grade}</h1>
          <p className="board-main-subtitle">{sCfg.title}</p>
        </div>
      </section>

      <div className="board-content">
        <section className="board-section">
          <div className="table-header">
            <Link to={`/wb/class/${grade}`} className="explore-link">
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
                    <td><ul>{topics.map((t, j) => <li key={j}>{t}</li>)}</ul></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="syllabus-actions" style={{ justifyContent: "center", gap: 12 }}>
            <button
              className="secondary-btn"
              onClick={() => setModalOpen(true)}
              disabled={!sCfg.registerLink}
            >
              Register
            </button>
          </div>
        </section>
      </div>

      {modalOpen && (
  <div className="custom-modal" id="registerModal">
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
          />
        ) : (
          <p>Registration link not configured.</p>
        )}
      </div>
    </div>
  </div>
)}
    </div>
  );
}
