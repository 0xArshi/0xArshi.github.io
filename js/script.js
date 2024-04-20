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

// Get the contact icons container
var contactIcons = document.querySelector('.contact-icons');

// Function to hide contact icons
function hideContactIcons() {
  if (contactIcons) {
    contactIcons.style.display = 'none';
  }
}

// Select images from both Featured and New Arrivals sections
var imgs = document.querySelectorAll('.featured-content .row img, .new .box img');

// Loop through the images to add click event listeners
imgs.forEach(function(img) {
  img.onclick = function() {
    // Initialize variables to hold product details
    var productName, productPrice;

    // Check if the clicked image is from the featured section
    if (this.closest('.featured-content')) {
      var productDetails = this.nextElementSibling; // Assuming details are the next sibling
      productName = productDetails.querySelector('h5').textContent;
      productPrice = productDetails.querySelector('span').textContent;
    } 
    // Check if the clicked image is from the new arrivals section
    else if (this.closest('.new')) {
      var productBox = this.closest('.box');
      productName = productBox.querySelector('h5').textContent;
      productPrice = productBox.querySelector('h6').textContent;
    }

    // Update the modal content
    document.getElementById('modalTitle').textContent = productName;
    document.getElementById('modalPrice').textContent = productPrice;
    document.getElementById('modalImage').src = this.src;

    // Display the modal
    modal.style.display = "block";

    // Hide the contact icons when opening the modal
    hideContactIcons();
  }
});

// When the "Buy Now" button is clicked, update the WhatsApp link based on the product shown in the modal
document.getElementById('buyButton').addEventListener('click', function() {
  // Retrieve the product name currently displayed in the modal
  var productName = document.getElementById('modalTitle').textContent;
  // Prepare the base message to include in the WhatsApp link
  var baseWhatsAppMessage = "Hello, I came across your product on your website and I am interested in making a purchase. Could you please provide me with more information about ";
  // Concatenate the base message with the product name
  var fullMessage = baseWhatsAppMessage + productName;
  // URL-encode the full message to ensure it's web-safe
  var encodedMessage = encodeURIComponent(fullMessage);
  // Select the WhatsApp link element by its ID
  var whatsappLink = document.getElementById('whatsappLink');
  // Update the href attribute of the WhatsApp link with the encoded message
  whatsappLink.href = `https://wa.me/916261383275?text=${encodedMessage}`;
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  // Hide the contact icons when closing the modal
  contactIcons.style.display = 'none';
  document.querySelector('.contact-heading').style.display = 'none';
  hideContactIcons();
}

// When the "Buy Now" button is clicked, show the contact icons
// When the "Buy Now" button is clicked, show or hide the contact icons and the contact heading
document.getElementById('buyButton').onclick = function() {
  // Check the current display style of the contact icons
  if (contactIcons.style.display === 'none' || contactIcons.style.display === '') {
      contactIcons.style.display = 'flex'; // Use 'flex' to align icons properly
      document.querySelector('.contact-heading').style.display = 'block'; // Show the heading
  } else {
      contactIcons.style.display = 'none';
      document.querySelector('.contact-heading').style.display = 'none'; // Hide the heading
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

// Function to open modal and show specific service content
function openServiceModal(service) {
  document.querySelectorAll('.service-content').forEach(function(content) {
      content.style.display = 'none'; // Hide all service contents
  });
  document.getElementById(service).style.display = 'block'; // Show the specific service content
  document.getElementById('servicesModal').style.display = 'block'; // Show the modal
}

// Close the modal when the close button is clicked
document.querySelector('.services-modal .close').onclick = function() {
  document.getElementById('servicesModal').style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  // Check if the click is outside the 'productModal'
  if (event.target == modal) {
      modal.style.display = "none";
      contactIcons.style.display = 'none';
      document.querySelector('.contact-heading').style.display = 'none';
      hideContactIcons();
  }

  // Check if the click is outside the 'servicesModal'
  if (event.target == document.getElementById('servicesModal')) {
      document.getElementById('servicesModal').style.display = "none";
  }
}
