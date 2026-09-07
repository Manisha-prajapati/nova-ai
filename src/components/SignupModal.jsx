import { useState } from "react";
import { X, ArrowRight, Lock, Mail, User, Building2 } from "lucide-react";

function SignupModal({ onClose, onLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account created successfully!");
    onClose();
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div
        className="login-modal signup-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="login-close"
          onClick={onClose}
          aria-label="Close signup"
        >
          <X size={20} />
        </button>

        <div className="login-logo">
          <span>✦</span>
          NOVA
        </div>

        <div className="login-heading">
          <h2>Create your account</h2>
          <p>
            Start building better and working smarter with NOVA.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="login-field">
            <label htmlFor="signup-name">Full name</label>

            <div className="login-input">
              <User size={17} />

              <input
                id="signup-name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="signup-email">Email address</label>

            <div className="login-input">
              <Mail size={17} />

              <input
                id="signup-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="signup-company">
              Company / Team
            </label>

            <div className="login-input">
              <Building2 size={17} />

              <input
                id="signup-company"
                name="company"
                type="text"
                placeholder="Your company or team"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="signup-password">Password</label>

            <div className="login-input">
              <Lock size={17} />

              <input
                id="signup-password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit">
            Create Account
            <ArrowRight size={17} />
          </button>

        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <p className="login-signup">
          Already have an account?
          <button
            type="button"
            onClick={onLogin}
            className="signup-login-link"
          >
            Log in
          </button>
        </p>

      </div>
    </div>
  );
}

export default SignupModal;