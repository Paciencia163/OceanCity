import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
          className="mt-16 relative aspect-video w-full overflow-hidden ocean-shadow-lg cursor-pointer group"
        >
          <div className="absolute inset-0 bg-ocean-deep/20 transition-all duration-500 group-hover:bg-ocean-deep/10" />
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&showinfo=0"
            title="Ocean City - Nossa Visão"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
            <div className="h-20 w-20 rounded-full border-2 border-accent-foreground/50 flex items-center justify-center backdrop-blur-sm bg-ocean-deep/30">
              <svg className="ml-1 h-8 w-8 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FilmSection;
