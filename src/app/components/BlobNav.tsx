"use client";

import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

type Props = {
  swiper?: SwiperType | null;
  overlay?: boolean;
};

export default function BlobNav({ swiper, overlay }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiper) return;
    const onChange = () => setActiveIndex(swiper.realIndex);
    swiper.on("slideChange", onChange);
    return () => {
      try { swiper.off("slideChange", onChange); } catch {}
    };
  }, [swiper]);

  const goPrev = () => swiper?.slidePrev();
  const goNext = () => swiper?.slideNext();

  const wrapperClass = overlay
    ? "absolute top-[490px] left-[-48px] z-20 pointer-events-none"
    : "relative w-full flex items-center justify-center py-8";

  return (
    <div className={wrapperClass}>
      <div className="relative w-[420px] h-[280px] pointer-events-auto">
        {/* Organic blob shape just like your reference */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#9f1b20" floodOpacity="0.35" />
            </filter>
          </defs>
          <path
            filter="url(#shadow)"
            fill="#d8232a"
            d="M53.2,-34.1C64.8,-17.5,67.7,7.5,60.2,27.2C52.7,46.9,34.8,61.3,14.9,66.4C-5,71.6,-26.9,67.6,-43.6,55.2C-60.3,42.9,-71.8,22.4,-70.7,2C-69.6,-18.3,-55.9,-36.7,-40.6,-51.9C-25.3,-67.1,-8.4,-79.2,6.7,-78.6C21.8,-77.9,43.5,-64.7,53.2,-34.1Z"
            transform="translate(110 108) scale(1.15) rotate(-6)"
          />
          <circle cx="160" cy="38" r="10" fill="#d8232a" />
        </svg>
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full bg-white text-red-600 grid place-items-center shadow-md hover:scale-105 transition"
            aria-label="Önceki"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M15.78 4.72a.75.75 0 010 1.06L9.56 12l6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd"/></svg>
          </button>
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full bg-white text-red-600 grid place-items-center shadow-md hover:scale-105 transition"
            aria-label="Sonraki"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M8.22 19.28a.75.75 0 010-1.06L14.44 12 8.22 5.78a.75.75 0 111.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 01-1.06 0z" clipRule="evenodd"/></svg>
          </button>
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: Math.max(swiper?.slides?.length ?? 0, 0) }).map((_, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? "bg-red-600" : "bg-red-300"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}


