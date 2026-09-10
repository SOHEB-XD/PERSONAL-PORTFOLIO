import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // Motion values for the inner dot (fast tracking)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring configuration for the outer ring (smooth trailing)
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if device supports hover (disables on touch screens)
        // and if user hasn't requested reduced motion
        const isFinePointer = window.matchMedia('(pointer: fine)').matches;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!isFinePointer || prefersReducedMotion) {
            setShouldRender(false);
            return;
        }

        setShouldRender(true);

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners for cursor movement
        window.addEventListener('mousemove', moveCursor);

        // Global delegation for hover states on interactive elements
        const handleGlobalMouseOver = (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                handleMouseEnter();
            }
        };
        const handleGlobalMouseOut = (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                handleMouseLeave();
            }
        };

        window.addEventListener('mouseover', handleGlobalMouseOver);
        window.addEventListener('mouseout', handleGlobalMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleGlobalMouseOver);
            window.removeEventListener('mouseout', handleGlobalMouseOut);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!shouldRender) return null;

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0
                }}
            />
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0)',
                    borderColor: isHovering ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.3)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;