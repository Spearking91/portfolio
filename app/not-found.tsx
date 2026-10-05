import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">Page not found</h1>
          <p className="py-6">That route is not part of this portfolio.</p>
          <Link href="/" className="btn btn-primary">
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
