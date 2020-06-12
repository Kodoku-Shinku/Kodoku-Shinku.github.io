'use strict';

$(window).on('load', function() {
	/*------------------
		Preloader
	--------------------*/
	$(".loader").fadeOut();
	$("#preloader").delay(400).fadeOut("slow");

});


$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
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

$().ready(function(){
        $('[rel="tooltip"]').tooltip();

    });

$('.rotate-btn-to-back').click(function(){ //hover  can be used
		  var id = $(this).parent().parent().parent().attr('id');
      $('#'+id).toggleClass('do-flip');

});

$('.rotate-btn-to-front').click(function(){ //hover  can be used
      var id = $(this).parent().parent().parent().attr('id');
      $('#'+id).toggleClass('do-flip');

});
