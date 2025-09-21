// src/pages/college/CProg.jsx
import ProgramPage from "./ProgramPage";

const SYLLABUS = [
  { unit: "Unit 1: Introduction to Programming", topics: ["Introduction to Programming Concepts", "Components of a Computer System: Memory, Processor, I/O Devices, Storage", "Operating System", "Concept of Assembler, Compiler, Interpreter, Loader, Linker"] },
  { unit: "Unit 2: Algorithms & Flowcharts", topics: ["Idea of Algorithm", "Representation: Flowchart and Pseudocode with Examples", "From Algorithms to Programs", "Understanding Source Code"] },
  { unit: "Unit 3: C Programming Basics", topics: ["Structure of a C Program", "Writing & Executing First C Program", "Syntax and Logical Errors", "Object and Executable Code"] },
  { unit: "Unit 4: Components of C Language", topics: ["Standard Input/Output in C", "Fundamental Data Types", "Variables and Memory Locations", "Storage Classes"] },
  { unit: "Unit 5: Expressions & Branching", topics: ["Arithmetic Expressions and Precedence", "Operators: Numeric, Relational, Logical, Bitwise, Assignment", "Operator Precedence and Associativity", "Conditional Branching: if, else-if, switch, break, default, nesting"] },
  { unit: "Unit 6: Loops & Functions", topics: ["Iteration and Looping: while, do-while, for", "Multiple Loop Variables", "break and continue", "Functions: Introduction, Types, Call by Value & Reference", "Recursive Functions", "Functions with Arrays"] },
  { unit: "Unit 7: Arrays & Basic Algorithms", topics: ["Array Notation and Representation", "Single and Multi-dimensional Arrays", "Character Arrays and Strings", "Structures, Unions, Enumerated Types", "Array of Structures", "Passing Arrays to Functions", "Searching & Sorting (Bubble, Insertion, Selection)", "Finding Roots of Equations", "Notion of Order of Complexity"] },
  { unit: "Unit 8: Pointers", topics: ["Pointer Basics and Declaration", "Applications of Pointers", "Dynamic Memory Allocation: malloc, calloc, realloc, free", "Self-Referential Structures", "Concept of Linked List (Introduction Only)"] },
  { unit: "Unit 9: File Handling & Preprocessors", topics: ["File I/O Functions in C", "Standard C Preprocessors", "Defining and Calling Macros", "Command-Line Arguments"] },
];

const WHY = [
  { icon: "⚙️", title: "Systems Mindset", description: "Master memory, pointers, and low-level control." },
  { icon: "🧪", title: "Hands-on Labs", description: "Practical exercises with I/O, arrays, and functions." },
  { icon: "🧰", title: "Toolchain", description: "Compiler flags, debugging, and build basics." },
  { icon: "📚", title: "Clear Notes", description: "Minimal fluff—focused explanations and patterns." },
  { icon: "📈", title: "Career Value", description: "Solid base for embedded and performance roles." },
  { icon: "🚀", title: "Project", description: "A tangible C utility or library to showcase." },
];

export default function CProg() {
  return (
    <ProgramPage
      title="C Programming"
      subtitle="Dive into structured programming and low-level memory control"
      heroImage="/pictures/cimage.png"
      syllabusUnits={SYLLABUS}
      whyFeatures={WHY}
      buttonLabel="View Syllabus"
      registerLink="https://docs.google.com/forms/d/e/1FAIpQLSdLjG5gAj5pmxadRYkyQMs-wZu9RGJB9j0Dtsk3b9OoOQdLeA/viewform"
    />
  );
}
