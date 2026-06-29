"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom minimalist SVG icons
const LegalStructureIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Building/structure shape */}
    <rect x="14" y="16" width="20" height="24" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="24" y1="8" x2="24" y2="16" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Columns */}
    <line x1="18" y1="20" x2="18" y2="36" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="24" y1="20" x2="24" y2="36" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="30" y1="20" x2="30" y2="36" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Pediment */}
    <path d="M12 16 L24 8 L36 16" stroke="currentColor" strokeWidth="1" className="text-slate-800" fill="none" />
    {/* Accent */}
    <circle cx="24" cy="12" r="2" fill="#018abe" />
  </svg>
);

const ComplianceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Shield outline */}
    <path d="M24 6 L38 12 L38 24 C38 32 24 42 24 42 C24 42 10 32 10 24 L10 12 Z" stroke="currentColor" strokeWidth="1" className="text-slate-800" fill="none" />
    {/* Lock symbol inside */}
    <rect x="18" y="20" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <path d="M20 20 L20 16 C20 13 24 13 24 13 C24 13 28 13 28 16 L28 20" stroke="currentColor" strokeWidth="1" className="text-slate-800" fill="none" />
    {/* Keyhole */}
    <circle cx="24" cy="24" r="2" fill="#018abe" />
    <line x1="24" y1="26" x2="24" y2="28" stroke="#018abe" strokeWidth="1.5" />
  </svg>
);

const RegistrationIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Document stack */}
    <rect x="16" y="10" width="20" height="28" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <rect x="13" y="13" width="20" height="28" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" fill="white" />
    {/* Lines */}
    <line x1="17" y1="20" x2="29" y2="20" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="17" y1="25" x2="29" y2="25" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="17" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Check badge */}
    <circle cx="30" cy="35" r="6" fill="#018abe" />
    <path d="M27 35 L29 37 L33 33" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

const OperationalIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Gear */}
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Gear teeth */}
    <line x1="24" y1="10" x2="24" y2="16" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="24" y1="32" x2="24" y2="38" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="10" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="32" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Diagonal teeth */}
    <line x1="14" y1="14" x2="18" y2="18" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="30" y1="30" x2="34" y2="34" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="14" y1="34" x2="18" y2="30" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="30" y1="18" x2="34" y2="14" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Center accent */}
    <circle cx="24" cy="24" r="1.5" fill="#018abe" />
  </svg>
);

export function SofomSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

    const steps = [
    {
      icon: LegalStructureIcon,
      number: "01",
      title: "Diagnóstico del modelo de negocio",
      description: "Analizamos tu operación para identificar las oportunidades financieras.",
    },
    {
      icon: ComplianceIcon,
      number: "02",
      title: "Diseño de la estructura financiera",
      description: "Definimos la figura y los productos adecuados para tus objetivos.",
    },
    {
      icon: RegistrationIcon,
      number: "03",
      title: "Constitución o adquisición de la estructura",
      description: "Creamos o adquirimos la entidad financiera que mejor se adapte.",
    },
    {
      icon:OperationalIcon,
      number: "04",
      title: "Implementación operativa",
      description: "Ponemos en marcha software, procesos, contabilidad y documentación.",
    },
  ];

 return (
    <section id="proceso" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            El proceso de estructuración de un brazo financiero
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Constituir una brazo financiero implica más que crear una empresa.
          
            
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-primary/50 to-border origin-left"
            />
            
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-32 h-32 bg-card border border-border rounded-2xl flex flex-col items-center justify-center relative z-10 mb-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all cursor-default"
                    >
                      <span className="text-xs font-bold text-primary mb-1">{step.number}</span>
                      <step.icon className="h-8 w-8 text-foreground" />
                    </motion.div>
                    <h3 className=" font-heading text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
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
                  className="w-16 h-16 bg-card border border-border rounded-xl flex flex-col items-center justify-center shrink-0 shadow-md"
                >
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                  <step.icon className="h-5 w-5 text-foreground" />
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-border my-2 origin-top"
                  />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}