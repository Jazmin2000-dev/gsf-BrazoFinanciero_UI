"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


const ease = [0.22, 1, 0.36, 1] as const;

const PayrollIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <rect x="6" y="5" width="20" height="22" rx="2" />
    <line x1="10" y1="10" x2="22" y2="10" />
    <line x1="10" y1="14" x2="22" y2="14" />
    <line x1="10" y1="18" x2="18" y2="18" />
    <circle cx="20" cy="21" r="4" fill="var(--background)" />
    <path d="M20 19 L20 23 M18.5 20 L21.5 20" strokeWidth="1" />
  </svg>
);

export function BienestarFinancieroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { value: "−", label: "Reduce el estrés financiero", description: "Colaboradores con finanzas sanas y tranquilas." },
    { value: "↑", label: "Mejora la estabilidad laboral", description: "Menor rotación y mayor compromiso con la empresa." },
    { value: "↑", label: "Aumenta la productividad", description: "Equipos enfocados rinden más y mejor." },
    { value: "$", label: "Genera ingresos financieros", description: "Un beneficio que también es rentable para el negocio." },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
              <PayrollIcon className="h-7 w-7 text-primary" />
            </div>
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase mb-3">
              Bienestar y Nómina
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 text-balance">
              Créditos de nómina justos que cuidan a tu gente
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Ofrecer préstamos de nómina en condiciones justas alivia el estrés financiero de tus
              colaboradores y, al mismo tiempo, genera un retorno para la empresa. Es un beneficio que
              fortalece el bienestar del equipo y la rentabilidad del negocio.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease }}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center mb-4 font-heading text-xl font-bold text-primary">
                  {item.value}
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}