"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const StructureIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <rect x="12" y="3" width="8" height="6" rx="1" />
    <rect x="3" y="20" width="8" height="6" rx="1" />
    <rect x="21" y="20" width="8" height="6" rx="1" />
    <path d="M16 9 L16 14 M7 20 L7 14 L25 14 L25 20" />
  </svg>
);


export function SofomConcepto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary relative overflow-hidden">
    {/*  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="relative rounded-3xl border border-border bg-card p-8 md:p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          <div className="relative z-10">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <StructureIcon className="h-9 w-9 text-primary" />
            </div>
            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase mb-3">
              La Herramienta Legal
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              ¿Qué es una SOFOM?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              La <span className="font-semibold text-foreground">SOFOM</span> (Sociedad Financiera de
              Objeto Múltiple) es la figura legal utilizada en México para operar distintos productos
              financieros, como crédito, arrendamiento y factoraje, de manera estructurada, formal y
              regulada. Es la base sobre la que se construye un brazo financiero profesional.
            </p>
          </div>
        </motion.div>
      </div>*/}


      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 md:px-16 md:py-20 text-center"
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-5 text-balance">
              ¿Qué es una SOFOM?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-9 max-w-2xl mx-auto text-pretty">
              La SOFOM (Sociedad Financiera de Objeto Múltiple) es la figura legal utilizada en México para operar distintos productos
              financieros, como crédito, arrendamiento y factoraje, de manera estructurada, formal y
              regulada. Es la base sobre la que se construye un brazo financiero profesional.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-primary shadow-lg transition-colors hover:bg-secondary"
            >
              Explora el modelo de brazo financiero
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>


    </section>

    
  );
}



