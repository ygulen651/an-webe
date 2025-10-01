"use client";

import BlobNav from "./BlobNav";
import Slider, { SlideItem } from "./Slider";
import type { Swiper as SwiperType } from "swiper";
import { useState, useEffect } from "react";

type Props = {
  slides: SlideItem[];
};

export default function SliderSection({ slides }: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [sliderHeight, setSliderHeight] = useState(560);
  
  // Mobil için slider yüksekliğini ayarla
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 640) {
        setSliderHeight(260); // Mobile
      } else if (window.innerWidth < 768) {
        setSliderHeight(340); // Tablet küçük
      } else if (window.innerWidth < 1024) {
        setSliderHeight(440); // Tablet
      } else {
        setSliderHeight(560); // Desktop
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  
  return (
    <div className="w-full relative px-2 sm:px-3 md:px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <Slider slides={slides} height={sliderHeight} onInit={setSwiper} />
        <BlobNav swiper={swiper} overlay />
      </div>
    </div>
  );
}


