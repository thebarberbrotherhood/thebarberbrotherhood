"use client";

import { RedirectToSignIn, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { use, useEffect, useState } from "react";

type Profile = {
  id: number;
  username: string;
  location: string;
  specialties: string;
  bio: string;
  profile_image_url: string;
  is_official: boolean;
};

export default function MemberProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { user, isLoaded } = useUser();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetch(`/api/get-profile?id=${id}`);
        const data = await res.json();

        if (data.success) {
          setProfile(data.profile);
        }
      } catch (error) {
        console.error("Error loading profile", error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [id]);

  if (!isLoaded) {
    return <div className="min-h-screen bg-black p-10 text-white">Loading...</div>;
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  if (loading) {
    return <div className="min-h-screen bg-black p-10 text-white">Loading profile...</div>;
  }

  if (!profile) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center">
          <h1 className="text-3xl font-bold">Profile not found</h1>
          <Link href="/members-directory" className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white">
            Back to Directory
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <Link href="/members-directory" className="mb-6 inline-flex text-sm text-white/55 transition hover:text-white">
          ← Back to directory
        </Link>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">
          <div className="h-40 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_45%)]" />

          <div className="px-6 pb-10 md:px-10">
            <div className="-mt-16 flex flex-col items-center text-center">
              <img
                src={profile.profile_image_url || "/logo.png.jpg"}
                alt={profile.username || "Member profile"}
                className="h-32 w-32 rounded-full border-4 border-black object-cover shadow-[0_0_35px_rgba(37,99,235,0.35)]"
              />

              <h1 className="mt-5 flex items-center justify-center gap-2 text-4xl font-black">
                {profile.username || "Unnamed Member"}

                {profile.is_official && (
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    ✔ Official
                  </span>
                )}
              </h1>

              <p className="mt-2 text-white/55">
                {profile.location || "Location not set"}
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Skillset
                </p>
                <p className="mt-3 leading-7 text-white/75">
                  {profile.specialties || "No specialties added yet."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  About
                </p>
                <p className="mt-3 leading-7 text-white/75">
                  {profile.bio || "No bio added yet."}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/25 bg-blue-500/10 p-5 text-center text-sm text-blue-100">
              Contact details are kept private inside The Barber Brotherhood.
              Connection features are coming soon.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}