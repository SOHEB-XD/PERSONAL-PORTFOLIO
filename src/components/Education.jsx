

const Education = ({ ScrollReveal }) => {
    return (
        <section id="education" className="py-32 px-8 md:px-32 bg-transparent relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-white tracking-wide">
                        ACADEMIC <span className="text-gray-600">ARCHIVE</span>
                    </h2>
                </ScrollReveal>

                <div className="space-y-12 border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12">

                    <ScrollReveal delay={200}>
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 bg-black border border-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-white uppercase">Mern Stack Training</h3>
                                <span className="text-xs font-mono text-cyan-500">2025 – 2026</span>
                            </div>
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">TOPs Technologies</p>
                            <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
                                Intensive training in MongoDB, Express.js, React.js, and Node.js.
                                Developing scalable full-stack web applications and RESTful APIs.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 bg-black border border-white rounded-full"></div>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-white uppercase">BSc IT</h3>
                                <span className="text-xs font-mono text-gray-500">2021 – 2024</span>
                            </div>
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">University of Mumbai</p>
                            <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
                                Specialized in Advanced Web Technologies and Database Management.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className="relative">
                            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 bg-black border border-gray-600 rounded-full"></div>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-white uppercase">Higher Secondary</h3>
                                <span className="text-xs font-mono text-gray-500">2020 - 2021</span>
                            </div>
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Govt. Higher Secondary School, Silvassa</p>
                            <p className="text-gray-500 text-sm max-w-xl leading-relaxed">

                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Education;
