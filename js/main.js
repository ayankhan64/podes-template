$(document).ready(function () {
    $(window).scroll(function () {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 20)
    });

    $(".count").counterUp({
        delay: 10,
        time: 1000
    });


    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });
    
    $('#bar1').barfiller({
        barColor: "#fff"
    });
    $('#bar2').barfiller({
        barColor: "#fff"
    });
    $('#bar3').barfiller({
        barColor: "#fff"
    });
    $('#bar4').barfiller({
        barColor: "#fff"
    });
    $('.owl-skills').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1140:{
            items:1
        }
    }
});
 $('.owl-news').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1140:{
            items:3
        }
    }
});
    $('.owl-partner').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1140:{
            items:6
        }
    }
});   
})
