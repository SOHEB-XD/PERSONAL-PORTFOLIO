

const Projects = ({ ScrollReveal, Icons }) => {
    const projects = [
        {
            title: "PrepPulse AI — Full-Stack AI-Powered Interview Preparation Platform",
            desc: "Developed a full-stack interview coaching SaaS (React/Node.js/MongoDB) featuring secure JWT authentication and user-specific data isolation. Integrated Google GenAI to generate personalized interview prep reports and engineered an automated, end-to-end resume parsing and rebuilding pipeline using Puppeteer and pdf-parse.",
            tech: ["React, Node.js, MongoDB, Express.js"],
            github: "#",
            live: "#"
        },
        {
            title: "Employee Management System — React task tracking app",
            desc: "Built a role-based task management app using React and Tailwind CSS, featuring distinct Admin and Employee dashboards. Implemented client-side authentication, role-aware routing, and persistent state management using React Context and localStorage within a highly modular component architecture.",
            tech: ["React", "Tailwind"],
            github: "https://github.com/SOHEB-XD/React-Employee-Management-System.git",
            live: "https://react-employee-management-system.onrender.com"
        },
        
    {
        title: "Upcoming..",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis deleniti libero, consequuntur optio dolorem tenetur iste vitae quam quidem doloribus.",
        tech: ["React", "MongoDB", "Node.js"],
        github: "#",
        live: "#"
        }
    ];

return (
    <section id="projects" className="py-32 px-8 md:px-32 bg-transparent relative z-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
            <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 text-right tracking-wide">
                    SELECTED <span className="text-gray-600">PROJECTS</span>
                </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}>
                        <div className="group relative p-8 bg-[#050505] border border-white/10 hover:border-white/50 transition-all duration-500 h-full flex flex-col">
                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 border border-white/10 rounded-sm text-white group-hover:bg-white group-hover:text-black transition-colors">
                                        <Icons.Folder />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-gray-500 hover:text-white transition-colors"><Icons.Github /></a>
                                        <a href={project.live} className="text-gray-500 hover:text-white transition-colors"><Icons.ExternalLink /></a>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-gray-300 transition-colors">{project.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-6 font-mono">{project.desc}</p>
                            </div>
                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] font-bold text-gray-400 bg-white/5 px-2 py-1 border border-white/5 uppercase tracking-wider">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    </section>
)
};

export default Projects;