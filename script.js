const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    
    if (scrollHeight > 100) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-100px";
    }

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const navLinks = navbar.querySelectorAll("ul li a");
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").slice(1) === section.id) {
                    link.classList.add("active");
                }
            });
        }
    });
});
