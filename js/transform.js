$('.card').on('click', function () {
	$('.container').toggleClass('container-origin');
})
$('.menu-btn').on('click', function (e) {
	e.preventDefault; /*отменяем стандартное событие*/
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
})