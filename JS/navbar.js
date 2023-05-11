(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();

    });

    $('nav ul li:not(:only-child)').click(function() {
      $('.nav-list').hide();
      $('#nav-toggle').toggleClass('active');
    });


    $('html').click(function() {
      $('.nav-dropdown').hide();
    });

    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
      $(this).toggleClass('active');
    });
  });
})(jQuery);
