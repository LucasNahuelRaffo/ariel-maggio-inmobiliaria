import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
    {
        quote: 'Vendí mi departamento en Palermo en tiempo récord y a un precio que superó mis expectativas. El proceso fue impecable de principio a fin.',
        author: 'María Elena Rodríguez',
        role: 'Propietaria en Palermo',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    },
    {
        quote: 'La estrategia de marketing que implementaron atrajo exactamente el tipo de comprador que buscaba. Profesionalismo absoluto.',
        author: 'Carlos Alberto Méndez',
        role: 'Inversor inmobiliario',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    },
    {
        quote: 'Después de meses sin resultados con otras inmobiliarias, Ariel logró vender mi casa en semanas. La diferencia está en el método.',
        author: 'Luciana Ferrero',
        role: 'Propietaria en Belgrano',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    },
];

export const Testimonios = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonios" className="py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                    alt="Luxury Interior"
                    className="w-full h-full object-cover opacity-[0.03]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className="inline-block text-xs tracking-luxury-wide uppercase text-muted-foreground mb-4">
                        Testimonios
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-foreground tracking-tight">
                        Lo que dicen nuestros{' '}
                        <span className="font-medium">clientes</span>
                    </h2>
                </motion.div>

                {/* Testimonial Carousel */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className="relative bg-secondary/30 p-8 lg:p-16">
                        {/* Quote Icon */}
                        <Quote className="absolute top-8 left-8 lg:top-12 lg:left-12 w-10 h-10 text-foreground/10" strokeWidth={1} />

                        {/* Content */}
                        <div className="relative">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <blockquote className="text-xl lg:text-2xl xl:text-3xl font-light text-foreground leading-relaxed mb-10 pt-8">
                                    "{testimonials[currentIndex].quote}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].author}
                                        className="w-14 h-14 rounded-full object-cover grayscale"
                                    />
                                    <div>
                                        <p className="font-medium text-foreground">
                                            {testimonials[currentIndex].author}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-10 pt-8 border-t border-border">
                            {/* Dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-hover ${
                                            index === currentIndex
                                                ? 'bg-foreground w-8'
                                                : 'bg-foreground/20 hover:bg-foreground/40'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Arrows */}
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={prevTestimonial}
                                    className="w-10 h-10 border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={nextTestimonial}
                                    className="w-10 h-10 border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonios;
