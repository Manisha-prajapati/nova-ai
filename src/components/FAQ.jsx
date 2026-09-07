import { useState } from "react";
import { Plus } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "What is NOVA?",
      answer:
        "NOVA is an AI-powered productivity platform that helps teams manage projects, automate repetitive tasks, collaborate efficiently and understand their productivity through real-time insights.",
    },
    {
      question: "Can I try NOVA for free?",
      answer:
        "Yes. You can start with the Free plan and explore NOVA without a credit card. You can upgrade whenever your team needs more advanced features.",
    },
    {
      question: "How does NOVA AI automation work?",
      answer:
        "NOVA analyzes your workflows and helps identify repetitive tasks. You can then create smart automations that reduce manual work and save your team valuable time.",
    },
    {
      question: "Can my entire team use NOVA?",
      answer:
        "Absolutely. NOVA is designed for teams of all sizes. You can invite team members, create shared workspaces and collaborate on projects in real time.",
    },
    {
      question: "Is my team's data secure?",
      answer:
        "Yes. NOVA is designed with security in mind, providing protected workspaces, permissions and enterprise-focused security features for growing organizations.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes. You can upgrade or change your plan whenever your team's requirements change. Your workspace and existing data will remain available.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">

        <div className="section-heading-main faq-heading">
          <div className="section-badge">FAQ</div>

          <h2>
            Questions?
            <span> We've got answers.</span>
          </h2>

          <p>
            Everything you need to know about NOVA and how it
            can help your team work smarter.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "open" : ""}`}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    <Plus size={19} />
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;