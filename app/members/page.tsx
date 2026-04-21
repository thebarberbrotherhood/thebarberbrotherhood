"use client";

import { RedirectToSignIn, useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function MembersPage() {
  const { user, isLoaded } = useUser();
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

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
    <div className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-lg">
        <div className="mb-6 flex flex-col items-center text-center">
          <img
            src={user.imageUrl}
            alt="Profile"
            className="mb-4 h-24 w-24 rounded-full border-2 border-blue-500 object-cover"
          />

          <h1 className="text-2xl font-bold">
            {user.fullName || "New Member"}
          </h1>

          <p className="mt-1 text-sm text-white/60">
            {user.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        <input
          placeholder="Your location (e.g. London)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-3 w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
        />

        <textarea
          placeholder="Tell people about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="mb-4 min-h-[120px] w-full rounded-lg border border-zinc-700 bg-black p-3 text-white"
        />

        <button
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700"
          onClick={() =>
            alert("Saved later — next step is wiring this up properly")
          }
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}