import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';


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

        for (let i = 0; i < particleCount; i++) {
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
            if (mount) mount.removeChild(renderer.domElement);
            coreGeo.dispose();
            ringGeo.dispose();
            pGeo.dispose();
            materialChrome.dispose();
            materialDark.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default LiquidScene;