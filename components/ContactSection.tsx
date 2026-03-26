"use client";

import { FormEvent, useState } from "react";
import { SectionTitle } from "./SectionTitle";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your request.");
      }

      setStatus("success");
      setFeedback("Thanks! Your message was sent successfully.");
      setFormData(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section
      id="contact-us"
      className="relative bg-white py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/contact/contact-us-top-background.png')",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/contact/contact-us-bottom-background.png')",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          centered
          title="Contact Us"
          subtitle="Tell us what you need and we will get back to you quickly."
        />

        <form
          onSubmit={onSubmit}
          className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Name
              <input
                required
                type="text"
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, name: event.target.value }))
                }
                className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-[#1E90FF] focus:ring-2 focus:ring-blue-100"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Email
              <input
                required
                type="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, email: event.target.value }))
                }
                className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-[#1E90FF] focus:ring-2 focus:ring-blue-100"
              />
            </label>
          </div>

          <div className="mt-5">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Phone
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, phone: event.target.value }))
                }
                className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-[#1E90FF] focus:ring-2 focus:ring-blue-100"
              />
            </label>
          </div>

          <div className="mt-5">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Tell me what you need
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(event) =>
                  setFormData((prev) => ({ ...prev, message: event.target.value }))
                }
                className="rounded-xl border border-slate-300 px-4 py-2.5 outline-none transition focus:border-[#1E90FF] focus:ring-2 focus:ring-blue-100"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 rounded-full bg-[#1E90FF] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#187bcd] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>

          {feedback ? (
            <p
              className={`mt-4 text-sm ${
                status === "success" ? "text-emerald-700" : "text-red-600"
              }`}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
