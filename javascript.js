
// ------------------------------------------ DROP DOWN MENU -------------------------------------------

menu = document.querySelector(".menu");
function dropdown() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
    menu.classList.toggle("yes")
    menu.classList.toggle("no")
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
    delay: 100
};

ScrollReveal().reveal('.home-img', slideUp);
ScrollReveal().reveal('.home-txt', slideUp);



ScrollReveal().reveal('.about-title', slideUp);
ScrollReveal().reveal('.about-img', slideUp);
ScrollReveal().reveal('.about-boxes', slideUp);
ScrollReveal().reveal('.about-details', slideUp);

ScrollReveal().reveal('.skills-title', slideUp);
ScrollReveal().reveal('.skills-boxcontainer', slideUp);

ScrollReveal().reveal('.projects-title', slideUp);
ScrollReveal().reveal('.project-box', slideUp);

ScrollReveal().reveal('.contact-content', slideUp);