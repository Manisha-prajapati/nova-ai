import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openLogin = () => {
    setSignupOpen(false);
    setLoginOpen(true);
  };

  const openSignup = () => {
    setLoginOpen(false);
    setSignupOpen(true);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-icon">✦</span>
          NOVA
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="nav-actions">
          <button
            className="login-btn"
            onClick={openLogin}
          >
            Log in
          </button>

          <button
            className="nav-cta"
            onClick={openSignup}
          >
            Get Started
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-menu">

          <a href="#features" onClick={closeMenu}>
            Features
          </a>

          <a href="#how-it-works" onClick={closeMenu}>
            How It Works
          </a>

          <a href="#solutions" onClick={closeMenu}>
            Solutions
          </a>

          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <div className="mobile-actions">

            <button
              className="mobile-login-btn"
              onClick={() => {
                closeMenu();
                openLogin();
              }}
            >
              Log in
            </button>

            <button
              className="mobile-cta"
              onClick={() => {
                closeMenu();
                openSignup();
              }}
            >
              Get Started
              <ArrowRight size={16} />
            </button>

          </div>
        </div>
      )}

      {/* Login Modal */}
      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onSignup={openSignup}
        />
      )}

      {/* Signup Modal */}
      {signupOpen && (
        <SignupModal
          onClose={() => setSignupOpen(false)}
          onLogin={openLogin}
        />
      )}

    </header>
  );
}

export default Navbar;