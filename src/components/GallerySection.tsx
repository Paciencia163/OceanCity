import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="w-full"
          breakpoints={{
            768: { slidesPerView: 1.3, centeredSlides: true },
            1024: { slidesPerView: 1.5, centeredSlides: true },
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[16/9] overflow-hidden cursor-pointer">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                  onClick={() => {
                    setSelectedIndex(i);
                    setIsOpen(true);
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Galeria de Imagens</DialogTitle>
          </DialogHeader>
          {selectedIndex !== null && (
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              initialSlide={selectedIndex}
              className="w-full"
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
