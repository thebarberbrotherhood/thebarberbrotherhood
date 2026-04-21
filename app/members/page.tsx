"use client";

import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export default function MembersPage() {
  const { user } = useUser();

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <main className="min-h-screen bg-black px-6 py-16 text-white">
          <div className="mx-auto max-w-4xl">

            {/* PROFILE HEADER */}
            <div className="mb-10 flex flex-col items-center text-center">

              <img
                src={user?.imageUrl}
                alt="Profile"
                className="mb-4 h-24 w-24 rounded-full border border-white/20 object-cover"
              />

              <h1 className="text-3xl font-bold">
                {user?.fullName || "Member"}
              </h1>

              <p className="text-white/60">
                {user?.primaryEmailAddress?.emailAddress}
              </p>

              <span className="mt-3 rounded-full border border-white/20 px-4 py-1 text-sm text-white/70">
                Founding Member
              </span>
            </div>

            {/* PROFILE INFO */}
            <div className="grid gap-6 md:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="mb-2 text-xl font-semibold">Location</h2>
                <p className="text-white/60">
                  Not set yet
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="mb-2 text-xl font-semibold">Barber Shop</h2>
                <p className="text-white/60">
                  Not set yet
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="mb-2 text-xl font-semibold">Instagram</h2>
                <p className="text-white/60">
                  Not set yet
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h2 className="mb-2 text-xl font-semibold">Specialties</h2>
                <p className="text-white/60">
                  Not set yet
                </p>
              </div>
            </div>

            {/* BIO */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-2 text-xl font-semibold">Bio</h2>
              <p className="text-white/60">
                No bio added yet.
              </p>
            </div>

            {/* EDIT BUTTON */}
            <div className="mt-10 text-center">
              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black hover:opacity-90">
                Edit Profile (coming soon)
              </button>
            </div>

          </div>
        </main>
      </SignedIn>
    </>
  );
}