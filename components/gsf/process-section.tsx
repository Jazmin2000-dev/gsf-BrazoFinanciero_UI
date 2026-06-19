"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Custom minimalist SVG icons
const IncorporateIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Blueprint/document with pen */}
    <rect x="8" y="8" width="24" height="32" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Grid lines - blueprint style */}
    <line x1="8" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" opacity="0.5" />
    <line x1="8" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" opacity="0.5" />
    <line x1="8" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" opacity="0.5" />
    <line x1="16" y1="8" x2="16" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" opacity="0.5" />
    <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" opacity="0.5" />
    {/* Pen */}
    <path d="M34 12 L40 6 L42 8 L36 14 Z" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="34" y1="12" x2="36" y2="14" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Accent */}
    <circle cx="20" cy="20" r="4" fill="#018abe" opacity="0.2" />
    <circle cx="20" cy="20" r="2" fill="#018abe" />
  </svg>
);

const BuyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Building with key */}
    <rect x="12" y="14" width="16" height="26" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Windows */}
    <rect x="15" y="18" width="4" height="4" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" />
    <rect x="21" y="18" width="4" height="4" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" />
    <rect x="15" y="25" width="4" height="4" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" />
    <rect x="21" y="25" width="4" height="4" stroke="currentColor" strokeWidth="0.5" className="text-slate-800" />
    {/* Door */}
    <rect x="18" y="34" width="4" height="6" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Roof */}
    <path d="M10 14 L20 6 L30 14" stroke="currentColor" strokeWidth="1" className="text-slate-800" fill="none" />
    {/* Key */}
    <circle cx="36" cy="20" r="5" stroke="#018abe" strokeWidth="1.5" />
    <line x1="36" y1="25" x2="36" y2="36" stroke="#018abe" strokeWidth="1.5" />
    <line x1="36" y1="30" x2="40" y2="30" stroke="#018abe" strokeWidth="1.5" />
    <line x1="36" y1="34" x2="39" y2="34" stroke="#018abe" strokeWidth="1.5" />
  </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="8" x2="13" y2="8" />
    <polyline points="9,4 13,8 9,12" />
  </svg>
);

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const options = [
    {
      icon: IncorporateIcon,
      title: "Constituir una SOFOM",
      subtitle: "Desde cero",
      description: "Crea una SOFOM nueva con la estructura exacta que necesitas, configurada desde el inicio según tus objetivos.",
      benefits: [
        "Diseño operativo 100% personalizado",
        "Sin pasivos previos",
        "Involucramiento en todo el proceso",
        "Ideal para proyectos nuevos",
        "Esquema de pagos por etapas",
      ],
      ideal: "Ideal cuando tienes tiempo para el proceso completo.",
    },
    {
      icon: BuyIcon,
      title: "Adquirir una SOFOM",
      subtitle: "Estructura existente",
      description: "Obtén una SOFOM ya constituida y lista para operar, reduciendo significativamente los tiempos de inicio.",
      benefits: [
        "Inicio de operaciones inmediato",
        "Cumplimiento ya implementado",
        "Registros vigentes",
        "Historial establecido",
      ],
      ideal: "Ideal cuando necesitas iniciar operaciones rápidamente.",
      featured: true,
    },
  ];

  return (
    <section id="diferencias" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Constituir vs Comprar una SOFOM
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GSF te ofrece ambas alternativas
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`relative bg-card p-8 rounded-3xl border ${
                option.featured
                  ? "border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10"
                  : "border-border"
              } hover:shadow-xl transition-all`}
            >
              {option.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                    Más Rápido
                  </span>
                </motion.div>
              )}

              <motion.div
                className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100"
                whileHover={{ rotate: 2, scale: 1.05 }}
              >
                <option.icon className="h-14 w-14" />
              </motion.div>

              <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                {option.subtitle}
              </p>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                {option.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {option.description}
              </p>

              <ul className="space-y-3 mb-6">
                {option.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              <p className="text-xs text-muted-foreground italic mb-6 border-l-2 border-primary/30 pl-3">
                {option.ideal}
              </p>

              {option.featured && (
                <Button
                  className="w-full bg-primary hover:bg-primary/90 group"
                  asChild
                >
                  <Link href="https://venta-sofom.grupogsf.com.mx/#contacto" target="_blank" rel="noopener noreferrer">
                    Ver Opciones de Compra
                    <ArrowIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}

              {!option.featured && (
                <Button
                  variant="outline"
                  className="w-full group border-foreground/20 hover:bg-foreground hover:text-background"
                  asChild
                >
                  <Link href="#contacto">
                    Consultar sobre Constitución
                    <ArrowIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿No sabes cuál opción es mejor para ti?
          </p>
          <Button
            variant="link"
            className="text-primary hover:text-primary/80 font-semibold"
            asChild
          >
            <Link href="#contacto">
              Agenda una consulta gratuita para evaluarlo juntos
              <ArrowIcon className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
