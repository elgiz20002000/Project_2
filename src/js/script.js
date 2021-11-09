$(document).ready(function () {
  $('.carusel__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></img</button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></img></button>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: true
        }
      },]


  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toogle(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toogle('.catalog-item__link');
  toogle('.catalog-item__close');


  $('[data-modal=consultation]').on('click', function () {
    $('.bg , #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function () {
    $('.bg , #consultation , #order , #thanks').fadeOut('slow');
  });

  $('.button_catalog').each(function (i) {
    $(this).on('click', function () {
      $('.modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.bg , #order').fadeIn('slow');
    });
  });

  $('.bg').on('click', function () {
    $(' .bg , #consultation, #order , #thanks').fadeOut('slow');
  });


  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          maxlength: 20,
          required: true
        },
        tel: 'required',
        email: {
          email: true,
          required: true
        }
      },
      messages: {
        name: {
          required: "Укажите ваше имя",
          minlength: jQuery.validator.format("В Вашем имени должно иметься {0} символов!"),
        },
        tel: "Введите ваш номе телефона",
        email: {
          required: "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
          email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
        }
      }
    });
  }

  validateForms('#first-form');
  validateForms('#consultation form');
  validateForms('#order form');


  $('input[name=tel]').inputmask("+7 (999) 999-9999");


  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation , #order').fadeOut('slow');
      $('.bg , #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });

    return false;
  });



  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn('slow');
    } else {
      $('.pageup').fadeOut('slow');
    }
  });

  AOS.init();
});