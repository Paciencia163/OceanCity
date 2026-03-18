import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import floorPlan from "@/assets/floor-plan.webp";
import t1 from "@/assets/t1.webp";
import t2 from "@/assets/t2.webp";
import t3 from "@/assets/t3.webp";
import t4 from "@/assets/t4.webp";
import t5 from "@/assets/t5.webp";
import t6 from "@/assets/t6.webp";
import t7 from "@/assets/t7.webp";
import t8 from "@/assets/t8.webp";

const planImages = [
  { src: floorPlan, alt: "Planta geral" },
  { src: t1, alt: "Tipologia T1" },
  { src: t2, alt: "Tipologia T2" },
  { src: t3, alt: "Tipologia T3" },
  { src: t4, alt: "Tipologia T4" },
  { src: t5, alt: "Tipologia T5" },
  { src: t6, alt: "Tipologia T6" },
  { src: t7, alt: "Tipologia T7" },
  { src: t8, alt: "Tipologia T8" },
];

const ResidencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? planImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === planImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-caps text-muted-foreground mb-4">Plantas</p>
          <h2 className="font-display text-3xl text-foreground md:text-5xl leading-tight">
            Residências concebidas para unir escala, privacidade e permanência.
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-ocean-outline mt-10 inline-block text-foreground"
          >
            Ver plantas residenciais
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="ocean-shadow-lg overflow-hidden">
            <img
              src={planImages[currentImageIndex].src}
              alt={planImages[currentImageIndex].alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white transition-colors z-10"
          >
            <ChevronLeft size={20} className="text-black" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white transition-colors z-10"
          >
            <ChevronRight size={20} className="text-black" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/80 px-3 py-1 text-xs text-black font-semibold">
            {currentImageIndex + 1} / {planImages.length}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 hover:bg-gray-200 transition-colors"
            >
              <X size={24} className="text-black" />
            </button>

            <div className="relative bg-black">
              <img
                src={planImages[currentImageIndex].src}
                alt={planImages[currentImageIndex].alt}
                className="h-auto w-full object-contain"
              />

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} className="text-black" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white transition-colors"
              >
                <ChevronRight size={24} className="text-black" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-sm text-black font-semibold">
                {currentImageIndex + 1} / {planImages.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 overflow-x-auto bg-black p-4">
                {planImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 rounded border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-primary opacity-100"
                        : "border-gray-600 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-16 w-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResidencesSection;
