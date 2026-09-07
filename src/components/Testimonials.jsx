import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Product Manager at Orbit",
      initials: "SM",
      review:
        "NOVA completely changed the way our team works. We spend less time managing tasks and more time actually building things.",
    },
    {
      name: "Daniel Carter",
      role: "Founder at Lumen",
      initials: "DC",
      review:
        "The automation features are incredible. NOVA saves our team several hours every week and keeps everyone perfectly aligned.",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Lead at Vertex",
      initials: "PS",
      review:
        "Finally, a productivity platform that feels powerful without being complicated. Our entire marketing workflow is now in one place.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const previousTestimonial = () => {
    setActiveIndex(
      activeIndex === 0
        ? testimonials.length - 1
        : activeIndex - 1
    );
  };

  const nextTestimonial = () => {
    setActiveIndex(
      activeIndex === testimonials.length - 1
        ? 0
        : activeIndex + 1
    );
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        <div className="section-heading-main testimonials-heading">
          <div className="section-badge">
            LOVED BY MODERN TEAMS
          </div>

          <h2>
            Don't just take our
            <span> word for it.</span>
          </h2>

          <p>
            See why thousands of teams choose NOVA to simplify
            their work and achieve more every day.
          </p>
        </div>

        <div className="testimonial-carousel">

          <button
            className="testimonial-nav prev"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={21} />
          </button>

          <div className="testimonial-track">
            {testimonials.map((testimonial, index) => (
              <div
                className={`testimonial-card ${
                  index === activeIndex ? "active" : ""
                }`}
                key={testimonial.name}
              >
                <div className="quote-icon">
                  <Quote size={21} />
                </div>

                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="testimonial-review">
                  "{testimonial.review}"
                </p>

                <div className="testimonial-user">
                  <div className="testimonial-avatar">
                    {testimonial.initials}
                  </div>

                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="testimonial-nav next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={21} />
          </button>

        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;