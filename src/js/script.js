$(document).ready(function(){
    $('.carusel__inner').slick({
      prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png"></img</button>',
      nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></img></button>',
      responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        dots: true
      }
    },]
      
   
    });
  });