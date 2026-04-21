import Link from "next/link";

const benefits = [
  "Private members-only space for barbers",
  "Founding member access",
  "Future community feed and conversations",
  "Exclusive resources and updates",
  "Giveaways, perks, and early access opportunities",
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/50">
            Barber Brotherhood Membership
          </p>

          <h1 className="text-4xl font-black md:text-6xl">
            Join the Brotherhood
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            A private members space for barbers who want more than just social
            media. Barber Brotherhood is being built as a community for sharper
            barbers, stronger conversations, and long-term growth.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-bold">What membership includes</h2>

            <ul className="space-y-4 text-white/75">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-bold">Why join now?</h2>

            <p className="mb-6 leading-8 text-white/70">
              Early members help shape the Brotherhood from the start. Founding
              members get early access to the private area, future community
              features, and first notice of giveaways, exclusive drops, and new
              member benefits.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Founding Member
              </p>
              <p className="mt-2 text-white/75">
                Be part of the first wave building the Barber Brotherhood
                community.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                Join the Brotherhood
              </Link>

              <Link
                href="/members"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Members Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}