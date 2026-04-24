import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const clerk_user_id = searchParams.get("clerk_user_id");

    if (!clerk_user_id) {
      return NextResponse.json({ success: false, error: "Missing user id" }, { status: 400 });
    }

    const result = await pool.query(
      `SELECT * FROM profiles WHERE clerk_user_id = $1 LIMIT 1`,
      [clerk_user_id]
    );

    return NextResponse.json({
      success: true,
      profile: result.rows[0] || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

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
        email = EXCLUDED.email,
        full_name = EXCLUDED.full_name,
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
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}