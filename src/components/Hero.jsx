import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

function Hero({ onGetStarted }) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={15} />
            AI-powered productivity platform
          </div>

          <h1>
            Build Better.
            <span> Work Smarter.</span>
          </h1>

          <p className="hero-description">
            NOVA helps modern teams manage projects, automate repetitive
            tasks and collaborate efficiently — all in one intelligent
            workspace.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={onGetStarted}>
  Get Started Free <ArrowRight size={18} /> 
            </button>

            <a href="#how-it-works" className="secondary-btn">
              <Play size={17} />
              See How It Works
            </a>
          </div>

          <div className="hero-trust">
            <CheckCircle2 size={17} />
            No credit card required
            <span>•</span>
            Free 14-day trial
          </div>

        </div>

        {/* Right Dashboard */}
        <div className="hero-visual">

          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="dashboard-card">

            {/* Dashboard Header */}
            <div className="dashboard-header">
              <div>
                <p className="dashboard-label">NOVA Workspace</p>
                <h3>Good morning, Alex 👋</h3>
              </div>

              <div className="profile-circle">
                A
              </div>
            </div>

            {/* Productivity Card */}
            <div className="productivity-card">
              <div className="productivity-top">
                <div>
                  <p>Productivity Score</p>
                  <h2>87%</h2>
                </div>

                <div className="trend-icon">
                  <TrendingUp size={19} />
                </div>
              </div>

              <div className="progress-bar">
                <div className="progress-value"></div>
              </div>

              <small>
                <span>↑ 12%</span> from last week
              </small>
            </div>

            {/* Task Section */}
            <div className="task-section">

              <div className="section-heading">
                <h4>Today's Tasks</h4>
                <span>View all</span>
              </div>

              <div className="task">
                <div className="task-check completed">
                  ✓
                </div>

                <div className="task-info">
                  <strong>Design homepage</strong>
                  <small>Completed</small>
                </div>

                <span className="task-tag done">
                  Done
                </span>
              </div>

              <div className="task">
                <div className="task-check">
                </div>

                <div className="task-info">
                  <strong>Review campaign</strong>
                  <small>Today · 2:30 PM</small>
                </div>

                <span className="task-tag progress">
                  In progress
                </span>
              </div>

              <div className="task">
                <div className="task-check">
                </div>

                <div className="task-info">
                  <strong>Team meeting</strong>
                  <small>Today · 4:00 PM</small>
                </div>

                <span className="task-tag upcoming">
                  Upcoming
                </span>
              </div>

            </div>

            {/* AI Assistant */}
            <div className="ai-card">
              <div className="ai-icon">
                <Sparkles size={18} />
              </div>

              <div>
                <strong>NOVA AI Assistant</strong>
                <p>
                  3 tasks can be automated today.
                </p>
              </div>

              <ArrowRight size={17} />
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Stats */}
      <div className="hero-stats">

        <div className="hero-stat">
          <strong>10K+</strong>
          <span>Teams worldwide</span>
        </div>

        <div className="hero-stat">
          <strong>2.5M+</strong>
          <span>Tasks automated</span>
        </div>

        <div className="hero-stat">
          <strong>98%</strong>
          <span>Customer satisfaction</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;