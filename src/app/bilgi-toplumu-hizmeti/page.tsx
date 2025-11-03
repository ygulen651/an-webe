import Header from "../components/Header";
import { sanityClient } from "../lib/sanity";
import { qBilgiDokumanlar, BilgiDokuman } from "../lib/queries";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Bilgi Toplumu Hizmeti",
  description: "Şirket bilgi toplumu hizmetleri ve indirmeler",
};

export default async function Page() {
  let docs: { name: string; href: string }[] = [];
  try {
    const data = await sanityClient.fetch<BilgiDokuman[]>(qBilgiDokumanlar);
    docs = (data || []).map((d) => ({
      name: d.title || d.file?.asset?.originalFilename || "dosya",
      href: d.file?.asset?.url || "#",
    }));
  } catch {}
  return (
    <div className="min-h-screen w-full p-0 m-0">
      <Header overlay />
      
      {/* Logo - Üst Sol Köşe */}
      <Link href="/" className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50 hover:scale-110 transition-all duration-300">
        <Image
          src="/AniBiskuviLogo.png"
          alt="Ani Logo"
          width={250}
          height={90}
          className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl"
        />
      </Link>
      
      <main className="mx-auto max-w-[1050px] px-6 md:px-8 py-12 mt-16">
        <h1 className="text-center text-[36px] md:text-[42px] font-extrabold tracking-tight text-[#d8232a]">BİLGİ TOPLUMU HİZMETİ</h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />

        <section className="mt-8">
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Ticaret Unvanı</th><td className="p-3">Anı Bisküvi Gıda Sanayi Ve Ticaret Anonim Şirketi</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Şirket Türü</th><td className="p-3">Anonim Şirketi</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">E‑Şirket</th><td className="p-3"><a className="text-blue-600 underline" href="https://www.belgemodul.com/sirket/180" target="_blank">https://www.belgemodul.com/sirket/180</a></td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Mersis</th><td className="p-3">0069060315900010</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Ticaret Sicil Memurluğu</th><td className="p-3">Karaman</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Ticaret Sicil Numarası</th><td className="p-3">4969</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Adres</th><td className="p-3">Organize Sanayi Bölgesi 16. Cadde No:16</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">İletişim Bilgileri</th><td className="p-3">TEL: 0338 224 12 30 (pbx) • FAX: 0338 224 12 34 • e‑mail: bilgi@anibiskuvi.com.tr</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Taahhüt Edilen Sermaye</th><td className="p-3">70.000.000</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Ödenen Sermaye</th><td className="p-3">66.378.000</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Tescil Tarihi</th><td className="p-3">21.12.1994</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Vergi Dairesi</th><td className="p-3">Karaman Vergi Dairesi</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Vergi Numarası</th><td className="p-3">0690603159</td></tr>
                <tr className="border-b"><th className="w-56 bg-gray-50 p-3 text-left">Sektör</th><td className="p-3">Peksimet, bisküvi, gofret, dondurma külahı, kağıt helva vb. ürünlerin imalatı (çikolata kaplı olanlar dahil)</td></tr>
                <tr><th className="w-56 bg-gray-50 p-3 text-left">Yönetim</th><td className="p-3">Ahmet Vefik BOYNUKALIN (YKB) • Ömer Nazım BOYNUKALIN (YKB Vekili) • Ali Kemal BOYNUKALIN (Üye) • Haluk ÖZATAY (Üye)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold mb-3">İndirilebilir Dokümanlar</h2>
          {docs.length === 0 ? (
            <p className="text-sm text-gray-500">Şimdilik dosya eklenmedi. Studio üzerinden “Bilgi Toplumu Dokümanı” ekleyerek burada listelenmesini sağlayabilirsiniz.</p>
          ) : (
            <ul className="space-y-2">
              {docs.map((d) => (
                <li key={d.href}>
                  <a className="inline-flex items-center gap-2 text-blue-600 hover:underline" href={d.href} download>
                    <span>⬇</span>
                    <span>{decodeURIComponent(d.name)}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}


