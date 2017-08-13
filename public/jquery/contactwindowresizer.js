$(window).resize(function () {
    $('.find-top-item').css('padding-top', parseInt($('.navbar').css("height"))-20);
});
$(window).on('load', function () {
    $('.find-top-item').css('padding-top', parseInt($('.navbar').css("height"))-20);
});
