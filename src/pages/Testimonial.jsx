// src/pages/Testimonial.jsx
import "../styles/testimonial.css";
import { useEffect, useRef, useState } from "react";

const VIDEOS = [
  { id: "bcW2F5C42Us", name: "Aditya Kejriwal", school: "St. Xavier's Collegiate School, Kolkata", batch: "ISC Batch of 2020" },
  { id: "1g_8eO_ykGI", name: "Viraj Nathany", school: "La Martiniere For Boys School, Kolkata", batch: "ICSE Batch of 2021" },
  { id: "16Bh97gS1mk", name: "Suveer Kapoor", school: "La Martiniere For Boys School, Kolkata", batch: "ICSE Batch of 2021" },
  { id: "atL5mV2YGxY", name: "Tushar Laddha", school: "St. Xavier's Collegiate School, Kolkata", batch: "ISC Batch of 2020" },
  { id: "6thCefwIlIA", name: "Shatanik Mahanta", school: "St. Xavier's Collegiate School, Kolkata", batch: "ISC Batch of 2020" },
  { id: "o11F6FOB_w4", name: "Hitansh Agarwal", school: "St. Xavier's Collegiate School, Kolkata", batch: "ICSE Batch of 2021" },
  { id: "zZpYoZ4AcyA", name: "Arjun Ray", school: "La Martiniere For Boys School, Kolkata", batch: "ICSE Batch of 2021" },
  { id: "cx-tTVa-w1o", name: "Eeshan Dutta", school: "Delhi Public School MegaCity, Kolkata", batch: "ISC Batch of 2018" },
  { id: "TS_zHms_4TU", name: "Shuktika Mahanty", school: "B.D.M International School, Kolkata", batch: "CBSE Batch of 2016" },
  { id: "VahyWhtXV-I", name: "Rushil Kothari", school: "Delhi Public School MegaCity, Kolkata", batch: "ISC Batch of 2020" },
  { id: "oEuKEW6bn48", name: "Suhit Agarwal", school: "St. Xavier's Collegiate School, Kolkata", batch: "ISC Batch of 2019" },
  { id: "WRWJuO_MPMI", name: "Manav Sharma", school: "Lions Calcutta (Greater) Vidya Mandir", batch: "ISC Batch of 2019" },
  { id: "gfqeybO5SfU", name: "Atrijo Sengupta", school: "The Heritage School, Kolkata", batch: "ICSE Batch of 2021" },
  { id: "rxD1sd5whyE", name: "Raghav Dhoot", school: "The Heritage School, Kolkata", batch: "ICSE Batch of 2021" },
  { id: "mk4GIu9lc5U", name: "Yashvi Jain", school: "Modern High School For Girls, Kolkata", batch: "ISC Batch of 2020" },
];

export default function Testimonial() {
  const [visibleCount, setVisibleCount] = useState(6);
  const containerRef = useRef(null);
  const iframeRefs = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const src = el.getAttribute("data-src");
            if (src && el.tagName === "IFRAME") {
              el.src = src;
              observer.unobserve(el);
            }
          }
        });
      },
      { root: null, rootMargin: "200px", threshold: 0.1 }
    );

    // observe only if the iframe exists
    iframeRefs.current.forEach((ref) => {
      if (ref && ref.dataset && ref.dataset.src) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCount]);

  const loadMore = () => setVisibleCount((v) => Math.min(VIDEOS.length, v + 6));

  return (
    <section className="testimonial-section">
      <h2>What Our Students Say</h2>
      <h4>
        Hear directly from our students about their experience at SigmaPi Academy and their journey with our founder {" "}
        <strong>Satyender Kumar Mishra</strong>.
      </h4>

      <div className="video-grid-wrapper" ref={containerRef}>
        <div className="video-grid">
          {VIDEOS.slice(0, visibleCount).map((v) => (
            <div className="video-card" key={v.id}>
              <iframe
                ref={(el) => iframeRefs.current.set(v.id, el)}
                data-src={`https://www.youtube.com/embed/${v.id}`}
                title={v.name}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <h3>{v.name}</h3>
              <p>
                {v.school}
                <br />
                {v.batch}
              </p>
            </div>
          ))}
        </div>
      </div>

      {visibleCount < VIDEOS.length && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18 }}>
          <button className="register" onClick={loadMore} style={{ padding: '10px 20px' }}>
            Load more
          </button>
        </div>
      )}
    </section>
  );
}
