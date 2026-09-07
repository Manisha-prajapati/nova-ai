import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

function CTA({ onGetStarted }) {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-glow cta-glow-one"></div>
      <div className="cta-glow cta-glow-two"></div>

      <div className="cta-container">
        <div className="cta-badge">
          <Sparkles size={15} />
          Start building smarter
        </div>

        <h2>
          Ready to transform
          <span> the way you work?</span>
        </h2>

        <p>
          Join thousands of teams using NOVA to automate work,
          improve collaboration and achieve more with less effort.
        </p>

        <div className="cta-buttons">
          <button
  type="button"
  className="cta-primary"
  onClick={onGetStarted}
>
  Get Started Free
  <ArrowRight size={18} />
</button>

          <a href="#pricing" className="cta-secondary">
            View Pricing
          </a>
        </div>

        <div className="cta-trust">
          <span>
            <CheckCircle2 size={16} />
            No credit card required
          </span>

          <span>
            <CheckCircle2 size={16} />
            14-day free trial
          </span>

          <span>
            <CheckCircle2 size={16} />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}

export default CTA;