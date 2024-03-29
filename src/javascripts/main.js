$(document).ready(function() {
    "use strict";
    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;
    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);
    new WOW().init();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $('#header1').addClass('header-scrolled1');
            $('#back-top').addClass('back-top-animation');
        } else {
            $('#header1').removeClass('header-scrolled1');
            $('#back-top').removeClass('back-top-animation');
        }
    });
    $('#back-top a').on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    if (document.getElementById("default-select")) {
        $('select').niceSelect();
    };
    if (document.getElementById("service-select")) {
        $('select').niceSelect();
    };
    $(window).on('load', function() {
        $(".preloader-area").delay(200).fadeOut(500);
    })

    // $('.img-gal').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });
    // $('.play-btn').magnificPopup({
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });

    $(window).on("load", function() {
        $('.filters ul li').on("click", function() {
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');
            var data = $(this).attr('data-filter');
            // $grid.isotope({
            //     filter: data
            // })
        });
        if (document.getElementById("work")) {
            // var $grid = $(".grid").isotope({
            //     itemSelector: ".all",
            //     percentPosition: true,
            //     masonry: {
            //         columnWidth: ".all"
            //     }
            // })
        };
    });
    jQuery(document).ready(function($) {
        if (document.getElementById("accordion")) {
            var accordion_1 = new Accordion(document.getElementById("accordion"), {
                collapsible: false,
                slideDuration: 500
            });
        }
    });
    if (document.getElementById("skills")) {
        $('.skill-1').percentcircle({
            animate: true,
            diameter: 400,
            guage: 5,
            coverBg: '#fff',
            bgColor: '#efefef',
            fillColor: '#988fff',
            percentSize: '24px',
            percentWeight: 'normal'
        });
        $('.skill-2').percentcircle({
            animate: true,
            diameter: 400,
            guage: 5,
            coverBg: '#fff',
            bgColor: '#efefef',
            fillColor: '#988fff',
            percentSize: '24px',
            percentWeight: 'normal'
        });
        $('.skill-3').percentcircle({
            animate: true,
            diameter: 400,
            guage: 5,
            coverBg: '#fff',
            bgColor: '#efefef',
            fillColor: '#988fff',
            percentSize: '24px',
            percentWeight: 'normal'
        });
        $('.skill-4').percentcircle({
            animate: true,
            diameter: 400,
            guage: 5,
            coverBg: '#fff',
            bgColor: '#efefef',
            fillColor: '#988fff',
            percentSize: '24px',
            percentWeight: 'normal'
        });
    };
    // $('.nav-menu').superfish({
    //     animation: {
    //         opacity: 'show'
    //     },
    //     speed: 400
    // });
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');
        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });
        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });
        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;
                if ($('#header').length) {
                    top_space = $('#header').outerHeight();
                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space;
                    }
                }
                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');
                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });
    $(document).ready(function() {
        $('html, body').hide();
        if (window.location.hash) {
            setTimeout(function() {
                $('html, body').scrollTop(0).show();
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top - 108
                }, 1000)
            }, 0);
        } else {
            $('html, body').show();
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });
    if ($('.active-brand-carusel').length) {
        // $('.active-brand-carusel').owlCarousel({
        //     items: 5,
        //     loop: true,
        //     autoplayHoverPause: true,
        //     autoplay: true,
        //     responsive: {
        //         0: {
        //             items: 1
        //         },
        //         768: {
        //             items: 3,
        //         },
        //         991: {
        //             items: 4,
        //         },
        //         1024: {
        //             items: 5,
        //         }
        //     }
        // });
    }
    if ($('.testi_slider').length) {
        // $('.testi_slider').owlCarousel({
        //     loop: true,
        //     margin: 30,
        //     items: 1,
        //     nav: true,
        //     autoplay: 2500,
        //     smartSpeed: 1500,
        //     dots: true,
        //     responsiveClass: true,
        //     navText: ["<i class='lnr lnr-arrow-left'></i>", "<i class='lnr lnr-arrow-right'></i>"]
        // })
    }
    if (document.getElementById("count")) {
        var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("count").innerHTML = "<div class='col'><span>" + days + "</span><br> Days " + "</div>" + "<div class='col'><span>" + hours + "</span><br> Hours " + "</div>" + "<div class='col'><span>" + minutes + "</span><br> Minutes " + "</div>" + "<div class='col'><span>" + seconds + "</span><br> Seconds </div>";
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("count").innerHTML = "EXPIRED";
            }
        }, 1000);
    }
    if (document.getElementById("map")) {
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(40.6700, -73.9400),
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#333333"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]
            };
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
    }
});
