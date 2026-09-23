import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-28">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-6xl font-semibold">This page moved or never existed.</h1>
      <p className="mt-6 text-lg text-ink-2">The work and case studies are all on the home page.</p>
      <Link href="/#work" className="mt-8 inline-block rounded-full bg-pine px-5 py-3 font-medium text-pine-ink">
        Go to the work
      </Link>
    </section>
  );
}
