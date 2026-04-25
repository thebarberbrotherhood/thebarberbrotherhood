"use client";

import { RedirectToSignIn, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import ImageUpload from "../components/ImageUpload";

export default function MembersPage() {
  const { user, isLoaded } = useUser();

  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [barberShop, setBarberShop] = useState("");
  const [specialties, setSpecialties] = useState("");
  const [instagram, setInstagram] = useState("");
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      if (!user?.id) return;

      try {
        setLoadingProfile(true);

        const res = await fetch(`/api/save-profile?clerk_user_id=${user.id}`);
        const data = await res.json();

        if (data.success && data.profile) {
          setUsername(data.profile.username || "");
          setLocation(data.profile.location || "");
          setBarberShop(data.profile.barber_shop || "");
          setSpecialties(data.profile.specialties || "");
          setInstagram(data.profile.instagram || "");
          setBio(data.profile.bio || "");
          setProfileImage(data.profile.profile_image_url || "");
        }
      } catch (error) {
        console.error("Could not load profile", error);
      } finally {
        setLoadingProfile(false);
      }
    }

    loadProfile();
  }, [user?.id]);

  if (!isLoaded || loadingProfile) {
    return <div className="min-h-screen bg-black p-10 text-white">Loading...</div>;
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
        </div>

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <img
                src={profileImage || user.imageUrl}
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
                Profile Preview
              </p>

              <div className="mt-4 space-y-3 text-sm text-white/75">
                <p><span className="text-white/40">Username:</span> {username || "Not added yet"}</p>
                <p><span className="text-white/40">Location:</span> {location || "Not added yet"}</p>
                <p><span className="text-white/40">Shop:</span> {barberShop || "Not added yet"}</p>
                <p><span className="text-white/40">Instagram:</span> {instagram || "Not added yet"}</p>
                <p><span className="text-white/40">Specialties:</span> {specialties || "Not added yet"}</p>
                <p><span className="text-white/40">Bio:</span> {bio || "Not added yet"}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Edit Profile
              </p>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                Shape your member profile
              </h3>
            </div>

            <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm font-semibold">Profile Photo</p>
              <p className="mt-2 text-sm text-white/55">
                Upload a profile image, then click Save Profile to store it.
              </p>

              <div className="mt-4">
                <ImageUpload onUpload={(url) => setProfileImage(url)} />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input placeholder="@barbername" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white" />
              <input placeholder="London, UK" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white" />
              <input placeholder="Your shop name" value={barberShop} onChange={(e) => setBarberShop(e.target.value)} className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white" />
              <input placeholder="@yourinstagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full rounded-xl border border-zinc-800 bg-black p-3 text-white" />
            </div>

            <input
              placeholder="Fades, beard work, curls, education..."
              value={specialties}
              onChange={(e) => setSpecialties(e.target.value)}
              className="mt-4 w-full rounded-xl border border-zinc-800 bg-black p-3 text-white"
            />

            <textarea
              placeholder="Tell people about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-4 min-h-[180px] w-full rounded-xl border border-zinc-800 bg-black p-3 text-white"
            />

            <button
              className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
              disabled={saving}
              onClick={async () => {
                setSaving(true);

                const res = await fetch("/api/save-profile", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    clerk_user_id: user.id,
                    email: user.primaryEmailAddress?.emailAddress,
                    full_name: user.fullName,
                    username,
                    location,
                    barber_shop: barberShop,
                    specialties,
                    instagram,
                    bio,
                    profile_image_url: profileImage || user.imageUrl,
                  }),
                });

                setSaving(false);

                if (res.ok) {
                  alert("Profile saved ✅");
                } else {
                  alert("Something went wrong ❌");
                }
              }}
            >
              {saving ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}