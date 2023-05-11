var cols = document.querySelectorAll('.portfolio-section .col');
var templates = document.querySelectorAll('.card_template');
var fadeElements = $(".fade-in-up");

window.addEventListener('scroll', checkBoxes);
$(document).on("scroll", fadeInElements);

checkBoxes();
fadeInElements();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  const TempalatetriggerBottom = window.innerHeight / 4.7 * 3.8 ;

  cols.forEach(function(col) {
    const boxTop = col.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      col.classList.add('show');
    } else {
      col.classList.remove('show');
    }
  });

  templates.forEach(function(card_template) {
    const boxTop = card_template.getBoundingClientRect().top;

    if (boxTop < TempalatetriggerBottom) {
      card_template.classList.add('show');
    } else {
      card_template.classList.remove('show');
    }
  });
}




function fadeInElements() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();

  fadeElements.each(function() {
    var elementTop = $(this).offset().top;

    if (elementTop < pageBottom) {
      $(this).addClass("visible");
    } else {
      $(this).removeClass("visible");
    }
  });
}
