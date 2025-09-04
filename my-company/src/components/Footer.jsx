function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="footer-logo"
          />
          <span>My Website</span>
        </div>

        {/* Navigation links */}
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Social icons */}
        <div className="footer-social">
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"
              alt="Facebook"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
