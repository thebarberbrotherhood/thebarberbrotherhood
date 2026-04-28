import { NextResponse } from "next/server";
import { sql } from "@/app/lib/db";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    user_id,
    type,
    image_url,
    caption,
    product_name,
    price,
    company_name,
    author_name,
    author_image,
    author_profile_id,
  } = body;

  await sql`
    INSERT INTO feed_posts (
      user_id,
      type,
      image_url,
      caption,
      product_name,
      price,
      company_name,
      author_name,
      author_image,
      author_profile_id
    )
    VALUES (
      ${user_id},
      ${type},
      ${image_url},
      ${caption},
      ${product_name},
      ${price},
      ${company_name},
      ${author_name},
      ${author_image},
      ${author_profile_id}
    )
  `;

  return NextResponse.json({ success: true });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("user_id");

  const posts = await sql`
    SELECT
      feed_posts.*,
      COUNT(feed_likes.id)::int AS like_count,
      CASE
        WHEN ${userId}::text IS NULL THEN false
        ELSE EXISTS (
          SELECT 1
          FROM feed_likes
          WHERE feed_likes.post_id = feed_posts.id
          AND feed_likes.user_id = ${userId}
        )
      END AS liked_by_me
    FROM feed_posts
    LEFT JOIN feed_likes
      ON feed_likes.post_id = feed_posts.id
    GROUP BY feed_posts.id
    ORDER BY feed_posts.created_at DESC
  `;

  return NextResponse.json(posts);
}