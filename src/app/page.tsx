import Header from "./components/Header";
import ProductCircleGrid from "./components/ProductCircleGrid";
import InspireSection from "./components/InspireSection";
import SliderSection from "./components/SliderSection";
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
    <div className="min-h-screen w-full p-0 m-0">
      <Header overlay />
      <SliderSection slides={slides} />
      <ProductCircleGrid />
      <InspireSection />
    </div>
  );
}
