import React from 'react';
import { motion, useReducedMotion } from "motion/react";
import {
    staggerContainer,
    fadeUp,
    fade,
} from '../animations/variants';

const Skills = () => {
    const reducedMotion = useReducedMotion();

    const container = staggerContainer(reducedMotion, { stagger: 0.1 });
    const sectionContainer = staggerContainer(reducedMotion, { stagger: 0.1 });
    const up = fadeUp(reducedMotion);
    const dim = fade(reducedMotion);

    const stack = [
        {
            category: "Languages",
            items: "JavaScript / HTML / CSS"
        },
        {
            category: "Frontend",
            items: "React.js / Tailwind CSS"
        },
        {
            category: "Backend",
            items: "Node.js / Express.js / RESTful APIs / JWT / Authentication / Authorization"
        },
        {
            category: "Database",
            items: "MongoDB / Mongoose / Schema Design / CRUD"
        },
        {
            category: "AI",
            items: "Google Gemini / Google GenAI API / Prompt Engineering"
        },
        {
            category: "Tools / DevOps",
            items: "Git / GitHub / Postman / VS Code / Vercel / Render"
        }
    ];

    return (
        <section
            id="skills"
            className="relative z-10 py-32 md:py-40 px-6 md:px-12 lg:px-16 border-t border-white/5"
            aria-label="Technical Stack"
        >
            <div className="max-w-7xl mx-auto">
                {/* ── Section Header ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="flex justify-between items-baseline mb-20 md:mb-32"
                >
                    <motion.p variants={up} className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                        Technical Stack
                    </motion.p>
                    <motion.span variants={dim} className="text-xs font-mono text-gray-700">
                        05
                    </motion.span>
                </motion.div>

                {/* ── Engineering Inventory ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionContainer}
                    className="max-w-4xl"
                >
                    {stack.map((group, idx) => (
                        <motion.div key={idx} variants={up} className="border-b border-white/10 py-8 first:pt-0">
                            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                                <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-500 w-40 shrink-0">
                                    {group.category}
                                </p>
                                <p className="text-sm md:text-base font-mono uppercase tracking-widest text-white leading-loose">
                                    {group.items.split(' / ').map((item, i, arr) => (
                                        <React.Fragment key={i}>
                                            <span>{item}</span>
                                            {i !== arr.length - 1 && <span className="text-gray-700 mx-2">/</span>}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
