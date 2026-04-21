"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BarberBrotherhood() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  return (
    <div className="bg-neutral-950 text-white font-sans">
      {/* TEST LINE (for env check) */}
      <p className="text-center text-sm text-red-400">
        {process.env.NEXT_PUBLIC_TEST_VALUE}
      </p>

      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-white/10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.92)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <h1 className="text-5xl font-black md:text-7xl">
            THE BARBER BROTHERHOOD
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Supporting Sharper Barbers and Stronger Conversations
          </p>

          {/* FORM */}
          <div className="mt-10 w-full max-w-md">
            {heroSubmitted ? (
              <p className="text-green-400">You're on the list.</p>
            ) : (
              <form
                action="https://formspree.io/f/xbdqagrz"
                method="POST"
                onSubmit={() => {
                  setHeroSubmitted(true);
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder-white/50"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="rounded-lg border border-white/20 bg-black/40 px-4 py-3 text-white placeholder-white/50"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
                >
                  Register Interest
                </button>
              </form>
            )}
          </div>

          {/* MEMBERSHIP BUTTONS */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Join Membership
            </Link>

            <Link
              href="/membership"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              View Membership
            </Link>
          </div>
        </div>
      </section>

      {/* TEMP CONTENT */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl font-bold">Site Restored</h2>
        <p className="mt-4 text-neutral-400">
          We’ll rebuild your full content next.
        </p>

        <div className="mt-8">
          <Link
            href="/members"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
          >
            Members Area
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-10 text-center text-sm text-neutral-500">
        © 2026 The Barber Brotherhood Ltd
      </footer>
    </div>
  );
}