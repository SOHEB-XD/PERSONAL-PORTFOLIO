import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    maskReveal,
    fadeUp,
} from '../animations/variants';

const Highlights = () => {
    const reducedMotion = useReducedMotion();

    const container = staggerContainer(reducedMotion, { stagger: 0.15 });
    const reveal = maskReveal(reducedMotion);
    const up = fadeUp(reducedMotion);

    return (
        <section
            id="highlights"
            className="relative z-10 py-32 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-gradient-to-b from-transparent to-[#050505]/50"
            aria-label="Highlights"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10"
                >
                    {/* ── Dominant Proof Point ── */}
                    <motion.div variants={up} className="sm:col-span-2 lg:col-span-1 lg:border-r border-white/10 lg:pr-10">
                        <div className="overflow-hidden mb-2">
                            <motion.h3 variants={reveal} className="text-7xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
                                70+
                            </motion.h3>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mt-4 leading-relaxed">
                            Production<br/>Bugs Resolved
                        </p>
                    </motion.div>

                    {/* ── Supporting Proof Points ── */}
                    <motion.div variants={up} className="flex flex-col justify-end lg:border-r border-white/10 lg:px-10">
                        <div className="overflow-hidden mb-2">
                            <motion.h3 variants={reveal} className="text-5xl font-light tracking-tighter text-white">
                                3
                            </motion.h3>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mt-2 leading-relaxed">
                            AI Assistant<br/>Capabilities
                        </p>
                    </motion.div>

                    <motion.div variants={up} className="flex flex-col justify-end lg:border-r border-white/10 lg:px-10">
                        <div className="overflow-hidden mb-2">
                            <motion.h3 variants={reveal} className="text-5xl font-light tracking-tighter text-white">
                                4
                            </motion.h3>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mt-2 leading-relaxed">
                            Business Domains<br/>Connected
                        </p>
                    </motion.div>

                    <motion.div variants={up} className="flex flex-col justify-end lg:pl-10">
                        <div className="overflow-hidden mb-2">
                            <motion.h3 variants={reveal} className="text-5xl font-light tracking-tighter text-white">
                                2
                            </motion.h3>
                        </div>
                        <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mt-2 leading-relaxed">
                            AI-Powered<br/>Products Built
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Highlights;
