"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Mail, 
  MessageCircle, 
  FileText,
  Check
} from "lucide-react";
import { AnimatedWave } from "./animated-wave";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  location: string;
  source: string;
  currentSituation: string;
  operationTypes: string[];
  projectPriority: string;
};

const TOTAL_STEPS = 4; // 4 pasos  + pantalla de éxito

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    location: "",
    source: "",
    currentSituation: "",
    operationTypes: [],
    projectPriority: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Reemplaza cualquier carácter que no sea número, espacio o el signo '+'
    const valorLimpio = e.target.value.replace(/[^0-9+ ]/g, '');
    setFormData({ ...formData, whatsapp: valorLimpio });
  };

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleMultiSelect = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[];
    if (currentValues.includes(value)) {
      setFormData({ ...formData, [field]: currentValues.filter((v) => v !== value) });
    } else {
      setFormData({ ...formData, [field]: [...currentValues, value] });
    }
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS + 1)); // Permite avanzar hasta la pantalla de éxito
  };

  const prevStep = () => {
   setStep((prev) => Math.max(prev - 1, 1));
  };



  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Enviamos los datos a tu Webhook
      const response = await fetch("https://hook.us2.make.com/ptor1i93pvu2cjyllrqx7e3icwjsilgy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // formData ya tiene todo: name, email, priority, etc.
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        // Si se envió correctamente, mostramos la pantalla de éxito
        setStep(TOTAL_STEPS + 1); 
      } else {
        console.error("Hubo un problema al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  // Calculate progress percentage
  const progressPercentage = useMemo(() => {
    return Math.round(((step - 1) / TOTAL_STEPS) * 100);
  }, [step]);

//Validaciones

  //el paso 1 Ahora requiere los 5 campos para ser válido
  const isStep1Valid = 
  formData.name !== "" && 
  formData.email !== "" && 
  formData.whatsapp.replace(/[^0-9]/g, '').length >= 10 && 
  formData.location !== "" && 
  formData.source !== "";

  // El paso 2 es válido SI eligió una solución Y (si eligió "No estoy seguro", debe haber escrito algo)
const isStep2Valid = formData.currentSituation !== "";
  const isStep3Valid = formData.operationTypes.length > 0;
  const isStep4Valid = formData.projectPriority !== "";

  return (
    <section id="contacto" className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-background mb-4 text-balance">
            Solicita Información
          </h2>
          <p className="text-background/70">
            Completa el formulario y un asesor te contactará en menos de 24 horas.
          </p>
        </motion.div>

        {/* Progress Bar */}
        {step <= TOTAL_STEPS && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-background/60 font-sans">Paso {step} de {TOTAL_STEPS}</span>
              <span className="text-sm text-background/60 font-sans">{progressPercentage}% completado</span>
            </div>
            <div className="h-2 bg-background/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Contact Info */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Datos de Contacto
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    Ingresa tus datos para recibir información
                  </p>
                </div>
                <div>
                  <Label htmlFor="name" className="text-foreground font-sans">
                    Nombre completo <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="mt-2 font-heading"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground font-sans">
                    Correo electrónico <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="mt-2 font-heading"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="text-foreground font-sans">
                    WhatsApp <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleWhatsAppChange}
                    placeholder="+52 551 234 5678"
                    className="mt-2 font-heading"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="text-foreground font-sans">
                    ¿De dónde nos buscas? (Estado) <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ej. Guanajuato, CDMX, Jalisco..."
                    className="mt-2 font-heading"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="name" className="text-foreground font-sans">
                    ¿Cómo te enteraste de nosotros? <span className="text-primary">*</span>
                  </Label>
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={(e: any) => handleChange(e)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 font-heading"
                    required
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Tiktok">TikTok</option>
                    <option value="Recomendación">Recomendación / Otro</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!isStep1Valid}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Situación actual */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Situación actual
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Tu empresa ya financia a sus clientes? 
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "Sí", label: "Sí", description: "Ya otorgamos plazos o créditos." },
                    { value: "No", label: "No", description: "Aún no contamos con esquemas de financiamiento." },
                    { value: "Lo estoy evaluando", label: "Lo estoy evaluando", description: "Buscamos explorar esta opción." },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect("currentSituation", option.value)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full p-4 text-left rounded-xl border transition-all ${
                        formData.currentSituation === option.value
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-foreground font-heading font-medium block">{option.label}</span>
                          <span className="text-sm text-muted-foreground font-sans">{option.description}</span>
                        </div>
                        {formData.currentSituation === option.value && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>


                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>  
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!isStep2Valid}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}



            {/* Step 3: Tipo de operaciones */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                   Tipo de operaciones
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Qué tipo de operaciones te interesaría estructurar? (Puedes elegir varias)
                  </p>
                </div>
                <div className="space-y-3">
                  {[   
                    { value: "Crédito a clientes", label: "Crédito a clientes", description: "Solo Crédito a clientes" },
                    { value: "Arrendamiento", label: "Arrendamiento", description: "Operaciones de arrendamiento" },
                    { value: "Financiamiento interno", label: "Financiamiento interno", description: "Financiamiento interno de la empresa" },
                    { value: "Crédito de nómina", label: "Crédito de nómina", description: "Crédito basado en la nómina" },
                    { value: "Aún lo estoy evaluando", label: "Aún lo estoy evaluando", description: "Aún no he decidido" },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleMultiSelect("operationTypes", option.value)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full p-4 text-left rounded-xl border transition-all ${
                        formData.operationTypes?.includes(option.value)
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            formData.operationTypes.includes(option.value)
                              ? "bg-primary border-primary"
                              : "border-muted-foreground"
                          }`}
                        >
                          {formData.operationTypes.includes(option.value) && (
                            <Check className="h-3 w-3 text-white" />
                          )}   
                        </div>
                        <span className="text-foreground font-heading font-medium">{option.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!formData.operationTypes?.length}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Prioridad del proyecto  */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Prioridad del proyecto
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Qué te gustaría lograr con un brazo financiero?
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "Aumentar ventas", label: "Aumentar ventas", description: "Facilitando el cierre de negocios." },
                    { value: "Generar ingresos financieros", label: "Generar ingresos financieros", description: "Capturar el margen de interés." },
                    { value: "Optimizar el flujo financiero del grupo", label: "Optimizar el flujo financiero", description: "Manejo eficiente entre empresas." },
                    { value: "Evaluar oportunidades", label: "Evaluar oportunidades", description: "Conocer el potencial del modelo." },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect("projectPriority", option.value)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full p-4 text-left rounded-xl border transition-all ${
                        formData.projectPriority === option.value
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-foreground font-heading font-medium block">{option.label}</span>
                          <span className="text-sm text-muted-foreground font-sans">{option.description}</span>
                        </div>
                        {formData.projectPriority === option.value && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="submit"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!isStep4Valid}
                  >
                    Enviar Solicitud
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

  


          


            {/* Success State */}
            {step === TOTAL_STEPS + 1 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  ¡Gracias por tu interés!
                </h3>
                <p className="text-muted-foreground mb-6 font-sans">
              Hemos recibido la información de tu proyecto exitosamente. Un experto analizará tu perfil y se pondrá en contacto contigo a la brevedad para darte el seguimiento adecuado.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      name: "",
                      email: "",
                      whatsapp: "",
                      location: "",
                      source: "",
                      currentSituation: "",
                      operationTypes: [],
                      projectPriority:"",
                    });
                  }}
                >
                  Enviar otra solicitud
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

