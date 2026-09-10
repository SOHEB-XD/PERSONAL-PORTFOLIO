import React from 'react';

const Experience = ({ ScrollReveal }) => {
    return (
        <section id="experience" className="py-32 px-8 md:px-32 bg-transparent relative z-10 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
                        EXPERIENCE
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <p className="text-gray-400">Placeholder for Experience section.</p>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Experience;
