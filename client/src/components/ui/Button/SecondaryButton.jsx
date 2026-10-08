import { motion } from "framer-motion";

export default function SecondaryButton({

children,

className="",

...props

}){

return(

<motion.button

whileHover={{scale:1.04}}

whileTap={{scale:.96}}

className={`
px-8
py-4
rounded-xl
border
border-slate-700
text-white
hover:border-cyan-400
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