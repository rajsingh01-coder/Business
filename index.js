
  // Get the navbar and the toggler button
  const navbar = document.getElementById('navbar');
  const navbarToggler = document.querySelector('.navbar-toggler');

  // Add click event listener to each nav link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Collapse the navbar after a link is clicked
      if (navbar.classList.contains('close')) {
        navbarToggler.click(); // Simulate a click on the toggler to close the navbar
      }
    });
  });


 

    // Get the span element
    let spanbtn = document.querySelector(".span"); // Make sure to use the correct class name

    // Get the input field where you want to write "Successful"
    let inputField = document.querySelector(".input"); // Adjust the selector if necessary
  
    // Add click event listener to the span
    spanbtn.addEventListener("click", () => {
        inputField.value = "Successful"; // Set the input field's value to "Successful"
    });