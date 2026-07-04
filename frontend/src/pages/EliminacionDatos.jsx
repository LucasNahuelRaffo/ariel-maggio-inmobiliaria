import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, Phone } from 'lucide-react';

export const EliminacionDatos = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="max-w-3xl mx-auto px-6 lg:px-8 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs tracking-luxury-wide uppercase text-muted-foreground mb-4">
                        Legal
                    </span>
                    <h1 className="text-3xl lg:text-4xl font-light text-foreground tracking-tight mb-4">
                        Eliminación de <span className="font-medium text-primary">Datos de Usuario</span>
                    </h1>
                    <p className="text-sm text-muted-foreground mb-12">Última actualización: julio de 2025</p>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">Tu derecho a la eliminación</h2>
                            <p>
                                En Team Connection – Keller Williams Argentina respetamos tu derecho a controlar tus datos
                                personales. De acuerdo con la Ley 25.326 de Protección de Datos Personales de la República
                                Argentina y demás normativa aplicable, tenés derecho a solicitar la supresión de tus datos
                                personales de nuestros sistemas.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">¿Qué datos podemos tener sobre vos?</h2>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Nombre y apellido</li>
                                <li>Número de teléfono y/o WhatsApp</li>
                                <li>Dirección de correo electrónico</li>
                                <li>Historial de consultas y comunicaciones</li>
                                <li>Preferencias de búsqueda de propiedades</li>
                                <li>Datos técnicos de navegación (IP, dispositivo)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">Cómo solicitar la eliminación</h2>
                            <p className="mb-4">
                                Podés solicitar la eliminación de tus datos personales de cualquiera de las siguientes maneras:
                            </p>

                            <div className="grid gap-4">
                                <a
                                    href="mailto:ariel.maggio@kwargentina.com?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos"
                                    className="flex items-center gap-4 p-4 border border-border hover:border-primary/40 transition-colors duration-300 group"
                                >
                                    <div className="w-10 h-10 border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                                        <Mail className="w-4 h-4" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Correo electrónico</p>
                                        <p className="text-xs text-muted-foreground">ariel.maggio@kwargentina.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/5491171815431?text=Hola%2C%20quiero%20solicitar%20la%20eliminaci%C3%B3n%20de%20mis%20datos%20personales."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 border border-border hover:border-primary/40 transition-colors duration-300 group"
                                >
                                    <div className="w-10 h-10 border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                                        <Phone className="w-4 h-4" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">WhatsApp</p>
                                        <p className="text-xs text-muted-foreground">+54 9 11 7181-5431</p>
                                    </div>
                                </a>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">Información a incluir en tu solicitud</h2>
                            <p className="mb-2">Para procesar tu solicitud, te pedimos que indiques:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Nombre completo</li>
                                <li>Correo electrónico y/o teléfono con el que nos contactaste</li>
                                <li>Descripción de los datos que querés eliminar (si es específico)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">Plazos y proceso</h2>
                            <p>
                                Nos comprometemos a responder tu solicitud dentro de los <strong className="text-foreground">10 días hábiles</strong> de recibida.
                                Procederemos a eliminar o anonimizar tus datos salvo que exista obligación legal de conservarlos
                                (por ejemplo, datos vinculados a operaciones inmobiliarias formalizadas que requieran conservación
                                por normativa fiscal o registral).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">Excepciones</h2>
                            <p>
                                En algunos casos no podremos eliminar todos los datos, especialmente cuando sea necesario para:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Cumplir con obligaciones legales o regulatorias</li>
                                <li>Resolver disputas o reclamaciones pendientes</li>
                                <li>Hacer cumplir acuerdos contractuales vigentes</li>
                            </ul>
                            <p className="mt-3">En esos casos, te informaremos los motivos por escrito.</p>
                        </section>

                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default EliminacionDatos;
