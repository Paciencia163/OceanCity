import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import galleryPool from "@/assets/gallery-pool.webp";
import galleryArch from "@/assets/gallery-architecture.webp";
import galleryInterior from "@/assets/gallery-interior.webp";
import galleryOcean from "@/assets/gallery-ocean-view.webp";

const slides = [
  { src: galleryArch, alt: "Arquitetura Ocean City" },
  { src: galleryPool, alt: "Piscina de borda infinita" },
  { src: galleryOcean, alt: "Vista para o oceano" },
  { src: galleryInterior, alt: "Interiores de luxo" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" ref={ref} className="py-24 bg-ocean-deep md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl text-accent-foreground md:text-5xl mb-12"
        >
          Galeria
        </motion.h2>
      </div>

      <style>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          width: 32px;
          height: 32px;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          transition: all 0.3s ease;
          top: 50%;
          transform: translateY(-50%);
        }

        .gallery-swiper .swiper-button-next::after,
        .gallery-swiper .swiper-button-prev::after {
          font-size: 12px;
          color: #000;
          font-weight: bold;
        }

        .gallery-swiper .swiper-button-next:hover,
        .gallery-swiper .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .gallery-swiper .swiper-button-next {
          right: 16px;
        }

        .gallery-swiper .swiper-button-prev {
          left: 16px;
        }

        .gallery-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 0.5;
        }

        .gallery-swiper .swiper-pagination-bullet-active {
          background-color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="gallery-swiper w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[16/9] overflow-hidden w-full">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default GallerySection;
