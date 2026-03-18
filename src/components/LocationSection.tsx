import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import locationImg from "@/assets/location-barra.webp";
import mapImg from "@/assets/MAPA-OCEAN.webp";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="localizacao" ref={ref}>
      {/* Banner */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={locationImg}
          alt="Barra da Tijuca, Rio de Janeiro"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ocean-deep/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl text-accent-foreground text-center md:text-6xl"
          >
            Rio de Janeiro — Barra da Tijuca
          </motion.h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden ocean-shadow-lg"
          >
            <a
              href="https://www.google.com/maps/place/Barra+da+Tijuca,+Rio+de+Janeiro,+Brazil"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img
                src={mapImg}
                alt="Mapa da localização"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-display text-3xl text-foreground md:text-4xl leading-tight">
              No encontro entre paisagem, cidade e projeção global.
            </h3>
            <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">
              Localizado na Barra da Tijuca, Ocean City está inserido em uma das regiões
              mais valorizadas do Rio de Janeiro, com acesso privilegiado a praias, 
              parques naturais e infraestrutura urbana de excelência.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Praias", "Shopping Centers", "Aeroporto Internacional", "Reserva Natural"].map(
                (poi) => (
                  <div key={poi} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-sans text-sm text-foreground">{poi}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
