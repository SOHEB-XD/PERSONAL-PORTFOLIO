import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import { fade } from '../animations/variants';

const Footer = () => {
    const reducedMotion = useReducedMotion();
    const dim = fade(reducedMotion);

    return (
        <footer
            id="footer"
            className="relative z-10 py-12 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-[#020202]"
            aria-label="Footer"
        >
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={dim}
                className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
            >
                <div className="text-center md:text-left">
                    <p className="text-sm font-semibold tracking-widest text-white uppercase mb-1">
                        Soheb Khan
                    </p>
                    <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">
                        MERN Stack Developer
                    </p>
                </div>
                
                <div className="flex gap-6 text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">
                    <a href="https://linkedin.com/in/soheb-khan-788322308" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://github.com/SOHEB-XD" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="mailto:soheb8976@gmail.com" className="hover:text-white transition-colors">
                        Email
                    </a>
                </div>

                <div className="text-[10px] font-mono text-gray-700 tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} All Rights Reserved
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
