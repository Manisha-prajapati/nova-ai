import {
  Brain,
  Zap,
  Users,
  BarChart3,
  FolderKanban,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: Brain,
      number: "01",
      title: "AI Task Assistant",
      description:
        "Let NOVA handle repetitive tasks and help your team focus on meaningful work.",
    },
    {
      icon: Zap,
      number: "02",
      title: "Smart Automation",
      description:
        "Automate your everyday workflows and save hours of manual work every week.",
    },
    {
      icon: Users,
      number: "03",
      title: "Team Collaboration",
      description:
        "Bring your entire team together with shared workspaces and real-time collaboration.",
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Powerful Analytics",
      description:
        "Turn your productivity data into clear insights and make better decisions.",
    },
    {
      icon: FolderKanban,
      number: "05",
      title: "Project Management",
      description:
        "Plan projects, manage deadlines and keep every task organized in one place.",
    },
    {
      icon: ShieldCheck,
      number: "06",
      title: "Enterprise Security",
      description:
        "Keep your team's data protected with secure and reliable infrastructure.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">

        {/* Section Heading */}
        <div className="section-heading-main">
          <div className="section-badge">
            POWERFUL FEATURES
          </div>

          <h2>
            Everything your team needs
            <span> to move faster.</span>
          </h2>

          <p>
            NOVA combines intelligent automation, collaboration and
            analytics into one simple workspace built for modern teams.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="feature-card" key={feature.number}>

                <div className="feature-top">
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>

                  <span className="feature-number">
                    {feature.number}
                  </span>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-link">
                  Learn more
                  <ArrowUpRight size={16} />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Features;