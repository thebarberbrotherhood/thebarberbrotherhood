"use client";

import React, { useState } from "react";

const learningPoints = [
  "Understand the emotional pressure that can come with life behind the chair",
  "Recognise early signs of stress, overload, and burnout before they take hold",
  "Build healthier boundaries around client conversations",
  "Learn how to listen without carrying every story home with you",
  "Develop practical habits to stay sharp, present, and mentally well",
  "Respond calmly and appropriately when conversations go deeper",
  "Know when to hold space, when to step back, and when to signpost support",
];

const memberBenefits = [
  "Official Certificate",
  "Window / Mirror Sticker",
  "12 Month Membership",
  "Featured on the Brotherhood Map & Barber Directory",
  "Part of the Barber Brotherhood Community",
  "Recognised as a Barber-First Safe Space",
  "Supporting Sharper Barbers and Stronger Conversations",
];

const trustPoints = [
  "Built for the person behind the chair",
  "Stay sharp — not burnt out",
  "Real barber tools for real barber conversations",
];

const flowSections = [
  {
    title: "1. The Welcome",
    text: "Creating a calm, comfortable start where trust can build naturally.",
  },
  {
    title: "2. The Opening",
    text: "Allowing conversation to begin in an easy, unforced way during the service.",
  },
  {
    title: "3. The Moment",
    text: "Recognising when something deeper is being shared and responding with care.",
  },
  {
    title: "4. The Balance",
    text: "Holding the conversation safely while keeping boundaries and protecting yourself.",
  },
  {
    title: "5. The Close",
    text: "Bringing the interaction to a natural end without carrying it long after the haircut.",
  },
];

export default function BarberBrotherhood() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    setSubmitted: (value: boolean) => void
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xjgparpg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-neutral-950 text-white font-sans">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(220,38,38,0.12),_transparent_38%),linear-gradient(to_bottom,_rgba(10,10,10,0.58),_rgba(0,0,0,0.72))]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur">
            Training • Membership • Community
          </div>

          <div className="mb-10 flex flex-col items-center justify-center">
            <div className="mb-6" />
            <img
              src="/logo.png.jpg"
              alt="The Barber Brotherhood Logo"
              className="h-44 md:h-56 object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
            />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.42em] text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              The Barber Brotherhood
            </p>
            <div className="mx-auto my-6 h-[1px] w-24 bg-white/25" />
          </div>

          <h1 className="max-w-5xl text-5xl font-black tracking-[0.08em] text-white md:text-7xl lg:text-8xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            THE BARBER BROTHERHOOD
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-white md:text-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Supporting Sharper Barbers and Stronger Conversations
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white md:text-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            We’re building the first Barber Brotherhood training programme designed to protect barber mental wellbeing, prevent burnout, and help barbers stay sharp through the pressure of life behind the chair — creating stronger, healthier conversations every day.
          </p>

          <p className="mt-10 text-sm text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
            <span className="font-semibold tracking-wide">CONTACT US</span> directly at
            <a
              href="mailto:hello@thebarberbrotherhood.com"
              className="text-blue-400 underline ml-1"
            >
              hello@thebarberbrotherhood.com
            </a>
          </p>

          <div className="mt-8 w-full max-w-2xl rounded-[1.75rem] border border-blue-500/30 bg-blue-950/30 p-4 backdrop-blur">
            {heroSubmitted ? (
              <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-4 text-left text-white">
                <p className="text-base font-semibold">You’re on the list.</p>
                <p className="mt-1 text-sm text-white/80">
                  Thanks for registering your interest. We’ll email you when early access opens.
                </p>
              </div>
            ) : (
              <>
                <form
                  onSubmit={(event) => handleSubmit(event, setHeroSubmitted)}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email for early access"
                    required
                    className="h-12 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-blue-400"
                  />
                  <button
                    type="submit"
                    className="h-12 rounded-xl bg-blue-600 px-6 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Register Interest
                  </button>
                </form>
                <p className="mt-3 text-sm text-neutral-400">
                  First intake launching soon. Join the list to hear when training opens.
                </p>
              </>
            )}
          </div>

          <div className="mt-16 grid w-full max-w-5xl gap-4 md:grid-cols-3">
            {trustPoints.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-red-500/35 bg-red-950/35 px-5 py-5 text-sm font-medium text-white backdrop-blur drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section
        className="relative px-6 py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.92)",
        }}
      >
        <div className="absolute inset-0 bg-black/62" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Why This Matters
            </p>
            <h2 className="text-3xl font-bold md:text-5xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Protect the person behind the chair.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Barbering is more than a service. It is long days, constant interaction, emotional exposure, and often being the person clients naturally open up to. Over time, that pressure can build quietly. The Barber Brotherhood exists to help barbers stay sharp, protect their wellbeing, and avoid carrying every conversation long after the haircut ends.
            </p>
          </div>

          <div className="rounded-[2rem] border border-blue-500/30 bg-gradient-to-br from-blue-950/45 to-white/[0.05] p-8 shadow-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
              The Mission
            </p>
            <p className="text-xl font-semibold leading-8 text-white">
              To strengthen barber mental wellbeing, prevent burnout, and help create sharper, healthier conversations behind the chair.
            </p>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-300">
            Training Programme
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">What You’ll Learn</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            Practical, barber-inspired guidance designed to keep the barber well first. The programme helps you protect your own mental wellbeing, prevent burnout, and develop healthier ways to handle the conversations that naturally happen in the chair.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {learningPoints.map((item, i) => (
              <div
                key={i}
                className="group rounded-[1.75rem] border border-white/10 bg-neutral-900 p-7 text-left transition hover:-translate-y-1 hover:border-red-500/60 hover:bg-neutral-800"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-red-300">
                  {i + 1}
                </div>
                <p className="text-lg font-semibold leading-7 text-neutral-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-b from-neutral-950 to-neutral-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              How It Works
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              A conversation flow built around the natural rhythm of a haircut
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-neutral-400">
              The Barber Brotherhood Method is designed to feel natural in real barbering environments — not scripted, forced, or clinical. The training first supports the mental wellbeing of the barber, then introduces a 5-part conversation flow that follows the rhythm of the service itself.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {flowSections.map((section, i) => (
              <div
                key={i}
                className="rounded-[1.75rem] border border-white/10 bg-neutral-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-neutral-800"
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                  {section.title}
                </p>
                <p className="text-base leading-7 text-neutral-300">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-blue-500/25 bg-blue-950/20 p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                Barber First
              </p>
              <p className="text-lg leading-8 text-neutral-200">
                This method starts by helping barbers protect their own wellbeing — building awareness around stress, emotional load, boundaries, and burnout prevention before focusing on client conversations.
              </p>
            </div>

            <div className="rounded-[2rem] border border-red-500/25 bg-red-950/20 p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
                Early Prevention
              </p>
              <p className="text-lg leading-8 text-neutral-200">
                By supporting natural, everyday conversations in trusted spaces, the method aims to create room for men to talk before problems escalate — while ensuring the barber remains supported and does not carry the full emotional weight alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
            Membership Benefits
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">What You Receive</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-neutral-400">
            Recognition, visibility, and a clear sign that your chair is part of something bigger — a barber-first movement focused on resilience, wellbeing, and stronger conversations.
          </p>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-[2rem] border border-blue-500/25 bg-blue-950/20 p-8 text-left shadow-lg">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                More Than A Course
              </p>
              <h3 className="text-2xl font-bold text-white">What membership really means</h3>
              <p className="mt-5 text-lg leading-8 text-neutral-300">
                The Barber Brotherhood is about more than training alone. It is about being recognised as part of a trusted community of barbers learning how to protect their own wellbeing, stay sharp under pressure, and create better conversations without carrying everything alone.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {memberBenefits.map((item, i) => (
                <div
                  key={i}
                  className="rounded-[1.75rem] border border-red-500/25 bg-red-950/20 p-8 shadow-lg transition hover:border-red-400/70 hover:bg-red-950/30"
                >
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                    Included
                  </p>
                  <p className="text-2xl font-bold leading-tight text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-blue-500/25 bg-gradient-to-r from-neutral-900 via-blue-950/25 to-red-950/25 px-8 py-16 text-center shadow-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-red-300">
            Early Access
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Stay sharp with the Brotherhood.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            We’re building the programme now. Register your interest to get launch updates, early access, and first notice when Barber Brotherhood training opens.
          </p>
          {ctaSubmitted ? (
            <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-5 text-left text-white">
              <p className="text-lg font-semibold">Thanks — you’re on the list.</p>
              <p className="mt-2 text-sm text-white/80">
                We’ll send you an update as soon as early access opens.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(event) => handleSubmit(event, setCtaSubmitted)}
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="h-14 flex-1 rounded-2xl border border-white/10 bg-black/30 px-5 text-white placeholder:text-neutral-500 outline-none transition focus:border-blue-400"
              />
              <button
                type="submit"
                className="h-14 rounded-2xl bg-blue-600 px-8 text-lg font-semibold text-white transition hover:bg-blue-700"
              >
                Register Interest
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-neutral-400">
            No spam. Just launch updates and first access when the course is ready.
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Prefer email? Contact us at
            <a
              href="mailto:hello@thebarberbrotherhood.com"
              className="text-blue-400 underline ml-1"
            >
              hello@thebarberbrotherhood.com
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-10 text-center text-sm text-neutral-500">
        © 2026 The Barber Brotherhood Ltd
      </footer>
    </div>
  );
}