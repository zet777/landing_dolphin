/*Переворот карточки по наведению на класс scan-all*/

$('.scan-all').hover(
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
$('.print').hover(
  function(){
    $('.front-header').addClass('hard-light');

  },
  function(){
   $('.front-header').removeClass('hard-light');
 });

/*end*/

/* Фальцовка */

$('.folding').hover(
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

$('.cast').hover(
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

