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
                        <span className="inline-block text-xs tracking-luxury-wide uppercase text-primary font-semibold mb-6 pb-2 border-b border-primary/20">
                            Team Connection • Keller Williams
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-tight text-foreground mb-8"
                        variants={itemVariants}
                    >
                        Ordenamos tu{' '}
                        <span className="font-semibold text-primary">decisión inmobiliaria.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
                        variants={itemVariants}
                    >
                        Somos personas. Nuestro trabajo empieza dándote claridad y acompañándote a tomar decisiones conscientes para cuidar tu patrimonio.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
                        variants={itemVariants}
                    >
                        <Button
                            onClick={onOpenModal}
                            size="lg"
                            className="group bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm tracking-luxury uppercase px-6 py-5 sm:px-8 sm:py-7 w-full sm:w-auto transition-all duration-300"
                        >
                            Agendar asesoría gratuita
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>

                        <Button
                            onClick={onOpenVideo}
                            variant="outline"
                            size="lg"
                            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm tracking-luxury uppercase px-6 py-5 sm:px-8 sm:py-7 w-full sm:w-auto transition-all duration-300"
                        >
                            <Play className="mr-2 w-4 h-4 group-hover:text-primary-foreground transition-colors duration-300" />
                            Ver Video Explicativo
                            <span className="ml-2 text-primary/60 group-hover:text-primary-foreground/70 text-xs transition-colors duration-300">(3 min)</span>
                        </Button>
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
