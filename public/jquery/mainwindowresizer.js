//This function resizes the top padding whenever the page is loaded or changes size - makes sure things aren't hidden behind navbar
$(window).resize(function () {
    $('.top-item').css('padding-top', parseInt($('.navbar').css("height"))+10);
    if ($(window).width() < 768) {
        $('#itservicespic').css('height', 300);
        $('#projpic').css('height', 300);
        $('#sch1pic').css('height', 400);
        $('#sch2pic').css('height', 400);

    } else {
        $('#itservicespic').css('height', $('#itservices').height());
        $('#projpic').css('height', $('#proj').height());
        $('#sch1pic').css('height', $('#sch1').height());
        $('#sch2pic').css('height', $('#sch2').height());
    }
});

$(window).on('load', function () {
    $('.top-item').css('padding-top', parseInt($('.navbar').css("height"))+10);
    if ($(window).width() < 768) {
        $('#itservicespic').css('height', 300);
        $('#projpic').css('height', 300);
        $('#sch1pic').css('height', 400);
        $('#sch2pic').css('height', 400);

    } else {
        $('#itservicespic').css('height', $('#itservices').height());
        $('#projpic').css('height', $('#proj').height());
        $('#sch1pic').css('height', $('#sch1').height());
        $('#sch2pic').css('height', $('#sch2').height());
    }
});