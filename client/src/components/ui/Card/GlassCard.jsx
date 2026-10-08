import clsx from "clsx";

export default function GlassCard({

    children,

    className = "",

    hover = true

}) {

    return (

        <div

            className={clsx(

                "rounded-3xl",

                "border",

                "border-slate-700",

                "bg-white/5",

                "backdrop-blur-xl",

                "transition-all",

                "duration-300",

                "shadow-xl",

                hover &&

                "hover:border-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(6,182,212,.25)]",

                className

            )}

        >

            {children}

        </div>

    );

}