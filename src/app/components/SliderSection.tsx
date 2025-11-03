"use client";

import BlobNav from "./BlobNav";
import Slider, { SlideItem } from "./Slider";
import type { Swiper as SwiperType } from "swiper";
import { useState, useEffect } from "react";

type Props = {
  slides: SlideItem[];
  variant?: 'cards' | 'coverflow' | 'classic' | 'magazine';
};

export default function SliderSection({ slides, variant = 'cards' }: Props) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [sliderHeight, setSliderHeight] = useState(600); // Default height for SSR
  const [isMobile, setIsMobile] = useState(false);

  // Enhanced responsive height calculation based on variant
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Device type detection
      setIsMobile(width < 640);

      // Mobilde tam ekran, desktop'ta %100vh
      let newHeight: number;

      if (width < 768) {
        // Mobil ve tablet - tam ekran
        newHeight = height;
      } else {
        // Desktop - variant'a göre
        const baseHeight = {
          cards: height,
          coverflow: height * 0.9,
          classic: height * 0.9,
          magazine: height * 0.8,
        }[variant];
        newHeight = baseHeight;
      }

      setSliderHeight(newHeight);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Throttled resize handler for better performance
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateDimensions, 100);
    };

    window.addEventListener('resize', throttledResize);

    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(resizeTimeout);
    };
  }, [slides, variant]);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slider is visible, ensure autoplay is working
            if (swiper) {
              try {
                swiper.autoplay?.start();
              } catch {}
            }
          } else {
            // Slider is not visible, pause autoplay to save resources
            if (swiper) {
              try {
                swiper.autoplay?.stop();
              } catch {}
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const sliderElement = document.getElementById('hero-slider');
    if (sliderElement) {
      observer.observe(sliderElement);
    }

    return () => observer.disconnect();
  }, [swiper]);

  const getVariantTitle = () => {
    switch (variant) {
      case 'cards': return '3D Kart Efekti';
      case 'coverflow': return 'Coverflow Efekti';
      case 'magazine': return 'Dergi Stili';
      default: return 'Klasik Slider';
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-200 to-red-300 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>

        {/* Variant-specific decorations */}
        {variant === 'cards' && (
          <>
            <div className="absolute top-20 left-10 w-4 h-4 bg-red-400 rounded-full opacity-40 animate-bounce delay-500"></div>
            <div className="absolute bottom-20 right-10 w-6 h-6 bg-red-300 rounded-full opacity-30 animate-pulse delay-700"></div>
          </>
        )}

        {variant === 'magazine' && (
          <>
            <div className="absolute top-1/3 right-20 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-red-400 rounded-full opacity-40 animate-bounce delay-300"></div>
          </>
        )}
      </div>

      <div className="relative z-10 h-full">
        {/* Full height slider */}
        <div className="h-full">
          <Slider
            slides={slides}
            height={sliderHeight}
            onInit={setSwiper}
            variant={variant}
          />

          {/* Enhanced BlobNav with variant-specific positioning */}
          {variant !== 'cards' && (
            <BlobNav
              swiper={swiper}
              overlay
              totalSlides={slides.length}
            />
          )}

          {/* Additional mobile optimizations */}
        </div>
      </div>

      {/* Loading skeleton for empty state */}
      {slides.length === 0 && (
        <div className="w-full h-full bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl overflow-hidden animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-red-200 animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-300 animate-ping"></div>
            </div>
            <p className="text-red-600 font-semibold text-lg">Sihirli slider hazırlanıyor...</p>
            <div className="mt-3 flex justify-center space-x-1">
              <div className="w-3 h-3 bg-red-300 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


