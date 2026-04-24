import Link from "next/link";

export default function BrotherhoodPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            The Bigger Vision
          </p>

          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            Building more than a membership.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            The Barber Brotherhood is being built to create stronger routes for
            barbers to connect, grow, collaborate, access opportunities, and
            benefit from the power of a united community.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
            >
              Join The Brotherhood
            </Link>

            <Link
              href="/membership"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
            >
              View Membership
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-2xl font-bold">Stronger together</h2>
            <p className="mt-4 leading-7 text-white/65">
              The more members we grow, the stronger our voice becomes when
              approaching brands, suppliers, sponsors, and industry partners.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-2xl font-bold">Deals & giveaways</h2>
            <p className="mt-4 leading-7 text-white/65">
              A larger community gives us the chance to secure better member
              perks, exclusive discounts, giveaways, products, tools, and
              future sponsorship opportunities.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-2xl font-bold">Network & collaborate</h2>
            <p className="mt-4 leading-7 text-white/65">
              Members can connect with other barbers, shops, educators, and
              creatives for jobs, guest spots, collaborations, events, and new
              opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
              What we want to create
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              A proper barber network with real value.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              "A private member profile for every barber",
              "A member directory to discover barbers by location",
              "A community feed for updates, work, questions and wins",
              "Routes for shops to find barbers and barbers to find shops",
              "Brand partnerships, sponsor opportunities and member deals",
              "Giveaways, drops, education, resources and future events",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Founding members
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Get in early and help shape it.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Early members will be part of shaping the direction of the
            Brotherhood before it becomes bigger. The stronger the community
            becomes, the more value we can bring back to members.
          </p>

          <Link
            href="/sign-up"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:opacity-90"
          >
            Join Now
          </Link>
        </div>
      </section>
    </main>
  );
}