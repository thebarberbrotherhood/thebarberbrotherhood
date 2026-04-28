"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import ImageUpload from "../components/ImageUpload";

type Post = {
  id: number;
  type: string;
  image_url: string;
  caption: string;
  product_name?: string;
  price?: string;
  company_name?: string;
  author_name?: string;
  author_image?: string;
  created_at: string;
};

type Profile = {
  username?: string;
  full_name?: string;
  barber_shop?: string;
  profile_image_url?: string;
};

export default function BrotherhoodFeedPage() {
  const { user } = useUser();

  const [posts, setPosts] = useState<Post[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  useEffect(() => {
    fetch("/api/feed")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  useEffect(() => {
    async function loadProfile() {
      if (!user?.id) return;

      const res = await fetch(`/api/save-profile?clerk_user_id=${user.id}`);
      const data = await res.json();

      if (data.success && data.profile) {
        setProfile(data.profile);
      }
    }

    loadProfile();
  }, [user?.id]);

  const displayName =
    profile?.username ||
    profile?.barber_shop ||
    profile?.full_name ||
    "Member";

  const displayImage = profile?.profile_image_url || user?.imageUrl;

  const handlePost = async () => {
    if (!imageUrl) return alert("Upload an image first");
    if (!caption.trim()) return alert("Write a caption first");

    await fetch("/api/feed", {
      method: "POST",
      body: JSON.stringify({
        user_id: user?.id,
        type: "post",
        image_url: imageUrl,
        caption,
        author_name: displayName,
        author_image: displayImage,
      }),
    });

    setCaption("");
    setImageUrl("");

    const refreshed = await fetch("/api/feed").then((res) => res.json());
    setPosts(refreshed);
  };

  if (!user) {
    return (
      <section className="min-h-[70vh] bg-black px-6 py-24 text-center text-white">
        <p className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-zinc-950 px-6 py-10 text-white/70">
          You must be signed in to view the Brotherhood Feed.
        </p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_35%),#000] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400/80">
              Members Only
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Brotherhood Feed
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
              Share your latest cuts, post shop moments, discover products, and
              keep the barber community moving in one live members-only space.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-zinc-950/80 p-5 shadow-2xl shadow-blue-950/20">
            <p className="text-sm font-semibold text-white">Post to the feed</p>
            <p className="mt-1 text-xs text-white/45">
              Posting as{" "}
              <span className="font-semibold text-blue-300">
                {displayName}
              </span>
            </p>

            <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-black/60 p-4">
              <ImageUpload onUpload={(url) => setImageUrl(url)} />

              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Uploaded preview"
                  className="mt-5 max-h-[420px] w-full rounded-2xl object-cover ring-1 ring-white/10"
                />
              )}
            </div>

            <textarea
              placeholder="Write a caption..."
              className="mt-4 min-h-28 w-full resize-none rounded-2xl border border-white/10 bg-black/70 p-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-blue-400/50"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <button
              onClick={handlePost}
              className="mt-4 w-full rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Share Post
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            {posts.length === 0 && (
              <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-10 text-center">
                <p className="text-lg font-semibold">No posts yet</p>
                <p className="mt-2 text-sm text-white/50">
                  Be the first to post a cut to the Brotherhood Feed.
                </p>
              </div>
            )}

            {posts.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/90 shadow-2xl shadow-black/40"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-3">
                    {post.type !== "advert" && post.author_image && (
                      <img
                        src={post.author_image}
                        alt={post.author_name || "Member"}
                        className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
                      />
                    )}

                    <div>
                      <p className="text-sm font-semibold">
                        {post.type === "advert"
                          ? post.company_name || "Partner Brand"
                          : post.author_name || "Member"}
                      </p>
                      <p className="text-xs text-white/40">
                        {post.type === "advert"
                          ? "Sponsored post"
                          : "Member post"}
                      </p>
                    </div>
                  </div>

                  {post.type === "advert" && (
                    <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300">
                      Advert
                    </span>
                  )}
                </div>

                <img
                  src={post.image_url}
                  alt="Feed post"
                  className="max-h-[720px] w-full object-cover"
                />

                <div className="p-5">
                  {post.type === "advert" && (
                    <div className="mb-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
                      <p className="text-sm font-bold text-blue-300">
                        {post.product_name}
                      </p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        {post.price}
                      </p>
                    </div>
                  )}

                  <p className="text-sm leading-7 text-white/80">
                    {post.caption}
                  </p>

                  <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4 text-xs text-white/35">
                    <span>♡ Likes coming soon</span>
                    <span>•</span>
                    <span>Comments for paid members later</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="hidden space-y-5 lg:block">
            <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-5">
              <p className="text-sm font-bold">Coming soon</p>
              <div className="mt-4 space-y-3 text-sm text-white/55">
                <p>Member likes</p>
                <p>Comments</p>
                <p>Saved posts</p>
                <p>Paid sponsor placements</p>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-5">
              <p className="text-sm font-bold text-blue-300">
                Brand advertising
              </p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Product adverts, pricing, and supplier offers will appear inside
                the feed for members to discover.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}