export async function onRequestPost({ request, env }) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400 }
      );
    }

    await env.DB.prepare(
      "INSERT INTO zare_emails (email) VALUES (?)"
    ).bind(email).run();

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
