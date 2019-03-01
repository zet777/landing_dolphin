
/*Переворот карточки по наведению на класс scan-all*/

$('.scan-all>span').hover(
  function(){
    $('.front-header').addClass('rotate180');
    $('.back-header').addClass('rotate360');
  },
  function(){
   $('.front-header').removeClass('rotate180');
   $('.back-header').removeClass('rotate360');
 });

/*end*/

/*Подсвечивание при наведение*/
$('.print>span').hover(
  function(){
    $('.front-header').addClass('hard-light');

  },
  function(){
   $('.front-header').removeClass('hard-light');
 });

/*end*/

/* Фальцовка */

$('.folding>span').hover(
  function(){
    $('.back1').removeClass('back-header');
    $('.back1').addClass('back-header-folding');
    $('.front-header').addClass('rotate180');
    $('.back-header-folding').addClass('rotate360');
  },
  function(){
   $('.back1').removeClass('back-header-folding');
   $('.back1').addClass('back-header');
   $('.front-header').removeClass('rotate180');
   $('.back-header').removeClass('rotate360');
 });

/* end */

/* Брошировка */

$('.cast>span').hover(
  function(){
    $('.back1').removeClass('back-header');
    $('.back1').removeClass('back-header-folding');
    $('.back1').addClass('back-header-cast');
    $('.front-header').addClass('rotate180');
    $('.back-header-cast').addClass('rotate360');
  },
  function(){
   $('.back1').removeClass('back-header-cast');
   $('.back1').addClass('back-header');
   $('.front-header').removeClass('rotate180');
   $('.back-header').removeClass('rotate360');
 });

/* end */

/* Up */
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });

});
/* end */

/* Плавный scroll */
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});
/* end */

/* Плавное появление надпесей на картинках css/galeryFlex.css */

$('.img1').hover(
  function(){
   $('.galeryFlex__2300').removeClass('h-hide');
   $('.galeryFlex__2300').addClass('h-show');
  },
  function(){
    $('.galeryFlex__2300').removeClass('h-show');
   $('.galeryFlex__2300').addClass('h-hide');
 });

$('.img2').hover(
  function(){
   $('.galeryFlex__770').removeClass('h-hide');
   $('.galeryFlex__770').addClass('h-show');
  },
  function(){
    $('.galeryFlex__770').removeClass('h-show');
   $('.galeryFlex__770').addClass('h-hide');
 });

$('.img3').hover(
  function(){
   $('.galeryFlex__bh282').removeClass('h-hide');
   $('.galeryFlex__bh282').addClass('h-show');
  },
  function(){
    $('.galeryFlex__bh282').removeClass('h-show');
   $('.galeryFlex__bh282').addClass('h-hide');
 });

$('.img4').hover(
  function(){
   $('.galeryFlex__4002sp').removeClass('h-hide');
   $('.galeryFlex__4002sp').addClass('h-show');
  },
  function(){
    $('.galeryFlex__4002sp').removeClass('h-show');
   $('.galeryFlex__4002sp').addClass('h-hide');
 });

/*end*/