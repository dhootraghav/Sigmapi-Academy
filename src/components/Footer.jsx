export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-content">
          {/* Column 1 */}
          <div className="footer-column">
            <div className="footer-link">
              <h2 style={{ textAlign: "center" }}>Miscellaneous</h2>
              <a style={{ marginLeft: 60 }} href="#">Terms &amp; Conditions</a>
              <a style={{ marginLeft: 60 }} href="/Misc/privacy.html">Privacy Policy</a>
              <a style={{ marginLeft: 60 }} href="tel:+91-988-318-3128">Contact</a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <div className="footer-link">
              <h2 style={{ textAlign: "center" }}>Social Media</h2>
              <a style={{ marginLeft: 75 }} target="_blank" rel="noreferrer" href="https://m.facebook.com/sigma.pi.academy.com9883183128/">
                <i className="fa-brands fa-facebook"></i> Facebook
              </a>
              <a style={{ marginLeft: 75 }} target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=919883183128">
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </a>
              <a style={{ marginLeft: 75 }} target="_blank" rel="noreferrer" href="https://www.instagram.com/sigmapi.academy?igsh=NWJxcnR0NjlzcGlw">
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
              <a style={{ marginLeft: 75 }} target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCfB67QqVUDy8GE00Ly6gCQQ/featured">
                <i className="fa-brands fa-youtube"></i> YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright">
        <p>&copy; <a href="/">SigmaPi Academy</a>All Rights Reserved</p>
      </div>
    </footer>
  );
}
