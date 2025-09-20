import { useEffect, useRef, useState } from "react";

export default function Home() {
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  // VANTA.GLOBE init/destroy
  useEffect(() => {
    const init = () => {
      if (window.VANTA && window.VANTA.GLOBE && vantaRef.current && !vantaInstance.current) {
        vantaInstance.current = window.VANTA.GLOBE({
          el: vantaRef.current,
          color: 0x0077ff,
          backgroundColor: 0xf5f6f7,
          scale: 1.0,
          scaleMobile: 0.75,
        });
      }
    };
    init();
    const t = setTimeout(init, 100);
    return () => {
      clearTimeout(t);
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, []);

  // Simple carousel controls (scroll-based, works with your layout)
  const containerRef = useRef(null);
  const scrollBy = (dir) => {
    const el = containerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <>
      {/* HERO with Vanta */}
      <div id="vanta-globe" className="hero" ref={vantaRef}>
        <div className="hero-container">
          <div className="hero-text">
            <h2>Welcome to</h2>
            <h2><span>SigmaPi</span> Academy</h2>
            <p>Unlock Your Potential In Computer Science &amp; Artificial Intelligence!</p>
            <div className="hero-buttons">
              <button className="register" onClick={() => setModalOpen(true)}>Register</button>
              <a className="about-us" href="#about">About</a>
            </div>
          </div>
        </div>
      </div>

      {/* COURSES */}
      <section className="course-section">
        <h2>
          <span>Start Learning</span> <span className="highlight">Keep Growing</span>
        </h2>

        <div className="carousel-wrapper">
          <button className="arrow left" onClick={() => scrollBy(-1)}>&#8249;</button>

          <div className="carousel-container" ref={containerRef}>
            <div className="carousel-track">
              {[
                { src: "/pictures/python logo.png", title: "Python" },
                { src: "/pictures/c and cpp.png", title: "C & C++" },
                { src: "/pictures/java.webp", title: "Java" },
                { src: "/pictures/rdbms.png", title: "Relational Data Base" },
                { src: "/pictures/ai logo.avif", title: "Artificial Intelligence" },
                { src: "/pictures/robotics.jpg", title: "Robotics" },
              ].map((c) => (
                <div className="course-card" key={c.title}>
                  <img src={c.src} alt={c.title} />
                  <h3>{c.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={() => scrollBy(1)}>&#8250;</button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">
        <svg className="about-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#f5f6f7"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,101.3C672,107,768,149,864,154.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>

        <br /><br />
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p className="subtitle">Creating technology-driven learning experiences</p>
            <p>
              <strong>SigmaPi Academy</strong> is a forward-thinking education studio offering
              curated programs in artificial intelligence, robotics, and software development. We
              help students and professionals gain real-world tech skills through immersive,
              project-based learning.
            </p>
            <h3 style={{ fontSize: "1em" }}>Meet the Founder</h3>
            <p>
              Satyender Kumar Mishra, a passionate educator and engineer with 10+ years of
              experience, has worked with startups, universities, and global edtech platforms. He
              blends deep technical knowledge with human-centered design to deliver impactful learning.
            </p>
          </div>

          <div className="about-video">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/j211nWkN3Fk?rel=0&modestbranding=1&showinfo=0&controls=1"
                title="Embedded video"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <br /><br />
      </section>

      {/* REGISTER MODAL (uses your classes) */}
      {modalOpen && (
        <div className="custom-modal" id="registerModal" style={{ display: "block" }}>
          <div className="modal-overlay" id="modalOverlay" onClick={() => setModalOpen(false)} />
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <img src="/pictures/SigmaPi Logo.png" width="30" height="30" alt="Logo" />
              <span className="close-button" id="closeModal" onClick={() => setModalOpen(false)}>
                &times;
              </span>
            </div>
            <div className="modal-body">
              <iframe
                style={{ width: "100%", height: "70vh", border: "none" }}
                src="https://docs.google.com/forms/d/e/1FAIpQLSe_km_Qpf4Vh0bY7QELvZ0QbQHFLHU4Y3b3SQg3X26aIQXtNw/viewform?embedded=true"
                title="Register Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
