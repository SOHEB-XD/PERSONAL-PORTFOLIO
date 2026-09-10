import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    maskReveal,
    fadeUp,
    fade,
} from '../animations/variants';

const Currently = () => {
    const reducedMotion = useReducedMotion();

    const container = staggerContainer(reducedMotion, { stagger: 0.1 });
    const sectionContainer = staggerContainer(reducedMotion, { stagger: 0.15 });
    const reveal = maskReveal(reducedMotion);
    const up = fadeUp(reducedMotion);
    const dim = fade(reducedMotion);

    return (
        <section
            id="currently"
            className="relative z-10 py-32 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5"
            aria-label="Currently"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="flex justify-between items-baseline mb-20 md:mb-32"
                >
                    <motion.p variants={dim} className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                        Currently
                    </motion.p>
                    <motion.span variants={dim} className="text-xs font-mono text-gray-700">
                        07
                    </motion.span>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionContainer}
                    className="max-w-4xl"
                >
                    <div className="overflow-hidden mb-8">
                        <motion.h3 variants={reveal} className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.2]">
                            MERN Stack Developer building production web applications and practical AI-powered experiences.
                        </motion.h3>
                    </div>

                    <motion.p variants={dim} className="text-sm md:text-lg font-light text-gray-400 mb-16 leading-relaxed max-w-2xl">
                        I am focused on engineering secure, full-stack systems that connect intuitive interfaces with robust APIs and databases.
                    </motion.p>

                    <motion.div variants={dim} className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/[0.02]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-300">
                            Open to relevant opportunities
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Currently;
