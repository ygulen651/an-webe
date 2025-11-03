import Header from "../components/Header";
import { sanityClient } from "../lib/sanity";
import { qKilometreTaslari, KilometreTas } from "../lib/queries";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Kilometre Taşlarımız",
  description: "Yıllara göre önemli dönüm noktalarımız",
};

type TimelineItem = {
  year: string;
  title: string;
  description?: string;
  imageUrl?: string;
};

// Not: Buradaki veri örnektir. Üst kısma yeni öğeler ekleyerek kolayca genişletebilirsiniz.
const initialTimeline: TimelineItem[] = [
  { year: "2014", title: "Başarılarla dolu bir yıl", description: "TİM 1000 listesinde yer alma, Türkiye'nin 500 büyük sanayi kuruluşu içerisinde yer alma." },
  { year: "2013", title: "Türkiye'nin ikinci 500 büyük", description: "İSO ikinci 500 listesinde yükseliş." },
  { year: "2011", title: "Türkiye'nin 500 büyük firması", description: "İSO 500 listesinde yer alma." },
];

export default async function Page() {
  let items: (KilometreTas & { imageUrl?: string })[] = [];
  try {
    const data = await sanityClient.fetch<any[]>(qKilometreTaslari);
    items = (data || []).map((d) => ({ ...d, imageUrl: d?.image?.asset?.url }));
  } catch {}
  if (!items?.length) items = initialTimeline as any;
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
        <h1 className="text-center text-[44px] md:text-[52px] font-extrabold tracking-tight text-[#d8232a]">KİLOMETRE TAŞLARIMIZ</h1>
        <div className="mx-auto mt-3 h-[3px] w-20 bg-[#d8232a]" />

        {/* Zaman Çizelgesi */}
        <section className="relative mt-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-[#d8232a]/80" aria-hidden />

          <div className="space-y-12">
            {items.map((it, idx) => {
              const left = idx % 2 === 0;
              return (
                <div key={`${it.year}-${idx}`} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Sol kutu */}
                  <div className={`${left ? "md:order-1" : "md:order-2"} md:pr-10`}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                      <div className="text-sm font-semibold text-[#d8232a]">{it.year}</div>
                      <div className="text-lg font-bold mt-1">{it.title}</div>
                      {it.description && (
                        <p className="text-[14px] text-[#444] mt-2">{it.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Sağ boşluk (çizgi noktası) ve görsel */}
                  <div className={`${left ? "md:order-2" : "md:order-1"} md:pl-10 relative`}> 
                    <div className="hidden md:block absolute left-[-1.1rem] top-6 w-5 h-5 rounded-full bg-white border-4 border-[#d8232a]" />
                    {it.imageUrl && (
                      <img src={it.imageUrl} alt="" className="mt-3 w-full max-w-sm rounded-lg shadow" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Üste yeni öğe eklemek için açıklama */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Yeni dönüm noktalarını eklemek için bu sayfadaki veri listesine yeni öğeler eklenebilir.
        </p>
      </main>
    </div>
  );
}


