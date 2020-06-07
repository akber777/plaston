$(document).ready(function () {


    let servicesHeight = $('.servicesNew__list').height();

    $('.servicesNew__content img').css({

        'height': servicesHeight + 300

    })


    $('.servicesNew').css({

        'margin-bottom': $('.servicesNew__content img').height()
    })


    if ($('.servicesNew__content img').height() > 678) {
        $('.servicesNew').css({

            'margin-bottom':378
        })
    }


})