import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Zap, Scale, Star, TrendingUp, Heart } from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Briefcase,
        title: 'Confiá en expertos para tu propiedad',
        description: 'Profesionales con experiencia comprobada.',
        detail: 'Gestionamos cada aspecto de tu operación con el conocimiento y la trayectoria necesaria para que estés en las mejores manos.',
    },
    {
        number: '02',
        icon: Zap,
        title: 'Venta eficiente y rápida',
        description: 'Resultados en el menor tiempo posible.',
        detail: 'Aplicamos estrategias de difusión y negociación que aceleran los tiempos de venta sin resignar el valor de tu propiedad.',
    },
    {
        number: '03',
        icon: Scale,
        title: 'Apoyo en trámites legales',
        description: 'Respaldo jurídico en cada etapa.',
        detail: 'Te acompañamos en todos los aspectos legales de la operación: escrituras, contratos y gestión notarial para que todo esté en regla.',
    },
    {
        number: '04',
        icon: Star,
        title: 'Servicios a tu alcance',
        description: 'Todo lo que necesitás, en un solo lugar.',
        detail: 'Desde la tasación hasta la entrega de llaves, cubrimos cada paso del proceso para que no tengas que preocuparte por nada.',
    },
    {
        number: '05',
        icon: TrendingUp,
        title: 'Orientación financiera confiable',
        description: 'Asesoramiento transparente sobre tu inversión.',
        detail: 'Te brindamos información clara sobre el mercado, financiamiento y opciones de inversión para que tomes decisiones con seguridad.',
    },
    {
        number: '06',
        icon: Heart,
        title: 'Conexión humana',
        description: 'Trato cercano y personalizado.',
        detail: 'Entendemos que cada operación es única. Construimos relaciones de confianza que van más allá de la transacción.',
    },
];

export const Metodo = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="metodo" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="max-w-2xl mb-16 lg:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className="inline-block text-xs tracking-luxury-wide uppercase text-muted-foreground mb-4">
                        Nuestro Compromiso
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-foreground tracking-tight mb-6">
                        ¿Qué{' '}
                        <span className="font-medium text-primary">aseguramos?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Cada operación viene respaldada por estándares claros. Esto es lo que podés esperar trabajando con nosotros.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Desktop */}
                    <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-primary/20" />

                    {/* Steps */}
                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative lg:grid lg:grid-cols-12 lg:gap-8 items-start"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.2,
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                >
                                    {/* Number & Icon - Desktop */}
                                    <div className="hidden lg:flex lg:col-span-2 items-start justify-center relative">
                                        <motion.div
                                            className="w-[120px] h-[120px] bg-background border border-border flex flex-col items-center justify-center relative z-10"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <span className="text-3xl font-light text-foreground/30 mb-1">
                                                {step.number}
                                            </span>
                                            <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="lg:col-span-10 lg:py-8">
                                        {/* Mobile Number & Icon */}
                                        <div className="flex lg:hidden items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-background border border-border flex flex-col items-center justify-center">
                                                <span className="text-xl font-light text-foreground/30">
                                                    {step.number}
                                                </span>
                                            </div>
                                            <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                        </div>

                                        <div className="lg:pl-8 lg:border-l lg:border-transparent hover:border-primary/25 transition-colors duration-300">
                                            <h3 className="text-xl lg:text-2xl font-medium text-foreground mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-foreground/70 font-medium mb-3">
                                                {step.description}
                                            </p>
                                            <p className="text-muted-foreground leading-relaxed max-w-xl">
                                                {step.detail}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metodo;
