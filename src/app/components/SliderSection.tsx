"use client";

import BlobNav from "./BlobNav";
import Slider, { SlideItem } from "./Slider";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";

type Props = {
  slides: SlideItem[];
};

export default function SliderSection({ slides }: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="w-full">
      <Slider slides={slides} height={560} onInit={setSwiper} />
      <BlobNav swiper={swiper} overlay />
    </div>
  );
}


