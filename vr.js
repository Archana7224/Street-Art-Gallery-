// Create a GSAP timeline
const tl = gsap.timeline();

// Add animation to hero section
tl.from(".hero", {
    duration: 2,
    opacity: 0,
    y: 100,
    ease: "power2.inOut"
});

// Add animation to hero text
tl.from(".hero h1", {
    duration: 1.5,
    opacity: 0,
    x: -100,
    ease: "power2.inOut"
}, "-=1.5");

// Add animation to hero button
tl.from(".hero button", {
    duration: 1.5,
    opacity: 0,
    x: 100,
    ease: "power2.inOut"
}, "-=1.5");

// Add animation to gallery section
tl.from(".gallery", {
    duration: 2,
    opacity: 0,
    y: 100,
    ease: "power2.inOut",
    delay: 1
});

// Adding animation to gallery images
tl.staggerFrom(".gallery img", {
    duration: 1.5,
    opacity: 0,
    x: 50,
    ease: "power2.inOut"
}, 0.2, "-=1.5");

