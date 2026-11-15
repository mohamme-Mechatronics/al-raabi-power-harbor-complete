import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Link2, RefreshCw } from "lucide-react";
import { getAppUrlSetting, setAppUrlSetting } from "@/lib/app-url.functions";

/** Admin: change the link the Android app loads. Nothing changes until the button is pressed. */
export function AppUrlAdmin() {
  const getUrl = useServerFn(getAppUrlSetting);
  const saveUrl = useServerFn(setAppUrlSetting);
  const [current, setCurrent] = useState<{ url: string; updatedAt: string | null } | null>(null);
  const [draft, setDraft] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    getUrl().then((r) => { setCurrent(r); setDraft(r.url); }).catch(() => setMsg("تعذر قراءة الرابط الحالي."));
  }, [getUrl]);

  async function apply() {
    setConfirming(false);
    setBusy(true); setMsg(null);
    try {
      const password = window.localStorage.getItem("actes.adminpw") || "";
      const r = await saveUrl({ data: { password, url: draft.trim() } });
      if (r.ok) { setCurrent({ url: r.url, updatedAt: r.updatedAt }); setDraft(r.url); setMsg("تم اعتماد الرابط الجديد ✔"); }
      else setMsg(r.error);
    } catch { setMsg("فشل الحفظ — تأكد من كلمة مرور الإدارة."); }
    setBusy(false);
  }

  return (
    <section className="mt-6 rounded-xl border border-border bg-card p-4 shadow-sm">
      <h2 className="flex items-center gap-2 text-base font-black"><Link2 className="size-4" /> رابط تطبيق الأندرويد المرجعي</h2>
      <p className="mt-1 text-[11px] text-muted-foreground">الرابط المعتمد حالياً:</p>
      <p dir="ltr" className="mt-1 break-all rounded-md bg-muted px-3 py-2 text-xs font-bold">{current?.url ?? "…"}</p>
      {current?.updatedAt && <p className="mt-1 text-[10px] text-muted-foreground">آخر اعتماد: {new Date(current.updatedAt).toLocaleString("ar")}</p>}
      <label className="mt-3 block text-[11px] font-bold">الرابط الجديد</label>
      <input dir="ltr" value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="https://..." className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
      {!confirming ? (
        <button type="button" disabled={busy || !draft.trim()} onClick={() => { setMsg(null); if (draft.trim() === current?.url) { setMsg("هذا هو الرابط المعتمد حالياً — اكتب رابطاً جديداً."); return; } setConfirming(true); }}
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-black text-brand-foreground disabled:opacity-50">
          <RefreshCw className={`size-4 ${busy ? "animate-spin" : ""}`} /> {busy ? "جارٍ الاعتماد…" : "تحديث واعتماد الرابط المرجعي الجديد"}
        </button>
      ) : (
        <div className="mt-3 rounded-lg border border-border bg-muted p-3">
          <p className="text-[11px] font-bold">سيتم نقل كل تطبيقات الأندرويد إلى:</p>
          <p dir="ltr" className="mt-1 break-all text-xs font-black">{draft.trim()}</p>
          <div className="mt-2 flex gap-2">
            <button type="button" onClick={apply} className="rounded-full bg-brand px-4 py-1.5 text-xs font-black text-brand-foreground">تأكيد الاعتماد</button>
            <button type="button" onClick={() => setConfirming(false)} className="rounded-full border border-border px-4 py-1.5 text-xs font-bold">إلغاء</button>
          </div>
        </div>
      )}
      {msg && <p className="mt-2 text-[11px] font-bold">{msg}</p>}
    </section>
  );
}
