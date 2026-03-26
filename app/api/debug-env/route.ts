export async function GET() {
  return new Response(
    JSON.stringify({
      hasApiKey: !!process.env.RESEND_API_KEY,
      email: process.env.CONTACT_TO_EMAIL || null,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
