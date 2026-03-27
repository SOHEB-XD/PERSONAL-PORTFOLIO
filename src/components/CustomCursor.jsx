import React, { useEffect, useRef, useState } from 'react';


const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        if (dotRef.current) dotRef.current.style.opacity = '0';
        if (outlineRef.current) outlineRef.current.style.opacity = '0';

        let mouseX = -100, mouseY = -100;
        let outlineX = -100, outlineY = -100;
        let isVisible = false;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isVisible) {
                if (dotRef.current) dotRef.current.style.opacity = '1';
                if (outlineRef.current) outlineRef.current.style.opacity = '1';
                isVisible = true;
            }

            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            }
        };

        const animate = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;

            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference" />
            <div ref={outlineRef} className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9999] mix-blend-difference" />
        </>
    );
};

export default CustomCursor;