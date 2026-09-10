import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    fadeUp,
    fade,
} from '../animations/variants';

const Education = () => {
    const reducedMotion = useReducedMotion();

    const container = staggerContainer(reducedMotion, { stagger: 0.1 });
    const sectionContainer = staggerContainer(reducedMotion, { stagger: 0.1 });
    const up = fadeUp(reducedMotion);
    const dim = fade(reducedMotion);

    const education = [
        {
            year: "AUG 2024",
            title: "B.Sc. Information Technology",
            institution: "University of Mumbai",
            extra: "CGPA: 6.9"
        }
    ];

    const certifications = [
        {
            year: "JAN 2025 — MAR 2026",
            title: "MERN Stack Development Training",
            institution: "TOPS Technologies"
        },
        {
            year: "2026",
            title: "Software Developer – Product Development",
            institution: "TOPS Technologies / NSDC"
        },
        {
            year: "2026",
            title: "MERN Stack Developer",
            institution: "TOPS Technologies"
        }
    ];

    return (
        <section
            id="education"
            className="relative z-10 py-32 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5"
            aria-label="Education and Certifications"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="flex justify-between items-baseline mb-20 md:mb-32"
                >
                    <motion.p variants={up} className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                        Education
                    </motion.p>
                    <motion.span variants={dim} className="text-xs font-mono text-gray-700">
                        06
                    </motion.span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
                    {/* Education List */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionContainer}
                        className="lg:col-span-12"
                    >
                        <div className="border-b border-white/10 pb-4 mb-8">
                            <motion.p variants={up} className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600">
                                Academic
                            </motion.p>
                        </div>
                        {education.map((item, idx) => (
                            <motion.div key={idx} variants={up} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 py-6 border-b border-white/5 last:border-0">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 w-40 shrink-0">
                                    {item.year}
                                </p>
                                <div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
                                    <p className="text-sm md:text-base font-semibold tracking-wide text-white uppercase">
                                        {item.title}
                                    </p>
                                    <div className="md:text-right flex flex-col md:items-end">
                                        <p className="text-xs md:text-sm font-light text-gray-400">
                                            {item.institution}
                                        </p>
                                        {item.extra && (
                                            <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-widest">
                                                {item.extra}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Certifications List */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionContainer}
                        className="lg:col-span-12 mt-12"
                    >
                        <div className="border-b border-white/10 pb-4 mb-8">
                            <motion.p variants={up} className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600">
                                Training & Certifications
                            </motion.p>
                        </div>
                        {certifications.map((item, idx) => (
                            <motion.div key={idx} variants={up} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 py-6 border-b border-white/5 last:border-0">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 w-40 shrink-0">
                                    {item.year}
                                </p>
                                <div className="flex flex-col md:flex-row md:justify-between w-full gap-2">
                                    <p className="text-sm md:text-base font-semibold tracking-wide text-white uppercase">
                                        {item.title}
                                    </p>
                                    <p className="text-xs md:text-sm font-light text-gray-400 md:text-right">
                                        {item.institution}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
