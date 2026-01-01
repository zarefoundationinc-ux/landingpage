export async function onRequestPost({ request, env }) {
  const { email, trap } = await request.json();

  // Honeypot spam protection
  if (trap) {
    return new Response("ok");
  }

  // Validate email
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return new Response("Invalid email", { status: 400 });
  }

  try {
    await env.DB.prepare(
      "INSERT OR IGNORE INTO emails (email) VALUES (?)"
    ).bind(email).run();

    return new Response("Saved", { status: 200 });
  } catch (e) {
    return new Response("Error", { status: 500 });
  }
}
