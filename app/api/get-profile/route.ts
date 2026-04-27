import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing profile id" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      SELECT
        id,
        username,
        location,
        specialties,
        bio,
        profile_image_url,
        is_official
      FROM profiles
      WHERE id = $1
      LIMIT 1
      `,
      [id]
    );

    return NextResponse.json({
      success: true,
      profile: result.rows[0] || null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}