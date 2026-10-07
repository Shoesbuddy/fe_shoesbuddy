"use client";

import { contactEmail, whatsappNumber } from "@/utils/constant";
import type { FormEvent } from "react";

function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submitter = event.nativeEvent instanceof SubmitEvent ? event.nativeEvent.submitter : null;
    const method = submitter instanceof HTMLButtonElement ? submitter.value : "whatsapp";
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const messageBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Topic: ${topic}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    if (method === "email") {
      const subject = encodeURIComponent(`Shooz Buddy enquiry: ${topic}`);
      const body = encodeURIComponent(messageBody);
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageBody)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="contact-section text-[#1b1b19]" id="contact-us">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e45e36]">
            We&apos;re here to help
          </p>
          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">
            Give your favorite pair a fresh start.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#77766f]">
            Ask us about shoe care, our products, or getting your sneakers back to their best. Send
            your message using WhatsApp or email.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-4 text-[#1b1b19] transition-colors hover:text-[#e45e36]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/5 text-[#16834b] transition-colors group-hover:bg-black/10">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                  <path d="M12.04 2a9.87 9.87 0 0 0-8.48 14.92L2.25 22l5.2-1.36A9.93 9.93 0 1 0 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.81.82-3-.2-.31A8.12 8.12 0 1 1 12.04 20Zm4.46-6.08c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.01.4 1.36.51.57.18 1.08.16 1.49.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-[#77766f]">
                  WhatsApp
                </span>
                <span className="mt-1 block font-medium">+44 7818 313637</span>
              </span>
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="group flex w-fit items-center gap-4 text-[#1b1b19] transition-colors hover:text-[#e45e36]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/5 text-[#e45e36] transition-colors group-hover:bg-black/10">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-[#77766f]">Email</span>
                <span className="mt-1 block font-medium">{contactEmail}</span>
              </span>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal contact-form-reveal rounded-md border border-black/5 bg-white p-6 text-slate-900 shadow-[0_20px_60px_rgba(27,27,25,0.08)] sm:p-9">
          <div className="mb-7">
            <h3 className="text-2xl font-bold">Send us a message</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Fill in the details and choose where you&apos;d like to send it.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Your name <span className="text-amber-600">*</span>
              <input
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                name="name"
                placeholder="Alex Smith"
                required
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Email address <span className="text-amber-600">*</span>
              <input
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Phone number <span className="font-normal text-slate-400">(optional)</span>
              <input
                autoComplete="tel"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                name="phone"
                placeholder="+44 7700 900000"
                type="tel"
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              What can we help with?
              <select
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                defaultValue="Shoe cleaning & restoration"
                name="topic">
                <option>Shoe cleaning &amp; restoration</option>
                <option>Products &amp; orders</option>
                <option>Other enquiry</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
              Your message <span className="text-amber-600">*</span>
              <textarea
                className="mt-2 min-h-32 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                name="message"
                placeholder="Tell us a little about what you need..."
                required
                rows={4}
              />
            </label>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16834b] px-5 py-3.5 font-semibold text-white transition hover:bg-[#116b3d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16834b]"
              type="submit"
              value="whatsapp">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                <path d="M12.04 2a9.87 9.87 0 0 0-8.48 14.92L2.25 22l5.2-1.36A9.93 9.93 0 1 0 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.81.82-3-.2-.31A8.12 8.12 0 1 1 12.04 20Zm4.46-6.08c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.01.4 1.36.51.57.18 1.08.16 1.49.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              Send via WhatsApp
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
              type="submit"
              value="email">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              Send via email
            </button>
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Your message opens in WhatsApp or your email app. Nothing is sent automatically.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
