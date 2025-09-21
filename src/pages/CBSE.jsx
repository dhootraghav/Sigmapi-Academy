import { Link } from "react-router-dom";
import "../styles/boards.css";

export default function CBSE() {
  return (
    <div className="board-page">
      {/* Board logo and name section */}
      <section className="board-hero">
        <div className="board-logo-container">
          <img src="/pictures/CBSE LOGO FINAL.png" alt="CBSE Logo" className="board-main-logo" />
          <h1 className="board-main-title">CBSE</h1>
          <p className="board-main-subtitle">Central Board of Secondary Education</p>
        </div>
      </section>

      <div className="board-content">
        {/* Class Selection Cards */}
        <section className="board-section">
          <h2>Select Your Class</h2>
          <div className="class-cards-container">
            <Link to="/cbse/class-9" className="class-card">
              <div className="class-number">9</div>
              <h3>Class 9</h3>
              <p>Foundation Building</p>
            </Link>
            <Link to="/cbse/class-10" className="class-card">
              <div className="class-number">10</div>
              <h3>Class 10</h3>
              <p>Board Preparation</p>
            </Link>
            <Link to="/cbse/class-11" className="class-card">
              <div className="class-number">11</div>
              <h3>Class 11</h3>
              <p>Advanced Concepts</p>
            </Link>
            <Link to="/cbse/class-12" className="class-card">
              <div className="class-number">12</div>
              <h3>Class 12</h3>
              <p>Final Preparation</p>
            </Link>
          </div>
        </section>

        {/* Merged Why Choose + Teaching Approach Section */}
        <section className="board-section">
          <h2>Why Choose Our CBSE Program?</h2>
          <p>
            <strong>In-depth NCERT curriculum coverage that goes beyond school teaching!</strong> We provide 
            comprehensive understanding of every CBSE topic with personalized attention and expert 
            mentorship. Our program is perfectly aligned with NCERT guidelines while building 
            deeper conceptual knowledge.
          </p>
          
          <div className="board-features">
            <div className="board-feature">
              <h3>🎯 Complete NCERT Coverage</h3>
              <p>Every single CBSE topic covered in depth - nothing left out. Perfect alignment with NCERT curriculum.</p>
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
              <p>Learn from a mentor with years of experience, guiding you through every step of your CBSE journey.</p>
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

