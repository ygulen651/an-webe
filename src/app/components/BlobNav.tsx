"use client";

import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

type Props = {
  swiper?: SwiperType | null;
  overlay?: boolean;
  totalSlides?: number;
};

export default function BlobNav({ swiper, overlay, totalSlides }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    ? "absolute top-[210px] sm:top-[290px] md:top-[380px] lg:top-[490px] left-[-12px] sm:left-[-28px] md:left-[-40px] lg:left-[-48px] z-20 pointer-events-none"
    : "relative w-full flex items-center justify-center py-4 sm:py-6 md:py-8";

  return (
    <div className={wrapperClass}>
      <div
        className="relative w-[220px] h-[145px] sm:w-[300px] sm:h-[190px] md:w-[370px] md:h-[235px] lg:w-[420px] lg:h-[280px] pointer-events-auto group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced organic blob shape with animation */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#d8232a" floodOpacity="0.4" />
            </filter>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e53e3e" />
              <stop offset="50%" stopColor="#d8232a" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main blob with enhanced styling */}
          <path
            filter="url(#shadow)"
            fill="url(#blobGradient)"
            d="M53.2,-34.1C64.8,-17.5,67.7,7.5,60.2,27.2C52.7,46.9,34.8,61.3,14.9,66.4C-5,71.6,-26.9,67.6,-43.6,55.2C-60.3,42.9,-71.8,22.4,-70.7,2C-69.6,-18.3,-55.9,-36.7,-40.6,-51.9C-25.3,-67.1,-8.4,-79.2,6.7,-78.6C21.8,-77.9,43.5,-64.7,53.2,-34.1Z"
            transform="translate(110 108) scale(1.15) rotate(-6)"
            className={`transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
            style={{
              filter: isHovered ? 'url(#glow)' : 'url(#shadow)',
            }}
          />

          {/* Animated decorative circles */}
          <circle
            cx="160"
            cy="38"
            r="8"
            fill="#ffffff"
            className={`transition-all duration-500 ${isHovered ? 'r-12 opacity-90' : 'r-8 opacity-70'}`}
          />
          <circle
            cx="45"
            cy="165"
            r="4"
            fill="#ffffff"
            className={`transition-all duration-700 delay-200 ${isHovered ? 'r-8 opacity-60' : 'r-4 opacity-40'}`}
          />

          {/* Pulsing accent */}
          <circle
            cx="110"
            cy="80"
            r="3"
            fill="#ffffff"
            className="animate-pulse opacity-60"
          />
        </svg>

        {/* Navigation buttons with enhanced styling */}
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 sm:gap-4 md:gap-6">
          <button
            onClick={goPrev}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm text-red-600 grid place-items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white group border border-red-100"
            aria-label="Önceki"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:-translate-x-0.5"
            >
              <path fillRule="evenodd" d="M15.78 4.72a.75.75 0 010 1.06L9.56 12l6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd"/>
            </svg>
          </button>

          <button
            onClick={goNext}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm text-red-600 grid place-items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white group border border-red-100"
            aria-label="Sonraki"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path fillRule="evenodd" d="M8.22 19.28a.75.75 0 010-1.06L14.44 12 8.22 5.78a.75.75 0 111.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 01-1.06 0z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* Enhanced pagination dots */}
        <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {Array.from({ length: totalSlides ?? 0 }).map((_, i) => (
            <button
              key={i}
              onClick={() => swiper?.slideTo(i)}
              className={`transition-all duration-300 rounded-full border-2 ${
                i === activeIndex
                  ? "w-3 h-3 sm:w-4 sm:h-4 bg-red-600 border-red-600 scale-110 shadow-lg"
                  : "w-2 h-2 sm:w-3 sm:h-3 bg-white/60 border-white/40 hover:bg-white/80 hover:scale-105"
              }`}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>

        {/* Slide info overlay */}
        <div className={`absolute top-2 left-2 bg-black/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          {activeIndex + 1} / {totalSlides ?? 1}
        </div>

        {/* Hover indicator */}
        <div className={`absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
      </div>
    </div>
  );
}


