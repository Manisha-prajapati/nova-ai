import {
  UserPlus,
  WandSparkles,
  Rocket,
  ArrowRight,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Connect Your Workspace",
      description:
        "Bring your projects, team and existing workflows into NOVA in just a few clicks.",
    },
    {
      number: "02",
      icon: WandSparkles,
      title: "Automate Your Work",
      description:
        "Let NOVA AI identify repetitive tasks and create smart automations for your team.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Grow Faster",
      description:
        "Use real-time insights to improve productivity, save time and achieve better results.",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        {/* Heading */}
        <div className="section-heading-main how-heading">
          <div className="section-badge">
            HOW IT WORKS
          </div>

          <h2>
            From busywork to
            <span> breakthrough.</span>
          </h2>

          <p>
            Getting started with NOVA is simple. Connect your workspace,
            automate repetitive work and let your team focus on what matters.
          </p>
        </div>

        {/* Steps */}
        <div className="steps-container">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="step-wrapper" key={step.number}>

                <div className="step-card">

                  <div className="step-top">
                    <span className="step-number">
                      {step.number}
                    </span>

                    <div className="step-icon">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  <div className="step-line">
                    <span></span>
                  </div>

                </div>

                {/* Arrow between cards */}
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;