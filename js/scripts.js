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


