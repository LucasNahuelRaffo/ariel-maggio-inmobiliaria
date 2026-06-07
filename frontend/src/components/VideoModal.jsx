import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { useState } from 'react';

export const VideoModal = ({ isOpen, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleClose = () => {
        setIsPlaying(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-foreground/90 backdrop-blur-md z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-background/10 hover:bg-background/20 backdrop-blur-sm rounded-full transition-colors duration-300 cursor-hover z-10"
                        >
                            <X className="w-5 h-5 text-background" />
                        </button>

                        {/* Video Container */}
                        <motion.div
                            className="w-full max-w-5xl aspect-video relative bg-foreground overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {!isPlaying ? (
                                /* Placeholder / Thumbnail */
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                                            alt="Video Thumbnail"
                                            className="w-full h-full object-cover opacity-40"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent" />
                                    </div>

                                    {/* Play Button */}
                                    <motion.button
                                        onClick={handlePlay}
                                        className="relative z-10 w-24 h-24 flex items-center justify-center bg-background rounded-full cursor-hover group"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <Play className="w-8 h-8 text-foreground ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                                    </motion.button>

                                    {/* Video Info */}
                                    <div className="relative z-10 mt-8 text-center">
                                        <h3 className="text-xl lg:text-2xl font-light text-background mb-2">
                                            Video Explicativo
                                        </h3>
                                        <p className="text-sm text-background/60 tracking-luxury uppercase">
                                            3 minutos • Conocé nuestro método
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                /* Video Player */
                                <div className="absolute inset-0 flex items-center justify-center bg-black">
                                    <video
                                        src="https://assets.mixkit.co/videos/preview/mixkit-luxury-home-entrance-and-facade-32492-large.mp4"
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        muted
                                        playsInline
                                        loop
                                    />
                                </div>
                            )}
                        </motion.div>

                        {/* Video Duration Badge */}
                        <motion.div
                            className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-xs text-background/80 tracking-luxury uppercase">
                                Presioná ESC para cerrar
                            </span>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default VideoModal;
