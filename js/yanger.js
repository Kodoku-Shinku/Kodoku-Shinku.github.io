$(document).ready(function(){
  "use strict"

  /* 1. Preloader */
  $(window).on('load', function() {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });


  $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function() {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 4; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $().ready(function() {
    $('[rel="tooltip"]').tooltip();

  });

  //Rotating-cards
  $('.rotate-btn').click(function() { //hover  can be used
    var id = $(this).attr('data-card');
    $('#' + id).toggleClass('do-flip');

  });

  // popovers Initialization
  $(function() {
    $('[data-toggle="popover"]').popover()
  })

  new WOW().init();

});
