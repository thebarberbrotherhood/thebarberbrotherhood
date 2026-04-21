"use client";

import { RedirectToSignIn, Show } from "@clerk/nextjs";

export default function MembersPage() {
  return (
    <>
      <Show when="signed-out">
        <RedirectToSignIn />
      </Show>

      <Show when="signed-in">
        <main className="min-h-screen bg-black px-6 py-16 text-white">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold">Members Area</h1>

            <p className="mb-8 text-white/70">
              Welcome to the private Barber Brotherhood space.
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-2 text-2xl font-semibold">Founding Member</h2>
              <p className="text-white/70">
                This is your private area. More features coming soon.
              </p>
            </div>
          </div>
        </main>
      </Show>
    </>
  );
}