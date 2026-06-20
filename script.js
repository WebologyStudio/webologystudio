document.addEventListener("DOMContentLoaded", () => {

    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Toggle menu view status
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link inside the nav panel
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });


   
    const targetElements = document.querySelectorAll(".reveal");

    const scrollRevealOptions = {
        root: null,          
        threshold: 0.15,     
        rootMargin: "0px"
    };

    const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, scrollRevealOptions);

    targetElements.forEach(element => {
        scrollRevealObserver.observe(element);
    });
});