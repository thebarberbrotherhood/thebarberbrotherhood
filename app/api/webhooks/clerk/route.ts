import { Webhook } from "svix";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Missing CLERK_WEBHOOK_SECRET");
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing headers", { status: 400 });
  }

  const payload = await req.text();

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: any;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Webhook verification failed", err);
    return new Response("Error verifying webhook", { status: 400 });
  }

  if (evt.type === "user.created") {
    const email = evt.data.email_addresses?.[0]?.email_address;
    const name = `${evt.data.first_name || ""} ${evt.data.last_name || ""}`.trim();

    console.log("🔥 NEW USER:", { name, email });
  }

  return new Response("OK", { status: 200 });
}