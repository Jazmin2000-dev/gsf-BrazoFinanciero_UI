"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom minimalist SVG icons
const DiagnosisIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Magnifying glass with chart */}
    <circle cx="14" cy="14" r="8" />
    <line x1="20" y1="20" x2="26" y2="26" />
    {/* Mini bars inside */}
    <line x1="10" y1="17" x2="10" y2="14" />
    <line x1="14" y1="17" x2="14" y2="12" />
    <line x1="18" y1="17" x2="18" y2="10" />
  </svg>
);

const StructureIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Organizational chart */}
    <rect x="12" y="4" width="8" height="6" rx="1" />
    <rect x="4" y="18" width="8" height="6" rx="1" />
    <rect x="20" y="18" width="8" height="6" rx="1" />
    <line x1="16" y1="10" x2="16" y2="14" />
    <line x1="8" y1="14" x2="24" y2="14" />
    <line x1="8" y1="14" x2="8" y2="18" />
    <line x1="24" y1="14" x2="24" y2="18" />
  </svg>
);

const AccompanimentIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Two people walking together */}
    <circle cx="10" cy="8" r="3" />
    <path d="M10 11 L10 18 M7 14 L13 14 M10 18 L7 26 M10 18 L13 26" />
    <circle cx="22" cy="8" r="3" />
    <path d="M22 11 L22 18 M19 14 L25 14 M22 18 L19 26 M22 18 L25 26" />
    {/* Connection */}
    <path d="M13 12 L19 12" strokeDasharray="2 2" />
  </svg>
);

const PreparationIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Checklist with progress */}
    <rect x="6" y="4" width="20" height="24" rx="1" />
    <line x1="10" y1="10" x2="22" y2="10" />
    <line x1="10" y1="15" x2="22" y2="15" />
    <line x1="10" y1="20" x2="18" y2="20" />
    {/* Checkmarks */}
    <path d="M8 9 L9 10 L11 8" strokeWidth="1.5" />
    <path d="M8 14 L9 15 L11 13" strokeWidth="1.5" />
    <circle cx="9" cy="20" r="1.5" fill="currentColor" opacity="0.3" />
  </svg>
);

const ServicesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Plus/add symbol with radial elements */}
    <circle cx="16" cy="16" r="10" />
    <line x1="16" y1="11" x2="16" y2="21" />
    <line x1="11" y1="16" x2="21" y2="16" />
    {/* Radial dots */}
    <circle cx="16" cy="4" r="1.5" fill="currentColor" />
    <circle cx="16" cy="28" r="1.5" fill="currentColor" />
    <circle cx="4" cy="16" r="1.5" fill="currentColor" />
    <circle cx="28" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

export function ModelsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stages = [
    {
      icon: DiagnosisIcon,
      number: "01",
      title: "Diagnóstico del proyecto",
      description: "Evaluamos tu situación actual, objetivos y necesidades para definir el mejor camino hacia la constitución.",
    },
    {
      icon: StructureIcon,
      number: "02",
      title: "Definición de estructura",
      description: "Determinamos la estructura societaria, capital y configuración óptima para tu proyecto.",
    },
    {
      icon: AccompanimentIcon,
      number: "03",
      title: "Acompañamiento en constitución",
      description: "Te guiamos paso a paso durante todo el proceso de constitución legal y registros.",
    },
    {
      icon: PreparationIcon,
      number: "04",
      title: "Preparación para operación",
      description: "Implementamos políticas, manuales y sistemas necesarios para iniciar operaciones.",
    },
    {
      icon: ServicesIcon,
      number: "05",
      title: "Servicios adicionales",
      description: "Ofrecemos soporte continuo, capacitación y servicios complementarios post-constitución.",
    },
  ];

  return (
    <section id="proceso" ref={ref} className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Cómo GSF te acompaña en el proceso?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Te guiamos en cada etapa del proceso de constitución con un enfoque estructurado y profesional.
          </p>
        </motion.div>

        {/* Desktop Vertical Timeline */}
        <div className="hidden lg:block max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-border -translate-x-1/2 origin-top"
            />

            <div className="space-y-8">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all inline-block max-w-md"
                    >
                      <span className="text-xs font-bold text-primary mb-1 block">Etapa {stage.number}</span>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {stage.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-lg shrink-0"
                  >
                    <stage.icon className="h-7 w-7 text-primary" />
                  </motion.div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-card border-2 border-primary rounded-full flex items-center justify-center shrink-0 shadow-md"
                >
                  <stage.icon className="h-6 w-6 text-primary" />
                </motion.div>
                {index < stages.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-border my-2 origin-top"
                  />
                )}
              </div>
              <div className="pb-6 pt-2">
                <span className="text-xs font-bold text-primary">Etapa {stage.number}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
