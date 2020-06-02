$(document).ready(function(){
    $('#companies_slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
            }
        ]
    });

    $('#large_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    });

    $('#social__slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    });

    $('#featured__slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            }
            }
        ]
    });

    $('#featured__slider_two').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            }
            }
        ]
    });

    $('#slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        vertical: false,
        fade: true,
        asNavFor: '#slider_nav',
        responsive: [
            {
            breakpoint: 480,
            settings: {
                arrows: true,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
      });

    $('#slider_nav').slick({
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#slider_for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
      });

    
      $('#additional_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                arrows: false
            }
            }
        ]
    });

});