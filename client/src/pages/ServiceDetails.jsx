import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import { services } from "../components/services/servicesData";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.id === slug);

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found"
          description="The requested software development service could not be found."
          pathname={`/services/${slug || ""}`}
        />

        <main className="min-h-screen bg-slate-950 px-6 py-24 text-slate-100">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-400">
              Service Not Found
            </p>

            <h1 className="text-4xl font-bold">
              The requested service could not be found.
            </h1>

            <p className="mt-4 text-slate-400">
              Please return to the services page to explore the available
              development services.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              View Services
            </Link>
          </div>
        </main>
      </>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
        pathname={`/services/${service.id}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          {
            name: service.title,
            url: `/services/${service.id}`,
          },
        ]}
      />

      <main className="min-h-screen bg-slate-950 text-slate-100">
        {/* Hero */}
        <section className="px-6 pb-16 pt-24">
          <div className="mx-auto max-w-6xl">
            <Link
              to="/services"
              className="mb-8 inline-flex items-center text-sm font-medium text-sky-400 transition hover:text-sky-300"
            >
              ← Back to Services
            </Link>

            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-4">
                {Icon && (
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                    <Icon
                      className="h-7 w-7"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <span className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                  {service.subtitle}
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="border-y border-slate-800 bg-slate-900/40 px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                Service Capabilities
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                What This Service Includes
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                This service is structured around practical business
                requirements, with a focus on modern software development,
                maintainable architecture, and business workflows.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <div className="flex gap-3">
                      <span
                        className="mt-1 text-sky-400"
                        aria-hidden="true"
                      >
                        ✓
                      </span>

                      <span className="text-slate-300">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <aside className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
                Development Stack
              </p>

              <h2 className="mt-3 text-xl font-semibold">
                Technologies Used
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "TypeScript",
                  "Tailwind CSS",
                  "REST APIs",
                  "JWT Auth",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-slate-500">
                The technology stack is selected according to the requirements
                and architecture of each project.
              </p>
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 to-slate-950 p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
              Start Your Project
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Have a Software Project in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Share your requirements and let's discuss the right approach for
              your software project.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}