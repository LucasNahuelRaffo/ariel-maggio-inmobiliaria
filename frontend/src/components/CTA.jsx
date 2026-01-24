import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTA = ({ onOpenModal }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="py-24 lg:py-32 bg-foreground relative overflow-hidden" ref={ref}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className="inline-block text-xs tracking-luxury-wide uppercase text-background/50 mb-6">
                        Da el primer paso
                    </span>
                    
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-background tracking-tight mb-6">
                        ¿Listo para vender con{' '}
                        <span className="font-medium">estrategia</span>?
                    </h2>
                    
                    <p className="text-background/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
                        Agendá una llamada de diagnóstico sin compromiso. Conocemos tu situación y te explicamos cómo podemos ayudarte.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button
                            onClick={onOpenModal}
                            size="lg"
                            className="group bg-background text-foreground hover:bg-background/90 text-sm tracking-luxury uppercase px-10 py-7 transition-all duration-300"
                        >
                            Agendar llamada gratuita
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.p
                        className="mt-8 text-xs tracking-luxury uppercase text-background/40"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        Sin compromiso • Respuesta en 24hs
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
