import { motion } from "framer-motion";
import heroImg from "@/assets/hero-ocean.webp";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-svh w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImg}
          alt="Vista panorâmica do Ocean City"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-ocean-deep/40" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-24 md:items-start md:justify-center md:px-16 lg:px-24">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl leading-none text-accent-foreground md:text-7xl lg:text-8xl"
        >
          Construído
          <br />
          para permanecer.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 max-w-lg font-sans text-sm font-light leading-relaxed tracking-wide text-accent-foreground/80 md:text-base"
        >
          Um território onde arquitetura, ordem, segurança e visão de longo prazo
          se transformam em legado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <a href="#acesso" className="btn-ocean-primary text-accent-foreground">
            Solicitar informações
          </a>
          <button className="btn-ocean-ghost text-accent-foreground">
            <span className="h-[1px] w-8 bg-accent-foreground" />
            Ver
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="h-12 w-[1px] bg-gradient-to-b from-accent-foreground to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
