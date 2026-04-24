import Image from "next/image";
import Link from "next/link";

export default function BrotherhoodPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.22),transparent_45%)]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <Image
            src="/logo.png.jpg"
            alt="The Barber Brotherhood logo"
            width={120}
            height={120}
            className="mx-auto mb-8 h-28 w-28 rounded-full object-cover ring-2 ring-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.35)]"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/70">
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
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] transition hover:bg-blue-700"
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
          {[
            {
              title: "Stronger together",
              text: "The more members we grow, the stronger our voice becomes when approaching brands, suppliers, sponsors, and industry partners.",
            },
            {
              title: "Deals & giveaways",
              text: "A larger community gives us the chance to secure better member perks, exclusive discounts, giveaways, products, tools, and future sponsorship opportunities.",
            },
            {
              title: "Network & collaborate",
              text: "Members can connect with other barbers, shops, educators, and creatives for jobs, guest spots, collaborations, events, and new opportunities.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 border-l-blue-500 bg-white/[0.03] p-7 shadow-[0_0_30px_rgba(37,99,235,0.08)]"
            >
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-4 leading-7 text-white/65">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative overflow-hidden border-y border-white/10 px-6 py-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/70">
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
                className="rounded-2xl border border-white/10 border-l-blue-500 bg-black/60 p-5 text-white/80 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-[0_0_35px_rgba(37,99,235,0.10)] md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/70">
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
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Join Now
          </Link>
        </div>
      </section>
    </main>
  );
}