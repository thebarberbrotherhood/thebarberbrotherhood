import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      clerk_user_id,
      email,
      full_name,
      username,
      location,
      barber_shop,
      specialties,
      instagram,
      bio,
      profile_image_url,
    } = data;

    await pool.query(
      `
      INSERT INTO profiles (
        clerk_user_id,
        email,
        full_name,
        username,
        location,
        barber_shop,
        specialties,
        instagram,
        bio,
        profile_image_url
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      ON CONFLICT (clerk_user_id)
      DO UPDATE SET
        username = EXCLUDED.username,
        location = EXCLUDED.location,
        barber_shop = EXCLUDED.barber_shop,
        specialties = EXCLUDED.specialties,
        instagram = EXCLUDED.instagram,
        bio = EXCLUDED.bio,
        profile_image_url = EXCLUDED.profile_image_url,
        updated_at = CURRENT_TIMESTAMP
    `,
      [
        clerk_user_id,
        email,
        full_name,
        username,
        location,
        barber_shop,
        specialties,
        instagram,
        bio,
        profile_image_url,
      ]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}