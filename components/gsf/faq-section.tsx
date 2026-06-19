"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "¿Cuánto cuesta constituir una SOFOM?",
      answer: "No existe un costo único, ya que depende del nivel de estructura y soluciones tecnológicas que tu proyecto requiera. Ofrecemos diferentes niveles de acompañamiento, desde la constitución básica hasta estructuras integrales listas para operar. En una sesión de diagnóstico inicial, evaluamos tu modelo de negocio para entregarte una propuesta económica a la medida.",
    },
    {
      question: "¿Cuánto tiempo puede tomar el proceso? ",
      answer: "El proceso de constitución y obtención de registros tiene plazos definidos por las autoridades, pero nuestra metodología permite optimizar cada etapa. Dependiendo de si se trata de una estructura básica o un modelo con alta demanda de servicios y cumplimiento, el acompañamiento integral asegura que cumplas los tiempos legales sin contratiempos.",
    },
    {
      question: "¿Qué requisitos se necesitan?",
      answer: "Los requisitos fundamentales abarcan desde la conformación legal de la sociedad hasta el cumplimiento estricto en materia de Prevención de Lavado de Dinero (PLD) y los registros ante CNBV y CONDUSEF. En GSF nos encargamos de guiarte paso a paso en la recopilación y preparación de toda la documentación necesaria para que tu expediente sea sólido.",
    },
    {
      question: "¿Se puede operar una SOFOM inmediatamente?",
      answer: "La constitución es el primer paso, pero para iniciar operaciones de forma segura, es indispensable contar con la estructura operativa, el manual de cumplimiento PLD y los registros regulatorios activos. Nuestro objetivo es llevar tu proyecto desde la constitución hasta la puesta en marcha técnica y operativa, asegurando que cada producto financiero que lances al mercado opere bajo el marco legal vigente.",
    },
    {
      question: "¿Qué servicios adicionales se requieren?",
      answer: "Más allá de la constitución, el ecosistema para operar una financiera requiere de contabilidad especializada, sistemas de control de cartera, auditorías PLD constantes y asesoría jurídica continua. GSF te acompaña como aliado estratégico en todo este proceso, integrando los servicios necesarios para que tu enfoque principal sea el crecimiento de tu cartera y no la gestión administrativa.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos las dudas más comunes sobre la adquisición de SOFOMES.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <AccordionItem value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
