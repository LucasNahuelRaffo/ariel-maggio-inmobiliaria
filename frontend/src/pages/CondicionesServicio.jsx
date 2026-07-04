import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const CondicionesServicio = () => {
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
                        Condiciones del <span className="font-medium text-primary">Servicio</span>
                    </h1>
                    <p className="text-sm text-muted-foreground mb-12">Última actualización: julio de 2025</p>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">1. Aceptación de las condiciones</h2>
                            <p>
                                Al acceder y utilizar este sitio web y los servicios de Team Connection – Keller Williams Argentina,
                                usted acepta quedar vinculado por estas Condiciones del Servicio. Si no acepta estas condiciones,
                                le solicitamos que no utilice nuestros servicios.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">2. Descripción del servicio</h2>
                            <p>
                                Team Connection es una oficina de operación independiente afiliada a Keller Williams Argentina que
                                presta servicios de intermediación inmobiliaria: compra, venta y alquiler de propiedades en
                                Argentina, asesoramiento en valuación, marketing inmobiliario, negociación y apoyo en trámites
                                vinculados a la operación.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">3. Naturaleza de la información</h2>
                            <p>
                                El contenido de este sitio tiene carácter informativo y orientativo. No constituye oferta
                                vinculante ni garantía de resultados. Las condiciones definitivas de cualquier operación
                                inmobiliaria se establecen en los contratos específicos celebrados entre las partes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">4. Responsabilidad del usuario</h2>
                            <p>El usuario se compromete a:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Proporcionar información veraz y actualizada al contactar con nuestro equipo</li>
                                <li>No utilizar el sitio para fines ilícitos o contrarios a estas condiciones</li>
                                <li>No reproducir ni distribuir contenido del sitio sin autorización expresa</li>
                                <li>Respetar los derechos de propiedad intelectual sobre los contenidos publicados</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">5. Honorarios y comisiones</h2>
                            <p>
                                Los honorarios por servicios de intermediación inmobiliaria serán informados de manera clara
                                antes del inicio de cualquier gestión. Se rigen por las tarifas vigentes establecidas por el
                                Colegio Único de Corredores Inmobiliarios de la Ciudad Autónoma de Buenos Aires (CUCICBA) y
                                demás normativa aplicable en la jurisdicción correspondiente.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">6. Propiedad intelectual</h2>
                            <p>
                                Todos los contenidos del sitio (textos, imágenes, diseño, logotipos) son propiedad de Team
                                Connection o cuentan con licencia de uso. Queda prohibida su reproducción total o parcial
                                sin autorización escrita previa.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">7. Limitación de responsabilidad</h2>
                            <p>
                                Team Connection no se responsabiliza por daños derivados del uso del sitio, interrupciones
                                del servicio, errores tipográficos en la información publicada, ni por decisiones tomadas
                                exclusivamente en base al contenido del sitio sin asesoramiento profesional complementario.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">8. Ley aplicable y jurisdicción</h2>
                            <p>
                                Estas condiciones se rigen por la legislación de la República Argentina. Cualquier controversia
                                será sometida a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires,
                                con renuncia expresa a cualquier otro fuero.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">9. Modificaciones</h2>
                            <p>
                                Nos reservamos el derecho de modificar estas condiciones en cualquier momento. La continuación
                                en el uso del sitio tras la publicación de los cambios implica la aceptación de las nuevas
                                condiciones.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-medium text-foreground mb-3">10. Contacto</h2>
                            <p>
                                Para consultas sobre estas condiciones:{' '}
                                <a href="mailto:ariel.maggio@kwargentina.com" className="text-primary hover:underline">ariel.maggio@kwargentina.com</a>
                            </p>
                        </section>

                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default CondicionesServicio;
