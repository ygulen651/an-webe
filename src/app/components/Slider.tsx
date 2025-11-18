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
  const [containerHeight, setContainerHeight] = useState<number>(height);

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

  // Responsive height for mobile/tablet
  useEffect(() => {
    const setH = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (w < 640) {
        setContainerHeight(Math.min(height, 420));
      } else if (w < 1024) {
        setContainerHeight(Math.min(height, 520));
      } else {
        setContainerHeight(height);
      }
    };
    setH();
    window.addEventListener('resize', setH);
    return () => window.removeEventListener('resize', setH);
  }, [height]);

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
          slidesPerView: 1,
          spaceBetween: 0,
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
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: -20 },
            1024: { slidesPerView: 'auto' as const, spaceBetween: -50 },
          },
        };
      case 'magazine':
        return {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 0,
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
            640: { slidesPerView: 2, spaceBetween: -10 },
            1024: { slidesPerView: 3.5, spaceBetween: -30 },
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
        <div className="absolute inset-0 z-20 bg-black/50 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-white/40 rounded-full animate-pulse mx-auto"></div>
            </div>
            <p className="text-white font-semibold">Büyüleyici görseller hazırlanıyor...</p>
          </div>
        </div>
      )}

      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        style={{
          height: containerHeight,
          perspective: variant === 'cards' || variant === 'coverflow' ? '1000px' : 'none',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>

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
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-700 via-neutral-800 to-black relative overflow-hidden" style={{ minHeight: '100%' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/40"></div>
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
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 sm:gap-3">
        {/* Pagination dots */}
        <div className="flex gap-1 sm:gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => instance?.slideTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-6 sm:w-8 h-1.5 bg-white shadow"
                  : "w-3 sm:w-4 h-1 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => instance?.slidePrev()}
            className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-black/80 border border-white/10"
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
            className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-black/80 border border-white/10"
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


