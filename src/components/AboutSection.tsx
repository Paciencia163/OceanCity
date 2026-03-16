import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/about-building.webp";

const pillars = [
  "Arquitetura autoral",
  "Permanência",
  "Exclusividade consciente",
  "Legado patrimonial",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ativo" ref={ref} className="section-padding bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden ocean-shadow-lg"
        >
          <img
            src={aboutImg}
            alt="Ocean City - Vista aérea do empreendimento"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-caps text-muted-foreground mb-4">O Ativo</p>
          <h2 className="font-display text-3xl text-foreground md:text-5xl">
            Mais do que um
            <br />
            empreendimento.
          </h2>
          <p className="mt-8 font-sans text-base leading-relaxed text-muted-foreground">
            Ocean City foi concebido para redefinir a relação entre viver, pertencer
            e investir. Um ativo simbólico global onde luxo, ordem e permanência
            seguem a mesma lógica.
          </p>

          <div className="mt-10 space-y-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar}
                initial={{ x: 20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="h-[1px] w-8 bg-primary" />
                <span className="text-caps text-foreground">{pillar}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
