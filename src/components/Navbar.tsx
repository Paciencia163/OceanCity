import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Ocean City", href: "#hero" },
  { label: "A Visão", href: "#visao" },
  { label: "A Experiência", href: "#experiencia" },
  { label: "O Ativo", href: "#ativo" },
  { label: "Localização", href: "#localizacao" },
  { label: "Galeria", href: "#galeria" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ocean-deep/95 backdrop-blur-md py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#hero" className="font-display text-xl tracking-wide text-accent-foreground md:text-2xl">
            OCEAN <span className="font-sans text-sm font-bold tracking-[0.2em]">CITY</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-caps text-accent-foreground/70 transition-colors hover:text-accent-foreground"
                style={{ fontSize: "10px" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <span className="text-caps text-accent-foreground/50" style={{ fontSize: "10px" }}>
              PT | EN
            </span>
            <a
              href="#acesso"
              className="border border-accent-foreground/30 px-5 py-2.5 text-caps text-accent-foreground transition-all hover:bg-accent-foreground hover:text-ocean-deep"
              style={{ fontSize: "10px" }}
            >
              Solicitar acesso privado
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span className={`block h-[1px] w-6 bg-accent-foreground transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[1px] w-6 bg-accent-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1px] w-6 bg-accent-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ocean-deep/98 backdrop-blur-lg lg:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl text-accent-foreground"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#acesso"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => setMobileOpen(false)}
              className="btn-ocean-primary mt-4 text-accent-foreground"
            >
              Solicitar acesso privado
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
