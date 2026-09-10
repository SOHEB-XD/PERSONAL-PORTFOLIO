import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    maskReveal,
    fadeUp,
    fade,
} from '../animations/variants';

const Projects = () => {
    const reducedMotion = useReducedMotion();

    const container = staggerContainer(reducedMotion, { stagger: 0.1 });
    const sectionContainer = staggerContainer(reducedMotion, { stagger: 0.15 });
    const reveal = maskReveal(reducedMotion);
    const up = fadeUp(reducedMotion);
    const dim = fade(reducedMotion);

    return (
        <section
            id="work"
            className="relative z-10 py-32 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5"
            aria-label="Selected Work"
        >
            <div className="max-w-7xl mx-auto">
                {/* ── Section Header ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="flex justify-between items-baseline mb-24 md:mb-32"
                >
                    <motion.p variants={dim} className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                        Selected Work
                    </motion.p>
                    <motion.span variants={dim} className="text-xs font-mono text-gray-700">
                        03
                    </motion.span>
                </motion.div>

                {/* ── Case Study 01: PrepPulse AI ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionContainer}
                    className="mb-40 md:mb-56"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
                        <div>
                            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mb-4">01</p>
                            <div className="overflow-hidden mb-2">
                                <motion.h3 variants={reveal} className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-white leading-none">
                                    PREPPULSE AI
                                </motion.h3>
                            </div>
                            <motion.p variants={dim} className="text-sm md:text-lg font-light text-gray-400 mt-2 max-w-2xl">
                                FULL-STACK AI-POWERED INTERVIEW PREPARATION PLATFORM
                            </motion.p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <motion.p variants={dim} className="text-sm md:text-base font-light leading-relaxed text-gray-300 mb-10">
                                An authenticated platform that provides AI-generated interview questions, job-match analysis, and personalized preparation roadmaps based on resume insights. Built with a secure foundation and scalable REST APIs.
                            </motion.p>
                            
                            <motion.div variants={dim} className="mb-10">
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">Technologies</p>
                                <p className="text-xs font-mono uppercase tracking-[0.1em] text-gray-300 leading-loose">
                                    REACT <span className="text-gray-700 mx-2">/</span> NODE.JS <span className="text-gray-700 mx-2">/</span> EXPRESS.JS <span className="text-gray-700 mx-2">/</span> MONGODB <span className="text-gray-700 mx-2">/</span> TAILWIND CSS <span className="text-gray-700 mx-2">/</span> GOOGLE GENAI API <span className="text-gray-700 mx-2">/</span> JWT <span className="text-gray-700 mx-2">/</span> BCRYPT <span className="text-gray-700 mx-2">/</span> REST APIS
                                </p>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-6 lg:col-start-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                                <motion.div variants={dim}>
                                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-3 border-b border-white/10 pb-3">AI Engine</p>
                                    <ul className="text-sm font-light text-gray-400 space-y-2">
                                        <li>• Interview question generation</li>
                                        <li>• Job-match analysis</li>
                                        <li>• Preparation roadmaps</li>
                                        <li>• Resume insights</li>
                                    </ul>
                                </motion.div>
                                <motion.div variants={dim}>
                                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-3 border-b border-white/10 pb-3">Authenticated Foundation</p>
                                    <ul className="text-sm font-light text-gray-400 space-y-2">
                                        <li>• JWT authentication</li>
                                        <li>• bcrypt password hashing</li>
                                        <li>• Protected REST APIs</li>
                                        <li>• User-specific data access</li>
                                    </ul>
                                </motion.div>
                            </div>

                            <motion.div variants={dim} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-sm">
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-6 text-center md:text-left">Full-Stack Workflow</p>
                                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-300">
                                    <span className="text-white">USER</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span>REACT</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span>REST API</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span>NODE/EXPRESS</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span>MONGODB</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span className="text-white">AI</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Case Study 02: CareerFlow ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionContainer}
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-16">
                        <div className="md:ml-auto md:text-right">
                            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 mb-4">02</p>
                            <div className="overflow-hidden mb-2">
                                <motion.h3 variants={reveal} className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-white leading-none">
                                    CAREERFLOW
                                </motion.h3>
                            </div>
                            <motion.p variants={dim} className="text-sm md:text-lg font-light text-gray-400 mt-2 md:ml-auto max-w-2xl">
                                AI-POWERED JOB APPLICATION MANAGEMENT PLATFORM
                            </motion.p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 flex-col-reverse lg:flex-row">
                        <div className="lg:col-span-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                                <motion.div variants={dim}>
                                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-3 border-b border-white/10 pb-3">Application Management</p>
                                    <ul className="text-sm font-light text-gray-400 space-y-2">
                                        <li>• Application tracking</li>
                                        <li>• Search & filtering</li>
                                        <li>• Pagination</li>
                                        <li>• Dashboard analytics</li>
                                    </ul>
                                </motion.div>
                                <motion.div variants={dim}>
                                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-white mb-3 border-b border-white/10 pb-3">Automation</p>
                                    <ul className="text-sm font-light text-gray-400 space-y-2">
                                        <li>• Automated application record creation</li>
                                        <li>• AI-assisted communication workflows</li>
                                    </ul>
                                </motion.div>
                            </div>

                            <motion.div variants={dim} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-sm">
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-6 text-center md:text-left">Gmail Integration Workflow</p>
                                <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-300">
                                    <span className="text-white">JOB</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span>APPLICATION</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span>AI PERSONALIZATION</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span>GMAIL</span>
                                    <span className="text-gray-700 rotate-90 md:rotate-0">→</span>
                                    <span className="text-white">FOLLOW-UP</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 lg:col-start-8 lg:text-right flex flex-col justify-between">
                            <div>
                                <motion.p variants={dim} className="text-sm md:text-base font-light leading-relaxed text-gray-300 mb-10">
                                    A management platform that combines job application tracking with AI-assisted communication. Uses Gemini to create personalized application and follow-up emails based on resume and job-description context.
                                </motion.p>
                            </div>
                            
                            <motion.div variants={dim} className="mt-auto">
                                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">Technologies</p>
                                <p className="text-xs font-mono uppercase tracking-[0.1em] text-gray-300 leading-loose">
                                    REACT <span className="text-gray-700 mx-2">/</span> NODE.JS <span className="text-gray-700 mx-2">/</span> EXPRESS.JS <span className="text-gray-700 mx-2">/</span> MONGODB <span className="text-gray-700 mx-2">/</span> TAILWIND CSS <span className="text-gray-700 mx-2">/</span> GEMINI <span className="text-gray-700 mx-2">/</span> GMAIL INTEGRATION
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;