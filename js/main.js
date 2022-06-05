const helloWorldthisparameter = (name) => 'Hello, world $(name)';

$(function () {

    // Fixed header
    let header = $('#header');
    let intro = $('#intro');
    // let introH = intro.innerHeight();
    // let scrollPos = $(window).scrollTop();

    // console.log(introH)

    $(window).on("scroll load resize", function () {
        introH = 750;
        scrollPos = $(this).scrollTop();
      
        if ( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(scrollPos)
       
    });

     // Smooth scroll
     $('#nav').on('click', 'a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        
        console.log(top)
        
        $('body, html').animate({ scrollTop: top - 20 }, 2000);
    });


    // navToggle
    let nav = $('#nav');
    let navToggle = $('#navToggle');
    let body = $('body');

    navToggle.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show');
        navToggle.toggleClass('rotate');
        // body.toggleClass('no__scroll');
    });


    // Arrrow__up
    var $arrow__up = $('.arrow__up');
    $(window).on('scroll', function () {
        if($(this).scrollTop() >= 70) {
            $arrow__up.fadeIn();
        } else {
            $arrow__up.fadeOut();
        }
    });

    $arrow__up.on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 900)
    });

});