import { SectionTitle } from "./SectionTitle";

export function AboutSection() {
  return (
    <section id="about-us" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionTitle
            title="About Us"
            subtitle="Trusted local care for safer winters and cleaner lawns."
          />
          <div className="mt-6 space-y-5 text-[#333333]">
            <p>
              We provide fast, reliable, and affordable snow removal and lawn
              care services you can count on all year round. Whether it&apos;s
              clearing heavy snowfall in the winter or keeping your lawn clean
              and healthy in the summer, our goal is simple: get the job done
              quickly and at a fair price.
            </p>
            <p>
              We take pride in showing up on time, working efficiently, and
              making sure your property looks its best in every season. Our
              services are designed to be budget-friendly without compromising
              on quality.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900">
            What You Can Expect
          </h3>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>On-time arrival and responsive communication</li>
            <li>Friendly, professional crews and clean finish</li>
            <li>Simple pricing with no hidden surprises</li>
            <li>Seasonal support all year long</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
