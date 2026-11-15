import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/lipower")({ beforeLoad: () => { throw redirect({ to: "/brands/$brand", params: { brand: "luxpower" } }); } });
