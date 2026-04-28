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

export async function GET() {
  const posts = await sql`
    SELECT * FROM feed_posts
    ORDER BY created_at DESC
  `;

  return NextResponse.json(posts);
}