import { useState } from "react";
import { contactFaqs } from "./contactData";
import { ChevronDown } from "lucide-react";

export default function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            Got Questions?
          </span>

          <h2 className="text-3xl font-bold mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const answerId = `contact-faq-answer-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full p-5 text-left font-bold text-white flex justify-between items-center text-sm md:text-base hover:text-cyan-400 transition"
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="p-5 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50"
                  >
                    {faq.answer}
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