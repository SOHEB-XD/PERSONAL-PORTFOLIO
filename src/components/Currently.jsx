import React from 'react';

const Currently = ({ ScrollReveal }) => {
    return (
        <section id="currently" className="py-32 px-8 md:px-32 bg-transparent relative z-10 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
                        CURRENTLY
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                    <p className="text-gray-400">Placeholder for Currently / Open to Opportunities section.</p>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Currently;
