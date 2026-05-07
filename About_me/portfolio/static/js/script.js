document.addEventListener('DOMContentLoaded', () => {
    console.log("System Status: Online");
    console.log("Initializing Dashboard UI...");

    /**
     * 1. Reveal Animations
     * Makes sections slide and fade in smoothly as the page loads.
     */
    const revealElements = () => {
        const sections = document.querySelectorAll('section, .glass');

        sections.forEach((el, index) => {
            // Set initial state
            el.style.opacity = "0";
            el.style.transform = "translateY(20px)";
            el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";

            // Trigger animation with a slight delay for each element
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, 100 * index);
        });
    };

    /**
     * 2. Active Navigation Link Highlighter
     * Highlights the nav item based on where the user is scrolling.
     */
    const navHighlighter = () => {
        const sections = document.querySelectorAll('section[id]');
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`nav a[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) navLink.classList.add('text-blue-400');
            } else {
                if (navLink) navLink.classList.remove('text-blue-400');
            }
        });
    };

    /**
     * 3. Hover Glow Effect
     * Creates a subtle "follow" effect for the mouse on project cards.
     */
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update custom CSS variables for the hover glow (optional enhancement)
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /**
     * 4. Smooth Scrolling
     * Ensures internal links scroll smoothly to the target section.
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize functions
    revealElements();
    window.addEventListener('scroll', navHighlighter);
});