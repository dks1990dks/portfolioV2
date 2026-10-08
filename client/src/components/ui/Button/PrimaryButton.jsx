import { motion } from "framer-motion";

export default function PrimaryButton({

    children,

    className = "",

    ...props

}) {

    return (

        <motion.button

            whileHover={{

                scale: 1.04

            }}

            whileTap={{

                scale: .96

            }}

            className={`
            px-8
            py-4
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-400
            font-semibold
            text-white
            transition-all
            duration-300
            ${className}
            `}

            {...props}

        >

            {children}

        </motion.button>

    );

}