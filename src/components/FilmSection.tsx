import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import videoSrc from "../assets/filme_loc_pt_leg_ingles.mp4";

const FilmSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="visao" ref={ref} className="section-padding bg-background">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl text-foreground md:text-5xl"
        >
          Nossa visão em movimento
        </motion.h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative aspect-video w-full overflow-hidden ocean-shadow-lg"
        >
          <div className="absolute inset-0 bg-ocean-deep/20 transition-all duration-500 hover:bg-ocean-deep/10" />
          <video
            className="h-full w-full"
            controls
            preload="metadata"
            title="Ocean City - Nossa Visão"
          >
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default FilmSection;
