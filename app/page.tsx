"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BarberBrotherhood() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);

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

          <div className="mt-10 w-full max-w-xl">
            {heroSubmitted ? (
              <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-4 text-green-300">
                You’re on the list. We’ll keep you updated.
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xbdqagrz"
                method="POST"
                onSubmit={() => setHeroSubmitted(true)}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-white placeholder-white/50 outline-none transition focus:border-white/40"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-white placeholder-white/50 outline-none transition focus:border-white/40"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  Register Interest
                </button>
              </form>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
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
        </div>
      </section>

      <section className="border-t border-white/10 bg-black px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
              What this is
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              More than content. A real barber community.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              Barber Brotherhood is being built as a members space for barbers
              who want access, conversation, support, and early opportunities as
              the community grows.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">Private members area</h3>
              <p className="mt-3 text-white/65">
                A dedicated space away from the noise, built for barbers who
                want to stay connected and involved.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">Founding member access</h3>
              <p className="mt-3 text-white/65">
                Get in early, help shape the direction of the community, and be
                part of the first wave building it.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold">Future perks and drops</h3>
              <p className="mt-3 text-white/65">
                Be first to hear about giveaways, resources, exclusive updates,
                and new member benefits as they launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-950 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Why join now
            </p>
            <h3 className="mt-4 text-3xl font-bold">Get in early</h3>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Early members will help define what Barber Brotherhood becomes.
              This is your chance to get involved at the beginning, not after
              everything is already built.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
              Membership path
            </p>
            <h3 className="mt-4 text-3xl font-bold">Simple next steps</h3>

            <div className="mt-6 space-y-4 text-white/75">
              <div className="rounded-xl border border-white/10 px-4 py-4">
                1. Register your interest if you want updates first.
              </div>
              <div className="rounded-xl border border-white/10 px-4 py-4">
                2. Join membership to create your account.
              </div>
              <div className="rounded-xl border border-white/10 px-4 py-4">
                3. Access the private members area as the community grows.
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Create Account
              </Link>

              <Link
                href="/members"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Members Area
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-10 text-center text-sm text-white/45">
        © 2026 The Barber Brotherhood Ltd
      </footer>
    </div>
  );
}