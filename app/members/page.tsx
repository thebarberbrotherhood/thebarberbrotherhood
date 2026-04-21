"use client";

import { RedirectToSignIn, useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function MembersPage() {
  const { user, isLoaded } = useUser();

  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [barberShop, setBarberShop] = useState("");
  const [specialties, setSpecialties] = useState("");
  const [instagram, setInstagram] = useState("");
  const [bio, setBio] = useState("");

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black p-10 text-white">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Barber Brotherhood
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            Members Profile
          </h1>
          <p className="mt-2 max-w-2xl text-white/60">
            Build your presence inside the Brotherhood. Add your details now,
            then we’ll connect saving next.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* LEFT PROFILE CARD */}
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <img
                src={user.imageUrl}
                alt="Profile"
                className="h-28 w-28 rounded-full border-2 border-blue-500 object-cover shadow-lg"
              />

              <h2 className="mt-5 text-3xl font-bold">
                {user.fullName || "New Member"}
              </h2>

              <p className="mt-2 text-sm text-white/60">
                {user.primaryEmailAddress?.emailAddress}
              </p>

              <p className="mt-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/60">
                Founding Member
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold">01</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                  Profile
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold">BB</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                  Member
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold">New</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                  Status
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Profile preview
              </p>

              <div className="mt-4 space-y-3 text-sm text-white/75">
                <p>
                  <span className="text-white/40">Username:</span>{" "}
                  {username || "Not added yet"}
                </p>
                <p>
                  <span className="text-white/40">Location:</span>{" "}
                  {location || "Not added yet"}
                </p>
                <p>
                  <span className="text-white/40">Shop:</span>{" "}
                  {barberShop || "Not added yet"}
                </p>
                <p>
                  <span className="text-white/40">Instagram:</span>{" "}
                  {instagram || "Not added yet"}
                </p>
                <p>
                  <span className="text-white/40">Specialties:</span>{" "}
                  {specialties || "Not added yet"}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT EDIT AREA */}
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Edit profile
              </p>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Shape your member profile
              </h3>
              <p className="mt-2 text-white/60">
                This is the visual profile setup first. Saving comes next.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Username / Handle
                </label>
                <input
                  placeholder="@barbername"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Location
                </label>
                <input
                  placeholder="London, UK"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Barber Shop / Studio
                </label>
                <input
                  placeholder="Your shop name"
                  value={barberShop}
                  onChange={(e) => setBarberShop(e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Instagram
                </label>
                <input
                  placeholder="@yourinstagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white outline-none transition focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-white/65">
                Specialties
              </label>
              <input
                placeholder="Fades, beard work, curls, education..."
                value={specialties}
                onChange={(e) => setSpecialties(e.target.value)}
                className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-sm text-white/65">Bio</label>
              <textarea
                placeholder="Tell people about yourself, your style, your experience, and what you’re about..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="min-h-[180px] w-full rounded-xl border border-zinc-800 bg-black p-3 text-white outline-none transition focus:border-blue-500"
              />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold">Profile Photo</p>
                <p className="mt-2 text-sm text-white/55">
                  Your current Clerk profile image is showing above. We can make
                  photo changing smoother next.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold">Coming Next</p>
                <p className="mt-2 text-sm text-white/55">
                  Save profile, update avatar properly, and show member cards in
                  a community directory.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
                onClick={() =>
                  alert("Next step is connecting this so it saves properly")
                }
              >
                Save Profile
              </button>

              <button
                className="w-full rounded-xl border border-white/15 bg-white/[0.03] py-3 font-semibold text-white transition hover:bg-white/[0.06]"
                onClick={() => {
                  setUsername("");
                  setLocation("");
                  setBarberShop("");
                  setSpecialties("");
                  setInstagram("");
                  setBio("");
                }}
              >
                Clear Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}