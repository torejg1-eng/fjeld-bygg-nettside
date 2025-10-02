import Link from "next/link";

export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A3F]">
          Din lokale tømrerfagmann i Sarpsborg og omegn
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ta kontakt for planlegging, utvikling og pris på ditt oppdrag eller prosjekt.
          De beste resultatene kommer av gode samtaler og tydelige ønsker.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-[#0F2A3F] text-white px-6 py-3 rounded-md"
        >
          Få et uforpliktende tilbud
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {[
          { t: "Nybygg & tilbygg", d: "Bolig og næring – fra plan til ferdig resultat." },
          { t: "Oppussing & rehabilitering", d: "Fra enkeltrom til helhetlige oppgraderinger." },
          { t: "Skadesanering & reparasjon", d: "Vann, brann, mugg/råte og stormskader." },
        ].map((s) => (
          <div key={s.t} className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-2">{s.t}</h3>
            <p className="text-gray-700">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
