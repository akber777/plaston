$(document).ready(function () {


    $('.homeOwl').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    $('.mynewowl').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        nav: false,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });


})

