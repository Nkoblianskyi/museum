$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

$('.openmob').click(function () {
    $('.mobmenu').fadeIn();
});
$('.mobmenu .close').click(function () {
    $('.mobmenu').fadeOut();
});
$('.mobmenu a').click(function () {
    $('.mobmenu').fadeOut();
});

$('.modal .close').click(function () {
    $('.modal').fadeOut();
});

setTimeout(function () {
    $('.modal').fadeIn();
}, 7000)