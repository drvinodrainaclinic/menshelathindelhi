import { redirect } from "next/navigation";
import { SettingsForm } from "@/components/SettingsForm";
import { isAdmin } from "@/lib/auth";
import { getSettings } from "@/lib/settings";

export default async function AdminSettingsPage() {
  if (!(await isAdmin())) redirect("/admin/login");
  const settings = await getSettings();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Site Settings</h2>
      <p className="text-sm text-foreground/70 mb-4">
        These values appear across the site (footer, contact section). Changes take effect immediately.
      </p>
      <SettingsForm settings={settings} />
    </div>
  );
}
