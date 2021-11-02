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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

     function toogle(item) {
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
      });
    }

    toogle('.catalog-item__link');
    toogle('.catalog-item__close');
      
 
    
  });