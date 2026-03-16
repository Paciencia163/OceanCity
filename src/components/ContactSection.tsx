import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pais: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="acesso" ref={ref} className="section-padding bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-caps text-muted-foreground mb-4">Acesso Privado</p>
          <h2 className="font-display text-3xl text-foreground md:text-4xl leading-tight">
            Atendimento exclusivo
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted-foreground">
            Para receber informações detalhadas sobre o Ocean City, incluindo plantas,
            condições de investimento e agenda de visitas, preencha o formulário ao lado.
          </p>
          <div className="mt-10 space-y-4 text-sm text-muted-foreground">
            <p>📧 contato@oceancity.com.br</p>
            <p>📞 +55 21 9999-9999</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 40, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-caps text-muted-foreground mb-2 block" style={{ fontSize: "10px" }}>
                Nome
              </label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="text-caps text-muted-foreground mb-2 block" style={{ fontSize: "10px" }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-caps text-muted-foreground mb-2 block" style={{ fontSize: "10px" }}>
                Telefone
              </label>
              <input
                type="tel"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="text-caps text-muted-foreground mb-2 block" style={{ fontSize: "10px" }}>
                País
              </label>
              <input
                type="text"
                value={formData.pais}
                onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-primary"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-ocean-outline mt-4 w-full text-foreground"
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
