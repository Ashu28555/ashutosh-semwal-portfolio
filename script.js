const titles = [
    "Data Engineer",
    "Databricks Engineer",
    "Power BI Developer",
    "AI Enthusiast"
];

const typingEl = document.getElementById("typing");
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function updateTypewriter() {
    const currentTitle = titles[titleIndex];
    const visibleText = currentTitle.substring(0, charIndex);

    typingEl.textContent = visibleText;

    if (!isDeleting && charIndex < currentTitle.length) {
        charIndex++;
        setTimeout(updateTypewriter, 80);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(updateTypewriter, 40);
    } else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(updateTypewriter, 1200);
        } else {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(updateTypewriter, 200);
        }
    }
}

updateTypewriter();

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach(el => observer.observe(el));

const navLinks = document.querySelectorAll('nav a[href^="#"]');
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 130;

    sections.forEach((section, index) => {
        if (!section) return;
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
});

// Smooth scroll support for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

