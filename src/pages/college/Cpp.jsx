// src/pages/college/Cpp.jsx
import ProgramPage from "./ProgramPage";

const SYLLABUS = [
  { unit: "Unit 1: Fundamentals", topics: ["ANSI C++ Fundamentals", "Block Structure of C and C++ Programs", "Fundamentals of Syntax", "Built-in Data Types", "The Preprocessor and Macros"] },
  { unit: "Unit 2: Data Types & Scope", topics: ["Data Types and Qualifiers", "Constants and String Literals", "Static vs. Automatic Storage", "Scope and Variables", "Initialization Rules"] },
  { unit: "Unit 3: Operators and Expressions", topics: ["Arithmetic, Logical, and Bit Operators", "Precedence and Associativity", "Assignment", "Type Conversion Rules", "Type Casting"] },
  { unit: "Unit 4: Flow Control", topics: ["if, switch", "while, do, for loops", "Programming Style"] },
  { unit: "Unit 5: Pointers", topics: ["Declaring and Using Pointers", "Pointer Arithmetic", "Dereferencing", "Pointers vs. Arrays"] },
  { unit: "Unit 6: Moving from C to C++", topics: ["Compiler Directives", "Stream Console I/O", "Explicit Operators", "Standard Libraries", "Data Control Capabilities"] },
  { unit: "Unit 7: Data Handling", topics: ["New Declaration Features", "Constant & Volatile Storage", "Enumerated Types", "Pointers to Constant Storage", "References and Constant References", "Global Data"] },
  { unit: "Unit 8: Functions", topics: ["Function Prototypes", "Function Overloading", "Name Resolution", "Call by Value and Reference", "Inline Functions", "Default and Constant Arguments"] },
  { unit: "Unit 9: Strings", topics: ["Character Strings", "The String Class", "Operators and Member Functions"] },
  { unit: "Unit 10: Objects and Classes", topics: ["Creating and Using Objects", "Constructors & Destructors", "Scope and Object Methods", "Constant Methods", "Containment"] },
  { unit: "Unit 11: Memory Management", topics: ["Dynamic Memory Allocation (new/delete)", "Memory Allocation Errors", "Static, Heap, and Automatic Memory"] },
  { unit: "Unit 12: Object Creation Control", topics: ["Copy Constructors", "Conversion Constructors", "Object Copying"] },
  { unit: "Unit 13: Inheritance", topics: ["Reuse, Composition vs Inheritance", "Public/Protected/Private Inheritance", "Constructors and Initialization", "Inherited Copy Constructors", "Destructors and Maintenance"] },
  { unit: "Unit 14: I/O Streaming", topics: ["iostream Library", "Stream Manipulators", "Formatted I/O", "File Streams", "Overloading Stream Operators"] },
  { unit: "Unit 15: Object-Oriented Programming", topics: ["Object Concepts and Definitions", "Information Hiding and Encapsulation", "Classes and Instances", "Polymorphism and Overloading"] },
  { unit: "Unit 16: Templates", topics: ["Purpose of Template Classes", "Template Inheritance", "Container Classes", "STL and Vector Class"] },
  { unit: "Unit 17: Exceptions", topics: ["Types and Handling of Exceptions", "Triggering Exceptions", "Memory Error Handling"] },
  { unit: "Unit 18: Project Structure & Integration", topics: ["Organizing C++ Source Files", "Integrating C with C++ Projects"] },
  { unit: "Unit 19: Reliability", topics: ["Function Prototypes", "Type Checking", "Constant Types", "Access Control"] },
  { unit: "Unit 20: Polymorphism", topics: ["Calling Overridden Methods", "Virtual Methods and Destructors", "Abstract Base Classes", "Dynamic Binding"] },
  { unit: "Unit 21: Multiple Inheritance", topics: ["Virtual Inheritance", "Base Class Ambiguities", "Virtual Base Classes"] },
  { unit: "Unit 22: Classes and Declarations", topics: ["Class Structure and Syntax", "Member Functions", "Inline & Friend Functions", "Static and Friend Classes"] },
  { unit: "Unit 23: Operator Overloading", topics: ["Member vs. Non-Member Operators", "Assignment and Equality Operators", "Operator Precedence", "The this Pointer"] },
  { unit: "Unit 24: Standard Template Library (STL)", topics: ["STL Containers and Algorithms", "Vector Class", "Use of Libraries"] },
];

const WHY = [
  { icon: "🚀", title: "Modern C++ Path", description: "Build from C foundations to strong C++ OOP and STL usage." },
  { icon: "🧠", title: "Deep Language Skills", description: "Memory model, object model, and templates demystified." },
  { icon: "🧰", title: "Real Tooling", description: "Streams, files, and project structure for practical work." },
  { icon: "⚙️", title: "Performance Awareness", description: "Pointers, allocation, and design trade-offs." },
  { icon: "📚", title: "Comprehensive Track", description: "Covers exceptions, polymorphism, and multiple inheritance." },
  { icon: "📦", title: "Project Ready", description: "Integrate and organize production-like codebases." },
];

export default function Cpp() {
  return (
    <ProgramPage
      title="C++ Programming"
      subtitle="Master object-oriented programming with C++"
      heroImage="/pictures/cpp.svg"
      syllabusUnits={SYLLABUS}
      whyFeatures={WHY}
      buttonLabel="View Syllabus"
      registerLink="https://docs.google.com/forms/d/e/1FAIpQLSdTz-41_HglwEhbXtfcnQT2DYOf4gP7lmouuxoGJqcbE_x3ww/viewform"
    />
  );
}
