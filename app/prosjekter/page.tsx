export default function Page() {
  const items = Array.from({ length: 6 }).map((_, i) => ({
    title: `Prosjekt ${i + 1}`,
    text: "Kort beskrivelse av hva som ble gjort.",
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[#0F2A3F] mb-8">Prosjekter</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((p) => (
          <div key={p.title} className="bg-white rounded-xl shadow p-4">
            <div className="aspect-video rounded-md bg-gray-200 mb-3" />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-700 text-sm">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
