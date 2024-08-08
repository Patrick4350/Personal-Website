/* Typing Animation */
var typed = new Typed(".typing", {
    strings:["", "FullStack Developer", "Software Engineer", "Data Scientist", "UX/UI Designer", "Math Enthusiast"],
    typeSpeed:100, 
    BackSpeed:60,
    loop:true
})


document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Add animations on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__fadeInUp");
            }
        });
    });

    document.querySelectorAll('.card, .form-group').forEach(element => {
        observer.observe(element);
    });
});

/* Active */
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});

/* Loader */
document.addEventListener('DOMContentLoaded', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');

    window.addEventListener('load', function() {
        setTimeout(() => {
            loaderWrapper.style.opacity = '0';
            setTimeout(() => {
                loaderWrapper.style.display = 'none';
            }, 500); // Allow time for fade-out effect
        }, 2000); // Delay in milliseconds (2000ms = 2 seconds)
    });
});
