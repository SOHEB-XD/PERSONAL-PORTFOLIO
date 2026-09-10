// Shared animation variant factories for motion/react.
// Each factory accepts a `reducedMotion` boolean (from useReducedMotion)
// so animations degrade gracefully when the user prefers reduced motion.

/** Shared easing curve — cubic ease-out */
export const EASE_OUT_CUBIC = [0.33, 1, 0.68, 1];

/**
 * Stagger container — orchestrates child animations sequentially.
 * @param {boolean} reducedMotion
 * @param {{ stagger?: number, delay?: number }} options
 */
export const staggerContainer = (reducedMotion, { stagger = 0.1, delay = 0 } = {}) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: reducedMotion ? 0 : stagger,
            delayChildren: reducedMotion ? 0 : delay,
        },
    },
});

/**
 * Mask-reveal — text slides upward from behind an overflow-hidden wrapper.
 * Wrap the target element in a container with `overflow-hidden`.
 */
export const maskReveal = (reducedMotion) => ({
    hidden: reducedMotion ? { opacity: 0 } : { y: '110%' },
    visible: reducedMotion
        ? { opacity: 1, transition: { duration: 0.3 } }
        : { y: '0%', transition: { duration: 0.9, ease: EASE_OUT_CUBIC } },
});

/**
 * Fade-up — element fades in while translating upward.
 */
export const fadeUp = (reducedMotion) => ({
    hidden: { opacity: 0, y: reducedMotion ? 0 : 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE_OUT_CUBIC },
    },
});

/**
 * Simple fade — opacity-only transition for subtle/decorative elements.
 */
export const fade = (reducedMotion) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: reducedMotion ? 0.2 : 0.6 },
    },
});
