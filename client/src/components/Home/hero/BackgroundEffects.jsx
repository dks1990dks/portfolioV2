import { motion } from "framer-motion";

export default function BackgroundEffects() {
    return (
        <>
            <div className="absolute inset-0 overflow-hidden -z-10">

                <div className="absolute w-175 h-175 rounded-full blur-[180px] bg-cyan-500/20 -top-48 -left-48" />

                <div className="absolute w-150 h-150 rounded-full blur-[180px] bg-blue-700/20 bottom-0 right-0" />

                <motion.div

                    animate={{
                        y: [0, -40, 0],
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 8,
                    }}

                    className="absolute top-32 right-32
          w-64 h-64 rounded-full
          bg-cyan-400/10 blur-[120px]"
                />

            </div>

            <div
                className="absolute inset-0 opacity-20
        bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]
        bg-size-[60px_60px]"
            />
        </>
    );
}