"use client";

import { useEffect, useState } from "react";

type SuccessSlide = {
  title: string;
  description: string;
  footnote: string;
  image: string;
  globe: string;
};

const SLIDES: SuccessSlide[] = [
  {
    title:
      "Anı <span class='text-red-600'>ikinci kez</span> <br /> <span class='text-red-600'>dünya birinciliğine</span> yükseldi",
    description:
      "Uluslararası finansal analiz ve raporlama kuruluşu LSEG (London Stock Exchange Group) tarafından yapılan, halka açık şirketlerin çevresel, sosyal ve yönetişim (ESG) performans değerlendirmesi açıklandı.",
    footnote:
      "Ocak 2024’ten sonra, Ocak 2025* itibarıyla da kendi kategorimizde dünya genelinde değerlendirilen 484 şirket arasında en yüksek puanı alarak ikinci kez birinciliğe yükseldik. Aynı zamanda Borsa İstanbul’da işlem gören tüm sektörlerden şirketler arasında da ikinci kez 1. sırada yer aldık. <br/><br/> *LSEG (London Stock Exchange Group) 02.01.2025 tarihli değerlendirmesine göre.",
    image:
      "https://images.unsplash.com/photo-1542601904-8248a4a2e816?q=80&w=2070&auto=format&fit=crop",
    globe:
      "https://images.unsplash.com/photo-1562749282-323ff544c665?q=80&w=1964&auto=format&fit=crop",
  },
  {
    title:
      "Yenilikçi Ürünlerle <span class='text-red-600'>Lezzeti</span> <br /> <span class='text-red-600'>Geleceğe</span> Taşıyoruz",
    description:
      "Ar-Ge merkezlerimizde geliştirdiğimiz inovatif ürünlerle, tüketicilerimizin damak zevkine hitap eden yeni lezzetler sunmaya devam ediyoruz. Sürdürülebilir kaynak kullanımı ve yenilikçi teknolojilerle üretim yapıyoruz.",
    footnote: "*Anı 2025 İnovasyon Raporu'na göre.",
    image:
      "https://images.unsplash.com/photo-1559922462-9f3405785987?q=80&w=1974&auto=format&fit=crop",
    globe:
      "https://images.unsplash.com/photo-1614941126433-b81504a542b2?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title:
      "Topluma Değer Katıyor, <span class='text-red-600'>Mutlu Anların</span> <br /> <span class='text-red-600'>Yanında</span> Oluyoruz",
    description:
      "Eğitim, spor ve sanat alanlarında yürüttüğümüz sosyal sorumluluk projeleriyle toplumun gelişimine katkı sağlıyoruz. Gelecek nesillere daha yaşanabilir bir dünya bırakmak için var gücümüzle çalışıyoruz.",
    footnote: "*Anı Sosyal Sorumluluk Projeleri 2025 Değerlendirmesi.",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
    globe:
      "https://images.unsplash.com/photo-1518495922827-724809a2726f?q=80&w=1964&auto=format&fit=crop",
  },
];

export default function SuccessSlider() {
  const [index, setIndex] = useState(0);

  const slide = SLIDES[index];

  const next = () => setIndex((i) => (i + 1) % SLIDES.length);
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    // reset fade-in animation by toggling a key
  }, [index]);

  return (
    <main className="flex flex-col lg:flex-row w-full min-h-[80vh]">
      {/* Left visual */}
      <div
        className="relative w-full lg:w-1/2 h-[50vh] lg:h-[80vh] bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url('${slide.image}')` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 border-2 border-white/50 rounded-full flex items-center justify-center relative backdrop-blur-sm bg-black/10">
            <img
              src={slide.globe}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover opacity-80"
              alt="Dünya"
            />
          </div>
          {/* sample icons */}
          <div className="icon-glow absolute top-1/4 left-1/4 w-10 h-10 text-white">★</div>
          <div className="icon-glow absolute top-16 right-24 w-10 h-10 text-white">✦</div>
          <div className="icon-glow absolute bottom-1/4 right-1/4 w-10 h-10 text-white">◎</div>
          <div className="icon-glow absolute bottom-24 left-32 w-10 h-10 text-white">⚙︎</div>
        </div>

        {/* blob nav */}
        <div className="absolute -bottom-10 -left-16 w-72 h-72">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              fill="#DC2626"
              d="M52.7,-34.5C64.9,-17.4,68.9,10.2,60.8,32.3C52.7,54.4,32.4,71.1,8.3,73.5C-15.8,75.9,-40,64,-54.6,45.6C-69.2,27.2,-74.3,2.4,-67.9,-19.1C-61.5,-40.6,-43.6,-58.8,-25.5,-65.1C-7.4,-71.4,10.5,-65.4,26.4,-56.3C42.2,-47.1,52.7,-51.6,52.7,-34.5Z"
              transform="translate(100 100) scale(1.2)"
            />
          </svg>
        </div>
        <div className="absolute bottom-8 left-10 flex gap-3 z-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-red-700/50 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
            aria-label="Prev"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-red-700/50 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      {/* Right content */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-[#F8F5F2]">
        <div key={index} className="w-full max-w-md fade-in">
          <h1
            className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight"
            dangerouslySetInnerHTML={{ __html: slide.title }}
          />
          <p className="mt-6 text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: slide.description }} />
          <p className="mt-8 text-xs text-gray-500" dangerouslySetInnerHTML={{ __html: slide.footnote }} />
          <div className="mt-12">
            <img
              src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Corporate-Logos/26_Ulker_logo.png"
              alt="Anı Logo"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </main>
  );
}


