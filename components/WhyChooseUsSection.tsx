import { SectionTitle } from "./SectionTitle";

const features = [
  {
    title: "Fast Seasonal Response",
    icon: "⚡",
    color: "text-[#1E90FF]",
    description:
      "We show up on time and get the job done quickly - especially when you need it most.",
  },
  {
    title: "Affordable Pricing",
    icon: "💲",
    color: "text-[#28A745]",
    description:
      "Quality service doesn't have to be expensive. We keep our pricing simple and budget-friendly.",
  },
  {
    title: "Landscape + Snow Expertise",
    icon: "🌿",
    color: "text-[#1E90FF]",
    description:
      "From clean lawn edges in summer to safe walkways in winter, every service is detail-focused.",
  },
  {
    title: "Dependable Scheduling",
    icon: "✅",
    color: "text-[#28A745]",
    description:
      "You can count on us for consistent, reliable results - no missed days, no excuses.",
  },
  {
    title: "Clean Lawn Finishing",
    icon: "🌱",
    color: "text-[#28A745]",
    description:
      "We don't just finish the job - we leave your property looking clean and well-maintained.",
  },
  {
    title: "Easy Booking Process",
    icon: "📞",
    color: "text-[#1E90FF]",
    description:
      "Quick quotes, simple booking, and no long-term contracts.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-[#f5f7fa] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          centered
          title="Why Choose Us"
          subtitle="A modern local team built for snow-ready winters and healthy, clean landscapes."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#1E90FF] via-[#1E90FF] to-[#28A745] p-8 text-white shadow-xl sm:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
              Trusted Outdoor Care
            </p>
            <h3 className="relative mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Reliable service for every season and every property.
            </h3>
            <p className="relative mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
              We combine speed, consistency, and clean workmanship to keep homes
              and businesses safe in winter and beautiful in spring, summer, and fall.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                Snow Ready
              </span>
              <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                Lawn Focused
              </span>
              <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                Year-Round
              </span>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-[#F5F7FA] p-7 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1E90FF]">
              Property Promise
            </p>
            <h3 className="mt-2 text-2xl font-bold text-[#333333]">
              Cleaner results, simpler communication.
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Clear pricing, fast quotes, and dependable visits that keep your curb appeal strong all year.
            </p>
            <a
              href="#contact-us"
              className="mt-6 inline-flex rounded-full bg-[#28A745] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#218838]"
            >
              Talk to Our Team
            </a>
          </article>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1E90FF]/30 hover:bg-[#F5F7FA] hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className={`text-2xl ${feature.color}`}>{feature.icon}</span>
                <h3 className="text-lg font-semibold text-[#333333]">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
