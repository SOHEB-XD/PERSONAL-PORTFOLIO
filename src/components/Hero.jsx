import React, { useRef, useCallback, useState } from 'react';
import { motion, useReducedMotion } from "motion/react";

/* --------------------------------------------------------------------------
   MAGNETIC CTA BUTTON
   Tracks mouse position relative to its center and applies a subtle
   spring-physics offset. Falls back to a static button on touch devices
   and when prefers-reduced-motion is active.
   -------------------------------------------------------------------------- */
const HeroButton = ({ children, onClick, variant = "primary" }) => {
    const ref = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const isPrimary = variant === 'primary';

    const handleMouseMove = useCallback(
        (e) => {
            if (shouldReduceMotion || !ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setOffset({ x: x * 0.15, y: y * 0.15 });
        },
        [shouldReduceMotion]
    );

    const reset = useCallback(() => setOffset({ x: 0, y: 0 }), []);

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={{ x: offset.x, y: offset.y }}
            transition={{ type: 'spring', stiffness: 400, damping: 17, mass: 0.4 }}
            className={`
                group relative inline-flex items-center gap-2.5
                px-7 py-3.5 sm:px-8
                text-[11px] font-bold uppercase tracking-[0.15em]
                transition-colors duration-300
                focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white
                ${isPrimary
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'bg-transparent border border-white/25 text-white hover:bg-white/5 hover:border-white/40'
                }
            `}
        >
            <span>{children}</span>
            <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
            </svg>
        </motion.button>
    );
};

/* --------------------------------------------------------------------------
   HERO SECTION
   -------------------------------------------------------------------------- */
const Hero = () => {
    const shouldReduceMotion = useReducedMotion();

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    /* ── Orchestrated animation variants ──────────────────────────────── */

    // Parent container: staggers children as a single choreographed sequence
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
                delayChildren: shouldReduceMotion ? 0 : 0.3,
            },
        },
    };

    // Mask-reveal: text slides upward from behind an overflow-hidden wrapper
    const maskReveal = {
        hidden: shouldReduceMotion
            ? { opacity: 0 }
            : { y: '110%' },
        visible: shouldReduceMotion
            ? { opacity: 1, transition: { duration: 0.3 } }
            : {
                  y: '0%',
                  transition: {
                      duration: 0.9,
                      ease: [0.33, 1, 0.68, 1],
                  },
              },
    };

    // Fade-up for secondary elements
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.33, 1, 0.68, 1],
            },
        },
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen w-full flex items-center overflow-hidden pt-20 pb-16 md:pt-0 md:pb-0"
            aria-label="Introduction"
        >
            {/* ── Main content ── */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16"
            >
                {/* Right-aligned on md+, centered on mobile */}
                <div className="text-center md:text-right md:ml-auto md:max-w-2xl lg:max-w-3xl">

                    {/* ── Eyebrow ── */}
                    <div className="overflow-hidden mb-4 md:mb-8">
                        <motion.p
                            variants={maskReveal}
                            className="text-[11px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-500"
                        >
                            Soheb Khan — Full-Stack Developer
                        </motion.p>
                    </div>

                    {/* ── Main heading ── */}
                    <h1 className="sr-only">Full-Stack Developer</h1>

                    <div aria-hidden="true" className="mb-8 md:mb-10">
                        <div className="overflow-hidden">
                            <motion.div
                                variants={maskReveal}
                                className="text-[clamp(2.75rem,9vw,8rem)] font-bold tracking-tight leading-[0.9] text-white"
                            >
                                FULL-STACK
                            </motion.div>
                        </div>
                        <div className="overflow-hidden mt-1 md:mt-2">
                            <motion.div
                                variants={maskReveal}
                                className="text-[clamp(2.75rem,9vw,8rem)] font-bold tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600"
                            >
                                DEVELOPER
                            </motion.div>
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <motion.div
                        variants={fadeUp}
                        className="w-12 h-px bg-white/20 mb-6 md:mb-8 mx-auto md:ml-auto md:mr-0"
                    />

                    {/* ── Supporting statement ── */}
                    <motion.p
                        variants={fadeUp}
                        className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-md mx-auto md:ml-auto md:mr-0 mb-10 md:mb-12"
                    >
                        Building production web applications and AI-powered
                        experiences with{' '}
                        <span className="text-white font-normal">React</span>,{' '}
                        <span className="text-white font-normal">Node.js</span>,
                        and{' '}
                        <span className="text-white font-normal">MongoDB</span>.
                    </motion.p>

                    {/* ── CTA buttons ── */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-end items-center mb-8 md:mb-14"
                    >
                        <HeroButton
                            onClick={() => scrollTo('projects')}
                            variant="primary"
                        >
                            View My Work
                        </HeroButton>
                        <HeroButton
                            onClick={() => scrollTo('contact')}
                            variant="secondary"
                        >
                            Let's Talk
                        </HeroButton>
                    </motion.div>

                    {/* ── Tech strip ── */}
                    <motion.p
                        variants={fadeUp}
                        className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-600"
                    >
                        React · Node.js · Express · MongoDB · AI
                    </motion.p>
                </div>
            </motion.div>

            {/* ── Scroll indicator ── */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-3 hidden sm:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: shouldReduceMotion ? 0.5 : 2.0,
                    duration: 0.8,
                }}
            >
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-600">
                    Scroll
                </span>
                <motion.div
                    className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent origin-top"
                    animate={
                        shouldReduceMotion
                            ? {}
                            : { scaleY: [1, 0.4, 1] }
                    }
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;