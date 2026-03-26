type HeroSectionProps = {
  backgroundImagePath: string | null;
};

export function HeroSection({ backgroundImagePath }: HeroSectionProps) {
  const heroStyle = backgroundImagePath
    ? {
        backgroundImage: `url(${backgroundImagePath})`,
      }
    : {
        backgroundImage:
          "linear-gradient(120deg, rgba(15,23,42,0.95), rgba(30,64,175,0.85) 45%, rgba(5,150,105,0.75))",
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[82vh] items-center justify-center bg-cover bg-center px-4 text-center sm:px-6 lg:px-8"
      style={heroStyle}
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-black/25 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
        <p className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Reliable Snow Removal & Lawn Care at Budget-Friendly Prices
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#contact-us"
            className="rounded-full bg-[#1E90FF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#187bcd]"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
