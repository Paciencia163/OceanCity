import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
import expViver from "@/assets/exp-viver.webp";
import expReceber from "@/assets/exp-receber.webp";
import expContemplar from "@/assets/exp-contemplar.webp";
import expPertencer from "@/assets/exp-pertencer.webp";

const experiences = [
  { title: "Viver", desc: "Interiores amplos e arquitetura pensada para durar.", img: expViver },
  { title: "Receber", desc: "Espaços ideais para convivência e hospitalidade.", img: expReceber },
  { title: "Contemplar", desc: "Vistas que reorganizam a percepção do tempo.", img: expContemplar },
  { title: "Pertencer", desc: "Um ecossistema exclusivo de experiências.", img: expPertencer },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" ref={ref} className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-caps text-muted-foreground mb-4">A Experiência</p>
          <h2 className="font-display text-3xl text-foreground md:text-5xl">
            Uma forma mais elevada de viver.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto font-sans text-base leading-relaxed text-muted-foreground">
            O dia a dia no Ocean City foi desenhado para oferecer conforto, beleza e exclusividade
            em cada detalhe — da arquitetura dos espaços à curadoria das experiências.
          </p>
        </motion.div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <style>{`
            .experience-swiper .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background-color: rgba(0, 0, 0, 0.3);
              opacity: 0.5;
            }
            .experience-swiper .swiper-pagination-bullet-active {
              background-color: rgba(0, 0, 0, 0.8);
              opacity: 1;
            }
          `}</style>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            className="experience-swiper w-full"
          >
            {experiences.map((item) => (
              <SwiperSlide key={item.title}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-display text-xl text-accent-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-accent-foreground/70">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {experiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-8">
                <h3 className="font-display text-xl text-accent-foreground md:text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-accent-foreground/70">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
