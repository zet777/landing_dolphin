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


$('.print').hover(
function(){
  $('.front-header').addClass('hard-light');
  
},
function(){
 $('.front-header').removeClass('hard-light');
});
