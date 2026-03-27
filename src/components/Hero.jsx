import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';


const Hero = ({ ScrollReveal }) => {
    return (
        <section id="about" className="h-screen w-full flex items-center justify-end px-8 md:px-22 relative overflow-hidden">
            <div className="text-right z-10 max-w-2xl pt-20 md:pt-0">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 text-gray-300 text-[10px] font-mono mb-6 backdrop-blur-sm uppercase tracking-widest">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                        </span>
                        System Operational
                    </div>
                </ScrollReveal>

                {/* TAGLINE */}
                <ScrollReveal delay={100}>
                    <p className="text-lg md:text-xl font-light text-gray-400 mb-2 tracking-[0.2em] uppercase">Hello, I am Soheb</p>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <h1 className="text-5xl md:text-8xl font-semibold tracking-wide mb-6 text-white leading-[0.85]">
                        MERN STACK <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">DEVELOPER</span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <p className="text-gray-400 text-sm md:text-base mb-10 font-light leading-relaxed max-w-md ml-auto border-r border-white/20 pr-6">
                        Crafting digital fluidity with <span className="text-white font-medium">React</span> and <span className="text-white font-medium">Node.js</span>.
                        Merging abstract aesthetics with technical precision.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                    <div className="flex flex-col md:flex-row gap-4 justify-end items-center">
                        <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors tracking-widest uppercase">
                            View Works
                        </button>
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-transparent border border-white/30 text-white text-xs font-bold hover:bg-white/10 backdrop-blur-sm transition-all tracking-widest uppercase">
                            Get in Touch
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Hero;