const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "JWT",
  "Git",
  "GitHub",
  "AWS S3",
  "Netlify",
  "Vercel",
  "Docker",
];

export default function TechExpertise() {

    return (

        <section id="technology" className="py-24">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-5xl font-bold text-center text-white">

                    Technology Expertise

                </h2>

                <p className="text-center text-slate-400 mt-6">

                    Modern technologies used to build secure and scalable software.

                </p>

                <div className="flex flex-wrap justify-center gap-5 mt-14">

                    {

                        skills.map(skill => (

                            <div

                                key={skill}

                                className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white hover:border-cyan-400 transition"

                            >

                                {skill}

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}