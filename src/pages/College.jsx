// src/pages/College.jsx
import { Link } from "react-router-dom";
import "../styles/school.css"; // reuses the same CSS you gave (it already has coursesc-* rules)

const COURSES = [
  {
    to: "/college/java",
    img: "/pictures/java.webp",
    imgClass: "course-img",
    badge: "Software Development",
    title: "JAVA Programming",
    desc: "Learn the fundamentals and advanced features of Java",
    alt: "Java",
  },
  {
    to: "/college/cpp",
    img: "/pictures/cpp.svg",
    imgClass: "course-img",
    badge: "Software Development",
    title: "C++ Programming",
    desc: "Master object-oriented programming with C++",
    alt: "C++",
  },
  {
    to: "/college/rdbms",
    img: "/pictures/rdbms.png",
    imgClass: "course-img",
    badge: "Data Management",
    title: "Relational Database Management System",
    desc: "Understand the core concepts of databases and SQL",
    alt: "RDBMS",
  },
  {
    to: "/college/c",
    img: "/pictures/cimage.png",
    imgClass: "coursec-img", // you had special padding for this class
    badge: "Software Development",
    title: "C Programming",
    desc: "Dive into structured programming and low-level memory control",
    alt: "C programming",
  },
  {
    to: "/college/dsa",
    img: "/pictures/dsalogo.png",
    imgClass: "coursec-img",
    badge: "Algorithmic Thinking",
    title: "Data Structures & Algorithms",
    desc: "Build efficient and optimized code with essential DSA concepts",
    alt: "DSA",
  },
  {
    to: "/college/java-advanced",
    img: "/pictures/java.webp",
    imgClass: "course-img",
    badge: "Backend Development",
    title: "Advanced JAVA",
    desc: "Explore enterprise-level Java",
    alt: "Advanced Java",
  },
];

export default function College() {
  return (
    <section
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.25), rgb(192, 208, 246))",
      }}
    >
      <br />
      <br />
      <section className="courses-grid-section">
        <div style={{ textAlign: "center" }}>
          <span className="subject">COLLEGE&nbsp; BASED&nbsp; COURSES</span>
        </div>

        <br />

        <div className="coursesc-flex-container">
          {COURSES.map((c) => (
            <Link key={c.title} to={c.to} className="course-new-card">
              <img src={c.img} alt={c.alt} className={c.imgClass} />
              <div className="course-info">
                <div className="badge">{c.badge}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
