import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt oss | Fjeld Bygg og Tømrertjenester AS",
  description: "Kontakt Fjeld Bygg for tilbud på tømrerarbeid i Sarpsborg/Østfold.",
};

export default function KontaktPage() {
  const email = "post@fjeldbygg.no"; // endre ved behov
  const phone = "+47 416 59 342";    // legg inn riktig nummer

  const subject = encodeURIComponent("Henvendelse fra nettsiden");
  const body = encodeURIComponent(
    `Hei,\n\nJeg ønsker hjelp med:\n- Nybygg/Tilbygg/Oppussing/Annet: \n- Adresse/prosjektsted: \n- Ønsket oppstart: \n\nNavn:\nTelefon:\n\nMvh,`
  );

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Kontakt oss</h1>
      <p className="text-lg text-[#4B5563] mb-8">
        Trenger du tømrer i Sarpsborg og omegn? Send oss en e-post, så svarer vi raskt.
      </p>

      <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-sm">
        <div>
          <div className="text-sm uppercase tracking-wide text-[#6B7280]">E-post</div>
          <a href={`mailto:${email}`} className="text-lg underline underline-offset-4">
            {email}
          </a>
        </div>

        <div>
          <div className="text-sm uppercase tracking-wide text-[#6B7280]">Telefon</div>
          <a href={`tel:${phone.replace(/\s+/g, "")}`} className="text-lg">
            {phone}
          </a>
        </div>

        <div className="pt-2">
          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-[#374151] text-white hover:opacity-90 transition"
          >
            Send e-post nå
          </a>
        </div>

        <div className="text-sm text-[#6B7280]">
          <p>Åpningstider: Man–Fre 08–16</p>
          <p>Område: Sarpsborg, Fredrikstad, Halden og omegn</p>
        </div>
      </div>

      {/* Valgfritt: strukturert data for bedre synlighet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Fjeld Bygg og Tømrertjenester AS",
            url: "https://fjeld-bygg-kpuqbo5wv-service-leverandoren.vercel.app/",
            areaServed: ["Sarpsborg", "Østfold"],
            telephone: phone,
            email: email,
          }),
        }}
      />
    </section>
  );
}
