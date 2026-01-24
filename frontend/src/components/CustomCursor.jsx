import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Spring physics for smooth cursor movement
    const springConfig = { damping: 25, stiffness: 300 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    // Slower spring for the ring
    const ringSpringConfig = { damping: 20, stiffness: 150 };
    const ringX = useSpring(0, ringSpringConfig);
    const ringY = useSpring(0, ringSpringConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 5);
            cursorY.set(e.clientY - 5);
            ringX.set(e.clientX - 20);
            ringY.set(e.clientY - 20);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Add hover detection for interactive elements
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, [role="button"], input, textarea, select, .cursor-hover'
            );
            
            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        // Initial setup and mutation observer for dynamic content
        addHoverListeners();
        
        const observer = new MutationObserver(() => {
            addHoverListeners();
        });
        
        observer.observe(document.body, { 
            childList: true, 
            subtree: true 
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            observer.disconnect();
        };
    }, [cursorX, cursorY, ringX, ringY]);

    // Don't render on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Dot cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    scale: { type: 'spring', damping: 20, stiffness: 300 },
                    opacity: { duration: 0.2 },
                }}
            >
                <div 
                    className="w-[10px] h-[10px] rounded-full"
                    style={{
                        background: 'hsl(215 25% 15%)',
                        backdropFilter: 'blur(2px)',
                    }}
                />
            </motion.div>

            {/* Ring cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: ringX,
                    y: ringY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isVisible ? (isHovering ? 0.5 : 0.3) : 0,
                }}
                transition={{
                    scale: { type: 'spring', damping: 15, stiffness: 200 },
                    opacity: { duration: 0.2 },
                }}
            >
                <div 
                    className="w-[40px] h-[40px] rounded-full border"
                    style={{
                        borderColor: 'hsl(215 25% 15% / 0.3)',
                        backdropFilter: 'blur(1px)',
                    }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;
