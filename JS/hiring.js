const navbar = document.querySelector('.navigation');
const image = document.querySelector('.stud-image');
const links = document.querySelectorAll('.nav-list a');

let isScrolled = false;

window.addEventListener('scroll', function() {
  if (!isScrolled && window.scrollY > 0) {
    navbar.style.backgroundColor = "#1D9FCD";
    navbar.style.color = "white";

    links.forEach(function(link) {
        link.style.color = "white";
      });
    isScrolled = true;

  } else if (isScrolled && window.scrollY === 0) {
    navbar.style.backgroundColor = "transparent";

    links.forEach(function(link) {
        link.style.color = "#1E1E1E";
      });
    isScrolled = false;
  }
});

