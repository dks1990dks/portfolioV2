import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import GlassCard from "../../ui/Card/GlassCard";

export default function SolutionCard({
  icon: Icon,

  title,

  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      <GlassCard className="relative p-8 h-full group overflow-hidden">
        <div
          className="
absolute
top-0
left-0
h-1
w-0
bg-cyan-400
group-hover:w-full
transition-all
duration-500"
        />

        <div
          className="
w-16
h-16
rounded-2xl
bg-cyan-500/10
flex
items-center
justify-center
mb-6"
        >
          <Icon className="text-cyan-400 text-3xl" />
        </div>

        <h3
          className="
text-2xl
font-bold
text-white"
        >
          {title}
        </h3>

        <p
          className="
mt-5
text-slate-400
leading-8"
        >
          {description}
        </p>

        <Link
          to="/services"
          className="
    mt-8
    flex
    items-center
    gap-3
    text-cyan-400
    font-semibold
    group-hover:translate-x-2
    transition-all"
        >
          Learn More
          <FaArrowRight />
        </Link>
      </GlassCard>
    </motion.div>
  );
}
