// Navigation active state handler and page display
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page');

    // Function to show only the current page
    function showCurrentPage() {
        const hash = window.location.hash || '#home';
        const targetId = hash.substring(1); // Remove the #

        // Special handling for home-contact - show home page and scroll to contact
        if (targetId === 'home-contact') {
            sections.forEach(section => {
                section.style.display = 'none';
            });
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.style.display = 'block';
            }
            // Scroll to contact footer
            setTimeout(() => {
                const contactFooter = document.getElementById('home-contact');
                if (contactFooter) {
                    contactFooter.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);

            // Update active nav for Contact
            navItems.forEach(item => item.classList.remove('active'));
            const contactLink = document.querySelector(`.nav-item a[href="#home-contact"]`);
            if (contactLink) {
                contactLink.parentElement.classList.add('active');
            }
            return;
        }

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show only the targeted section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
            // Scroll to top of the page
            window.scrollTo(0, 0);
        }

        // Update active navigation
        navItems.forEach(item => item.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-item a[href="${hash}"]`);
        if (activeLink) {
            activeLink.parentElement.classList.add('active');
        }
    }

    // Update on page load
    showCurrentPage();

    // Update on hash change
    window.addEventListener('hashchange', showCurrentPage);
});
