import { Link } from "react-router-dom";
import "../styles/boards.css";

export default function WB() {
  return (
    <div className="board-page">
      {/* Board logo and name section */}
      <section className="board-hero">
        <div className="board-logo-container">
          <img src="/pictures/wb logo final.jpg" alt="WB Board Logo" className="board-main-logo" />
          <h1 className="board-main-title">WB Board</h1>
          <p className="board-main-subtitle">West Bengal Council of Higher Secondary Education</p>
        </div>
      </section>

      <div className="board-content">
        {/* Class Selection Cards - Only Class 11 and 12 */}
        <section className="board-section">
          <h2>Select Your Class</h2>
          <div className="class-cards-container wb-classes">
            <Link to="/wb/class-11" className="class-card">
              <div className="class-number">11</div>
              <h3>Class 11</h3>
              <p>Foundation Building</p>
            </Link>
            <Link to="/wb/class-12" className="class-card">
              <div className="class-number">12</div>
              <h3>Class 12</h3>
              <p>Board Preparation</p>
            </Link>
          </div>
        </section>

        {/* Merged Why Choose + Teaching Approach Section */}
        <section className="board-section">
          <h2>Why Choose Our WB Board Program?</h2>
          <p>
            <strong>Comprehensive WBCHSE coverage that goes beyond school teaching!</strong> We provide 
            in-depth understanding of every WB Board topic with personalized attention and expert 
            mentorship. Our program is perfectly aligned with your school syllabus while building 
            deeper conceptual knowledge.
          </p>
          
          <div className="board-features">
            <div className="board-feature">
              <h3>🎯 Complete WBCHSE Syllabus</h3>
              <p>Every single WB Board topic covered in depth - nothing left out. Perfect alignment with your school curriculum.</p>
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
              <p>Learn from a mentor with years of experience, guiding you through every step of your WB Board journey.</p>
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

