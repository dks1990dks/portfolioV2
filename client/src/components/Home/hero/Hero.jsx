import HeroContent from "./HeroContent";
import BackgroundEffects from "./BackgroundEffects";
import HeroDashboard from "./HeroDashboard";

export default function Hero() {

    return (

        <section className="relative min-h-screen py-30 bg-slate-950 flex items-center overflow-hidden">

            <BackgroundEffects />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                <HeroContent />

                <div className="hidden lg:flex justify-center">

                    <div
                        className="
                        w-full max-w-130 aspect-square
                        rounded-3xl
                        bg-slate-900/40
                        backdrop-blur-xl
                        border border-slate-800
                        shadow-2xl shadow-cyan-500/10
                        overflow-hidden
                        p-2
                    "
                    >
                        <img
                            src="/projects/duemate/duemateDashboard.jpeg"
                            alt="Deepak Codes software development workspace and dashboard"
                            loading="eager"
                            fetchPriority="high"
                            width="520"
                            height="520"
                            className="w-full h-full object-fill rounded-2xl"
                            
                        />
                    </div>
                </div>

            </div>

            <div className="hidden lg:block">

                <HeroDashboard />

            </div>

        </section>

    );

}