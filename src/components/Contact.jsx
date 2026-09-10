import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    maskReveal,
    fadeUp,
    fade,
} from '../animations/variants';

const Contact = () => {
    const reducedMotion = useReducedMotion();

    const sectionContainer = staggerContainer(reducedMotion, { stagger: 0.1 });
    const reveal = maskReveal(reducedMotion);
    const up = fadeUp(reducedMotion);
    const dim = fade(reducedMotion);

    return (
        <section
            id="contact"
            className="relative z-10 py-32 md:py-48 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-gradient-to-b from-transparent to-[#050505]/80"
            aria-label="Contact"
        >
            <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionContainer}
                    className="max-w-3xl"
                >
                    <div className="overflow-hidden mb-6">
                        <motion.h2 variants={reveal} className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-tighter text-white leading-none">
                            LET'S BUILD<br/>SOMETHING.
                        </motion.h2>
                    </div>
                    <motion.p variants={dim} className="text-sm md:text-lg font-light text-gray-400 max-w-xl mx-auto md:mx-0">
                        Available for MERN stack engineering and full-stack development roles.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionContainer}
                    className="flex flex-col gap-6 items-center md:items-end"
                >
                    <motion.a 
                        variants={dim}
                        href="mailto:soheb8976@gmail.com"
                        className="text-xl md:text-3xl font-light text-white hover:text-gray-300 transition-colors tracking-wide underline decoration-white/20 underline-offset-8 hover:decoration-white/80 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"
                    >
                        soheb8976@gmail.com
                    </motion.a>
                    
                    <motion.div variants={dim} className="flex gap-8 mt-4">
                        <a href="tel:+918866272111" className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">
                            +91-8866272111
                        </a>
                        <a href="https://linkedin.com/in/soheb-khan-788322308" target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">
                            LinkedIn
                        </a>
                        <a href="https://github.com/SOHEB-XD" target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">
                            GitHub
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
