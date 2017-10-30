//SWIPER
let clicked = false;

//Swiper - biography

let swiper = new Swiper ('.bio-swiper', {
    loop:true,
    pagination:'.swiper-pagination',
    paginationClickable: 'true',
    direction: 'horizontal',
    autoplay: '2500',
    effect: 'fade'
});

// Swiper - gallery

let gallerySlides = $('.gallery').find('.swiper-slide');
let gallerySwiper = $('.gal');
let galleryMatchMedia = window.matchMedia('(min-width: 1200px)');

gallerySlides.css({
   filter: 'grayscale(100%)'
});


let gallery = new Swiper('.gal', {
    effect: 'coverflow',
    loop:true,
    autoplay: 3000,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    grabCursor: false,
    onlyExternal: true,
    centeredSlides: true,
    slidesPerView: '2',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : false,
    },
    breakpoints: {
        800: {
            slidesPerView:1,
            onlyExternal:false,
            onTransitionEnd: function() {
                let activeSlide = $('.gallery').find('.swiper-slide-active');
                activeSlide.css({
                    transition: '1s',
                    filter: 'grayscale(0)'
                })
            },
            onTransitionStart: function() {
                gallerySlides.css({
                    filter: 'grayscale(100%)'
                })

            }
        },
        1200: {
            slidesPerView: 2,
            onlyExternal:false,
            onTransitionEnd: function() {
                let activeSlide = $('.gallery').find('.swiper-slide-active');
                activeSlide.css({
                    transition: '1s',
                    filter: 'grayscale(0)'
                })
            },
            onTransitionStart: function() {
                gallerySlides.css({
                    filter: 'grayscale(100%)'
                })

            }
        }
    },
});
if (galleryMatchMedia.matches) {
    gallerySwiper.on('click', e => {

        let target = e.target;

        if ($(target).hasClass('swiper-slide-next')) {

            gallery.stopAutoplay();
            $('.gallery').find('.swiper-slide-active').css({
                filter: 'grayscale(100%)',
            });
            gallery.slideNext(250);
            clicked = false;


        } else if ($(target).hasClass('swiper-slide-prev')) {

            gallery.stopAutoplay();
            $('.gallery').find('.swiper-slide-active').css({
                filter: 'grayscale(100%)',
            });
            gallery.slidePrev(250);
            clicked = false;



        } else if ($(target).hasClass('swiper-slide-active') && !clicked) {

            gallery.stopAutoplay();

            $(target).css({
                transition: '.3s',
                transform: 'scale(1.5)',
                filter: 'grayscale(0)',
            });

            clicked = true;

        } else if (clicked){
            gallery.startAutoplay();
            $('.gallery').find('.swiper-slide-active').css({
                transform: 'scale(1)',
                filter: 'grayscale(100%)',
            });

            clicked = false;
        }

    });
}







