import Container from "../ui/Container/Container";

export default function OurStory() {
  return (
    <section id="story" className="bg-slate-950 py-20 border-b border-slate-900">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              My Story
            </h2>

            <p className="mt-8 text-slate-400 leading-8 font-light text-base lg:text-lg">
              Deepak Codes was founded with a simple goal: build modern
              software that helps businesses streamline operations, improve
              efficiency, and manage their workflows more effectively.
            </p>

            <p className="mt-6 text-slate-400 leading-8 font-light text-base lg:text-lg">
              With experience across accounting, GST workflows, textile
              operations, and software development, I combine practical
              business understanding with modern web technologies to build
              software around real operational needs.
            </p>
          </div>

          {/* What I Build */}
          <div className="rounded-3xl border border-slate-900 p-8 lg:p-10 bg-slate-900/40 backdrop-blur-md shadow-2xl">
            <h3 className="text-2xl font-bold text-cyan-400">
              What I Build
            </h3>

            <ul className="mt-8 space-y-4 text-slate-300 font-light">
              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-medium" aria-hidden="true">
                  ✔
                </span>
                ERP Systems
              </li>

              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-medium" aria-hidden="true">
                  ✔
                </span>
                SaaS Platforms
              </li>

              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-medium" aria-hidden="true">
                  ✔
                </span>
                School Management Systems
              </li>

              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-medium" aria-hidden="true">
                  ✔
                </span>
                Business Dashboards
              </li>

              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-medium" aria-hidden="true">
                  ✔
                </span>
                Inventory Software
              </li>

              <li className="flex items-center gap-3">
                <span className="text-cyan-400 font-medium" aria-hidden="true">
                  ✔
                </span>
                Accounting & GST Solutions
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}