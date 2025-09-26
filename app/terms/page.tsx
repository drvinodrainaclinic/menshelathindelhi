export const metadata = {
  title: "Terms of Service | Dr. Vinod Raina Clinic",
  description: "Terms governing the use of this website and services.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>
      <div className="prose prose-slate dark:prose-invert">
        <p>
          Please review these terms carefully. By using this website you agree to these terms. Replace
          with legally approved content for production use.
        </p>
        <h2>Use of Website</h2>
        <p>Information is for educational purposes and does not substitute professional medical advice.</p>
        <h2>Limitation of Liability</h2>
        <p>Content is provided as-is, without warranties. Replace with official legal text.</p>
      </div>
    </div>
  );
}
