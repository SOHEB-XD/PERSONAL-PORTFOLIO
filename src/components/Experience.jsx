import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    maskReveal,
    fadeUp,
    fade,
} from '../animations/variants';

const Experience = () => {
    const reducedMotion = useReducedMotion();

    const container = staggerContainer(reducedMotion, { stagger: 0.1 });
    const sectionContainer = staggerContainer(reducedMotion, { stagger: 0.15 });
    const reveal = maskReveal(reducedMotion);
    const up = fadeUp(reducedMotion);
    const dim = fade(reducedMotion);

    return (
        <section
            id="experience"
            className="relative z-10 py-32 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5"
            aria-label="Experience"
        >
            <div className="max-w-7xl mx-auto">
                {/* ── Section Header ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="flex justify-between items-baseline mb-16 md:mb-24"
                >
                    <motion.p variants={dim} className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                        Experience
                    </motion.p>
                    <motion.span variants={dim} className="text-xs font-mono text-gray-700">
                        02
                    </motion.span>
                </motion.div>

                {/* ── Role Header ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="mb-20 md:mb-32"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                        <div>
                            <motion.h3 variants={reveal} className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-2">
                                Gomzi Consulting Services Pvt Ltd
                            </motion.h3>
                            <motion.p variants={dim} className="text-base md:text-xl font-light text-gray-400">
                                MERN Stack Developer
                            </motion.p>
                        </div>
                        <motion.div variants={dim} className="text-left md:text-right">
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1">
                                Timeline
                            </p>
                            <p className="text-sm font-mono tracking-widest text-white">
                                JUL 2026 — PRESENT
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ── Production Engineering ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32 md:mb-40">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionContainer}
                        className="lg:col-span-5"
                    >
                        <div className="overflow-hidden mb-2">
                            <motion.div variants={reveal} className="text-[clamp(6rem,12vw,10rem)] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 -ml-2">
                                70+
                            </motion.div>
                        </div>
                        <motion.p variants={dim} className="text-sm md:text-base font-mono uppercase tracking-[0.1em] text-gray-400 mb-8">
                            Production Bugs Resolved
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionContainer}
                        className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
                    >
                        <motion.p variants={dim} className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
                            From Symptom to Root Cause
                        </motion.p>
                        <motion.p variants={dim} className="text-sm md:text-base font-light leading-relaxed text-gray-300 mb-10">
                            Investigated and resolved issues across the React frontend and Node.js/Express backend. Traced defects through UI components, API flows, and database interactions, performing root-cause analysis rather than surface-level patching.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center text-[10px] font-mono uppercase tracking-[0.15em] text-gray-400">
                            <motion.div variants={dim} className="flex items-center gap-3">
                                <span className="text-white">Trace</span>
                                <span className="hidden sm:inline text-gray-700">→</span>
                            </motion.div>
                            <motion.div variants={dim} className="flex items-center gap-3">
                                <span className="text-white">Diagnose</span>
                                <span className="hidden sm:inline text-gray-700">→</span>
                            </motion.div>
                            <motion.div variants={dim} className="flex items-center gap-3">
                                <span className="text-white">Fix</span>
                                <span className="hidden sm:inline text-gray-700">→</span>
                            </motion.div>
                            <motion.div variants={dim}>
                                <span className="text-white">Verify</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* ── AI Assistant Case Study ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionContainer}
                    className="border-t border-white/10 pt-16 md:pt-24"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 md:mb-32">
                        <div className="lg:col-span-5">
                            <motion.h4 variants={reveal} className="text-2xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                                AI Assistant
                            </motion.h4>
                            <motion.p variants={dim} className="text-sm md:text-base font-light leading-relaxed text-gray-400">
                                Built and integrated a read-only AI chatbot into the existing application. Connected the assistant with application data to help users understand business context, discover records, and surface actionable information.
                            </motion.p>
                        </div>
                        
                        <div className="lg:col-span-6 lg:col-start-7">
                            <motion.div variants={dim} className="border-b border-white/5 pb-6 mb-6">
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">01</p>
                                <p className="text-base text-white font-medium mb-1">Business Analytics</p>
                                <p className="text-sm font-light text-gray-400">Help users interact with business data and surface analytical insights.</p>
                            </motion.div>
                            
                            <motion.div variants={dim} className="border-b border-white/5 pb-6 mb-6">
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">02</p>
                                <p className="text-base text-white font-medium mb-1">Global Search</p>
                                <p className="text-sm font-light text-gray-400">Search and discover relevant records across the application.</p>
                            </motion.div>

                            <motion.div variants={dim} className="pb-6">
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">03</p>
                                <p className="text-base text-white font-medium mb-1">What Needs My Attention?</p>
                                <p className="text-sm font-light text-gray-400">Surface actionable information that helps users identify what requires attention.</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* ── Architecture & Domains ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-sm">
                        <motion.div variants={dim}>
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
                                Business Domains
                            </p>
                            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-mono uppercase tracking-[0.1em] text-white">
                                <span>Product</span>
                                <span className="text-gray-700">/</span>
                                <span>Order</span>
                                <span className="text-gray-700">/</span>
                                <span>Support</span>
                                <span className="text-gray-700">/</span>
                                <span>Business Operations</span>
                            </div>
                        </motion.div>

                        <motion.div variants={dim}>
                            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-6">
                                Read-Only Access
                            </p>
                            <div className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-widest">
                                <span className="flex items-center gap-2 text-white">
                                    Read <span className="text-emerald-400">✓</span>
                                </span>
                                <span className="flex items-center gap-2 text-gray-500">
                                    Create <span>×</span>
                                </span>
                                <span className="flex items-center gap-2 text-gray-500">
                                    Update <span>×</span>
                                </span>
                                <span className="flex items-center gap-2 text-gray-500">
                                    Delete <span>×</span>
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
