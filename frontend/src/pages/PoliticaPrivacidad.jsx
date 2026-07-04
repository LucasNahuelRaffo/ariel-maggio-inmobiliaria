import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const PoliticaPrivacidad = () => {
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
                        Política de <span className="font-medium text-primary">Privacidad</span>
                    </h1>
                    <p className="text-sm text-muted-foreground mb-12">Última actualización: julio de 2025</p>

                    <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">1. Responsable del tratamiento</h2>
                            <p>
                                Team Connection – Keller Williams Argentina, con domicilio en la Ciudad Autónoma de Buenos Aires,
                                Argentina, es el responsable del tratamiento de los datos personales recopilados a través de este sitio web
                                y sus canales de contacto (WhatsApp, correo electrónico, formularios web).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">2. Datos que recopilamos</h2>
                            <p>Podemos recopilar los siguientes datos personales:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Nombre y apellido</li>
                                <li>Número de teléfono (incluido WhatsApp)</li>
                                <li>Dirección de correo electrónico</li>
                                <li>Información sobre la propiedad de interés (ubicación, tipo, presupuesto)</li>
                                <li>Datos técnicos de navegación (dirección IP, tipo de navegador, páginas visitadas)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">3. Finalidad del tratamiento</h2>
                            <p>Utilizamos los datos personales para:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Responder consultas y brindar asesoramiento inmobiliario</li>
                                <li>Gestionar el proceso de compra, venta o alquiler de propiedades</li>
                                <li>Enviar información relevante sobre propiedades y novedades del mercado (con consentimiento)</li>
                                <li>Mejorar nuestros servicios y la experiencia del usuario en el sitio</li>
                                <li>Cumplir con obligaciones legales y regulatorias</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">4. Base legal del tratamiento</h2>
                            <p>
                                El tratamiento se basa en el consentimiento del usuario, en la ejecución de un contrato o
                                precontrato inmobiliario, y en el cumplimiento de obligaciones legales vigentes en Argentina
                                (Ley 25.326 de Protección de Datos Personales).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">5. Compartición de datos</h2>
                            <p>
                                No vendemos ni cedemos datos personales a terceros con fines comerciales. Podemos compartir
                                información con prestadores de servicios técnicos (hosting, plataformas de comunicación) que
                                actúan como encargados del tratamiento bajo acuerdos de confidencialidad.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">6. Conservación de datos</h2>
                            <p>
                                Los datos se conservan durante el tiempo necesario para cumplir las finalidades indicadas y,
                                en todo caso, durante los plazos exigidos por la legislación argentina aplicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">7. Derechos del usuario</h2>
                            <p>
                                De acuerdo con la Ley 25.326 y normativa complementaria, los usuarios tienen derecho a:
                                acceder, rectificar, actualizar y suprimir sus datos personales. Para ejercer estos derechos,
                                contactar a: <a href="mailto:ariel.maggio@kwargentina.com" className="text-primary hover:underline">ariel.maggio@kwargentina.com</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">8. Cookies</h2>
                            <p>
                                Este sitio puede utilizar cookies técnicas para garantizar el correcto funcionamiento de la
                                plataforma. No se utilizan cookies de seguimiento o publicidad comportamental sin consentimiento
                                previo del usuario.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">9. Cambios en esta política</h2>
                            <p>
                                Nos reservamos el derecho de actualizar esta política. Los cambios serán publicados en esta
                                misma página con la fecha de actualización correspondiente.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">10. Contacto</h2>
                            <p>
                                Para consultas sobre privacidad: <a href="mailto:ariel.maggio@kwargentina.com" className="text-primary hover:underline">ariel.maggio@kwargentina.com</a>
                                {' '}| Tel: +54 9 11 7181-5431
                            </p>
                        </section>

                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default PoliticaPrivacidad;
