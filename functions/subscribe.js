export async function onRequestPost({ request, env }) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return new Response("Invalid email", { status: 400 });
    }

    await env.zare_emails
      .prepare("INSERT OR IGNORE INTO subscribers (email) VALUES (?)")
      .bind(email)
      .run();

    return new Response("OK", { status: 200 });
  } catch (err) {
    return new Response("Server error", { status: 500 });
  }
}
