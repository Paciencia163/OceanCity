import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import floorPlan from "@/assets/floor-plan.webp";

const ResidencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <a href="#acesso" className="btn-ocean-outline mt-10 inline-block text-foreground">
            Ver plantas residenciais
          </a>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="ocean-shadow-lg overflow-hidden"
        >
          <img
            src={floorPlan}
            alt="Planta residencial Ocean City"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ResidencesSection;
