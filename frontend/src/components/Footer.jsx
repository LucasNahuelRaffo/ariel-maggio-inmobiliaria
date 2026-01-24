import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const contactInfo = [
    { icon: Mail, text: 'contacto@arielmaggio.com', href: 'mailto:contacto@arielmaggio.com' },
    { icon: Phone, text: '+54 11 1234-5678', href: 'tel:+5411123456783' },
    { icon: MapPin, text: 'Buenos Aires, Argentina', href: '#' },
];

export const Footer = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="py-16 lg:py-20 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <a href="#" className="inline-block mb-6 cursor-hover">
                                <span className="text-xl font-medium tracking-luxury-wide text-foreground uppercase">
                                    Ariel Maggio
                                </span>
                            </a>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-8">
                                Estrategia inmobiliaria premium para propietarios que buscan resultados reales.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 cursor-hover"
                                            whileHover={{ y: -2 }}
                                            aria-label={social.label}
                                        >
                                            <Icon className="w-4 h-4" strokeWidth={1.5} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h4 className="text-xs tracking-luxury-wide uppercase text-foreground mb-6">
                                Enlaces
                            </h4>
                            <nav className="space-y-4">
                                {['Método', 'Testimonios', 'FAQ'].map((link, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-hover"
                                    >
                                        {link}
                                    </button>
                                ))}
                            </nav>
                        </motion.div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 className="text-xs tracking-luxury-wide uppercase text-foreground mb-6">
                                Contacto
                            </h4>
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-hover"
                                        >
                                            <Icon className="w-4 h-4" strokeWidth={1.5} />
                                            {item.text}
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Ariel Maggio. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-hover">
                            Privacidad
                        </a>
                        <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-hover">
                            Términos
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
