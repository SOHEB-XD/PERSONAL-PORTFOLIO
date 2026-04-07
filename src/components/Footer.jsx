import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

const Footer = ({ ScrollReveal, Icons }) => {
    return (
        <footer id="contact" className="py-20 bg-black text-center relative z-10 border-t border-white/10">
            <div className="max-w-2xl mx-auto px-8 md:px-32">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">READY TO <span className="text-gray-500">DEPLOY?</span></h2>
                    <p className="text-gray-400 text-sm mb-10 font-light">
                        Currently available for freelance projects and open to full-time opportunities.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="flex justify-center gap-8 mb-12">
                        <a href="https://github.com/SOHEB-XD" target='_blank' className="p-4 border border-white/10 hover:bg-white hover:text-black transition-all rounded-full text-white">
                            <Icons.Github />
                        </a>
                        <a href="http://linkedin.com/in/soheb-khan-788322308" target='_blank' className="p-4 border border-white/10 hover:bg-white hover:text-black transition-all rounded-full text-white">
                            <Icons.Linkedin />
                        </a>
                        <a href="http://mailto:soheb8976@gmail.com" target='_blank' className="p-4 border border-white/10 hover:bg-white hover:text-black transition-all rounded-full text-white">
                            <Icons.Mail />
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
                        © 2025 Built with React & Three.js. <br /> By Soheb Khan.
                    </p>
                </ScrollReveal>
            </div>
        </footer>
    );
};

export default Footer;
