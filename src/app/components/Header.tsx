"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { fetchSanity } from "../lib/sanity";
import { qMenuSettings, qTestAllDocs } from "../lib/queries";

type HeaderProps = {
  overlay?: boolean;
};

export default function Header({ overlay }: HeaderProps) {
  // Menü görselini CMS'ten (server component içinde use ile) çek
  // Not: Bu dosya client bileşeni; bu yüzden fetch'i effect içinde yapacağız.
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [menuBgUrl, setMenuBgUrl] = useState<string | null>(null);
  const [menuBgOpacity, setMenuBgOpacity] = useState<number | null>(null);
  const [activeTop, setActiveTop] = useState<
    "kurumsal" | "urunler" | "kariyer" | "basin" | "iletisim" | "ekatalog" | "markalar"
  >("kurumsal");

  const kurumsalCards: Array<{ key: string; title: string; desc: string; icon: string }> = [
    { key: "tarihce", title: "Tarihçemiz", desc: "Kuruluş ve gelişim", icon: "🕰️" },
    { key: "kalite", title: "Kalite", desc: "Standartlar ve süreçler", icon: "✅" },
    { key: "ihracat", title: "İhracat", desc: "Dış pazarlar", icon: "🌍" },
    { key: "baskan", title: "Başkanın Mesajı", desc: "Vizyon ve mesaj", icon: "✉️" },
    { key: "sosyal", title: "Sosyal Sorumluluk", desc: "Projelerimiz", icon: "🤝" },
    { key: "misyon-vizyon", title: "Misyon & Vizyon", desc: "Değerlerimiz", icon: "🎯" },
    { key: "sertifikalar", title: "Sertifikalar", desc: "Belgelerimiz", icon: "📜" },
    { key: "kilometre", title: "Kilometre Taşlarımız", desc: "Dönüm noktaları", icon: "📍" },
    { key: "bilgi-toplumu", title: "Bilgi Toplumu Hizmeti", desc: "Yasal duyurular", icon: "ℹ️" },
    { key: "kurumsal-kimlik", title: "Kurumsal Kimlik", desc: "Logo ve rehber", icon: "🏷️" },
  ];
  const urunlerCards: Array<{ key: string; title: string; desc?: string }> = [
    { key: "biskuvi", title: "Bisküvi" },
    { key: "cikolata", title: "Çikolata" },
    { key: "kek", title: "Kek" },
    { key: "gofret", title: "Gofret" },
    { key: "kraker", title: "Kraker" },
    { key: "sekerleme", title: "Şekerleme" },
  ];
  const kariyerCards: Array<{ key: string; title: string; desc?: string }> = [
    { key: "is-basvuru-formu", title: "İş Başvuru Formu" },
  ];
  const basinCards: Array<{ key: string; title: string }> = [
    { key: "haberler", title: "Haberler" },
    { key: "video-galeri", title: "Video Galeri" },
  ];
  const ekatalogCards: Array<{ key: string; title: string }> = [
    { key: "urun-katalogumuz", title: "Ürün Katalogumuz" },
  ];
  const markalarCards: Array<{ key: string; title: string; img: string; href: string }> = [
    { key: "ani-plast", title: "Anı Plast", img: "/Anı Plast.png", href: "https://aniplastik.com.tr/" },
    { key: "ani-makarna", title: "Anı Makarna", img: "/anı makarna logo.png", href: "https://www.animakarna.com.tr/" },
  ];
  const iletisimCards: Array<{ key: string; title: string }> = [
    { key: "iletisim-adreslerimiz", title: "İletişim Adreslerimiz" },
  ];

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        console.log('[Header] CMS verisi çekiliyor...');
        
        // CMS bağlantısını test et
        console.log('[Header] Test sorgusu çalıştırılıyor...');
        const testData = await fetchSanity<any[]>(qTestAllDocs);
        console.log('[Header] Test sorgusu sonucu:', testData);
        
        // Menü ayarlarını çek
        const data = await fetchSanity<{ menuBgUrl?: string; opacity?: number }>(qMenuSettings);
        console.log('[Header] CMS verisi:', data);
        
        if (!cancelled) {
          setMenuBgUrl(data?.menuBgUrl || null);
          setMenuBgOpacity(typeof data?.opacity === 'number' ? data.opacity : null);
          console.log('[Header] Görsel URL:', data?.menuBgUrl);
          
          // Eğer CMS'ten veri gelmediyse placeholder kullan
          if (!data?.menuBgUrl) {
            console.log('[Header] CMS\'ten görsel gelmedi, placeholder kullanılıyor');
          }
        }
      } catch (err) {
        console.error('[Header] CMS veri çekme hatası:', err);
        // sessizce local fallback kullanılacak
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  // Basit yaklaşım: dış tık kapatma sadece arka plan üzerinden yönetilecek
  // (global document dinleyicisi devre dışı)

  useEffect(() => { setMounted(true); }, []);
  // Menü açıkken body kaydırmasını kilitle
  useEffect(() => {
    const previous = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = previous || "";
    return () => { document.body.style.overflow = previous || ""; };
  }, [menuOpen]);

  if (overlay) {
    return (
      <header className="fixed top-0 right-0 left-0 z-[99999] pointer-events-auto flex justify-end">
        {/* Üst mavi ince şerit - overlay modunda sayfanın en üstünde kalmasın diye gizli */}
        {/* Kırmızı bar - Responsive & Modern */}
        <div className="pointer-events-auto inline-flex bg-gradient-to-br from-[#d8232a] to-[#b91c1c] text-white rounded-bl-[32px] sm:rounded-bl-[48px] md:rounded-bl-[64px] shadow-lg sm:shadow-xl pl-8 sm:pl-16 md:pl-20 lg:pl-28 pr-3 sm:pr-4 md:pr-6 lg:pr-8 py-2 sm:py-2.5 md:py-3 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] ml-auto backdrop-blur-sm">
          {/* Sol: Sosyal ikonlar - Mobilde gizli */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 md:gap-3.5 lg:gap-4.5 opacity-95 mr-3 sm:mr-4 md:mr-5">
            <a href="#" aria-label="Facebook" className="hover:opacity-100 opacity-90 transition-opacity">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.68 9.19 8.48 9.94v-7.03H7.9v-2.91h2.46V9.7c0-2.43 1.45-3.77 3.66-3.77 1.06 0 2.18.19 2.18.19v2.4h-1.23c-1.21 0-1.59.75-1.59 1.52v1.82h2.71l-.43 2.91h-2.28V22c4.8-.75 8.48-4.92 8.48-9.94Z"/></svg>
            </a>
            <a href="#" aria-label="X" className="hover:opacity-100 opacity-90 transition-opacity">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 3h-2.3l-4 5.3L7.9 3H3.5l6.1 8.2L3 21h2.3l4.6-6.1L16.1 21h4.4l-6.6-8.9L21 3h-2.5ZM15 18.7l-3.6-4.9-4.4 5.9h1.8l3.1-4.2 3.1 4.2h.9ZM8.9 5.3l3.6 4.9 4.5-6.2h-1.8l-2.9 4-3-4h-.4Z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-100 opacity-90 transition-opacity">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.51 5.51 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5Zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-100 opacity-90 transition-opacity">
              <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.7 32.7 0 0 0 0 12a32.7 32.7 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c2.1.5 9.3.5 9.3.5s7.2 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.7 32.7 0 0 0 24 12a32.7 32.7 0 0 0-.5-5.8ZM9.8 15.5V8.5L16 12l-6.2 3.5Z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-100 opacity-90 transition-opacity">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-3.8V8Z"/></svg>
            </a>
          </div>
          <span className="hidden md:block w-px h-5 bg-white/45 mr-3 md:mr-4" />
          {/* Sağ grup - sağa yasla - Responsive */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 ml-auto">
            <a href="#" className="hidden sm:inline-block tracking-wide font-semibold hover:opacity-80 transition-opacity">EN</a>
            <button type="button" aria-label="Ara" className="opacity-95 hover:opacity-100 cursor-pointer transition-opacity">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm11 17.6-5.1-5.1 1.4-1.4 5.1 5.1-1.4 1.4Z"/></svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                // Teşhis: tıklama çalışıyor mu?
                try { console.log("[Header] Menü butonu tıklandı"); } catch {}
                setMenuOpen((v) => !v);
              }}
              className="relative z-[2] flex items-center gap-1.5 sm:gap-2 cursor-pointer select-none hover:opacity-80 transition-opacity"
            >
              <span className="uppercase tracking-wide font-semibold text-[10px] sm:text-xs md:text-sm">Menü</span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>
            </button>
          </div>
        </div>

        {/* Dropdown */}
        {menuOpen && mounted && createPortal(
          <div ref={dropdownRef} className="fixed inset-0 z-[2147483647] pointer-events-auto" onClick={() => setMenuOpen(false)}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
              <div className="relative w-full min-h-full bg-[#d8232a] text-white" onClick={(e) => e.stopPropagation()}>
                {/* Küçük hareketli dekor görselleri (menü içeriğinin altında) - Mobilde gizli */}
                <img
                  src={menuBgUrl || "https://via.placeholder.com/200x120/d8232a/ffffff?text=Menu+Deco+1"}
                  alt=""
                  aria-hidden="true"
                  className="menu-deco menu-deco-1 hidden md:block"
                  style={typeof menuBgOpacity === 'number' ? { opacity: Math.min(1, Math.max(0, menuBgOpacity / 100)) } : { opacity: 0.8 }}
                />
                <img
                  src={menuBgUrl || "https://via.placeholder.com/200x120/d8232a/ffffff?text=Menu+Deco+2"}
                  alt=""
                  aria-hidden="true"
                  className="menu-deco menu-deco-2 hidden md:block"
                  style={typeof menuBgOpacity === 'number' ? { opacity: Math.min(1, Math.max(0, menuBgOpacity / 100)) } : { opacity: 0.8 }}
                />
                <img
                  src={menuBgUrl || "https://via.placeholder.com/200x120/d8232a/ffffff?text=Menu+Deco+3"}
                  alt=""
                  aria-hidden="true"
                  className="menu-deco menu-deco-3 hidden md:block"
                  style={typeof menuBgOpacity === 'number' ? { opacity: Math.min(1, Math.max(0, menuBgOpacity / 100)) } : { opacity: 0.8 }}
                />
                {/* Kapat butonu - Responsive */}
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 transition active:scale-95 z-50"
                  aria-label="Menüyü kapat"
                >
                  <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.7 5.3 5.3 6.7 10.6 12l-5.3 5.3 1.4 1.4L12 13.4l5.3 5.3 1.4-1.4L13.4 12l5.3-5.3-1.4-1.4L12 10.6 6.7 5.3Z"/></svg>
                </button>
                {/* Üst yatay menü başlıkları - Responsive */}
                <div className="mx-auto max-w-[1200px] px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-5 md:pt-6 lg:pt-8">
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight">
                    <Link href="/" className="hover:underline text-white transition-all hover:scale-105">ANA SAYFA</Link>
                    <a href="#kurumsal" onClick={(e) => { e.preventDefault(); setActiveTop("kurumsal"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "kurumsal" ? "text-white" : "text-white/85"}`}>KURUMSAL</a>
                    <Link href="/urunler" className="hover:underline text-white transition-all hover:scale-105">ÜRÜNLER</Link>
                    <a href="#kariyer" onClick={(e) => { e.preventDefault(); setActiveTop("kariyer"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "kariyer" ? "text-white" : "text-white/85"}`}>KARİYER</a>
                    <a href="#basin" onClick={(e) => { e.preventDefault(); setActiveTop("basin"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "basin" ? "text-white" : "text-white/85"}`}>BASIN / MEDYA</a>
                    <a href="#iletisim" onClick={(e) => { e.preventDefault(); setActiveTop("iletisim"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "iletisim" ? "text-white" : "text-white/85"}`}>İLETİŞİM</a>
                    <a href="#ekatalog" onClick={(e) => { e.preventDefault(); setActiveTop("ekatalog"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "ekatalog" ? "text-white" : "text-white/85"}`}>E-KATALOG</a>
                    <a href="#markalar" onClick={(e) => { e.preventDefault(); setActiveTop("markalar"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "markalar" ? "text-white" : "text-white/85"}`}>MARKALARIMIZ</a>
                  </div>
                </div>
                <div className="mx-auto max-w-[1200px] px-4 sm:px-5 md:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-14 lg:pt-20 pb-20 sm:pb-24 md:pb-28">
                  {activeTop === "kurumsal" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      {kurumsalCards.map((c) => {
                        const content = (
                          <div className="flex items-start gap-2 sm:gap-3 bg-white text-[#111827] rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-md transition active:scale-95">
                            <div>
                              <div className="font-semibold">{c.title}</div>
                              <div className="text-gray-600 text-xs">{c.desc}</div>
                            </div>
                          </div>
                        );
                        if (c.key === "tarihce") {
                          return <Link key={c.key} href="/tarihcemiz">{content}</Link>;
                        }
                        if (c.key === "ihracat") {
                          return <Link key={c.key} href="/ihracat">{content}</Link>;
                        }
                        if (c.key === "kalite") {
                          return <Link key={c.key} href="/kalite">{content}</Link>;
                        }
                        if (c.key === "baskan") {
                          return <Link key={c.key} href="/baskanin-mesaji">{content}</Link>;
                        }
                        if (c.key === "sosyal") {
                          return <Link key={c.key} href="/sosyal-sorumluluk">{content}</Link>;
                        }
                        if (c.key === "misyon-vizyon") {
                          return <Link key={c.key} href="/misyon-vizyon">{content}</Link>;
                        }
                        if (c.key === "sertifikalar") {
                          return <Link key={c.key} href="/sertifikalar">{content}</Link>;
                        }
                        if (c.key === "kilometre") {
                          return <Link key={c.key} href="/kilometre-taslarimiz">{content}</Link>;
                        }
                        if (c.key === "bilgi-toplumu") {
                          return <Link key={c.key} href="/bilgi-toplumu-hizmeti">{content}</Link>;
                        }
                        if (c.key === "kurumsal-kimlik") {
                          return <Link key={c.key} href="/kurumsal-kimlik">{content}</Link>;
                        }
                        return <a key={c.key} href={`#${c.key}`}>{content}</a>;
                      })}
                    </div>
                  )}
                  {activeTop === "urunler" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {urunlerCards.map((c) => (
                        <Link key={c.key} href={`/urunler#${c.key}`} className="flex items-start gap-3 bg-white text-[#111827] rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition">
                          <div className="font-semibold">{c.title}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {activeTop === "kariyer" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {kariyerCards.map((c) => (
                        <Link key={c.key} href="/kariyer/is-basvuru-formu" className="flex items-start gap-3 bg-white text-[#111827] rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition">
                          <div className="font-semibold">{c.title}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {activeTop === "basin" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {basinCards.map((c) => (
                        <Link key={c.key} href={c.key === 'haberler' ? '/basin/haberler' : '/basin/video-galeri'} className="flex items-start gap-3 bg-white text-[#111827] rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition">
                          <div className="font-semibold">{c.title}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {activeTop === "ekatalog" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {ekatalogCards.map((c) => (
                        <Link key={c.key} href="/e-katalog" className="flex items-start gap-3 bg-white text-[#111827] rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition">
                          <div className="font-semibold">{c.title}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {activeTop === "markalar" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {markalarCards.map((m) => (
                        <a key={m.key} href={m.href} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition" aria-label={m.title}>
                          <div className="w-full h-40 sm:h-44 md:h-48 grid place-items-center p-4">
                            <img src={m.img} alt={m.title} className="max-h-full max-w-full object-contain" />
                          </div>
                          {m.key !== "ani-makarna" && (
                            <div className="px-4 py-3 text-center text-[#111827] font-semibold group-hover:text-red-600 transition-colors">
                              {m.title}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                  {activeTop === "iletisim" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {iletisimCards.map((c) => (
                        <Link key={c.key} href="/iletisim" className="flex items-start gap-3 bg-white text-[#111827] rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition">
                          <div className="font-semibold">{c.title}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,160 C240,260 480,60 720,90 C960,120 1200,260 1440,110 L1440,220 L0,220 Z" fill="#d8232a" />
                  <path d="M0,160 C240,260 480,60 720,90 C960,120 1200,260 1440,110 L1440,220 L0,220 Z" fill="#FBF9F6" opacity="1" transform="translate(0,10)" />
                </svg>
              </div>
            </div>
          </div>, document.body)
        }
        {menuOpen && (
          <div className="fixed top-4 left-4 bg-white text-black px-2 py-1 rounded shadow z-[2147483647]">Menü Açık</div>
        )}
      </header>
    );
  }

  return (
    <header className="relative w-full z-50">
      {/* Üst mavi ince şerit */}
      <div className="h-1 bg-blue-900" />
      {/* Kırmızı üst şerit ve kavis */}
      <div className="relative bg-[#d8232a] text-white rounded-bl-[64px] shadow-[0_12px_24px_rgba(0,0,0,0.15)]">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="h-12 md:h-14 flex items-center justify-between text-xs md:text-sm">
            {/* Sol: Sosyal ikonlar */}
            <div className="flex items-center gap-3 md:gap-4 opacity-95">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:opacity-100 opacity-90">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.68 9.19 8.48 9.94v-7.03H7.9v-2.91h2.46V9.7c0-2.43 1.45-3.77 3.66-3.77 1.06 0 2.18.19 2.18.19v2.4h-1.23c-1.21 0-1.59.75-1.59 1.52v1.82h2.71l-.43 2.91h-2.28V22c4.8-.75 8.48-4.92 8.48-9.94Z"/></svg>
              </a>
              {/* X */}
              <a href="#" aria-label="X" className="hover:opacity-100 opacity-90">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 3h-2.3l-4 5.3L7.9 3H3.5l6.1 8.2L3 21h2.3l4.6-6.1L16.1 21h4.4l-6.6-8.9L21 3h-2.5ZM15 18.7l-3.6-4.9-4.4 5.9h1.8l3.1-4.2 3.1 4.2h.9ZM8.9 5.3l3.6 4.9 4.5-6.2h-1.8l-2.9 4-3-4h-.4Z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:opacity-100 opacity-90">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.51 5.51 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5Zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="hover:opacity-100 opacity-90">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.7 32.7 0 0 0 0 12a32.7 32.7 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c2.1.5 9.3.5 9.3.5s7.2 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.7 32.7 0 0 0 24 12a32.7 32.7 0 0 0-.5-5.8ZM9.8 15.5V8.5L16 12l-6.2 3.5Z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:opacity-100 opacity-90">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-3.8V8Z"/></svg>
              </a>
            </div>
            {/* Dikey ayırıcı */}
            <span className="hidden md:block w-px h-5 bg-white/40 mx-3" />

            {/* Sağ: EN, arama, menü */}
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="tracking-wide">EN</a>
              <button aria-label="Ara" className="opacity-95 hover:opacity-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm11 17.6-5.1-5.1 1.4-1.4 5.1 5.1-1.4 1.4Z"/></svg>
              </button>
              <button onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }} className="flex items-center gap-2">
                <span className="uppercase tracking-wide">Menü</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>
              </button>
            </div>
          </div>
        </div>


        {menuOpen && mounted && createPortal(
          <div ref={dropdownRef} className="fixed inset-0 z-[2147483647]" onClick={() => setMenuOpen(false)}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 overflow-y-auto overflow-x-hidden">
              <div className="relative w-full min-h-full bg-[#d8232a] text-white" onClick={(e) => e.stopPropagation()}>
                {/* Arka plan PNG görseli - Mobilde gizli */}
                <img
                  src={menuBgUrl || "/menu-bg.png"}
                  alt=""
                  aria-hidden="true"
                  className={`pointer-events-none select-none absolute inset-0 w-full h-full object-cover z-0 hidden md:block ${typeof menuBgOpacity === 'number' ? '' : 'opacity-15'}`}
                  style={typeof menuBgOpacity === 'number' ? { opacity: menuBgOpacity / 100 } : undefined}
                />
                {/* Kapat butonu - Responsive */}
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 transition active:scale-95 z-50"
                  aria-label="Menüyü kapat"
                >
                  <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.7 5.3 5.3 6.7 10.6 12l-5.3 5.3 1.4 1.4L12 13.4l5.3 5.3 1.4-1.4L13.4 12l5.3-5.3-1.4-1.4L12 10.6 6.7 5.3Z"/></svg>
                </button>
                {/* Üst yatay menü başlıkları - Responsive */}
                <div className="mx-auto max-w-[1200px] px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-5 md:pt-6 lg:pt-8">
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-10 text-[10px] sm:text-xs md:text-sm font-semibold tracking-tight">
                    <Link href="/" className="hover:underline text-white transition-all hover:scale-105">ANA SAYFA</Link>
                    <a href="#kurumsal" onClick={(e) => { e.preventDefault(); setActiveTop("kurumsal"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "kurumsal" ? "text-white" : "text-white/85"}`}>KURUMSAL</a>
                    <Link href="/urunler" className="hover:underline text-white transition-all hover:scale-105">ÜRÜNLER</Link>
                    <a href="#kariyer" onClick={(e) => { e.preventDefault(); setActiveTop("kariyer"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "kariyer" ? "text-white" : "text-white/85"}`}>KARİYER</a>
                    <a href="#basin" onClick={(e) => { e.preventDefault(); setActiveTop("basin"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "basin" ? "text-white" : "text-white/85"}`}>BASIN / MEDYA</a>
                    <a href="#iletisim" onClick={(e) => { e.preventDefault(); setActiveTop("iletisim"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "iletisim" ? "text-white" : "text-white/85"}`}>İLETİŞİM</a>
                    <a href="#ekatalog" onClick={(e) => { e.preventDefault(); setActiveTop("ekatalog"); }} className={`hover:underline transition-all hover:scale-105 ${activeTop === "ekatalog" ? "text-white" : "text-white/85"}`}>E-KATALOG</a>
                  </div>
                </div>
                <div className="mx-auto max-w-[1200px] px-4 sm:px-5 md:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-14 lg:pt-20 pb-20 sm:pb-24 md:pb-28">
                  {activeTop === "kurumsal" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      {kurumsalCards.map((c) => {
                        const content = (
                          <div className="flex items-start gap-2 sm:gap-3 bg-white text-[#111827] rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-md transition active:scale-95"><div><div className="font-semibold text-sm sm:text-base">{c.title}</div><div className="text-gray-600 text-xs">{c.desc}</div></div></div>
                        );
                        if (c.key === "tarihce") {
                          return <Link key={c.key} href="/tarihcemiz">{content}</Link>;
                        }
                        if (c.key === "ihracat") {
                          return <Link key={c.key} href="/ihracat">{content}</Link>;
                        }
                        if (c.key === "kalite") {
                          return <Link key={c.key} href="/kalite">{content}</Link>;
                        }
                        if (c.key === "baskan") {
                          return <Link key={c.key} href="/baskanin-mesaji">{content}</Link>;
                        }
                        if (c.key === "sosyal") {
                          return <Link key={c.key} href="/sosyal-sorumluluk">{content}</Link>;
                        }
                        if (c.key === "misyon-vizyon") {
                          return <Link key={c.key} href="/misyon-vizyon">{content}</Link>;
                        }
                        if (c.key === "sertifikalar") {
                          return <Link key={c.key} href="/sertifikalar">{content}</Link>;
                        }
                        if (c.key === "kilometre") {
                          return <Link key={c.key} href="/kilometre-taslarimiz">{content}</Link>;
                        }
                        if (c.key === "bilgi-toplumu") {
                          return <Link key={c.key} href="/bilgi-toplumu-hizmeti">{content}</Link>;
                        }
                        if (c.key === "kurumsal-kimlik") {
                          return <Link key={c.key} href="/kurumsal-kimlik">{content}</Link>;
                        }
                        return <a key={c.key} href={`#${c.key}`}>{content}</a>;
                      })}
                    </div>
                  )}
                  {activeTop === "urunler" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      {urunlerCards.map((c) => (
                        <Link key={c.key} href={`/urunler#${c.key}`} className="flex items-start gap-2 sm:gap-3 bg-white text-[#111827] rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-md transition active:scale-95"><div className="font-semibold text-sm sm:text-base">{c.title}</div></Link>
                      ))}
                    </div>
                  )}
                  {activeTop === "kariyer" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      {kariyerCards.map((c) => (
                        <Link key={c.key} href="/kariyer/is-basvuru-formu" className="flex items-start gap-2 sm:gap-3 bg-white text-[#111827] rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-md transition active:scale-95"><div className="font-semibold text-sm sm:text-base">{c.title}</div></Link>
                      ))}
                    </div>
                  )}
                  {activeTop === "basin" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      {basinCards.map((c) => (
                        <Link key={c.key} href={c.key === 'haberler' ? '/basin/haberler' : '/basin/video-galeri'} className="flex items-start gap-2 sm:gap-3 bg-white text-[#111827] rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-md transition active:scale-95"><div className="font-semibold text-sm sm:text-base">{c.title}</div></Link>
                      ))}
                    </div>
                  )}
                  {activeTop === "ekatalog" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      {ekatalogCards.map((c) => (
                        <Link key={c.key} href="/e-katalog" className="flex items-start gap-2 sm:gap-3 bg-white text-[#111827] rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-md transition active:scale-95"><div className="font-semibold text-sm sm:text-base">{c.title}</div></Link>
                      ))}
                    </div>
                  )}
                </div>
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,160 C240,260 480,60 720,90 C960,120 1200,260 1440,110 L1440,220 L0,220 Z" fill="#d8232a" />
                  <path d="M0,160 C240,260 480,60 720,90 C960,120 1200,260 1440,110 L1440,220 L0,220 Z" fill="#FBF9F6" opacity="1" transform="translate(0,10)" />
                </svg>
              </div>
            </div>
          </div>, document.body)
        }
      </div>
    </header>
  );
}


