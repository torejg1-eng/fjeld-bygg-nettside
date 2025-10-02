export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold mb-3">Fant ikke siden</h1>
      <p className="text-[#6B7280] mb-8">
        Siden kan være flyttet eller slettet.
      </p>
      <a
        href="/"
        className="inline-flex rounded-xl px-5 py-3 bg-[#374151] text-white hover:opacity-90"
      >
        Til forsiden
      </a>
    </section>
  );
}
