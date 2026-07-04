import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navLinks = [
    { label: 'Método', href: '#metodo' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
    { label: 'Privacidad', to: '/politica-privacidad' },
    { label: 'Términos', to: '/condiciones-servicio' },
    { label: 'Eliminación de Datos', to: '/eliminacion-datos' },
];

export const Header = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled ? 'glass-strong shadow-soft py-4' : 'bg-transparent py-6'
                }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="/"
                            className="cursor-hover flex items-center gap-0"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/Pasted-20260607-011953_preview_rev_1.png`}
                                alt="Logo"
                                className="h-20 w-auto"
                            />
                            <div className="flex flex-col">
                                <span className="text-base md:text-lg font-bold tracking-luxury-wide text-foreground uppercase">
                                    Team Connection
                                </span>
                                <span className="text-[9px] tracking-[0.25em] text-primary font-semibold uppercase -mt-1">
                                    Keller Williams
                                </span>
                            </div>
                        </motion.a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-sm tracking-luxury text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase cursor-hover"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            {/* Separador */}
                            <div className="w-px h-4 bg-foreground/20" />

                            {/* Legal links desktop */}
                            {legalLinks.map((link, index) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-[10px] tracking-wider text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 uppercase cursor-hover"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* CTA Button desktop */}
                        <div className="hidden md:block">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Button
                                    onClick={onOpenModal}
                                    variant="outline"
                                    className="text-xs tracking-luxury uppercase border-foreground/20 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 px-6 py-5"
                                >
                                    Agendar Diagnóstico
                                </Button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 cursor-hover"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-foreground" />
                            ) : (
                                <Menu className="w-6 h-6 text-foreground" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="absolute inset-0 bg-background/95 backdrop-blur-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.nav
                            className="relative flex flex-col items-center justify-center h-full gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-2xl tracking-luxury text-foreground uppercase cursor-hover"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            <div className="w-8 h-px bg-foreground/20 my-2" />

                            {/* Legal links mobile */}
                            {legalLinks.map((link, index) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                    <Link
                                        to={link.to}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-sm tracking-luxury text-muted-foreground uppercase cursor-hover"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <Button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        onOpenModal && onOpenModal();
                                    }}
                                    className="mt-4 text-sm tracking-luxury uppercase bg-foreground text-background hover:bg-foreground/90 px-8 py-6"
                                >
                                    Agendar Diagnóstico
                                </Button>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
