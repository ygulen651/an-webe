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
  } catch (e) {
    // sunucu tarafında hata olursa boş geç
  }
  return (
    <div className="min-h-screen w-full p-0 m-0 overflow-x-hidden bg-white">
      <Header overlay />
      <main className="w-full">
        <div className="pt-2 sm:pt-3 md:pt-4 mb-8 sm:mb-12 md:mb-16">
          <SliderSection slides={slides} />
        </div>
        <ProductCircleGrid />
        <InspireSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
