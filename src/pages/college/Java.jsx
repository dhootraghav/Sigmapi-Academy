// src/pages/college/Java.jsx
import ProgramPage from "./ProgramPage";

const SYLLABUS = [
  { unit: "Unit 1: Introduction to Java", topics: ["Introduction to Java Language"] },
  { unit: "Unit 2: Core Programming Concepts", topics: ["Fundamental Data Types", "Decisions", "Loops", "Methods"] },
  { unit: "Unit 3: Data Structures", topics: ["Arrays and Array Lists", "The Java Collections Framework", "Sorting and Searching"] },
  { unit: "Unit 4: Input/Output & Error Handling", topics: ["Input/Output", "Exception Handling"] },
  { unit: "Unit 5: Object-Oriented Programming", topics: ["Objects and Classes", "Inheritance and Interfaces", "Object-Oriented Design"] },
  { unit: "Unit 6: Advanced Java Concepts", topics: ["Multithreading", "Recursion"] },
  { unit: "Unit 7: Graphical Interfaces", topics: ["Graphical User Interfaces", "Advanced Graphical User Interfaces"] },
  { unit: "Unit 8: Tools & IDEs", topics: ["Introduction to IDE like Eclipse and NetBeans"] },
  { unit: "Unit 9: JavaFX", topics: ["Introduction to JavaFX", "Colors and Shapes", "Graphics, Audio, and MouseEvents"] },
  { unit: "Unit 10: Final Project", topics: ["Developing a Java-based animation, application or game"] },
];

const WHY = [
  { icon: "🎯", title: "Strong Foundations", description: "From syntax to OOP to GUIs in a clean learning curve." },
  { icon: "🧠", title: "Concept → Practice", description: "Hands-on labs and frequent mini-exercises." },
  { icon: "🧰", title: "Tooling", description: "IDE workflows and JavaFX for practical apps." },
  { icon: "📚", title: "Notes & Recordings", description: "Concise summaries and revisitable sessions." },
  { icon: "📈", title: "Interview Prep", description: "Sorting/searching and collections tie-ins." },
  { icon: "🚀", title: "Capstone", description: "Showcase-ready final application or game." },
];

export default function Java() {
  return (
    <ProgramPage
      title="JAVA Programming"
      subtitle="Learn the fundamentals and advanced features of Java"
      heroImage="/pictures/java.webp"
      syllabusUnits={SYLLABUS}
      whyFeatures={WHY}
      buttonLabel="View Syllabus"
      registerLink="https://docs.google.com/forms/d/e/1FAIpQLScBquzVIw7RCDS9-6Bp-cRd3hp_JkRPAD1lhT5GNzu-Npbvag/viewform"
    />
  );
}

