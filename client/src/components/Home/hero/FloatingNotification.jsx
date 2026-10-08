
import { motion } from "framer-motion";
import { FaBell } from "react-icons/fa";

export default function FloatingNotification() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
      }}
      className="
        absolute
        -left-12
        bottom-16
        rounded-2xl
        border
        border-slate-700
        bg-slate-900/90
        backdrop-blur-xl
        px-5
        py-4
        shadow-2xl
      "
    >
      <div className="flex gap-4 items-center">
        <div className="bg-cyan-500 rounded-xl p-3">
          <FaBell className="text-white" />
        </div>

        <div>
          <p className="text-white font-semibold">
            Automated Notifications
          </p>

          <span className="text-slate-400 text-sm">
            SMS • WhatsApp • Email
          </span>
        </div>
      </div>
    </motion.div>
  );
}
