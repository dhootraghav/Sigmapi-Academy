import { useEffect, useRef, useState } from "react";

export default function Home() {
  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Lock body scroll when modal is open and restore on close
  useEffect(() => {
    if (typeof document === "undefined") return;

    const body = document.body;
    if (modalOpen) {
      // preserve current scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.overflow = 'hidden';
      body.setAttribute('data-scroll-y', String(scrollY));
    } else {
      // restore
      const stored = body.getAttribute('data-scroll-y');
      if (stored) {
        const scrollY = parseInt(stored, 10);
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.overflow = '';
        body.removeAttribute('data-scroll-y');
        window.scrollTo(0, scrollY);
      }
    }

    // cleanup in case component unmounts while modal is open
    return () => {
      if (body.getAttribute('data-scroll-y')) {
        const stored = body.getAttribute('data-scroll-y');
        const scrollY = stored ? parseInt(stored, 10) : 0;
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.overflow = '';
        body.removeAttribute('data-scroll-y');
        window.scrollTo(0, scrollY);
      }
    };
  }, [modalOpen]);

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
  const rafRef = useRef(null);
  const speedRef = useRef(0.22); // slightly slower default (~220px/sec)
  const isPausedRef = useRef(false);
  const scrollBy = (dir) => {
    const el = containerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  // Auto-scroll loop using requestAnimationFrame. We duplicate the track content in render
  // so when scrollLeft >= scrollWidth / 2 we wrap back by subtracting half.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Detect touch devices and slightly reduce speed for smoother mobile experience
    const isTouch = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouch) {
      speedRef.current = Math.max(0.12, speedRef.current * 0.55); // safer default on mobile
    }

    // Temporarily disable native scroll-snap while auto-scrolling to avoid snap jumps
    el.classList.add("auto-scrolling");

    let lastTime = performance.now();

    const step = (t) => {
      if (isPausedRef.current) {
        lastTime = t;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const dt = t - lastTime;
      lastTime = t;
      // advance by speed * dt
      const delta = speedRef.current * dt;
      el.scrollLeft = el.scrollLeft + delta;

      // When we've scrolled past half (since we duplicate), wrap to start
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = el.scrollLeft - el.scrollWidth / 2;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

  // Pause on hover/focus
  const onEnter = () => (isPausedRef.current = true);
  const onLeave = () => (isPausedRef.current = false);
  el.addEventListener("mouseenter", onEnter);
  el.addEventListener("mouseleave", onLeave);
  el.addEventListener("focusin", onEnter);
  el.addEventListener("focusout", onLeave);
  // Pause on touch / pointer interactions
  const onPointerDown = () => (isPausedRef.current = true);
  const onPointerUp = () => (isPausedRef.current = false);
  el.addEventListener("touchstart", onPointerDown, { passive: true });
  el.addEventListener("touchend", onPointerUp);
  el.addEventListener("touchcancel", onPointerUp);
  el.addEventListener("pointerdown", onPointerDown);
  el.addEventListener("pointerup", onPointerUp);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("focusout", onLeave);
      el.removeEventListener("touchstart", onPointerDown);
      el.removeEventListener("touchend", onPointerUp);
      el.removeEventListener("touchcancel", onPointerUp);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointerup", onPointerUp);

      // restore snap behavior
      el.classList.remove("auto-scrolling");
    };
  }, []);

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

          <div className="carousel-container" ref={containerRef} tabIndex={0} aria-label="Courses carousel">
            <div className="carousel-track">
              {[
                { src: "/pictures/python logo.png", title: "Python" },
                { src: "/pictures/c and cpp.png", title: "C & C++" },
                { src: "/pictures/java.webp", title: "Java" },
                { src: "/pictures/rdbms.png", title: "Relational Data Base" },
                { src: "/pictures/ai logo.avif", title: "Artificial Intelligence" },
                { src: "/pictures/robotics.jpg", title: "Robotics" },
              ].concat([
                // duplicate for seamless loop
                { src: "/pictures/python logo.png", title: "Python" },
                { src: "/pictures/c and cpp.png", title: "C & C++" },
                { src: "/pictures/java.webp", title: "Java" },
                { src: "/pictures/rdbms.png", title: "Relational Data Base" },
                { src: "/pictures/ai logo.avif", title: "Artificial Intelligence" },
                { src: "/pictures/robotics.jpg", title: "Robotics" },
              ]).map((c, idx) => (
                <div className="course-card" key={c.title + idx} tabIndex={0} role="group" aria-label={c.title}>
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
              Satyender Kumar Mishra founded Sigmapi Academy, blending a strong academic foundation with deep industry expertise.
              He holds a B.Tech in Computer Science and Engineering from IIT Kharagpur and an M.Tech in Computer Science and Engineering from the Indian Statistical Institute.
              For over 16 years (2007–2024) as a Senior Research Software Engineer at IBM, Satyender worked on cutting-edge innovations, leading research-driven projects that solved complex real-world problems.
              Since 2005, he has been building Sigmapi Academy with a mission to transform learning through technology, combining technical excellence with human-centered design to create impactful educational experiences.
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
