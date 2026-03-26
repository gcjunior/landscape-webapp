"use client";

import Image from "next/image";
import { useState } from "react";

function Topic({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  const [openCard, setOpenCard] = useState<
    "winter" | "summer" | "year-round" | null
  >("winter");

  const toggleCard = (card: "winter" | "summer" | "year-round") => {
    setOpenCard((current) => (current === card ? null : card));
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-cover bg-center py-20 sm:py-24"
      style={{
        backgroundImage: "url('/services/services-section-background.png')",
      }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="inline-block rounded-xl border border-white/65 bg-white/70 px-6 py-3 shadow-sm backdrop-blur-sm">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
              Services
            </h2>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <p
            className="inline-block border border-white/70 text-sm font-medium text-[#1f2937] shadow-sm backdrop-blur-sm sm:text-base"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              padding: "0.3em 1em",
              borderRadius: "12px",
            }}
          >
            Professional seasonal support tailored to your property.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <button
            type="button"
            className={`rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
              openCard === "winter"
                ? "border-[#1E90FF]/40 shadow-md"
                : "border-slate-200"
            }`}
            onClick={() => toggleCard("winter")}
            aria-expanded={openCard === "winter"}
            aria-controls="services-content-panel"
          >
            <p className="text-left text-lg font-semibold text-[#1E90FF]">
              Winter Services ❄️
            </p>
            <p className="mt-2 text-left text-sm text-slate-600">
              Snow removal, salting, ice control
            </p>
            <p className="mt-3 text-left text-xs font-semibold uppercase tracking-wide text-[#1E90FF]">
              {openCard === "winter" ? "Currently open" : "Click to expand"}
            </p>
          </button>

          <button
            type="button"
            className={`rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
              openCard === "summer"
                ? "border-[#28A745]/40 shadow-md"
                : "border-slate-200"
            }`}
            onClick={() => toggleCard("summer")}
            aria-expanded={openCard === "summer"}
            aria-controls="services-content-panel"
          >
            <p className="text-left text-lg font-semibold text-[#28A745]">
              Summer Services 🌱
            </p>
            <p className="mt-2 text-left text-sm text-slate-600">
              Lawn mowing, trimming, yard cleanup
            </p>
            <p className="mt-3 text-left text-xs font-semibold uppercase tracking-wide text-[#28A745]">
              {openCard === "summer" ? "Currently open" : "Click to expand"}
            </p>
          </button>

          <button
            type="button"
            className={`rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
              openCard === "year-round"
                ? "border-[#1E90FF]/40 shadow-md"
                : "border-slate-200"
            }`}
            onClick={() => toggleCard("year-round")}
            aria-expanded={openCard === "year-round"}
            aria-controls="services-content-panel"
          >
            <p className="text-left text-lg font-semibold text-[#1E90FF]">
              Year-Round Plans 🔁
            </p>
            <p className="mt-2 text-left text-sm text-slate-600">
              Affordable packages for all seasons
            </p>
            <p className="mt-3 text-left text-xs font-semibold uppercase tracking-wide text-[#1E90FF]">
              {openCard === "year-round" ? "Currently open" : "Click to expand"}
            </p>
          </button>
        </div>

        {openCard ? (
          <article
            id="services-content-panel"
            className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            {openCard === "winter" ? (
              <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
                <div className="space-y-5 text-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Snow Removal Services (Winter)
                  </h3>
                  <Topic
                    title="Core Services"
                    items={[
                      "Driveway Snow Removal - clearing residential driveways",
                      "Sidewalk & Walkway Clearing - safety + accessibility",
                      "Parking Lot Snow Removal - for small businesses or apartments",
                    ]}
                  />
                  <Topic
                    title="Ice Management"
                    items={[
                      "Salting / De-icing - prevent slips and falls",
                      "Ice scraping - stubborn ice buildup removal",
                    ]}
                  />
                  <Topic
                    title="Property-Specific"
                    items={[
                      "Residential Snow Removal - homes, duplexes",
                      "Commercial Snow Removal - offices, retail spaces",
                    ]}
                  />
                  <Topic
                    title="Service Options"
                    items={[
                      "On-demand service - call when needed",
                      "Scheduled snow clearing - after every snowfall",
                      "24/7 emergency snow removal - storms, urgent situations",
                    ]}
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/services/snow-removal-winter-card.png"
                    alt="Snow removal service worker clearing a walkway"
                    width={600}
                    height={700}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            ) : null}

            {openCard === "summer" ? (
              <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
                <div className="space-y-5 text-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Lawn Care Services (Spring, Summer, Fall)
                  </h3>
                  <Topic
                    title="Basic Lawn Maintenance"
                    items={[
                      "Lawn mowing - weekly or bi-weekly",
                      "Edging & trimming - clean borders",
                      "Grass clipping cleanup",
                    ]}
                  />
                  <Topic
                    title="Lawn Health"
                    items={[
                      "Fertilizing - promote growth",
                      "Weed control - keep lawn clean",
                      "Aeration - improve soil health",
                      "Overseeding - fill patchy areas",
                    ]}
                  />
                  <Topic
                    title="Seasonal Cleanup"
                    items={[
                      "Spring cleanup - remove debris, prep lawn",
                      "Fall cleanup - leaves, dead plants",
                      "Leaf removal",
                    ]}
                  />
                  <Topic
                    title="Yard Maintenance"
                    items={[
                      "Hedge trimming",
                      "Bush/shrub care",
                      "Small yard cleanups",
                    ]}
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/services/lawn-care-summer-card.png"
                    alt="Lawn mower on a freshly cut green lawn"
                    width={600}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ) : null}

            {openCard === "year-round" ? (
              <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
                <div className="space-y-5 text-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Year-Round / Combo Services
                  </h3>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Year-round property maintenance plans</li>
                    <li>Monthly subscription packages</li>
                    <li>Same-day fast service</li>
                    <li>Budget-friendly bundled pricing</li>
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/services/year-round-combo-services-card.png"
                    alt="Year-round lawn and snow maintenance service collage"
                    width={700}
                    height={700}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ) : null}
          </article>
        ) : null}
      </div>
    </section>
  );
}
