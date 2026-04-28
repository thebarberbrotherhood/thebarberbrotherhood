"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BarberBrotherhood() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleInterestSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xbdqagrz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setIsSubmitting(false);

    if (response.ok) {
      form.reset();
      setHeroSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="bg-black text-white font-sans">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            Founding member access
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-none md:text-7xl">
            THE BARBER BROTHERHOOD
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
            A private space for barbers who want sharper conversations,
            stronger community, and long-term growth beyond social media.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Join Membership
            </Link>

            <Link
              href="/membership"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              View Membership
            </Link>
          </div>

          <div className="mt-14 w-full max-w-md opacity-85">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">
              Not ready to join yet?
            </p>

            {heroSubmitted ? (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-3 text-sm text-green-300">
                You’re on the list. We’ll keep you updated.
              </div>
            ) : (
              <form
                onSubmit={handleInterestSubmit}
                className="flex flex-col gap-2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/35"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/35"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Register Interest"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}