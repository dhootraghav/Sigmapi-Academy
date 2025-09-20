import { useEffect, useRef } from "react";
import "../styles/contact.css";

export default function Contact() {
  const svgRef = useRef(null);
  const squaresRef = useRef([]);

  // === Grid helpers (ported from your inline <script>) ===
  const gridSize = 23;

  function viewportSize() {
    const w = window.visualViewport ? window.visualViewport.width : window.innerWidth;
    const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    return { w: Math.ceil(w) + 2, h: Math.ceil(h) + 2 }; // oversize 2px
  }

  function buildGrid() {
    const svg = svgRef.current;
    if (!svg) return;

    // clear
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    squaresRef.current = [];

    const { w, h } = viewportSize();
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

    const cols = Math.ceil(w / gridSize) + 1;
    const rows = Math.ceil(h / gridSize) + 1;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        r.setAttribute("x", String(x * gridSize));
        r.setAttribute("y", String(y * gridSize));
        r.setAttribute("width", "20");
        r.setAttribute("height", "20");
        r.setAttribute("class", "square");
        r.style.fill = "#e6f0ff";
        svg.appendChild(r);
        squaresRef.current.push(r);
      }
    }
  }

  function highlightAt(cx, cy) {
    const squares = squaresRef.current;
    for (const sq of squares) {
      const x = parseFloat(sq.getAttribute("x")) + 10;
      const y = parseFloat(sq.getAttribute("y")) + 10;
      const dist = Math.hypot(cx - x, cy - y);
      if (dist < 150) {
        const intensity = 1 - dist / 150;
        const lightness = 95 - intensity * 20;
        sq.style.fill = `hsl(210, 100%, ${lightness}%)`;
      } else {
        sq.style.fill = "#e6f0ff";
      }
    }
  }

  useEffect(() => {
    // initial build
    buildGrid();

    // pointer listeners
    const onPointerMove = (e) => {
      if (e.touches && e.touches.length) {
        const t = e.touches[0];
        highlightAt(t.clientX, t.clientY);
      } else {
        highlightAt(e.clientX, e.clientY);
      }
    };
    document.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("touchmove", onPointerMove, { passive: true });

    // rebuild on resize/orientation
    let resizeTimer;
    let lastW = 0,
      lastH = 0;
    const scheduleRebuild = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const w = Math.ceil(window.visualViewport ? window.visualViewport.width : window.innerWidth);
        const h = Math.ceil(window.visualViewport ? window.visualViewport.height : window.innerHeight);
        if (Math.abs(w - lastW) > 1 || Math.abs(h - lastH) > 1) {
          lastW = w;
          lastH = h;
          buildGrid();
        }
      }, 150);
    };

    window.addEventListener("resize", scheduleRebuild);
    window.addEventListener("orientationchange", scheduleRebuild);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", scheduleRebuild);
    }

    return () => {
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("resize", scheduleRebuild);
      window.removeEventListener("orientationchange", scheduleRebuild);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", scheduleRebuild);
      }
      clearTimeout(resizeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  // prevent horizontal scroll like your original
  <section className="contact-page relative overflow-x-hidden bg-blue-50 text-gray-900">
      {/* Grid Background */}
      <svg id="grid-bg" ref={svgRef} aria-hidden="true" />

      {/* Contact section */}
      <div className="m-8">
        <section className="contact-vertical">
          <div className="contact-content max-w-4xl w-full bg-white rounded-3xl shadow-xl p-10 backdrop-blur-lg bg-opacity-90 text-center">
            <h2 className="text-4xl font-bold text-blue-700 mb-3">Let's Connect!</h2>
            <p className="text-lg mb-10 text-gray-700">Get in touch for queries, collaborations, or just to say hi.</p>

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl mx-auto">
              {/* Call */}
              <a href="tel:+919883183128" className="block">
                <div className="group bg-white text-black border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all px-4 py-6 rounded-2xl shadow-md flex justify-center items-center gap-3">
                  <i className="fas fa-phone-alt text-xl group-hover:text-white" />
                  <span className="font-medium">Call Us</span>
                </div>
              </a>

              {/* Email (note: uses your newer address from the HTML you pasted) */}
              <a href="mailto:info@sigmapi-academy.com" className="block">
                <div className="group bg-white text-black border border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all px-4 py-6 rounded-2xl shadow-md flex justify-center items-center gap-3">
                  <i className="fas fa-envelope text-xl group-hover:text-white" />
                  <span className="font-medium">Email</span>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/kumarsatyendermishra" target="_blank" rel="noreferrer" className="block">
                <div className="group bg-white text-black border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all px-4 py-6 rounded-2xl shadow-md flex justify-center items-center gap-3">
                  <i className="fab fa-github text-xl group-hover:text-white" />
                  <span className="font-medium">GitHub</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/satyender-mishra-75963799/"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="group bg-white text-black border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all px-4 py-6 rounded-2xl shadow-md flex justify-center items-center gap-3">
                  <i className="fab fa-linkedin-in text-xl group-hover:text-white" />
                  <span className="font-medium">LinkedIn</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://api.whatsapp.com/send?phone=919883183128" target="_blank" rel="noreferrer" className="block">
                <div className="group bg-white text-black border border-gray-300 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all px-4 py-6 rounded-2xl shadow-md flex justify-center items-center gap-3">
                  <i className="fab fa-whatsapp text-xl group-hover:text-white" />
                  <span className="font-medium">WhatsApp</span>
                </div>
              </a>

              {/* Teams */}
              <a
                href="https://teams.microsoft.com/l/chat/0/0?users=bluejteacher@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="group bg-white text-black border border-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all px-4 py-6 rounded-2xl shadow-md flex justify-center items-center gap-3">
                  <i className="fab fa-microsoft text-xl group-hover:text-white" />
                  <span className="font-medium">Teams</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
