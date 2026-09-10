import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';


const LiquidScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050505);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 8); // Start much closer
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Mobile performance optimization
        const isMobile = window.innerWidth < 768;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        mount.appendChild(renderer.domElement);

        // Reduced Motion Check
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

        const ring1 = new THREE.Mesh(ringGeo, materialDark);
        mainGroup.add(ring1);

        const ring2 = new THREE.Mesh(ringGeo, materialChrome);
        ring2.rotation.x = Math.PI / 2;
        ring2.scale.set(0.85, 0.85, 0.85);
        mainGroup.add(ring2);

        const ring3 = new THREE.Mesh(ringGeo, materialDark);
        ring3.rotation.x = Math.PI / 4;
        ring3.scale.set(1.15, 1.15, 1.15);
        mainGroup.add(ring3);

        // --- 3. SATELLITE PARTICLES ---
        const particleCount = isMobile ? 10 : 20;
        const particleGroup = new THREE.Group();
        const pGeo = new THREE.SphereGeometry(0.15, 8, 8);

        for (let i = 0; i < particleCount; i++) {
            const mesh = new THREE.Mesh(pGeo, materialChrome);
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

        const light1 = new THREE.PointLight(0x40e0d0, 5, 60);
        light1.position.set(8, 5, 5);
        scene.add(light1);

        const light2 = new THREE.PointLight(0x9370db, 5, 60);
        light2.position.set(-8, -5, 5);
        scene.add(light2);

        const light3 = new THREE.DirectionalLight(0xffffff, 2);
        light3.position.set(0, 10, 10);
        scene.add(light3);

        // --- INTERACTION & SCROLL ---
        let targetMouseX = 0;
        let targetMouseY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let targetScrollY = 0;
        let currentScrollY = 0;

        const handleMouseMove = (event) => {
            if (prefersReducedMotion) return;
            // Increased range for more noticeable interaction
            targetMouseX = (event.clientX - window.innerWidth / 2) * 0.001;
            targetMouseY = (event.clientY - window.innerHeight / 2) * 0.001;
        };
        
        const handleScroll = () => {
            targetScrollY = window.scrollY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        const clock = new THREE.Clock();
        let animationFrameId;

        const animate = () => {
            // Pause animation when tab is not visible to save resources
            if (document.hidden) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            const time = clock.getElapsedTime();

            if (!prefersReducedMotion) {
                // Subtle continual rotation
                core.rotation.y = time * 0.2;
                core.rotation.z = time * 0.1;

                ring1.rotation.y = time * 0.15;
                ring1.rotation.x = Math.sin(time * 0.2) * 0.5;

                ring2.rotation.y = time * 0.2;
                ring2.rotation.z = time * 0.1;

                ring3.rotation.z = time * 0.1;
                ring3.rotation.y = Math.cos(time * 0.15) * 0.5;

                particleGroup.rotation.y = -time * 0.1;
                particleGroup.rotation.z = time * 0.05;

                // Smooth pointer interpolation
                mouseX += (targetMouseX - mouseX) * 0.05;
                mouseY += (targetMouseY - mouseY) * 0.05;

                // Scroll Interpolation
                currentScrollY += (targetScrollY - currentScrollY) * 0.08;
                const scrollProgress = currentScrollY * 0.001; // Increased scroll weight

                // Apply elegant interactive tilt + scroll rotation
                mainGroup.rotation.x = mouseY * 1.5 + (scrollProgress * 0.5);
                mainGroup.rotation.y = mouseX * 1.5 + (scrollProgress * 0.2);
                
                // Very subtle camera X/Y parallax for physical depth
                camera.position.x = mouseX * -2.5;
                camera.position.y = mouseY * 2.5;

                // Subtle lighting response
                light1.position.x = 8 + (mouseX * 15);
                light2.position.x = -8 + (mouseX * 15);

                // DOLLY-ZOOM: Aggressive camera push INTO the artifact on scroll.
                // The artifact dominates initially (z=8) and the user flies through it.
                camera.position.z = 8 - (scrollProgress * 15.0);
            }

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animate();

        const handleResize = () => {
            const isMobileView = window.innerWidth < 768;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

            if (mainGroup) {
                if (isMobileView) {
                    mainGroup.position.set(0, -1, -2);
                    mainGroup.scale.set(0.9, 0.9, 0.9);
                } else {
                    // Central/Right-weighted, massive scale to dominate 40-50% of the screen
                    mainGroup.position.set(3.5, 0, -1);
                    mainGroup.scale.set(1.4, 1.4, 1.4);
                }
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mount) mount.removeChild(renderer.domElement);
            coreGeo.dispose();
            ringGeo.dispose();
            pGeo.dispose();
            materialChrome.dispose();
            materialDark.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505]" />;
};

export default LiquidScene;