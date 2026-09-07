import {
  Check,
  Sparkles,
  Clock3,
  TrendingUp,
} from "lucide-react";

function About() {
  const benefits = [
    "Manage your entire workflow from one workspace",
    "Automate repetitive tasks with AI",
    "Get real-time insights into team productivity",
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Product Visual */}
        <div className="about-visual">

          <div className="about-glow"></div>

          <div className="about-dashboard">

            {/* Dashboard Top */}
            <div className="about-dashboard-top">
              <div>
                <span>Workspace</span>
                <h3>Team Overview</h3>
              </div>

              <div className="about-avatar">
                M
              </div>
            </div>

            {/* Chart */}
            <div className="about-chart-card">
              <div className="chart-header">
                <div>
                  <span>Weekly Productivity</span>
                  <strong>+24.8%</strong>
                </div>

                <TrendingUp size={18} />
              </div>

              <div className="chart">
                <div className="chart-line line-one"></div>
                <div className="chart-line line-two"></div>
                <div className="chart-line line-three"></div>
                <div className="chart-line line-four"></div>
                <div className="chart-line line-five"></div>
              </div>

              <div className="chart-days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
              </div>
            </div>

            {/* Mini Cards */}
            <div className="about-mini-grid">

              <div className="about-mini-card">
                <div className="mini-icon">
                  <Sparkles size={17} />
                </div>

                <span>AI Automations</span>
                <strong>128</strong>
                <small>+18 this week</small>
              </div>

              <div className="about-mini-card">
                <div className="mini-icon clock">
                  <Clock3 size={17} />
                </div>

                <span>Time Saved</span>
                <strong>42h</strong>
                <small>This month</small>
              </div>

            </div>

          </div>
        </div>

        {/* About Content */}
        <div className="about-content">

          <div className="section-badge">
            ONE SMART WORKSPACE
          </div>

          <h2>
            Your team's work,
            <span> all in one place.</span>
          </h2>

          <p>
            NOVA brings projects, tasks, communication and intelligent
            automation together in one beautifully simple workspace.
            Spend less time managing work and more time getting it done.
          </p>

          <div className="about-benefits">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <div className="benefit-check">
                  <Check size={15} />
                </div>

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <a href="#how-it-works" className="about-button">
            Explore NOVA
            <TrendingUp size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;