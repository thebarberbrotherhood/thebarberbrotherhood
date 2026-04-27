"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";

type Profile = {
  id: number;
  username: string;
  location: string;
  specialties: string;
  profile_image_url: string;
  is_official: boolean;
};

export default function MembersDirectory() {
  const { user, isLoaded } = useUser();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const res = await fetch("/api/get-profiles");
        const data = await res.json();

        if (data.success) {
          setProfiles(data.profiles);
        }
      } catch (error) {
        console.error("Error loading profiles", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfiles();
  }, []);

  if (!isLoaded) {
    return <div className="min-h-screen bg-black p-10 text-white">Loading...</div>;
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  if (loading) {
    return <div className="min-h-screen bg-black p-10 text-white">Loading directory...</div>;
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_40px_rgba(37,99,235,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300/70">
            Members Only
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            Member Directory
          </h1>

          <p className="mt-4 max-w-2xl leading-8 text-white/60">
            Discover barbers inside The Barber Brotherhood. Contact details stay
            private, keeping connection and opportunity within the community.
          </p>
        </div>

        {profiles.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center text-white/60">
            No members found yet.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile) => (
              <Link
                key={profile.id}
                href={`/member-profile/${profile.id}`}
                className="group rounded-3xl border border-white/10 bg-zinc-950 p-6 text-center shadow-2xl transition hover:-translate-y-1 hover:border-blue-500/70 hover:shadow-[0_0_35px_rgba(37,99,235,0.16)]"
              >
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-blue-500/70 bg-black shadow-[0_0_25px_rgba(37,99,235,0.25)]">
                  <img
                    src={profile.profile_image_url || "/logo.png.jpg"}
                    alt={profile.username || "Member profile"}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h2 className="mt-5 flex items-center justify-center gap-2 text-2xl font-bold">
                  {profile.username || "Unnamed Member"}

                  {profile.is_official && (
                    <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]">
                      ✔ Official
                    </span>
                  )}
                </h2>

                <p className="mt-2 text-sm text-white/50">
                  {profile.location || "Location not set"}
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Specialties
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {profile.specialties || "Not added yet"}
                  </p>
                </div>

                <div className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition group-hover:bg-blue-700">
                  View Profile
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}