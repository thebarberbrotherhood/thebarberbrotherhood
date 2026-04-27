import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT
        id,
        username,
        location,
        specialties,
        profile_image_url,
        is_official
      FROM profiles
      ORDER BY is_official DESC, id DESC
    `);

    return NextResponse.json({
      success: true,
      profiles: result.rows,
    });
  } catch (error) {
    console.error("GET PROFILES ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}