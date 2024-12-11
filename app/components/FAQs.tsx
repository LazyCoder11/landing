import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowDown } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "Does Stoxi offer tax-related features?",
    answer:
      "Yes, Stoxi provides tax-related features to help you prepare for tax season. You can track your taxable income, monitor investment gains, and get insights on tax-saving opportunities.",
  },
  {
    id: 2,
    question: "Can I use Stoxi for retirement planning?",
    answer:
      "Yes, Stoxi offers features tailored for retirement planning to help you meet your financial goals.",
  },
  {
    id: 3,
    question: "Is my data shared with third parties?",
    answer:
      "No, your data is secure and is not shared with any third parties without your consent.",
  },
  {
    id: 4,
    question: "How do I update my account information?",
    answer:
      "You can update your account information in the settings section of your profile.",
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    answerRefs.current.forEach((el, i) => {
      if (!el) return;

      if (i === activeIndex) {
        // Animate the opening of the active section
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Animate the closing of inactive sections
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });
  }, [activeIndex]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-white p-6 md:p-10">
      <div className="mb-4 px-6 py-2 bg-brand-yellow text-black font-bold text-sm rounded-full flex items-center gap-2">
        <span className="size-3 bg-brand-dark rounded-full"></span>
        <span>Get Instant Answers</span>
      </div>
      <h2 className="text-5xl font-bold text-center mb-14">
        Frequently Asked Questions
      </h2>
      <div className="max-w-7xl mx-auto space-y-4  rounded-3xl">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-brand-yellow rounded-2xl overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-6 bg-brand-dark hover:bg-brand-dark focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center space-x-3">
                <span>0{faq.id}.</span>
                <span
                  className={`text-lg font-medium ${
                    activeIndex === index ? "text-brand-yellow" : ""
                  }`}
                >
                  {faq.question}
                </span>
              </div>
              <span
                className={`text-brand-yellow transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                <FaArrowDown/>
              </span>
            </button>
            <div
              ref={(el) => {
                if (el) answerRefs.current[index] = el;
              }}
              className="px-6 bg-black overflow-hidden"
              style={{ height: 0, opacity: 0 }}
            >
              <p className="py-6">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
