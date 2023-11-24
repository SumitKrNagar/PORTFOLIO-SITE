
// ------------------------------------------ DROP DOWN MENU -------------------------------------------

menu = document.querySelector(".menu");
function dropdown() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}

menu.addEventListener("click", dropdown);

navlinks = document.querySelector(".navbar ul");
function dropdownclose() {
    navbar.classList.toggle("active");
}

navlinks.addEventListener("click", dropdown);

// ------------------------------------ PAGES ANIMATION ----------------------------------------------

var slideUp = {
    distance: '200%',
    origin: 'bottom',
    delay: 100,
    opacity: null
};

ScrollReveal().reveal('.about-container', slideUp);
ScrollReveal().reveal('.skills-container', slideUp);
ScrollReveal().reveal('.projects-container', slideUp);
ScrollReveal().reveal('.contact-container', slideUp);
