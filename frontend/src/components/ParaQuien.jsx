import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Target, CheckCircle } from 'lucide-react';

const cards = [
    {
        icon: Clock,
        title: 'Valorás tu tiempo y patrimonio.',
        description: 'Entendemos que tu propiedad representa años de esfuerzo. Tratamos cada operación con el respeto que merece.',
    },
    {
        icon: Target,
        title: 'Buscás evitar el desgaste de publicar sin estrategia.',
        description: 'Nada de publicaciones genéricas. Cada acción está pensada para atraer compradores calificados.',
    },
    {
        icon: CheckCircle,
        title: 'Querés un proceso claro y profesional.',
        description: 'Transparencia total en cada etapa. Sin sorpresas, con comunicación constante y resultados medibles.',
    },
];

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
                        ¿Para quién es esto?
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-foreground tracking-tight">
                        Diseñado para propietarios{' '}
                        <span className="font-medium">exigentes</span>
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group relative p-8 lg:p-10 bg-secondary/50 hover:bg-secondary transition-all duration-500 flex flex-col"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="w-12 h-12 flex items-center justify-center border border-foreground/10 group-hover:border-foreground/20 transition-colors duration-300">
                                        <Icon className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg lg:text-xl font-medium text-foreground mb-4 leading-snug">
                                    {card.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                                    {card.description}
                                </p>

                                {/* Decorative line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[2px] bg-foreground/20"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ParaQuien;
