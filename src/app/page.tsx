import Header from "./components/Header";
import ProductCircleGrid from "./components/ProductCircleGrid";
import InspireSection from "./components/InspireSection";
import SliderSection from "./components/SliderSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import { sanityClient } from "./lib/sanity";
import { qSliderItems } from "./lib/queries";
import { SlideItem } from "./components/Slider";

export default async function Home() {
  let slides: SlideItem[] = [];
  try {
    slides = await sanityClient.fetch<SlideItem[]>(qSliderItems);

    // Add some sample data if no slides from CMS
    if (slides.length === 0) {
      slides = [
        {
          id: "1",
          title: "Premium Bisküvi Koleksiyonu",
          description: "En taze ve doğal malzemelerle hazırlanan, geleneksel lezzetin modern yorumu.",
          img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop&crop=center",
          alt: "Premium bisküvi koleksiyonu",
          category: "Öne Çıkan",
          featured: true,
          ctaText: "Keşfet",
          ctaHref: "/urunler"
        },
        {
          id: "2",
          title: "Çikolata Rüyası",
          description: "Belçika çikolatasının eşsiz lezzeti ile harmanlanmış özel tariflerimiz.",
          img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1200&h=800&fit=crop&crop=center",
          alt: "Çikolata koleksiyonu",
          category: "Yeni",
          ctaText: "Tadına Bak",
          ctaHref: "/urunler"
        },
        {
          id: "3",
          title: "Sağlıklı Atıştırmalıklar",
          description: "Doğal ve besleyici malzemelerle hazırlanan, suçluluk duymadan yenebilir lezzetler.",
          img: "https://images.unsplash.com/photo-1587731953335-517a237b8ae0?w=1200&h=800&fit=crop&crop=center",
          alt: "Sağlıklı atıştırmalıklar",
          category: "Sağlıklı",
          featured: true,
          ctaText: "Keşfet",
          ctaHref: "/urunler"
        },
        {
          id: "4",
          title: "Geleneksel Tatlar",
          description: "Yılların verdiği tecrübe ile hazırlanan, anne eli değmişçesine doğal lezzetler.",
          img: "https://images.unsplash.com/photo-1594736797933-d0601ba3a63a?w=1200&h=800&fit=crop&crop=center",
          alt: "Geleneksel tatlar",
          category: "Klasik",
          ctaText: "Tanı",
          ctaHref: "/urunler"
        },
        {
          id: "5",
          title: "Özel Kekler & Pastalar",
          description: "Doğum günü, yıl dönümü ve özel günleriniz için hazırlanan eşsiz lezzetler.",
          img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&h=800&fit=crop&crop=center",
          alt: "Özel kekler ve pastalar",
          category: "Özel Gün",
          featured: true,
          ctaText: "Sipariş Ver",
          ctaHref: "/urunler"
        },
        {
          id: "6",
          title: "Mevsimsel Ürünler",
          description: "Her mevsimin en taze meyve ve sebzeleri ile hazırlanan sınırlı üretim lezzetler.",
          img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=800&fit=crop&crop=center",
          alt: "Mevsimsel ürünler",
          category: "Mevsimsel",
          ctaText: "Keşfet",
          ctaHref: "/urunler"
        },
        {
          id: "7",
          title: "Şekerleme Cenneti",
          description: "Renk renk, çeşit çeşit şekerlemelerimiz ile tatlı bir mola verin.",
          img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop&crop=center",
          alt: "Şekerleme koleksiyonu",
          category: "Tatlı",
          ctaText: "Tadına Bak",
          ctaHref: "/urunler"
        },
        {
          id: "8",
          title: "Kurabiye Sepeti",
          description: "Çeşit çeşit kurabiyelerimiz ile çay saatlerinizi renklendirin.",
          img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1200&h=800&fit=crop&crop=center",
          alt: "Kurabiye sepeti",
          category: "Kahvaltı",
          ctaText: "Sepete Ekle",
          ctaHref: "/urunler"
        }
      ];
    }
  } catch (e) {
    console.error("Slider verisi çekilemedi:", e);
    // Fallback sample data
    slides = [
      {
        id: "fallback-1",
        title: "Premium Ürünler",
        description: "En kaliteli malzemelerle hazırlanan, özenle seçilmiş ürünlerimiz.",
        category: "Öne Çıkan",
        featured: true,
        ctaText: "Keşfet",
        ctaHref: "/urunler"
      },
      {
        id: "fallback-2",
        title: "Çeşit Çeşit Lezzetler",
        description: "Her damak tadına uygun, geniş ürün yelpazemiz ile tanışın.",
        category: "Kataloğ",
        ctaText: "Gözat",
        ctaHref: "/urunler"
      },
      {
        id: "fallback-3",
        title: "Taze ve Doğal",
        description: "Doğal malzemeler ve geleneksel yöntemlerle hazırlanan ürünlerimiz.",
        category: "Doğal",
        ctaText: "İncele",
        ctaHref: "/urunler"
      }
    ];
  }

  return (
    <div className="min-h-screen w-full p-0 m-0 overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
      <Header overlay />
      <main className="w-full">
        {/* Hero Slider - Full Width & Height */}
        <div className="w-full h-screen relative -mt-2 sm:-mt-3 md:-mt-4">
          <SliderSection slides={slides} variant="cards" />
        </div>

        {/* Other sections with proper spacing */}
        <div className="relative z-10">
          <ProductCircleGrid />
          <InspireSection />
          <NewsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
