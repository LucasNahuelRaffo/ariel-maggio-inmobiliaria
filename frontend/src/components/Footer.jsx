import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/kwargentina/', label: 'Instagram' },
    { icon: WhatsAppIcon, href: 'https://wa.me/5491171815431', label: 'WhatsApp' },
];

const contactInfo = [
    { icon: Mail, text: 'ariel.maggio@kwargentina.com', href: 'mailto:ariel.maggio@kwargentina.com' },
    { icon: Phone, text: '+54 9 11 7181-5431', href: 'https://wa.me/5491171815431' },
    { icon: MapPin, text: 'Oficina Independiente Keller Williams', href: 'https://maps.app.goo.gl/GikGw7xv6wwZMy4K7' },
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
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold tracking-luxury-wide text-foreground uppercase">
                                        Team Connection
                                    </span>
                                    <span className="text-[10px] tracking-[0.25em] text-primary font-semibold uppercase -mt-1">
                                        Keller Williams
                                    </span>
                                </div>
                            </a>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-8">
                                Ordenamos tu decisión inmobiliaria con claridad, estrategia consciente y un sólido acompañamiento humano.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-hover"
                                            whileHover={{ y: -2 }}
                                            aria-label={social.label}
                                        >
                                            <Icon className={social.label === 'WhatsApp' ? 'w-4 h-4' : 'w-4 h-4'} strokeWidth={1.5} />
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
                                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-hover animate-none"
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
                                            target={item.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-hover"
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
                    className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} Team Connection • Keller Williams. Todos los derechos reservados.
                        </p>
                        <p className="text-[10px] text-muted-foreground/60 max-w-2xl">
                            Cada oficina es de propiedad y gestión independiente. Toda la información y servicios son prestados por agentes asociados independientes.
                        </p>
                    </div>
                    <div className="flex gap-6 flex-wrap">
                        <Link to="/politica-privacidad" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-hover">
                            Política de Privacidad
                        </Link>
                        <Link to="/condiciones-servicio" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-hover">
                            Condiciones del Servicio
                        </Link>
                        <Link to="/eliminacion-datos" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-hover">
                            Eliminación de Datos
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
