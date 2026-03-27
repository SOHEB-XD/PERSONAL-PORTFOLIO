import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';

/* --------------------------------------------------------------------------
   UTILITY: ICONS (Monochrome Update)
   --------------------------------------------------------------------------
*/
const Icons = {
    Home: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    Code: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    GraduationCap: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 0 6-1 6-1v-7"/></svg>,
    Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
    Github: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
    Linkedin: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
    ExternalLink: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
    Menu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
    Folder: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
    X: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
};

/* --------------------------------------------------------------------------
   COMPONENT: SCROLL REVEAL
   --------------------------------------------------------------------------
*/
const ScrollReveal = ({ children, className = "", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={ref} 
            className={`${className} transition-all duration-1000 ease-out transform ${
                isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

/* --------------------------------------------------------------------------
   COMPONENT: CUSTOM CURSOR (Liquid Chrome Theme)
   --------------------------------------------------------------------------
*/
const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        if (dotRef.current) dotRef.current.style.opacity = '0';
        if (outlineRef.current) outlineRef.current.style.opacity = '0';

        let mouseX = -100, mouseY = -100;
        let outlineX = -100, outlineY = -100;
        let isVisible = false;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (!isVisible) {
                if (dotRef.current) dotRef.current.style.opacity = '1';
                if (outlineRef.current) outlineRef.current.style.opacity = '1';
                isVisible = true;
            }
            
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            }
        };

        const animate = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;

            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference" />
            <div ref={outlineRef} className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[9999] mix-blend-difference" />
        </>
    );
};

/* --------------------------------------------------------------------------
   COMPONENT: LIQUID SCENE (Abstract/Chrome Theme)
   --------------------------------------------------------------------------
*/
const LiquidScene = () => {
      const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 12);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        // --- GROUP ---
        const mainGroup = new THREE.Group();
        scene.add(mainGroup);

        // --- MATERIALS ---
        const materialChrome = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 1.0,
            roughness: 0.15,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            flatShading: false,
        });

        const materialDark = new THREE.MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.8,
            roughness: 0.2,
        });

        // --- 1. THE CORE (Dense Sphere with Detail) ---
        const coreGeo = new THREE.IcosahedronGeometry(1.8, 1); 
        const core = new THREE.Mesh(coreGeo, materialChrome);
        mainGroup.add(core);

        // --- 2. ORBITING RINGS (Gyroscope Style) ---
        const ringGeo = new THREE.TorusGeometry(3.5, 0.15, 16, 100);
        
        // Ring 1
        const ring1 = new THREE.Mesh(ringGeo, materialDark);
        mainGroup.add(ring1);

        // Ring 2
        const ring2 = new THREE.Mesh(ringGeo, materialChrome);
        ring2.rotation.x = Math.PI / 2;
        ring2.scale.set(0.85, 0.85, 0.85); // Slightly smaller
        mainGroup.add(ring2);

        // Ring 3
        const ring3 = new THREE.Mesh(ringGeo, materialDark);
        ring3.rotation.x = Math.PI / 4;
        ring3.scale.set(1.15, 1.15, 1.15); // Larger
        mainGroup.add(ring3);

        // --- 3. SATELLITE PARTICLES ---
        const particleCount = 20;
        const particleGroup = new THREE.Group();
        const pGeo = new THREE.SphereGeometry(0.15, 8, 8);
        
        for(let i=0; i<particleCount; i++) {
            const mesh = new THREE.Mesh(pGeo, materialChrome);
            // Random orbit positions
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 4.5 + Math.random() * 1.0;
            
            mesh.position.x = r * Math.sin(phi) * Math.cos(theta);
            mesh.position.y = r * Math.sin(phi) * Math.sin(theta);
            mesh.position.z = r * Math.cos(phi);
            particleGroup.add(mesh);
        }
        mainGroup.add(particleGroup);


        // --- LIGHTING ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); 
        scene.add(ambientLight);

        const light1 = new THREE.PointLight(0x40e0d0, 5, 60); // Turquoise highlight
        light1.position.set(8, 5, 5);
        scene.add(light1);

        const light2 = new THREE.PointLight(0x9370db, 5, 60); // Purple highlight
        light2.position.set(-8, -5, 5);
        scene.add(light2);
        
        const light3 = new THREE.DirectionalLight(0xffffff, 2); 
        light3.position.set(0, 10, 10);
        scene.add(light3);

        // --- INTERACTION ---
        let mouseX = 0;
        let mouseY = 0;
        
        const handleMouseMove = (event) => {
            mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
            mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const clock = new THREE.Clock();

        const animate = () => {
            const time = clock.getElapsedTime();

            // Rotate Core
            core.rotation.y = time * 0.2;
            core.rotation.z = time * 0.1;

            // Rotate Rings on different axes
            ring1.rotation.y = time * 0.15;
            ring1.rotation.x = Math.sin(time * 0.2) * 0.5;

            ring2.rotation.y = time * 0.2;
            ring2.rotation.z = time * 0.1;

            ring3.rotation.z = time * 0.1;
            ring3.rotation.y = Math.cos(time * 0.15) * 0.5;

            // Orbit Particles
            particleGroup.rotation.y = -time * 0.1;
            particleGroup.rotation.z = time * 0.05;

            // Interactive Tilt
            mainGroup.rotation.x = mouseY * 0.5;
            mainGroup.rotation.y = mouseX * 0.5;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            
            if (mainGroup) {
                if (window.innerWidth < 768) {
                    mainGroup.position.set(0, 0, -2);
                    mainGroup.scale.set(0.65, 0.65, 0.65);
                } else {
                    // Moved further left to -5
                    mainGroup.position.set(-7, 0, 0);
                    mainGroup.scale.set(1, 1, 1);
                }
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if(mount) mount.removeChild(renderer.domElement);
            coreGeo.dispose();
            ringGeo.dispose();
            pGeo.dispose();
            materialChrome.dispose();
            materialDark.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

/* --------------------------------------------------------------------------
   COMPONENT: TOP NAVBAR
   --------------------------------------------------------------------------
*/
const TopNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileMenuOpen(false);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { id: 'about', label: 'Home' },
        { id: 'skills', label: 'Stack' },
        { id: 'projects', label: 'Works' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
            isScrolled || mobileMenuOpen
            ? 'bg-black/90 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('about')}>
                    
                    <span className="text-white  font-light tracking-widest">PORTFOLIO</span>
                </div>
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <button 
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-xs font-medium text-white hover:scale-125 transition-all duration-300 uppercase tracking-widest hover:tracking-[0.2em]"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button onClick={() => scrollTo('contact')} className="px-6 py-2 border border-white/20 hover:bg-white hover:text-black rounded-sm text-[10px] font-bold text-white transition-all tracking-widest uppercase">
                        Hire Me
                    </button>
                </div>
                <button 
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
                </button>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in-down">
                    {navLinks.map((link) => (
                        <button 
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-left text-xl font-light text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

/* --------------------------------------------------------------------------
   COMPONENT: HERO SECTION
   --------------------------------------------------------------------------
*/
const Hero = () => {
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
                        MERN STACK <br/> <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">DEVELOPER</span>
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
                        <button onClick={() => document.getElementById('skills').scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 bg-white text-black text-xs font-bold hover:bg-gray-200 transition-colors tracking-widest uppercase">
                            View Works
                        </button>
                        <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 bg-transparent border border-white/30 text-white text-xs font-bold hover:bg-white/10 backdrop-blur-sm transition-all tracking-widest uppercase">
                            Get in Touch
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

/* --------------------------------------------------------------------------
   COMPONENT: SKILLS SECTION
   --------------------------------------------------------------------------
*/
const Skills = () => {
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
                                                01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08<br/>09
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

/* --------------------------------------------------------------------------
   COMPONENT: PROJECTS SECTION
   --------------------------------------------------------------------------
*/
const Projects = () => {
    const projects = [
        {
            title: "Employee Management System",
            desc: "A system that helps you manage and allocate all the tasks efficiently.",
            tech: ["React"],
            github: "#",
            live: "#"
        },
        {
            title: "Employee Management System — React task tracking app",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis deleniti libero, consequuntur optio dolorem tenetur iste vitae quam quidem doloribus.",
            tech: ["Next.js", "MongoDB", "Tailwind"],
            github: "#",
            live: "#"
        }, 
        {
            title: "Upcoming..",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis deleniti libero, consequuntur optio dolorem tenetur iste vitae quam quidem doloribus.",
            tech: ["React", "three.js", "Node.js"],
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
}

/* --------------------------------------------------------------------------
   COMPONENT: EDUCATION SECTION
   --------------------------------------------------------------------------
*/
const Education = () => {
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
                                <span className="text-xs font-mono text-cyan-500">2025 – Present</span>
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

/* --------------------------------------------------------------------------
   COMPONENT: FOOTER
   --------------------------------------------------------------------------
*/
const Footer = () => {
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
                        © 2025 Built with React & Three.js. <br/> By Soheb.
                    </p>
                </ScrollReveal>
            </div>
        </footer>
    );
};

/* --------------------------------------------------------------------------
   COMPONENT: APP
   --------------------------------------------------------------------------
*/
const App = () => {
    return (
        <div className="font-sans antialiased text-white selection:bg-white selection:text-black md:cursor-none">
            <CustomCursor />
            <LiquidScene />
            <TopNavbar />
            <main className="relative pt-6">
                <Hero />
                <Skills />
                <Projects />
                <Education />
                <Footer />
            </main>
        </div>
    );
};

export default App;
