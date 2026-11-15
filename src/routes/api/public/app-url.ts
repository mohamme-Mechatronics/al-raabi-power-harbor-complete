import { createFileRoute } from "@tanstack/react-router";

// Public, read-only: the Android app asks which approved link to open. Returns only the link.
export const Route = createFileRoute("/api/public/app-url")({
  server: {
    handlers: {
      GET: async () => {
        const { readAppUrl } = await import("@/lib/app-url.server");
        const body = await readAppUrl();
        return Response.json(body, { headers: { "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" } });
      },
    },
  },
});
