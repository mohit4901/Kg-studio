// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// --- Initial Load Animations ---
window.onload = function() {
    // Navbar animation: slides down and fades in
    gsap.from(".navbar", {
        y: -100, // Starts 100px above its natural position
        opacity: 0, // Starts completely transparent
        duration: 1, // Animation duration of 1 second
        ease: "power3.out" // Easing function for a smooth finish
    });

    // Hero section animations: text elements slide up and fade in with a delay
    gsap.from(".hero-content h1", {
        y: 30, // Starts 30px below
        opacity: 0, // Starts transparent
        duration: 1.5, // Longer duration for dramatic effect
        delay: 0.5, // Starts after 0.5 seconds
        ease: "power3.out"
    });
    gsap.from(".hero-content p", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        delay: 0.8, // Slightly delayed from h1
        ease: "power3.out"
    });
    gsap.from(".hero-content .btn", {
        y: 30,
        opacity: 0,
        duration: 1.5,
        delay: 1.1, // Slightly delayed from p
        ease: "power3.out"
    });
};


// --- Scroll-Triggered Animations ---

// About Section: image scales up and text slides in from left
gsap.from(".about-image img", {
    scrollTrigger: {
        trigger: "#about", // Element that triggers the animation
        start: "top 75%", // When the top of the #about section hits 75% of the viewport height
        end: "bottom 25%", // Ends when the bottom of the #about section hits 25% of the viewport height
        toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
        // markers: true // Uncomment for debugging scroll trigger positions
    },
    scale: 0.8, // Starts at 80% of its size
    opacity: 0, // Starts transparent
    duration: 1.5, // Animation duration
    ease: "power3.out"
});

gsap.from(".about-text", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
    },
    x: -100, // Starts 100px to the left
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.3 // Slightly delayed from the image for a staggered effect
});

// Services Section Items: each service item slides up and fades in
gsap.utils.toArray(".service-item").forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item, // Each individual service item is a trigger
            start: "top 85%", // When the top of the item enters 85% of the viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        y: 80, // Starts 80px below
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15 // Stagger the animation by 0.15 seconds for each item
    });
});

// Portfolio Section Items: each portfolio item scales up and fades in
gsap.utils.toArray(".portfolio-item").forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        scale: 0.8, // Starts at 80% of its size
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)", // A slightly bouncy ease for a more dynamic feel
        stagger: 0.15
    });
});

// Camera Section: Staggered fade-in and slide-up animation (replaces horizontal scroll)
gsap.utils.toArray(".camera-item").forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%", // When the top of the item enters 85% of the viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            // markers: true // Uncomment for debugging
        },
        y: 80, // Starts 80px below
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15 // Stagger the animation by 0.15 seconds for each item
    });
});


// Contact Section: text and button slide up and fade in
gsap.from("#contact p", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
    },
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from("#contact .btn", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    },
    y: 30,
    opacity: 0,
    duration: 1.2,
    delay: 0.3, // Button animates slightly after the paragraph
    ease: "power3.out"
});


// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section ID from the href
        const targetSection = document.querySelector(targetId); // Select the target section element

        if (targetSection) {
            // Use GSAP to smoothly scroll the window to the target section's position
            gsap.to(window, {
                duration: 1.5, // Duration of the scroll animation
                scrollTo: {
                    y: targetSection.offsetTop, // Scroll to the top offset of the target section
                    autoKill: false // Prevents the animation from being killed if user scrolls manually
                },
                ease: "power2.inOut" // Easing function for a smooth start and end
            });
        }
    });
});
