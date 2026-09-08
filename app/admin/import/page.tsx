import { redirect } from "next/navigation";
import { ImportForm } from "@/components/ImportForm";
import { isAdmin } from "@/lib/auth";

export default async function ImportPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Import Blog Posts</h2>
      <ImportForm />
    </div>
  );
}
