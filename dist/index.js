$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        rewind: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        stagePadding: 150,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })
});