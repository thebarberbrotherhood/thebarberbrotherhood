import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import AuthButtons from "./AuthButtons";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Barber Brotherhood",
  description: "Supporting Sharper Barbers and Stronger Conversations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <div className="flex min-h-screen flex-col bg-black text-white">
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/logo.png.jpg"
                    alt="The Barber Brotherhood logo"
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover ring-1 ring-white/10"
                  />
                  <div className="leading-tight">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                      The Barber Brotherhood
                    </p>
                    <p className="text-sm font-semibold text-white/90">
                      Sharper Barbers. Stronger Conversations.
                    </p>
                  </div>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                  <Link href="/" className="text-sm text-white/70 transition hover:text-white">
                    Home
                  </Link>

                  <Link href="/membership" className="text-sm text-white/70 transition hover:text-white">
                    Membership
                  </Link>

                  <Link href="/brotherhood" className="text-sm text-white/70 transition hover:text-white">
                    Brotherhood
                  </Link>

                  {/* ✅ NEW FEED LINK */}
                  <Link href="/brotherhood-feed" className="text-sm text-white/70 transition hover:text-white">
                    Feed
                  </Link>

                  <Link href="/members" className="text-sm text-white/70 transition hover:text-white">
                    My Profile
                  </Link>

                  <Link href="/members-directory" className="text-sm text-white/70 transition hover:text-white">
                    Directory
                  </Link>

                  <AuthButtons />
                </nav>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="border-t border-white/10 bg-zinc-950">
              <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Image
                      src="/logo.png.jpg"
                      alt="The Barber Brotherhood logo"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                        The Barber Brotherhood
                      </p>
                      <p className="text-sm text-white/70">
                        Supporting Sharper Barbers and Stronger Conversations
                      </p>
                    </div>
                  </div>

                  <p className="max-w-xl text-sm leading-7 text-white/50">
                    Building a stronger barber community through membership,
                    networking, opportunities, sponsorship potential, and
                    member-first perks.
                  </p>
                </div>

                <div className="grid gap-2 text-sm text-white/60">
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>

                  <Link href="/membership" className="transition hover:text-white">
                    Membership
                  </Link>

                  <Link href="/brotherhood" className="transition hover:text-white">
                    Brotherhood
                  </Link>

                  {/* ✅ NEW FEED LINK */}
                  <Link href="/brotherhood-feed" className="transition hover:text-white">
                    Feed
                  </Link>

                  <Link href="/members" className="transition hover:text-white">
                    My Profile
                  </Link>

                  <Link href="/members-directory" className="transition hover:text-white">
                    Directory
                  </Link>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/35">
                © 2026 The Barber Brotherhood Ltd
              </div>
            </footer>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}