const services = [
  {
    t: "Nybygg, tilbygg, boliger og forretningseiendommer",
    d: "Planlegging, søknad og utførelse – vi bygger nytt og bygger på.",
  },
  {
    t: "Oppussing og rehabilitering",
    d: "Fra enkeltrom til helhetlige oppgraderinger – pent utført, effektivt og ryddig.",
  },
  {
    t: "Vedlikehold og småoppdrag",
    d: "Dører, vinduer, listverk, gulv, småreparasjoner – ingen jobb er for liten.",
  },
  {
    t: "Skadesanering og reparasjon",
    d: "Vann-/fuktskader, brannskader, mugg/råte, stormskader. Sikring, utbedring og trygg oppbygging.",
  },
];

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-[#0F2A3F] mb-8">Tjenester</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.t} className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">{s.t}</h3>
            <p className="text-gray-700">{s.d}</p>
          </div>
        ))}
      </div>
      <a
        href="/kontakt"
        className="inline-block mt-8 bg-[#0F2A3F] text-white px-6 py-3 rounded-md"
      >
        Be om pris og tidsestimat
      </a>
    </section>
  );
}
