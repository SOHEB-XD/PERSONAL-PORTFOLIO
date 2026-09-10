import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    maskReveal,
    fadeUp,
    fade,
} from '../animations/variants';

const WhatIBuild = () => {
    const reducedMotion = useReducedMotion();

    const container = staggerContainer(reducedMotion, { stagger: 0.1 });
    const sectionContainer = staggerContainer(reducedMotion, { stagger: 0.15 });
    const reveal = maskReveal(reducedMotion);
    const up = fadeUp(reducedMotion);
    const dim = fade(reducedMotion);

    const categories = [
        {
            num: "01",
            title: "Full-Stack Web Applications",
            desc: "React-based frontend applications backed by Node.js, Express.js, REST APIs and MongoDB."
        },
        {
            num: "02",
            title: "AI-Powered Features",
            desc: "Practical AI integrations using Google Gemini and Google GenAI API for analytics, job-matching, and automation."
        },
        {
            num: "03",
            title: "Business Workflows",
            desc: "Applications that connect interfaces, APIs, databases and business processes into highly usable workflows."
        },
        {
            num: "04",
            title: "Secure Data-Driven Systems",
            desc: "Applications involving authentication, authorization, JWT, protected REST APIs, and controlled data access."
        }
    ];

    return (
        <section
            id="what-i-build"
            className="relative z-10 py-32 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5"
            aria-label="What I Build"
        >
            <div className="max-w-7xl mx-auto">
                {/* ── Section Header ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="flex justify-between items-baseline mb-20 md:mb-32"
                >
                    <motion.p variants={up} className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                        What I Build
                    </motion.p>
                    <motion.span variants={dim} className="text-xs font-mono text-gray-700">
                        04
                    </motion.span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    {/* ── Intro Statement ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionContainer}
                        className="lg:col-span-5"
                    >
                        <div className="overflow-hidden mb-8 lg:sticky lg:top-32">
                            <motion.h3 variants={reveal} className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight leading-[1.1] text-white">
                                FULL-STACK SYSTEMS.<br/>
                                PRACTICAL AI.<br/>
                                REAL WORKFLOWS.
                            </motion.h3>
                        </div>
                    </motion.div>

                    {/* ── Categories List ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={sectionContainer}
                        className="lg:col-span-6 lg:col-start-7 flex flex-col gap-12"
                    >
                        {categories.map((cat, idx) => (
                            <motion.div key={idx} variants={up} className="border-b border-white/5 pb-12 last:border-0 last:pb-0">
                                <div className="flex gap-6 md:gap-10">
                                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600 mt-2">
                                        {cat.num}
                                    </p>
                                    <div>
                                        <p className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-3">
                                            {cat.title}
                                        </p>
                                        <p className="text-sm md:text-base font-light leading-relaxed text-gray-400">
                                            {cat.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatIBuild;
