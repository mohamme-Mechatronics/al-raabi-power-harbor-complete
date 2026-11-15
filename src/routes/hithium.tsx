import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/hithium")({ beforeLoad: () => { throw redirect({ to: "/brands/$brand", params: { brand: "dyness" } }); } });
