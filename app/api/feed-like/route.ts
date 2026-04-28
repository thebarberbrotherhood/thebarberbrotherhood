import { NextResponse } from "next/server";
import { sql } from "@/app/lib/db";

export async function POST(req: Request) {
  const { post_id, user_id } = await req.json();

  if (!post_id || !user_id) {
    return NextResponse.json(
      { success: false, error: "Missing post_id or user_id" },
      { status: 400 }
    );
  }

  const existingLike = await sql`
    SELECT id
    FROM feed_likes
    WHERE post_id = ${post_id}
    AND user_id = ${user_id}
    LIMIT 1
  `;

  if (existingLike.length > 0) {
    await sql`
      DELETE FROM feed_likes
      WHERE post_id = ${post_id}
      AND user_id = ${user_id}
    `;

    return NextResponse.json({ success: true, liked: false });
  }

  await sql`
    INSERT INTO feed_likes (post_id, user_id)
    VALUES (${post_id}, ${user_id})
  `;

  return NextResponse.json({ success: true, liked: true });
}