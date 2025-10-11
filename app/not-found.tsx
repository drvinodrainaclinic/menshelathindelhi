import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold text-gray-900">Page not found</h1>
      <p className="mt-3 text-gray-600">
        The page you are looking for doesn’t exist or may have been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Go back home
      </Link>
    </div>
  );
}
