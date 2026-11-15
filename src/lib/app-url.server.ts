import { DEFAULT_APP_URL } from "@/lib/app-url";

export async function readAppUrl(): Promise<{ url: string; updatedAt: string | null }> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data } = await supabaseAdmin.from("app_settings").select("value, updated_at").eq("key", "android_app_url").maybeSingle();
  return { url: data?.value || DEFAULT_APP_URL, updatedAt: data?.updated_at ?? null };
}
