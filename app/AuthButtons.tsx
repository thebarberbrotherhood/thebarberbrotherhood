"use client";

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button className="text-sm text-white/70 transition hover:text-white">
            Sign In
          </button>
        </SignInButton>

        <SignUpButton mode="modal">
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90">
            Join Now
          </button>
        </SignUpButton>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </div>
  );
}