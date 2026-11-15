import { createServerFn } from "@tanstack/react-start";
import { DEFAULT_APP_URL, normalizeAppUrl } from "@/lib/app-url";

export const getAppUrlSetting = createServerFn({ method: "GET" }).handler(async () => {
  const { readAppUrl } = await import("@/lib/app-url.server");
  return readAppUrl();
});

export const setAppUrlSetting = createServerFn({ method: "POST" })
  .inputValidator((d: { password: string; url: string }) => ({ password: String(d?.password ?? ""), url: String(d?.url ?? "") }))
  .handler(async ({ data }) => {
    const { checkAdminPassword } = await import("@/lib/admin-password.server");
    await checkAdminPassword(data.password);
    const url = normalizeAppUrl(data.url);
    if (!url) return { ok: false as const, error: "الرابط غير صالح — يجب أن يبدأ بـ https://" };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const updatedAt = new Date().toISOString();
    const res = await supabaseAdmin.from("app_settings").upsert({ key: "android_app_url", value: url, updated_at: updatedAt });
    if (res.error) throw new Error(res.error.message);
    return { ok: true as const, url, updatedAt };
  });

export { DEFAULT_APP_URL };
