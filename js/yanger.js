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

    function rotateCard(rotate-btn){
        var $card = $(rotate-btn).closest('.card-container');
        console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    }

$('#card-2').on('click' ,function(){
        $('.rotate-btn').toggleClass('flipped');
    });
