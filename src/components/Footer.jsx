import { ArrowUpRight, Mail } from "lucide-react";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">✦</span>
              NOVA
            </a>

            <p>
              AI-powered productivity for modern teams.
              Build better, work smarter.
            </p>

            <div className="footer-socials">
              <a href="#linkedin" aria-label="LinkedIn">in</a>
              <a href="#twitter" aria-label="Twitter">𝕏</a>
              <a href="#github" aria-label="GitHub">GH</a>
            </div>
          </div>

          {/* PRODUCT */}
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
          </div>

          {/* COMPANY */}
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#testimonials">Customers</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>

          {/* RESOURCES */}
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="#blog">Blog</a>
            <a href="#guides">Guides</a>
            <a href="#help">Help Center</a>
            <a href="#faq">FAQ</a>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h4>Stay in the loop</h4>

            <p>
              Get productivity tips and NOVA updates
              straight to your inbox.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="newsletter-input">
                <Mail size={17} />

                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  required
                />

                <button type="submit" aria-label="Subscribe">
                  <ArrowUpRight size={17} />
                </button>
              </div>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 NOVA. All rights reserved.</p>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#security">Security</a>
          </div>

          <a href="#home" className="back-home">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;