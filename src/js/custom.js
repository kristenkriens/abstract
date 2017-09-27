$(function() {

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).on("scroll", function() {

      var y = $(this).scrollTop();

      $('.header__mobile-nav li').each(function (event) {
          if (y >= $($(this).find('a').attr('href')).offset().top - 95) {
              $('.header__mobile-nav li').not(this).removeClass('active');
              $(this).addClass('active');
          }
      });

  });

  $('.header__hamburger').on('click', function() {
    $('.header__mobile').toggleClass('header__mobile--open');
  });

  $('.header__mobile-nav a').on('click', function() {
    $('.header__mobile').toggleClass('header__mobile--open');
  });

  $('.contact__form-input input').on('focusin', function() {
    $(this).parent().find('label').addClass('active');
  });

  $('.contact__form-input input').on('focusout', function() {
    if($(this).val() == '') {
      $(this).parent().find('label').removeClass('active');
    }
  });

  $('.clients__cards').flipster({
      style: 'flat',
      start: 'center',
      spacing: -0.7,
      loop: true,
      scrollwheel: false,
      keyboard: false,
      itemContainer: '.clients__cards-inner',
      itemSelector: '.clients__card'
  });

  $('.clients__card').on('click', function() {
    var num = $(this).index();

    $('.clients__nav-dot').removeClass('clients__nav-dot--current').eq(num).addClass('clients__nav-dot--current');
  });

  $('.clients__nav-dot').on('click', function() {
    var num = $(this).index();

    $('.clients__card').eq(num).click();
  });

  $('.footer__instagram-image').on('click', function() {
    var i = $(this).index();

    $('.footer__modal').addClass('footer__modal--open');

    $('.footer__modal-image').eq(i).addClass('footer__modal-image--open');

    $('.footer__modal-exit').on('click', function() {
      $('.footer__modal').removeClass('footer__modal--open');
    });

    $('.footer__modal-next').on('click', function() {
      $(this).parent().removeClass('footer__modal-image--open').next().addClass('footer__modal-image--open');
    })

    $('.footer__modal-prev').on('click', function() {
      $(this).parent().removeClass('footer__modal-image--open').prev().addClass('footer__modal-image--open');
    })

    $(document).on('keydown', function(e) {
      var keycode = ((typeof e.keyCode !='undefined' && e.keyCode) ? e.keyCode : e.which);
      if (keycode === 27) {
        $('.footer__modal').removeClass('footer__modal--open');
        $('.footer__modal-image').eq(i).removeClass('footer__modal-image--open');
      } else if (keycode === 39) {
        $('.footer__modal-image.footer__modal-image--open:not(:last-of-type)').removeClass('footer__modal-image--open').next().addClass('footer__modal-image--open');
      } else if (keycode === 37) {
        $('.footer__modal-image.footer__modal-image--open:not(:first-of-type)').removeClass('footer__modal-image--open').prev().addClass('footer__modal-image--open');
      } else {
        e.stopPropagation();
      }
    });
  });

});
