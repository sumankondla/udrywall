$(window).on('load', function() {
    setTimeout ( function () {
        $(".pageload").hide();
        $("body").removeClass("pageload-body");

        //Animation
        // $(".wow").attr("data-wow-delay","0.4s");
        // new WOW().init();

    }, 500);
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("body").addClass("fixed-bar");
    } else {
        $("body").removeClass("fixed-bar");
    }
});

var contact_clone =  $('#contact-item .nav-link').clone();
$('.contact-menu').html(contact_clone);

$('input#priceCheck').click ( function () {
    if ($(this).is(':checked')) {
        $('.p1').text('$179');
        $('.p2').text('$279');
        $('.p3').text('$379');
    } else {
        $('.p1').text('$199');
        $('.p2').text('$299');
        $('.p3').text('$399');
    } 
});

$('.testimonials .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});