import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

const Skills = ({ ScrollReveal }) => {
    return (
        <section id="skills" className="py-32 px-8 md:px-32 bg-transparent relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-20 items-start">

                    {/* Left: Content */}
                    <div className="flex-1 sticky top-32">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
                                THE <span className="text-gray-500">FOUNDRY</span>
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <p className="text-gray-400 mb-10 text-sm leading-relaxed max-w-sm">
                                Specialized in the MERN stack. I build scalable, high-performance applications with a focus on clean code and modern architecture.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { title: 'Languages', tech: 'HTML, CSS, JavaScript, PHP (Basic)' },
                                { title: 'Frameworks/Libraries', tech: 'React.js, Express.js, Bootstrap, TailwindCSS' },
                                { title: 'Backend', tech: 'Node.js' },
                                { title: 'Databases', tech: 'MongoDB, MySQL (Basic)' },
                                { title: 'Tools', tech: 'Git, GitHub, Postman, VS Code' },
                                { title: 'Concepts', tech: 'REST APIs, Authentication, CRUD Operations' }

                            ].map((item, idx) => (
                                <ScrollReveal key={idx} delay={idx * 100 + 300}>
                                    <div className="p-5 border border-white/10 hover:border-white/40 transition-colors bg-black/50 backdrop-blur-sm group">
                                        <h3 className="text-white font-bold mb-2 group-hover:text-gray-300 transition-colors text-xs uppercase tracking-wider">{item.title}</h3>
                                        <p className="text-[10px] text-gray-500 font-mono">{item.tech}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Right: Code Window */}
                    <div className="flex-1 w-full max-w-md pt-12">
                        <ScrollReveal delay={500}>
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 to-transparent blur opacity-20 transition duration-500"></div>
                                <div className="relative bg-[#050505] border border-white/10 shadow-2xl overflow-hidden font-mono text-[10px]">
                                    <div className="bg-[#0a0a0a] px-4 py-3 flex items-center justify-between border-b border-white/5">
                                        <div className="flex gap-1.5 opacity-50">
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        </div>
                                        <div className="text-gray-600 uppercase tracking-widest">chrome_config.js</div>
                                        <div className="w-8"></div>
                                    </div>
                                    <div className="p-6 text-gray-400 leading-loose overflow-x-auto">
                                        <div className="flex">
                                            <div className="text-gray-700 select-none pr-4 text-right border-r border-gray-800 mr-4">
                                                01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09
                                            </div>
                                            <div>
                                                <div><span className="text-white">const</span> <span className="text-gray-300">architect</span> = &#123;</div>
                                                <div className="pl-4">role: <span className="text-gray-500">'Full Stack Dev'</span>,</div>
                                                <div className="pl-4">style: [<span className="text-gray-500">'Minimalist'</span>, <span className="text-gray-500">'Abstract'</span>],</div>
                                                <div className="pl-4">stack: &#123;</div>
                                                <div className="pl-8">core: [<span className="text-gray-500">'React'</span>, <span className="text-gray-500">'Node'</span>],</div>
                                                <div className="pl-8">visuals: <span className="text-gray-500">'Three.js'</span></div>
                                                <div className="pl-4">&#125;,</div>
                                                <div>&#125;;</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;