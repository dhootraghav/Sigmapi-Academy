import { Link } from "react-router-dom";
import "../styles/boards.css";

export default function ICSE() {
  return (
    <div className="board-page">
      {/* Board logo and name section */}
      <section className="board-hero">
        <div className="board-logo-container">
          <img src="/pictures/isc.png" alt="ICSE Logo" className="board-main-logo icse-logo" />
          <h1 className="board-main-title">ICSE/ISC</h1>
          <p className="board-main-subtitle">Indian Certificate of Secondary Education</p>
        </div>
      </section>

      <div className="board-content">
        {/* Class Selection Cards */}
        <section className="board-section">
          <h2>Select Your Class</h2>
          <div className="class-cards-container">
            <Link to="/icse/class/9" className="class-card">
              <div className="class-number">9</div>
              <h3>Class 9</h3>
              <p>Foundation Building</p>
            </Link>
            <Link to="/icse/class/10" className="class-card">
              <div className="class-number">10</div>
              <h3>Class 10</h3>
              <p>Board Preparation</p>
            </Link>
            <Link to="/icse/class/11" className="class-card">
              <div className="class-number">11</div>
              <h3>Class 11</h3>
              <p>Advanced Concepts</p>
            </Link>
            <Link to="/icse/class/12" className="class-card">
              <div className="class-number">12</div>
              <h3>Class 12</h3>
              <p>Final Preparation</p>
            </Link>
          </div>
        </section>

        {/* Merged Why Choose + Teaching Approach Section */}
        <section className="board-section">
          <h2>Why Choose Our ICSE/ISC Program?</h2>
          <p>
            <strong>In-depth curriculum coverage that no one else teaches!</strong> We go beyond surface-level 
            learning to provide comprehensive understanding of every ICSE/ISC topic. Our program is designed 
            to align perfectly with your school syllabus while building deeper conceptual knowledge.
          </p>
          
          <div className="board-features">
            <div className="board-feature">
              <h3>🎯 Complete Syllabus Coverage</h3>
              <p>Every single ICSE/ISC topic covered in depth - nothing left out. We ensure 100% alignment with your school curriculum.</p>
            </div>
            <div className="board-feature">
              <h3>👨‍🏫 One-on-One Online Classes</h3>
              <p>Personalized attention with recorded sessions and detailed notes from every class for your review.</p>
            </div>
            <div className="board-feature">
              <h3>🧠 Concept Strengthening Tests</h3>
              <p>Regular tests and practice questions designed to make your concepts rock-solid and build confidence.</p>
            </div>
            <div className="board-feature">
              <h3>🎓 Expert Mentor Guidance</h3>
              <p>Learn from a mentor with years of experience, guiding you through every step of your ICSE/ISC journey.</p>
            </div>
            <div className="board-feature">
              <h3>📚 Detailed Notes</h3>
              <p>Comprehensive notes from every class, making revision and self-study effortless.</p>
            </div>
            <div className="board-feature">
              <h3>🎥 Recorded Classes</h3>
              <p>Access to all class recordings so you can review and learn at your own pace.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

