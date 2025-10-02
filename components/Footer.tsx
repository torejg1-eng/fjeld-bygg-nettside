export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
        <p>Fjeld Bygg og Tømrertjenester AS</p>
        <p>E-post: fjeld@fbt.as · Telefon: 416 59 342</p>
        <p className="mt-2">© {new Date().getFullYear()} – Alle rettigheter forbeholdt</p>
      </div>
    </footer>
  );
}
