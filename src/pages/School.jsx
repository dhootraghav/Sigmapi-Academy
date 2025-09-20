// src/pages/School.jsx
import "../styles/school.css";
import { Link } from "react-router-dom";

const COURSES = [
  {
    to: "/icse", // make these routes later; for now they'll 404 until you add pages
    img: "/pictures/poster1.png",
    badge: "Classes 9–12",
    title: "ICSE Foundations",
    desc: "Comprehensive course that builds strong foundations",
    alt: "ICSE",
  },
  {
    to: "/cbse",
    img: "/pictures/poster2.png",
    badge: "Classes 9–12",
    title: "Excel in CBSE",
    desc: "Interactive lessons aligned with NCERT standards",
    alt: "CBSE",
  },
  {
    to: "/igcse",
    img: "/pictures/poster3.png",
    badge: "Classes 9–12",
    title: "IGCSE Beginner To Advanced",
    desc: "Methodical courses that build deep subject understanding",
    alt: "IGCSE",
  },
  {
    to: "/wbchse", // your old link was wbchseindex.html — use /wbchse if you prefer
    img: "/pictures/poster4.png",
    badge: "Class XI-XII",
    title: "Ace Your WB Board Exams",
    desc: "Tailored study notes for HS students with expert guidance",
    alt: "WBCHSE",
  },
  {
    to: "/ap",
    img: "/pictures/poster5.png",
    badge: "Class XI-XII",
    title: "Build Deep Understanding",
    desc: "Designed to strengthen core concepts & critical thinking",
    alt: "Advanced Placement",
  },
];

export default function School() {
  return (
    <section
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, rgba(255,255,255,0.25), rgb(192, 208, 246))",
      }}
    >
      <br /><br />
      <section className="courses-grid-section">
        <div style={{ textAlign: "center" }}>
          <span className="subject">SCHOOL&nbsp; BASED&nbsp; COURSES</span>
        </div>
        <br /><br /><br />

        <div className="courses-flex-container">
          {COURSES.map((c) => (
            <Link key={c.title} to={c.to} className="course-new-card">
              <img src={c.img} alt={c.alt} className="course-img" />
              <div className="course-info">
                <div className="badge">{c.badge}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <br /><br /><br /><br /><br />
    </section>
  );
}
