import { redirect } from "next/navigation";
import Link from "next/link";
import { logoutAction } from "@/lib/actions";
import { isAdmin } from "@/lib/auth";

export const metadata = {
  title: "Admin",
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAdmin();

  if (authed) {
    return (
      <div className="container-page section">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold">Admin Panel</h1>
            <nav className="flex items-center gap-2 text-sm flex-wrap">
              <Link href="/admin" className="btn btn-ghost !py-1.5 !px-3">Dashboard</Link>
              <Link href="/admin/new" className="btn btn-primary !py-1.5 !px-3">New Post</Link>
              <Link href="/admin/import" className="btn btn-ghost !py-1.5 !px-3">Import</Link>
              <Link href="/admin/appointments" className="btn btn-ghost !py-1.5 !px-3">Appointments</Link>
              <Link href="/admin/settings" className="btn btn-ghost !py-1.5 !px-3">Settings</Link>
              <Link href="/resources" className="btn btn-ghost !py-1.5 !px-3">View Blog</Link>
            </nav>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="btn btn-ghost !py-1.5 !px-3">Log out</button>
          </form>
        </div>
        {children}
      </div>
    );
  }

  // Unauthenticated: render children (login page) without admin chrome.
  return <>{children}</>;
}
