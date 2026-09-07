import {
  Rocket,
  Megaphone,
  Code2,
  Building2,
  ArrowUpRight,
} from "lucide-react";

function Solutions() {
  const solutions = [
    {
      icon: Rocket,
      title: "Startups",
      description:
        "Move fast without adding unnecessary complexity. Manage projects, automate workflows and keep your growing team aligned.",
      tag: "Move faster",
    },
    {
      icon: Megaphone,
      title: "Marketing Teams",
      description:
        "Plan campaigns, manage content and collaborate across your marketing workflow from one intelligent workspace.",
      tag: "Create better",
    },
    {
      icon: Code2,
      title: "Product Teams",
      description:
        "Connect product planning, development and feedback to ship better products with less friction.",
      tag: "Ship smarter",
    },
    {
      icon: Building2,
      title: "Enterprise",
      description:
        "Scale productivity across departments with powerful automation, analytics and enterprise-grade security.",
      tag: "Scale confidently",
    },
  ];

  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-container">

        <div className="section-heading-main solutions-heading">
          <div className="section-badge">BUILT FOR EVERY TEAM</div>

          <h2>
            One platform.
            <span> Endless possibilities.</span>
          </h2>

          <p>
            Whether you're a small startup or a growing enterprise,
            NOVA adapts to the way your team works.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div className="solution-card" key={solution.title}>
                <div className="solution-top">
                  <div className="solution-icon">
                    <Icon size={23} />
                  </div>

                  <ArrowUpRight
                    className="solution-arrow"
                    size={21}
                  />
                </div>

                <div className="solution-content">
                  <span className="solution-tag">
                    {solution.tag}
                  </span>

                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>
                </div>

                <div className="solution-bottom">
                  <span>Explore solution</span>
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

export default Solutions;