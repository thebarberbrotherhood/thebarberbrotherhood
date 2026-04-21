"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function MembersPage() {
  const { user } = useUser();

  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  if (!user) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8 flex justify-center">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user.imageUrl}
            alt="profile"
            className="w-24 h-24 rounded-full border-2 border-blue-500"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-center mb-1">
          {user.fullName || "New Member"}
        </h2>

        {/* Email */}
        <p className="text-sm text-gray-400 text-center mb-4">
          {user.primaryEmailAddress?.emailAddress}
        </p>

        {/* Location */}
        <input
          placeholder="Your location (e.g. London)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full mb-3 p-2 rounded bg-black border border-zinc-700"
        />

        {/* Bio */}
        <textarea
          placeholder="Tell people about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-black border border-zinc-700"
        />

        {/* Save Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold"
          onClick={() => alert("Saved (we’ll connect database next)")}
        >
          Save Profile
        </button>

      </div>
    </div>
  );
}