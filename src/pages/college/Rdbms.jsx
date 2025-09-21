// src/pages/college/Rdbms.jsx
import ProgramPage from "./ProgramPage";

const SYLLABUS = [
  { unit: "Unit 1: Introduction", topics: ["Database Systems", "RDBMS Definition", "Data Models", "3-Schema Architecture", "Challenges in Building RDBMS", "Components of an RDBMS"] },
  { unit: "Unit 2: Relational Data Model", topics: ["Concept of Relations and Their Characteristics", "Schema vs. Instance", "Integrity Constraints", "E/R Model and Extended E/R Model", "Converting E/R and Extended E/R to Relational Schema"] },
  { unit: "Unit 3: Relational Query Language", topics: ["Relational Algebra", "Tuple Relational Calculus", "Domain Relational Calculus", "Introduction to SQL", "Data Definition in SQL", "Table and Constraint Definitions", "Data Manipulation in SQL", "Nested Queries", "Aggregation Concepts"] },
  { unit: "Unit 4: Relational Database Design", topics: ["Functional Dependencies and Normal Forms", "Armstrong’s Axioms for FDs", "Closure of FD Sets", "Minimal Covers", "Decomposition to 3NF and BCNF", "Algorithms for Normalization", "Multi-Valued Dependencies and 4NF"] },
  { unit: "Unit 5: Transaction Processing", topics: ["Concepts of Transaction Processing", "ACID Properties", "Concurrency Control", "Locking-Based Protocols", "Recovery and Logging Methods"] },
  { unit: "Unit 6: Data Storage and Indexing", topics: ["File Organizations", "Primary and Secondary Index Structures", "Hash-Based Indexing", "Dynamic Hashing Techniques", "Multi-Level Indexes", "B-Tree and B+ Tree Indexing"] },
];

const WHY = [
  { icon: "🧩", title: "Schema Design", description: "ER modeling to normalized relational schemas." },
  { icon: "🧠", title: "SQL Mastery", description: "From algebra/calculus foundations to robust SQL." },
  { icon: "🛡️", title: "Correctness", description: "Constraints, transactions, and recovery principles." },
  { icon: "⚡", title: "Performance", description: "Indexing and storage structures that matter." },
  { icon: "🔧", title: "Practical Skills", description: "Hands-on work that maps directly to real DB tasks." },
  { icon: "📦", title: "Portfolio DB", description: "Design and implement a relational project end-to-end." },
];

export default function Rdbms() {
  return (
    <ProgramPage
      title="Relational Database Management System"
      subtitle="Understand the core concepts of databases and SQL"
      heroImage="/pictures/rdbms.png"
      syllabusUnits={SYLLABUS}
      whyFeatures={WHY}
      buttonLabel="View Syllabus"
      registerLink="https://docs.google.com/forms/d/e/1FAIpQLSfFY07694MDulmJBnJjxuq1k3eYS9jurYA7KkujBBHKi05M0g/viewform"
    />
  );
}
