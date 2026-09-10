import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const Hero = () => {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef(null);

    // Track scroll progress purely within the Hero section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // ── DOLLY ZOOM TYPOGRAPHY PARALLAX ──
    // As the camera pushes INTO the 3D artifact on scroll, 
    // the typography must move outward and recede to clear the path.

    // Role & Statement move Left and fade out early
    const roleX = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -300]);
    const roleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // Metadata (01/07, Surat) moves Up/Right and Down/Right
    const metaTopY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -50]);
    const metaBottomY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 50]);
    const metaOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    // Spatial Annotations move outward away from the expanding artifact
    const anno1X = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -150]);
    const anno2X = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 150]);
    const anno3Y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 150]);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative h-[100svh] w-full flex items-center overflow-hidden"
            aria-label="Introduction"
        >
            {/* INITIAL LOAD BLACK MASK */}
            {/* Rapid opening (< 1s) to reveal the artifact quickly */}
            <motion.div 
                className="absolute inset-0 bg-[#050505] z-0 pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center h-full pointer-events-none">
                
                {/* ── EDITORIAL METADATA ── */}
                <motion.div 
                    style={{ y: metaTopY, opacity: metaOpacity }}
                    className="absolute top-24 md:top-32 right-6 md:right-12 lg:right-16 pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">01 / 07</p>
                </motion.div>
                
                <motion.div 
                    style={{ y: metaBottomY, opacity: metaOpacity }}
                    className="absolute bottom-8 md:bottom-12 right-6 md:right-12 lg:right-16 text-right pointer-events-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">SURAT / INDIA</p>
                </motion.div>

                {/* ── ROLE & POSITIONING (Center-Left) ── */}
                <motion.div 
                    style={{ x: roleX, opacity: roleOpacity }}
                    className="absolute top-[60%] md:top-1/2 -translate-y-1/2 left-6 md:left-12 lg:left-16 max-w-[280px] md:max-w-sm pointer-events-auto"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-[11px] md:text-xs font-mono uppercase tracking-[0.25em] text-white mb-3 md:mb-5 flex items-center gap-3">
                        <span className="w-4 h-px bg-white/50" />
                        MERN STACK DEVELOPER
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                        Building production web applications and practical AI-powered experiences.
                    </p>
                </motion.div>

                {/* ── SPATIAL ANNOTATIONS ── */}
                {/* Annotation 1: Top Left-ish (Near Artifact) */}
                <motion.div 
                    style={{ x: anno1X, y: metaTopY, opacity: metaOpacity }}
                    className="absolute top-[25%] left-[30%] hidden md:flex items-center gap-2 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                >
                    <span className="text-[9px] font-mono text-gray-500 tracking-widest">MONGODB / NODE</span>
                    <span className="w-8 h-px bg-gray-700/50" />
                </motion.div>

                {/* Annotation 2: Middle Far-Right (Next to Artifact) */}
                <motion.div 
                    style={{ x: anno2X, opacity: metaOpacity }}
                    className="absolute top-[45%] right-6 md:right-[20%] flex items-center gap-2 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                >
                    <span className="w-6 h-px bg-gray-700/50 hidden md:block" />
                    <span className="text-[9px] font-mono text-gray-500 tracking-widest">GEMINI AI INTEGRATION</span>
                </motion.div>

                {/* Annotation 3: Bottom Center (Below Artifact) */}
                <motion.div 
                    style={{ y: anno3Y, opacity: metaOpacity }}
                    className="absolute bottom-[20%] left-[45%] md:left-[55%] hidden md:flex flex-col items-center gap-2 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                >
                    <span className="h-6 w-px bg-gray-700/50" />
                    <span className="text-[9px] font-mono text-gray-500 tracking-widest text-center leading-relaxed">
                        PRODUCTION<br/>DEBUGGING
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;