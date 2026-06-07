import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_NUMBER = '5491171815431'; 
const WHATSAPP_MESSAGE = encodeURIComponent('Buen dia Team Connection , como puedo agendar una asesoria ? ');

export const ContactModal = ({ isOpen, onClose }) => {
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-background w-full max-w-lg relative overflow-hidden"
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-border hover:bg-secondary transition-colors duration-300 cursor-hover z-10"
                            >
                                <X className="w-4 h-4 text-foreground" />
                            </button>

                            {/* Content */}
                            <div className="p-8 lg:p-12">
                                {/* Header */}
                                <div className="mb-8">
                                    <span className="inline-block text-xs tracking-luxury-wide uppercase text-muted-foreground mb-3">
                                        Contacto directo
                                    </span>
                                    <h3 className="text-2xl lg:text-3xl font-light text-foreground tracking-tight">
                                        Agendá tu{' '}
                                        <span className="font-medium">llamada</span>
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    Envianos un mensaje por WhatsApp y coordinamos una llamada de diagnóstico gratuita. Sin compromiso, sin presiones.
                                </p>

                                {/* WhatsApp Button */}
                                <Button
                                    onClick={handleWhatsAppClick}
                                    size="lg"
                                    className="w-full group bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm tracking-luxury uppercase px-8 py-7 transition-all duration-300"
                                >
                                    <MessageCircle className="mr-3 w-5 h-5" />
                                    Enviar mensaje por WhatsApp
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>

                                {/* Trust Indicators */}
                                <div className="mt-8 pt-8 border-t border-border">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                                            Respuesta en menos de 2 horas
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-2 h-2 rounded-full bg-foreground/30" />
                                            Sin compromiso
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="h-1 bg-gradient-to-r from-foreground/10 via-foreground/20 to-foreground/10" />
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
