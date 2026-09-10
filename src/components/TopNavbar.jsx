import React, { useEffect, useState } from 'react';

const TopNavbar = ({ Icons }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'work', label: 'Work' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled || mobileMenuOpen
                ? 'bg-black/80 backdrop-blur-lg border-white/5 py-4'
                : 'bg-transparent border-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
                <button 
                    onClick={() => scrollTo('hero')}
                    className="text-xl font-bold tracking-tighter flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white group"
                    aria-label="Scroll to top"
                >
                    <span className="text-white font-bold tracking-[0.2em] group-hover:text-gray-300 transition-colors duration-300">SOHEB KHAN</span>
                </button>
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-xs font-medium text-gray-400 hover:text-white transition-all duration-300 uppercase tracking-widest hover:tracking-[0.2em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            {link.label}
                        </button>
                    ))}
                    <a 
                        href="https://drive.google.com/drive/folders/1iF9rGvXBJ9wUNxeXggmufUpi0xktbKdW?usp=drive_link" 
                        target="_blank" 
                        rel="noreferrer"
                        className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    > 
                        <button 
                            className="px-6 py-2.5 border border-white/20 hover:bg-white hover:text-black rounded-sm text-[10px] font-bold text-white transition-colors duration-300 tracking-[0.2em] uppercase cursor-none"
                            style={{ cursor: 'none' }} // Ensure custom cursor applies fully here
                        >
                            Resume
                        </button>
                    </a>
                </div>
                <button
                    className="md:hidden text-white p-2 focus-visible:outline-2 focus-visible:outline-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
                </button>
            </div>
            
            {/* Mobile Menu */}
            <div 
                className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
                    mobileMenuOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
                }`}
            >
                <div className="flex flex-col gap-6 px-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-left text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] py-2"
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="pt-4 border-t border-white/10">
                        <a 
                            href="https://drive.google.com/drive/folders/1iF9rGvXBJ9wUNxeXggmufUpi0xktbKdW?usp=drive_link" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <button className="w-full px-6 py-3 border border-white/20 hover:bg-white hover:text-black rounded-sm text-[10px] font-bold text-white transition-all tracking-[0.2em] uppercase">
                                View Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
