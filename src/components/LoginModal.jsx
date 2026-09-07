import { useState } from "react";
import { X, ArrowRight, Lock, Mail } from "lucide-react";

function LoginModal({ onClose, onSignup}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    alert("Login successful!");
    onClose();
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="login-close"
          onClick={onClose}
          aria-label="Close login"
        >
          <X size={20} />
        </button>

        <div className="login-logo">
          <span>✦</span>
          NOVA
        </div>

        <div className="login-heading">
          <h2>Welcome back</h2>
          <p>Log in to continue to your NOVA workspace.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="login-field">
            <label htmlFor="login-email">Email address</label>

            <div className="login-input">
              <Mail size={17} />

              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="login-field">
            <div className="password-label">
              <label htmlFor="login-password">Password</label>
              <a href="#forgot-password">Forgot password?</a>
            </div>

            <div className="login-input">
              <Lock size={17} />

              <input
                id="login-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-submit">
            Log in
            <ArrowRight size={17} />
          </button>

        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <p className="login-signup">
  Don't have an account?
  <button
    type="button"
    onClick={onSignup}
    className="signup-login-link"
  >
    Create account
  </button>
</p>

      </div>
    </div>
  );
}

export default LoginModal;