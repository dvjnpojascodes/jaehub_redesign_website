const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
