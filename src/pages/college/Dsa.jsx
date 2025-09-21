// src/pages/college/Dsa.jsx
import ProgramPage from "./ProgramPage";

const SYLLABUS = [
  { unit: "Unit 1: Introduction", topics: ["Algorithm Specification", "Performance Analysis: Time and Space Complexity", "Asymptotic Notation", "Pointer Declaration and Definition", "Memory Allocation Functions", "Array of Pointers", "Type Definition, Enumerated Types", "Accessing Structures, Complex Structures", "Arrays of Structures", "Structures and Functions"] },
  { unit: "Unit 2: Linked Lists", topics: ["Representations", "Singly Linked List", "Doubly Linked List", "Header Node", "Circular Linked List", "Applications: Josephus Problem", "Sparse Matrix Storage Using Linked List", "Polynomial and Long Integer Arithmetic"] },
  { unit: "Unit 3: Stacks", topics: ["Representing Stacks in C", "Evaluation of Expressions", "Multiple Stacks"] },
  { unit: "Unit 4: Applications of Stacks", topics: ["Infix, Postfix and Prefix Conversions", "Recursive Definition and Processes", "Recursion in C", "Writing Recursive Programs", "Efficiency of Recursion"] },
  { unit: "Unit 5: Recursion Examples", topics: ["Tower of Hanoi", "GCD", "Fibonacci Series"] },
  { unit: "Unit 6: Queues", topics: ["Linear Queue", "Circular Queue", "Priority Queue", "Linked List Representations of Queues"] },
  { unit: "Unit 7: Trees", topics: ["Basic Terminologies", "Binary Tree Representation", "Binary Search Tree (BST)", "AVL Trees", "B Trees", "B+ Trees"] },
  { unit: "Unit 8: Tree Operations", topics: ["Inserting in Trees", "Deleting from Trees", "Searching in Trees"] },
  { unit: "Unit 9: Graphs", topics: ["Graph Operations", "Spanning Trees", "Minimum Cost Spanning Tree", "Shortest Path", "Transitive Closure"] },
  { unit: "Unit 10: Searching", topics: ["Binary Search Algorithm", "Linear Search Algorithm"] },
  { unit: "Unit 11: Sorting", topics: ["Insertion Sort", "Quick Sort", "Merge Sort", "Heap Sort", "Radix Sort"] },
  { unit: "Unit 12: Hashing", topics: ["Hashing Techniques", "Collision Resolution Strategies"] },
];

const WHY = [
  { icon: "🧠", title: "Pattern-Based", description: "Connect data structures to problem patterns and trade-offs." },
  { icon: "⌛", title: "Timed Practice", description: "Interview-style drills with increasing difficulty." },
  { icon: "🔍", title: "Deep Intuition", description: "Edge cases, invariants, and complexity reasoning." },
  { icon: "📈", title: "Progress Tracking", description: "Checkpoints, reviews, and topic-wise mastery." },
  { icon: "🧱", title: "Language Flexible", description: "Code and analyze in C/Java/C++ with parity." },
  { icon: "📚", title: "Notes & Sheets", description: "Curated problem lists and quick-reference notes." },
];

export default function Dsa() {
  return (
    <ProgramPage
      title="Data Structures & Algorithms"
      subtitle="Build efficient and optimized code with essential DSA concepts"
      heroImage="/pictures/dsalogo.png"
      syllabusUnits={SYLLABUS}
      whyFeatures={WHY}
      buttonLabel="View Syllabus"
      registerLink="https://docs.google.com/forms/d/e/1FAIpQLSeaFTxUosfKfBl1PmVKR49LamD900uJnS6rSAVx_7DoWMRG6A/viewform"
    />
  );
}
