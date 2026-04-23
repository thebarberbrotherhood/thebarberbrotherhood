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

    const insertResult = await pool.query(
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
      RETURNING *
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

    const countResult = await pool.query(`SELECT COUNT(*) FROM profiles`);

    return NextResponse.json({
      success: true,
      insertedRow: insertResult.rows[0],
      totalProfiles: countResult.rows[0].count,
      dbHost: process.env.DATABASE_URL?.match(/@([^/]+)/)?.[1] ?? "no-host",
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