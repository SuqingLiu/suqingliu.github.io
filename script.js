document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.section');
    
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    }
    
    const revealSections = () => {
        for (const section of sections) {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        }
    };
    
    window.addEventListener('scroll', revealSections);
    revealSections();
});
