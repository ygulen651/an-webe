"use client";
import { useMemo } from "react";
import Link from "next/link";

type Item = { name: string; imageUrl?: string };

// Kategori isimlerini slug'lara çevir
function getCategorySlug(categoryName: string): string {
  const slugMap: { [key: string]: string } = {
    'Bisküvi': 'biskuvi',
    'Bisküviler': 'biskuvi',
    'Çikolata': 'cikolata',
    'Çikolatalar': 'cikolata',
    'Kek': 'kek',
    'Kekler': 'kek',
    'Gofret': 'gofret',
    'Gofretler': 'gofret',
    'Kraker': 'kraker',
    'Krakerler': 'kraker',
    'Şekerleme': 'sekerleme',
    'Şekerlemeler': 'sekerleme'
  };
  
  return slugMap[categoryName] || categoryName.toLowerCase();
}

export default function ProductCircleGridClient({ items }: { items: Item[] }) {
  const safeItems = useMemo(() => items ?? [], [items]);
  return (
    <section className="py-8 sm:py-12 md:py-14 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container-width">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2 sm:mb-3 tracking-tight">ÜRÜNLER</h2>
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-gray-800 px-1 sm:px-2 leading-relaxed">
            ANI&apos;DE HERKESE UYGUN BİR TAT MUTLAKA VARDIR!
          </h3>
          <p className="max-w-2xl mx-auto text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-600 mt-2 sm:mt-3 px-2 sm:px-4 leading-relaxed">
            Anı onlarca markasıyla farklı damak tatlarına hitap ediyor.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 place-items-center px-2 sm:px-3 md:px-4">
          {safeItems.map((p, idx) => {
            const isRemainderTwo = safeItems.length % 4 === 2;
            const isLastTwo = idx >= safeItems.length - 2;
            let colClass = "";
            if (isRemainderTwo && isLastTwo) {
              colClass = idx === safeItems.length - 2 ? " lg:col-start-2" : " lg:col-start-3";
            }
            return (
              <div key={p.name} className={"product-wrap" + colClass}>
                <Link
                  href={`/urunler?kategori=${getCategorySlug(p.name)}`}
                  className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full relative overflow-hidden text-white shadow-lg sm:shadow-xl product-card transition-all duration-300 active:scale-95"
                  onMouseMove={(e) => {
                    // Sadece desktop'ta çalışsın
                    if (window.innerWidth < 1024) return;
                    const target = e.currentTarget as HTMLAnchorElement;
                    const rect = target.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const glow = target.querySelector<HTMLElement>(".product-card-glow");
                    if (glow) {
                      glow.style.setProperty("--mouse-x", `${x}px`);
                      glow.style.setProperty("--mouse-y", `${y}px`);
                    }
                    const mouseX = x - rect.width / 2;
                    const mouseY = y - rect.height / 2;
                    const rotateY = (mouseX / (rect.width / 2)) * 10;
                    const rotateX = (-1 * (mouseY / (rect.height / 2))) * 10;
                    target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`;
                  }}
                  onMouseEnter={(e) => {
                    if (window.innerWidth < 1024) return;
                    e.currentTarget.style.transition = "transform 0.1s ease-out";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transition = "transform 0.5s ease-out";
                    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
                  }}
                >
                  <div
                    className="product-card-bg"
                    style={{
                      backgroundImage: `url(${p.imageUrl ?? "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop"})`,
                    }}
                  />
                  <div className="product-card-glow" />
                  <div className="product-card-overlay">
                    <h3 className="product-card-title">{p.name}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


