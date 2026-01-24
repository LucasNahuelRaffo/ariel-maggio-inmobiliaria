import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = ({ onOpenModal, onOpenVideo }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                        alt="Luxury Real Estate"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
                <motion.div
                    className="max-w-3xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Tag */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-block text-xs tracking-luxury-wide uppercase text-muted-foreground mb-6 pb-2 border-b border-foreground/20">
                            Inmobiliaria Premium
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-foreground mb-8"
                        variants={itemVariants}
                    >
                        Una venta inmobiliaria exitosa{' '}
                        <span className="font-medium">no es suerte.</span>
                        <br />
                        <span className="text-muted-foreground">Es método.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
                        variants={itemVariants}
                    >
                        Acompañamos a propietarios que buscan resultados reales, con una estrategia de marketing y negociación diseñada para maximizar valor.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        variants={itemVariants}
                    >
                        <Button
                            onClick={onOpenModal}
                            size="lg"
                            className="group bg-foreground text-background hover:bg-foreground/90 text-sm tracking-luxury uppercase px-8 py-7 transition-all duration-300"
                        >
                            Ver disponibilidad para una llamada
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>

                        <Button
                            onClick={onOpenVideo}
                            variant="outline"
                            size="lg"
                            className="group border-foreground/20 hover:bg-foreground/5 text-sm tracking-luxury uppercase px-8 py-7 transition-all duration-300"
                        >
                            <Play className="mr-2 w-4 h-4" />
                            Ver Video Explicativo
                            <span className="ml-2 text-muted-foreground text-xs">(3 min)</span>
                        </Button>
                    </motion.div>

                    {/* Trust Indicator */}
                    <motion.div
                        className="mt-16 pt-8 border-t border-foreground/10"
                        variants={itemVariants}
                    >
                        <p className="text-xs tracking-luxury uppercase text-muted-foreground">
                            Más de 10 años de experiencia en el mercado inmobiliario
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <motion.div
                    className="w-6 h-10 border border-foreground/30 rounded-full flex justify-center pt-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <motion.div
                        className="w-1 h-2 bg-foreground/50 rounded-full"
                        animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
