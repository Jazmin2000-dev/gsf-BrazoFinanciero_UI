"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


const ease = [0.22, 1, 0.36, 1] as const;

const TermsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <rect x="4" y="7" width="24" height="18" rx="2" />
    <line x1="4" y1="12" x2="28" y2="12" />
    <circle cx="9" cy="19" r="2" />
    <line x1="14" y1="19" x2="24" y2="19" />
  </svg>
);

const CashFlowIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M4 24 L11 16 L16 20 L28 7" strokeWidth="1.5" />
    <polyline points="22,7 28,7 28,13" strokeWidth="1.5" />
    <line x1="4" y1="27" x2="28" y2="27" />
  </svg>
);

const LeasingIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <rect x="4" y="14" width="18" height="10" rx="1" />
    <path d="M22 17 L26 17 L28 20 L28 24 L22 24" />
    <circle cx="9" cy="24" r="2.5" />
    <circle cx="24" cy="24" r="2.5" />
    <path d="M8 14 L10 8 L18 8 L20 14" />
  </svg>
);

const InterCompanyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <rect x="4" y="10" width="10" height="16" rx="1" />
    <rect x="18" y="6" width="10" height="20" rx="1" />
    <line x1="7" y1="14" x2="11" y2="14" />
    <line x1="7" y1="18" x2="11" y2="18" />
    <line x1="21" y1="10" x2="25" y2="10" />
    <line x1="21" y1="14" x2="25" y2="14" />
    <path d="M14 16 L18 16" strokeWidth="1.5" />
  </svg>
);

const IncomeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="16" cy="16" r="11" />
    <path d="M16 9 L16 23 M13 12 C13 10.5 14.5 10 16 10 C17.5 10 19 10.5 19 12 C19 15 13 14 13 17 C13 18.5 14.5 19 16 19 C17.5 19 19 18.5 19 17" strokeWidth="1.2" />
  </svg>
);


export function IndustriaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    { icon: TermsIcon, label: "Construcción" },
    { icon: InterCompanyIcon, label: "Automotriz" },
    { icon: CashFlowIcon, label: "Inmobiliario" },
    { icon: LeasingIcon, label: "Manufactura" },
    { icon: IncomeIcon, label: "Distribución" },
  ];

  return (
    <section id="sectores" ref={ref} className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 text-balance">
              Un modelo que aplica a tu industria
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
              El brazo financiero potencia a empresas de múltiples sectores que ya otorgan crédito o financian operaciones.
            </p>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-base text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Estos son algunos sectores donde este modelo se suele aplicar.</span>
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease }}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}