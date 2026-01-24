import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import { CustomCursor } from '@/components/CustomCursor';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ParaQuien } from '@/components/ParaQuien';
import { Metodo } from '@/components/Metodo';
import { Testimonios } from '@/components/Testimonios';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { ContactModal } from '@/components/ContactModal';
import { VideoModal } from '@/components/VideoModal';

function App() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    // Handle ESC key to close modals
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsContactModalOpen(false);
                setIsVideoModalOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isContactModalOpen || isVideoModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isContactModalOpen, isVideoModalOpen]);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);
    
    const openVideoModal = () => setIsVideoModalOpen(true);
    const closeVideoModal = () => setIsVideoModalOpen(false);

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-background">
                {/* Custom Cursor */}
                <CustomCursor />

                {/* Header */}
                <Header onOpenModal={openContactModal} />

                {/* Main Content */}
                <main>
                    <Hero 
                        onOpenModal={openContactModal} 
                        onOpenVideo={openVideoModal} 
                    />
                    <ParaQuien />
                    <Metodo />
                    <Testimonios />
                    <FAQ />
                    <CTA onOpenModal={openContactModal} />
                </main>

                {/* Footer */}
                <Footer />

                {/* Modals */}
                <AnimatePresence>
                    <ContactModal 
                        isOpen={isContactModalOpen} 
                        onClose={closeContactModal} 
                    />
                </AnimatePresence>

                <AnimatePresence>
                    <VideoModal 
                        isOpen={isVideoModalOpen} 
                        onClose={closeVideoModal} 
                    />
                </AnimatePresence>
            </div>
        </BrowserRouter>
    );
}

export default App;
