import { useEffect, useState } from "react";
import {
  Users,
  CheckCircle2,
  Heart,
  Clock3,
} from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Teams worldwide",
    },
    {
      icon: CheckCircle2,
      value: 2.5,
      suffix: "M+",
      label: "Tasks automated",
      decimal: true,
    },
    {
      icon: Heart,
      value: 98,
      suffix: "%",
      label: "Customer satisfaction",
    },
    {
      icon: Clock3,
      value: 40,
      suffix: "%",
      label: "Average time saved",
    },
  ];

  const [count, setCount] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      setCount(
        stats.map((stat) => {
          const currentValue = stat.value * progress;

          if (stat.decimal) {
            return Number(currentValue.toFixed(1));
          }

          return Math.floor(currentValue);
        })
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-heading">
          <div className="section-badge">NOVA BY THE NUMBERS</div>

          <h2>
            Results that speak
            <span> for themselves.</span>
          </h2>

          <p>
            Thousands of modern teams use NOVA every day to
            simplify workflows, automate tasks and save valuable time.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div className="stat-card" key={stat.label}>
                <div className="stat-icon">
                  <Icon size={22} />
                </div>

                <div className="stat-number">
                  {stat.decimal
                    ? count[index].toFixed(1)
                    : count[index].toLocaleString()}
                  <span>{stat.suffix}</span>
                </div>

                <p>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;