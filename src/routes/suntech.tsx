import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/suntech")({ beforeLoad: () => { throw redirect({ to: "/brands/$brand", params: { brand: "trina-solar" } }); } });
