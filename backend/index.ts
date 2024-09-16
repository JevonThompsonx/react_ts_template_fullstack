Bun.serve({
  port: 8080,
  async fetch(req) {
    const url = new URL(req.url);

    // Example API route
    if (url.pathname === "/api/hello") {
      return new Response(JSON.stringify({ message: "Hello from Bun!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return 404 for unknown API routes
    return new Response("API not found", { status: 404 });
  },
});

console.log("Bun server running on http://localhost:8080");

