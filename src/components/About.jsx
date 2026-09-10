import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    maskReveal,
    fadeUp,
    fade,
    EASE_OUT_CUBIC,
} from '../animations/variants';

/* --------------------------------------------------------------------------
   DATA
   -------------------------------------------------------------------------- */
const capabilities = [
    {
        label: 'Full-Stack Engineering',
        description:
            'React frontends, Node.js/Express backends, MongoDB, REST APIs, JWT authentication, authorization, and middleware-driven architectures.',
    },
    {
        label: 'Production Engineering',
        description:
            'Debugging production issues across frontend, backend, API, and database layers. Root-cause analysis, systematic investigation, and resolution of real-world defects.',
    },
    {
        label: 'AI Integration',
        description:
            'Google Gemini and GenAI API. Building AI features for business analytics, intelligent search, record discovery, and actionable insights across multiple domains.',
    },
];

/* --------------------------------------------------------------------------
   ABOUT SECTION
   -------------------------------------------------------------------------- */
const About = () => {
    const reducedMotion = useReducedMotion();

    // Variant instances
    const container = staggerContainer(reducedMotion, { stagger: 0.12 });
    const capContainer = staggerContainer(reducedMotion, { stagger: 0.15 });
    const reveal = maskReveal(reducedMotion);
    const up = fadeUp(reducedMotion);
    const dim = fade(reducedMotion);

    return (
        <section
            id="about"
            className="relative z-10 py-32 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5"
            aria-label="About"
        >
            <div className="max-w-7xl mx-auto">

                {/* ── Top content group ─────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                >
                    {/* Section label row */}
                    <div className="flex justify-between items-baseline mb-16 md:mb-24">
                        <motion.p
                            variants={dim}
                            className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500"
                        >
                            About
                        </motion.p>
                        <motion.span
                            variants={dim}
                            className="text-xs font-mono text-gray-700"
                        >
                            01
                        </motion.span>
                    </div>

                    {/* Main statement — mask-reveal */}
                    <h2 className="overflow-hidden max-w-4xl mb-12 md:mb-16">
                        <motion.span
                            variants={reveal}
                            className="block text-[clamp(1.75rem,4vw,3.5rem)] font-bold leading-[1.15] tracking-tight text-white"
                        >
                            I build production web applications and integrate AI
                            into real business workflows.
                        </motion.span>
                    </h2>

                    {/* Supporting paragraph — static/fade */}
                    <motion.p
                        variants={dim}
                        className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl md:ml-auto"
                    >
                        I work across the full MERN stack — React, Node.js,
                        Express.js, and MongoDB — building authenticated
                        applications and production REST APIs. My recent work
                        combines solid production engineering with practical AI
                        integration, developing features that help businesses
                        analyze data, discover information, and surface
                        actionable insights.
                    </motion.p>
                </motion.div>

                {/* ── Divider — animates from left to right ────────── */}
                <motion.div
                    className="w-full h-px bg-white/10 my-16 md:my-24 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: reducedMotion ? 0.2 : 0.8,
                        ease: EASE_OUT_CUBIC,
                    }}
                />

                {/* ── Capability blocks ────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={capContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12"
                >
                    {capabilities.map((cap, idx) => (
                        <motion.div key={idx} variants={dim}>
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
                                {cap.label}
                            </p>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                                {cap.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
