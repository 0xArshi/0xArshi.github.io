const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle ('sticky', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll= () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    distance: '30px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text', {delay:280, origin:'bottom'})

sr.reveal('.featured,.cta,.new,.contact', {delay:200, origin:'bottom'})

// Add smooth scroll for navigation menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Close navlist when clicking outside the navbar
document.addEventListener('click', function(e) {
    const navlist = document.querySelector('.navlist');
    if (!e.target.closest('header')) {
        navlist.classList.remove('open');
    }
});
