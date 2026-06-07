import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
        question: '¿Trabajan con exclusividad?',
        answer: 'Sí, para proteger el valor de tu propiedad. La exclusividad nos permite invertir recursos significativos en marketing premium y negociación estratégica. Esto evita la guerra de precios entre inmobiliarias y posiciona tu propiedad con el nivel de profesionalismo que merece.',
    },
    {
        question: '¿Comisiones?',
        answer: 'Claras y alineadas a resultados. Nuestros honorarios son transparentes desde el primer encuentro. Trabajamos con un modelo donde nuestro éxito está directamente vinculado al tuyo: solo cobramos cuando vendemos, y siempre al mejor precio posible.',
    },
    {
        question: '¿Tiempos?',
        answer: 'Nuestro objetivo es vender bien, no solo rápido. Cada propiedad tiene su tiempo óptimo de mercado. Priorizamos conseguir el mejor precio sobre acelerar una venta a costa del valor. Dicho esto, nuestra estrategia de marketing suele generar ofertas calificadas en las primeras semanas.',
    },
    {
        question: '¿Qué zonas cubren?',
        answer: 'Operamos principalmente en Buenos Aires, con foco en barrios premium como Palermo, Belgrano, Recoleta, Puerto Madero y zona norte del GBA. Nuestro conocimiento profundo de estas áreas nos permite una valuación y posicionamiento óptimos.',
    },
    {
        question: '¿Cómo es el primer paso?',
        answer: 'Todo comienza con una conversación. Agendamos una llamada de diagnóstico sin compromiso donde conocemos tu situación, evaluamos la propiedad y te explicamos cómo podemos ayudarte. Sin presiones, sin letra chica.',
    },
];

export const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="faq" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column - Header */}
                    <motion.div
                        className="lg:col-span-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <span className="inline-block text-xs tracking-luxury-wide uppercase text-muted-foreground mb-4">
                            Preguntas Frecuentes
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight mb-6">
                            Respuestas{' '}
                            <span className="font-medium text-primary">directas</span>
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Transparencia es parte de nuestro método. Si tenés otras preguntas, agendá una llamada y conversamos.
                        </p>
                    </motion.div>

                    {/* Right Column - Accordion */}
                    <motion.div
                        className="lg:col-span-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-border border-l-transparent data-[state=open]:border-l-primary data-[state=open]:border-l-2 bg-background px-6 lg:px-8 data-[state=open]:shadow-soft transition-all duration-300"
                                >
                                    <AccordionTrigger className="text-left text-base lg:text-lg font-medium text-foreground hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pr-8">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
