import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import GlassCard from "../../ui/Card/GlassCard";

export default function FAQItem({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <GlassCard className="mb-5 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex justify-between items-center p-6"
      >
        <h3 className="text-left text-xl font-semibold text-white">
          {question}
        </h3>

        <FaChevronDown
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-6 pb-6 text-slate-400">
          {answer}
        </div>
      )}
    </GlassCard>
  );
}