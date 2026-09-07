import { useState } from "react";
import {
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Pricing({ onGetStarted }) {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Free",
      description: "Perfect for individuals getting started.",
      monthly: 0,
      yearly: 0,
      button: "Get Started",
      features: [
        "Up to 3 projects",
        "Basic task management",
        "AI assistant",
        "7-day activity history",
        "Community support",
      ],
    },
    {
      name: "Pro",
      description: "For growing teams that want more.",
      monthly: 19,
      yearly: 15,
      popular: true,
      button: "Start Free Trial",
      features: [
        "Unlimited projects",
        "Advanced AI automation",
        "Team collaboration",
        "Unlimited activity history",
        "Powerful analytics",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      description: "Advanced solutions for large teams.",
      monthly: 49,
      yearly: 39,
      button: "Contact Sales",
      features: [
        "Everything in Pro",
        "Enterprise security",
        "Advanced permissions",
        "Custom workflows",
        "Dedicated support",
        "Custom integrations",
      ],
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">

        <div className="section-heading-main pricing-heading">
          <div className="section-badge">SIMPLE PRICING</div>

          <h2>
            Choose a plan that
            <span> works for you.</span>
          </h2>

          <p>
            Start free and upgrade when your team is ready.
            No complicated pricing, no hidden fees.
          </p>
        </div>

        <div className="billing-toggle">
          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")} > Monthly
          </button>

          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly
            <span>Save 20%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => {
            const price =
              billing === "monthly"
                ? plan.monthly
                : plan.yearly;

            return (
              <div
                className={`pricing-card ${
                  plan.popular ? "popular" : ""
                }`}
                key={plan.name}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Sparkles size={14} />
                    Most Popular
                  </div>
                )}

                <div className="pricing-top">
                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>
                </div>

                <div className="price">
                  <span className="currency">$</span>
                  <strong>{price}</strong>
                  <span className="period">/month</span>
                </div>

                {billing === "yearly" && plan.monthly > 0 && (
                  <div className="yearly-note">
                    Billed annually
                  </div>
                )}

                {plan.name === "Enterprise" ? (
  <a href="#cta" className="pricing-button"> {plan.button} <ArrowRight size={16} /> </a> ) : (
  <button type="button" onClick={onGetStarted} className={ plan.popular ? "pricing-button primary": "pricing-button"}>
    {plan.button} <ArrowRight size={16} />
  </button>
)}

                <div className="pricing-divider"></div>

                <h4>What's included:</h4>

                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="pricing-check">
                        <Check size={13} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Pricing;