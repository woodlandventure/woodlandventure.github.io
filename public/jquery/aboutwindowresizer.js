/**
 * Created by charl on 04/04/2017.
 */
$(window).resize(function () {
    $('.find-top-item').css('padding-top', parseInt($('.navbar').css("height"))-20);
    var width =  $(window).width();
    if (width < 751) {
        $('#about-dan').css('margin-left', 20);
        $('#about-dan').css('margin-right', 20);
        $('#dan').css('width', width - 40);
    } else {
        $('#about-dan').css('margin-left', 50);
        $('#about-dan').css('margin-right', 50);
        $('#dan').css('width', width/3);
    }
});
$(window).on('load', function () {
    $('.find-top-item').css('padding-top', parseInt($('.navbar').css("height"))-20);
    var width =  $(window).width();
    if (width < 751) {
        $('#about-dan').css('margin-left', 20);
        $('#about-dan').css('margin-right', 20);
        $('#dan').css('width', width - 40);
    } else {
        $('#about-dan').css('margin-left', 50);
        $('#about-dan').css('margin-right', 50);
        $('#dan').css('width', width/3);
    }
});
