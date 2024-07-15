'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});
// Get the form element
const heroForm = document.querySelector('.hero-form');

// Add an event listener for form submission
heroForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input field values
  const carModel = document.getElementById('input-1').value.trim();
  const monthlyPay = document.getElementById('input-2').value.trim();
  const year = document.getElementById('input-3').value.trim();

  // Perform additional validation checks (optional)
  // Example: Check if the monthly payment is a valid number
  if (isNaN(monthlyPay) || monthlyPay <= 0) {
    alert('Please enter a valid monthly payment amount.');
    return;
  }

  // Example: Check if the year is a valid number and within a specific range
  const currentYear = new Date().getFullYear();
  if (isNaN(year) || year < 1900 || year > currentYear) {
    alert('Please enter a valid year between 1900 and the current year.');
    return;
  }

  // If all validation passes, you can submit the form or perform additional actions
  console.log('Form submitted successfully!');
  console.log('Car Model:', carModel);
  console.log('Monthly Payment:', monthlyPay);
  console.log('Year:', year);

  // Reset the form if needed
  heroForm.reset();
});


