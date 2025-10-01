"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export type SlideItem = {
  id: string;
  img?: string;
  videoUrl?: string; // mp4, webm, hls manifest vs.
  poster?: string;   // video için poster görseli
  alt?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
};

type SliderProps = {
  slides: SlideItem[];
  height?: number;
  onInit?: (swiper: SwiperType) => void;
};

export default function Slider({ slides, height = 420, onInit }: SliderProps) {
  const [instance, setInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (!instance) return;
    const handle = () => {
      const idx = instance.realIndex ?? 0;
      const current = slides[idx];
      try {
        if (current?.videoUrl) {
          instance.autoplay?.stop();
        } else {
          instance.autoplay?.start();
        }
      } catch {}
    };
    instance.on("slideChange", handle);
    // ilk durumda da uygula
    handle();
    return () => {
      try { instance.off("slideChange", handle); } catch {}
    };
  }, [instance, slides]);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation={false}
        pagination={false}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        loop
        spaceBetween={16}
        slidesPerView={1}
        aria-label="Tanıtım slaytları"
        style={{ width: "100%", height }}
        onSwiper={(swiper) => { setInstance(swiper); onInit?.(swiper); }}
     >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                borderRadius: 16,
                backgroundColor: "#ffffff",
              }}
            >
              {s.videoUrl ? (
                <video
                  src={s.videoUrl}
                  poster={s.poster ?? s.img}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  aria-label={s.alt ?? s.title ?? "video slide"}
                />
              ) : s.img ? (
                <img
                  src={s.img}
                  alt={s.alt ?? s.title ?? "slide"}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


