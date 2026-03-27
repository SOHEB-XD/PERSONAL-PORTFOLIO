import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';

const TopNavbar = ({Icons}) => {
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
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { id: 'about', label: 'Home' },
        { id: 'skills', label: 'Stack' },
        { id: 'projects', label: 'Works' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || mobileMenuOpen
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

export default TopNavbar;