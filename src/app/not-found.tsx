import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
      <p className="font-serif text-8xl text-caramel mb-4">404</p>
      <h1 className="font-serif text-2xl text-espresso mb-3">Page not found</h1>
      <p className="font-sans text-sm text-mist mb-8">
        Looks like this page got lost in the roaster.
      </p>
      <Link href="/" className="btn-outline">Back to Home</Link>
    </div>
  );
}