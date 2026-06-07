import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Star, CheckCircle } from 'lucide-react';

export const ParaQuien = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const valores = [
        'Claridad antes que velocidad',
        'Cuidado del patrimonio',
        'Acompañamiento humano',
        'Información honesta y transparente',
        'Estrategia consciente',
        'Conexión y confianza',
        'Aprendizaje continuo',
    ];

    return (
        <section className="py-24 lg:py-32 bg-background" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className="inline-block text-xs tracking-luxury-wide uppercase text-muted-foreground mb-4">
                        ¿Quiénes somos?
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-foreground tracking-tight">
                        Personas comprometidas con{' '}
                        <span className="font-medium text-primary">tu patrimonio</span>
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Card 1 */}
                    <motion.div
                        className="group relative p-8 lg:p-10 bg-secondary/50 hover:bg-secondary transition-all duration-500 flex flex-col"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-foreground/10 group-hover:border-primary/40 transition-colors duration-300">
                                <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-lg lg:text-xl font-medium text-foreground mb-4 leading-snug">
                            Valorás tu tiempo y patrimonio.
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                            Entendemos que tu propiedad representa años de esfuerzo. Tratamos cada operación con el respeto que merece.
                        </p>
                        <motion.div
                            className="absolute bottom-0 left-0 h-[2px] bg-primary"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>

                    {/* Card 2 — Valores del Team Connection */}
                    <motion.div
                        className="group relative p-8 lg:p-10 bg-secondary/50 hover:bg-secondary transition-all duration-500 flex flex-col"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-foreground/10 group-hover:border-primary/40 transition-colors duration-300">
                                <Star className="w-5 h-5 text-primary" strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-lg lg:text-xl font-medium text-foreground mb-4 leading-snug">
                            Valores del Team Connection
                        </h3>
                        <ul className="space-y-1.5 flex-1">
                            {valores.map((value, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-primary mt-[2px] font-bold leading-none">•</span>
                                    <span>{value}</span>
                                </li>
                            ))}
                        </ul>
                        <motion.div
                            className="absolute bottom-0 left-0 h-[2px] bg-primary"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="group relative p-8 lg:p-10 bg-secondary/50 hover:bg-secondary transition-all duration-500 flex flex-col"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-foreground/10 group-hover:border-primary/40 transition-colors duration-300">
                                <CheckCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
                            </div>
                        </div>
                        <h3 className="text-lg lg:text-xl font-medium text-foreground mb-4 leading-snug">
                            Querés un proceso claro y profesional.
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                            Transparencia total en cada etapa. Sin sorpresas, con comunicación constante y resultados medibles.
                        </p>
                        <motion.div
                            className="absolute bottom-0 left-0 h-[2px] bg-primary"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ParaQuien;
