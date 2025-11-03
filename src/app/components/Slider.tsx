"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

import { Navigation, Pagination, Autoplay, A11y, EffectCards, EffectCoverflow, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import type { SwiperOptions } from "swiper/types";
import Link from "next/link";
import Image from "next/image";

export type SlideItem = {
  id: string;
  img?: string;
  videoUrl?: string;
  poster?: string;
  alt?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  category?: string;
  featured?: boolean;
};

type SliderProps = {
  slides: SlideItem[];
  height?: number;
  onInit?: (swiper: SwiperType) => void;
  variant?: 'cards' | 'coverflow' | 'classic' | 'magazine';
};

export default function Slider({ slides, height = 600, onInit, variant = 'cards' }: SliderProps) {
  const [instance, setInstance] = useState<SwiperType | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse movement for 3D effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!instance) return;
      if (e.key === 'ArrowLeft') {
        instance.slidePrev();
      } else if (e.key === 'ArrowRight') {
        instance.slideNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [instance]);

  useEffect(() => {
    if (!instance) return;
    const handle = () => {
      const idx = instance.realIndex ?? 0;
      setActiveIndex(idx);
    };
    instance.on("slideChange", handle);
    handle();
    return () => {
      try { instance.off("slideChange", handle); } catch {}
    };
  }, [instance, slides]);

  // Loading state management
  useEffect(() => {
    if (slides.length === 0) {
      setLoading(false);
      return;
    }

    // Simple timeout-based loading for better compatibility
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [slides]);

  const getSliderConfig = (): SwiperOptions => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    switch (variant) {
      case 'cards':
        return {
          effect: isMobile ? undefined : 'cards',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 0,
          modules: isMobile ? [Autoplay, A11y] : [EffectCards, Autoplay, A11y],
          loop: false,
          autoplay: { delay: 4000, disableOnInteraction: false },
        };
      case 'coverflow':
        return {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto' as const,
          spaceBetween: -50,
          coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          },
          modules: [EffectCoverflow, Autoplay, A11y, Parallax],
          parallax: true,
          loop: false,
        };
      case 'magazine':
        return {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 2.5,
          spaceBetween: -30,
          coverflowEffect: {
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          },
          modules: [EffectCoverflow, Autoplay, A11y, Parallax],
          parallax: true,
          loop: false,
          breakpoints: {
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 3.5 },
          }
        };
      default:
        return {
          modules: [Navigation, Pagination, Autoplay, A11y, Parallax],
          navigation: false,
          pagination: false,
          autoplay: { delay: 4000, pauseOnMouseEnter: true, disableOnInteraction: false },
          loop: false,
          spaceBetween: 0,
          slidesPerView: 1,
          parallax: true,
        };
    }
  };

  const config = getSliderConfig();

  if (slides.length === 0) {
    return (
      <div className="w-full relative bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl overflow-hidden" style={{ height }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 animate-pulse flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-red-200 animate-ping"></div>
            </div>
            <p className="text-red-600 font-semibold text-lg">Muhteşem içerikler yükleniyor...</p>
            <div className="mt-4 flex justify-center space-x-1">
              <div className="w-2 h-2 bg-red-300 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-red-400 rounded-full animate-pulse mx-auto"></div>
            </div>
            <p className="text-red-600 font-semibold">Büyüleyici görseller hazırlanıyor...</p>
          </div>
        </div>
      )}

      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        style={{
          height,
          perspective: variant === 'cards' || variant === 'coverflow' ? '1000px' : 'none',
        }}
      >
        {/* Background particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400 rounded-full animate-bounce opacity-40 delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse opacity-50 delay-500"></div>
        </div>

        <Swiper
          {...config}
          style={{ width: "100%", height: "100%" }}
          onSwiper={(swiper) => { setInstance(swiper); onInit?.(swiper); }}
          className="rounded-2xl w-full h-full"
          aria-label="Özel tasarım slayt gösterisi"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer ${
                  variant === 'cards' ? 'transform-gpu' : ''
                }`}
                style={{
                  transform: variant === 'cards'
                    ? `rotateY(${mousePosition.x * 10}deg) rotateX(${mousePosition.y * -10}deg)`
                    : undefined,
                }}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  {slide.videoUrl ? (
                    <video
                      src={slide.videoUrl}
                      poster={slide.poster ?? slide.img}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      style={{ objectFit: 'cover' }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      controls={false}
                    />
                  ) : slide.img ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={slide.img}
                        alt={slide.alt ?? slide.title ?? "slide"}
                        fill
                        className="object-cover"
                        style={{ objectFit: 'cover' }}
                        priority
                        sizes="100vw"
                        quality={95}
                      />
                      {/* Dynamic overlay based on content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-transparent"></div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-400 via-red-500 to-red-600 relative overflow-hidden" style={{ minHeight: '100%' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-300/20 to-red-700/40"></div>
                    </div>
                  )}
                </div>

                {/* Content overlay - Removed all text content */}

                {/* Slide indicator - Removed */}

                {/* Featured badge - Removed */}

                {/* Reflection effect for cards variant */}
                {variant === 'cards' && (
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Variant-specific overlays - Removed */}
      </div>

      {/* Keyboard navigation buttons on slider */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        {/* Pagination dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => instance?.slideTo(i)}
              className={`transition-all duration-300 rounded-full border-2 ${
                i === activeIndex
                  ? "w-3 h-3 bg-red-600 border-red-600 scale-110 shadow-lg"
                  : "w-2.5 h-2.5 bg-white/40 border-white/60 hover:bg-white/80 hover:border-white hover:scale-110"
              }`}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => instance?.slidePrev()}
            className="group relative w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm text-red-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white border border-red-100"
            aria-label="Önceki"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5"
            >
              <path fillRule="evenodd" d="M15.78 4.72a.75.75 0 010 1.06L9.56 12l6.22 6.22a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd"/>
            </svg>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              ← Sol Ok
            </div>
          </button>

          <button
            onClick={() => instance?.slideNext()}
            className="group relative w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm text-red-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white border border-red-100"
            aria-label="Sonraki"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path fillRule="evenodd" d="M8.22 19.28a.75.75 0 010-1.06L14.44 12 8.22 5.78a.75.75 0 111.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 01-1.06 0z" clipRule="evenodd"/>
            </svg>
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Sağ Ok →
            </div>
          </button>
        </div>
      </div>

      {/* Progress indicator - Removed */}
    </div>
  );
}


