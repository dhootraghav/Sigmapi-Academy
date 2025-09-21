// src/pages/college/JavaAdvanced.jsx
import ProgramPage from "./ProgramPage";

const SYLLABUS = [
  { unit: "Unit 1: Introduction to Advanced Java", topics: ["Introduction to Advanced Java", "JDBC in Simple Way", "Storage Areas"] },
  { unit: "Unit 2: JDBC Fundamentals", topics: ["Introduction to JDBC", "JDBC Architecture", "JDBC API", "Driver Interface vs Driver Class vs Driver Software", "Types of JDBC Drivers", "Summary Table of All 5 JDBC Drivers"] },
  { unit: "Unit 3: JDBC Application Development", topics: ["Standard Steps to Develop JDBC Applications", "Working with Type-1, Type-2, Type-3, Type-4, and Type-5 Drivers", "Program to Create and Drop Table", "Realtime Coding Standards for JDBC Application"] },
  { unit: "Unit 4: Dynamic SQL Operations", topics: ["Reading Dynamic Input from Keyboard", "Forming SQL Queries with Dynamic Input", "Program for Basic CRUD Operations", "Life Cycle of SQL Query Executor"] },
  { unit: "Unit 5: JDBC in IDE and Databases", topics: ["Developing and Running JDBC Application with NetBeans IDE", "Working with MySQL Database"] },
  { unit: "Unit 6: Advanced Statements", topics: ["PreparedStatement", "CallableStatement", "Stored Procedures", "Cursors", "Functions", "Difference between Statement, PreparedStatement, and CallableStatement", "SQL Injection Attack"] },
  { unit: "Unit 7: Batch Operations & Execution Methods", topics: ["Batch Updates", "executeQuery() vs executeUpdate() vs execute() vs executeBatch()", "Insert and Retrieve Date Values"] },
  { unit: "Unit 8: BLOB & CLOB Handling", topics: ["BLOB & CLOB Introduction", "Insert & Retrieve BLOB Type", "Insert & Retrieve CLOB Type"] },
  { unit: "Unit 9: Connection Management", topics: ["Connection Pooling", "Working with Properties", "Different Ways to Get Connection Object"] },
  { unit: "Unit 10: Transaction Management", topics: ["Transaction Management", "Savepoints", "Transaction Concurrency Problems and Isolation Levels"] },
  { unit: "Unit 11: MetaData in JDBC", topics: ["Database Metadata", "ResultSet Metadata", "Parameter Metadata"] },
  { unit: "Unit 12: ResultSet and RowSet", topics: ["Working with Non-Traditional Databases (e.g., Excel)", "ResultSet Types: Forward Only, Scrollable, Sensitive/Insensitive, Read-Only & Updatable", "ResultSet Holdability", "RowSet vs ResultSet", "Working with All RowSets"] },
  { unit: "Unit 13: Miscellaneous", topics: ["Miscellaneous Topics like RowId, etc."] },
];

const WHY = [
  { icon: "🏭", title: "Real Backend Skills", description: "JDBC, SQL, and connection pooling in production-style setups." },
  { icon: "🔒", title: "Secure by Default", description: "Avoid SQL injection and apply safe patterns." },
  { icon: "🧪", title: "Quality & Testing", description: "Standards, debugging, and query lifecycle insights." },
  { icon: "🧰", title: "Tools & IDE", description: "Work within NetBeans/MySQL and JDBC drivers effectively." },
  { icon: "⚙️", title: "Performance", description: "Batch updates and metadata for efficient data access." },
  { icon: "🚀", title: "Portfolio-Ready", description: "End-to-end DB-driven Java app for interviews." },
];

export default function JavaAdvanced() {
  return (
    <ProgramPage
      title="Advanced JAVA"
      subtitle="Explore enterprise-level Java (JDBC & beyond)"
      heroImage="/pictures/java.webp"
      syllabusUnits={SYLLABUS}
      whyFeatures={WHY}
      buttonLabel="View Syllabus"
      registerLink="https://forms.gle/your-java-google-form"
    />
  );
}
