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

sr.reveal('.featured,.cta,.new,.review,.testimonial-area', {delay:200, origin:'bottom'})

// Add smooth scroll for navigation menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Close navlist when clicking outside the navbar and change cross icon to normal
document.addEventListener('click', function(e) {
    const navlist = document.querySelector('.navlist');
    const menu = document.querySelector('#menu-icon');
    if (!e.target.closest('header')) {
        navlist.classList.remove('open');
        menu.classList.remove('bx-x');
    }
});
// Get the modal
var modal = document.getElementById('productModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the images that open the modal
var imgs = document.querySelectorAll('.featured-content .row img');

// Loop through the images to add click event listeners
imgs.forEach(function(img) {
  img.onclick = function() {
    // Get the product details from the same row
    var productName = this.nextElementSibling.querySelector('h5').textContent;
    var productItems = this.nextElementSibling.querySelector('p').textContent;
    var productPrice = this.nextElementSibling.querySelector('span').textContent;
    // Update the modal content
    document.getElementById('modalTitle').textContent = productName;
    document.getElementById('modalItems').textContent = productItems;
    document.getElementById('modalPrice').textContent = productPrice;
    document.getElementById('modalImage').src = this.src;

    // Display the modal
    modal.style.display = "block";
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

modal.style.display = "block";
modal.classList.add("show"); 

modal.style.display = "none";
modal.classList.remove("show");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
}
