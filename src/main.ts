import './style.css';
import './keyframes.ts';

const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link"); // Correction ici
const main = document.getElementById("main");
const nav = document.getElementById("navbar");

main?.addEventListener("click", () => {
    navMenu?.classList.toggle("left-[0]");
    main?.classList.toggle("ri-menu-4-line");
    main?.classList.toggle("ri-close-large-line");
    nav?.classList.toggle("bg-amber-50");
    nav?.classList.toggle("bg-amber-200");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu?.classList.remove("left-[0]");
        main?.classList.remove("ri-close-large-line");
        main?.classList.add("ri-menu-4-line");
        nav?.classList.remove("bg-amber-200");
        nav?.classList.add("bg-amber-50");

    });
});