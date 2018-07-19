$(document).ready(function () {
        $('#body').show();
        $('.portfolio_slider').slick({
                dots: true,
                arrows: false,
                dotsClass: 'slider_indicators',
        });
        new WOW().init();

});