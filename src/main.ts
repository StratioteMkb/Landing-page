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
const scrollUp = (): void => {
    const scrollUpBtn: HTMLElement | null = document.getElementById("scroll-up");

    if (scrollUpBtn) { // Vérifie si scrollUpBtn existe
        if (window.scrollY >= 250) {
            scrollUpBtn.classList.remove("-bottom-1/2");
            scrollUpBtn.classList.add("bottom-4");
        } else {
          scrollUpBtn.classList.remove("bottom-4");
          scrollUpBtn.classList.add("-bottom-1/2");
        }
    }
};

window.addEventListener("scroll", scrollUp);

const scrollHeader = (): void => {
    const header: HTMLElement | null = document.getElementById("navbar");

    if (header) { // Vérifie si scrollUpBtn existe
        if (window.scrollY >= 250) {
            header.classList.add("border-b", "border-yellow-500");
        } else {
          header.classList.remove("border-b", "border-yellow-500");
        }
    }
};

window.addEventListener("scroll", scrollHeader);

const activeLink = (): void => {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".nav-link");

    let current: string = "Home";

    sections.forEach(section => {
        const sectionTop: number = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            const sectionId: string | null = section.getAttribute("id");
            if (sectionId) {
                current = sectionId;
            }
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");

        if (item.href.includes(current)) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);

