//SCROLLING
let header = $('.header-main');
let mediaPlayerSection = $('.media-player-section');
let introductionHeader = $('.introduction-header');
let concertsHeader = $('.content__header');
let concertsEvents = $('.content__events');
let introductionText = $('.introduction-text');
let tabletMatchMedia = window.matchMedia("screen and (min-width: 1200px)");
let headerHeight = header.outerHeight();
let $backArrow = $('.back-arrow');

let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);


// Initial float text state
if (tabletMatchMedia.matches) {
    let floatTextState = {
        'opacity':'0.25',
        'transform': 'translateY(100px)',
    };

    introductionHeader.css(floatTextState);
    introductionText.css(floatTextState);
    concertsHeader.css(floatTextState);
    concertsEvents.css(floatTextState);
}

$(window).on('scroll', () => {


    let windowPos = $(window).scrollTop();

    if(tabletMatchMedia.matches) {

        if(isChrome || isSafari) {
            moveBackground(header, -3, 0, headerHeight);
            moveBackground(mediaPlayerSection, -3, headerHeight*3.5,headerHeight*5.2 );
        }

        scrollFloatText(introductionHeader, 5, 'Y', 100);
        scrollFloatText(introductionText, 5, 'Y', 100);

        scrollFloatText(concertsHeader, 5, 'Y', (headerHeight*2)+100);
        scrollFloatText(concertsEvents, 5, 'Y', (headerHeight*2)+100);
    }

    //Back arrow
    if(windowPos > 200) {
        $backArrow.fadeIn(200);
    } else {
        $backArrow.fadeOut(200);
    }

    if (windowPos > document.body.scrollHeight - headerHeight - 50 ) {
        $backArrow.off('mouseover');
    } else {
        $backArrow.on('mouseover');
    }
});



function scrollFloatText (elem, factor, direction, from) {

    let scrollTop = $(window).scrollTop();
    let calc;
    let calcOpacity;
    let startOpacity = 0.25;
    let startFloat = 100;

    if (scrollTop >= from) {
        calc = startFloat - ((scrollTop - from)/factor);
        calcOpacity = parseFloat(startOpacity) + ((scrollTop - from)/factor)/100;
    }
    if (calc <= 0) {
        elem.css({'transform':'translateY(0px)'});
    } else {
        elem.css({'transform': 'translate' + direction + '(' + calc +'px)'});
    }

    if (calcOpacity >= 1) {
        elem.css({'opacity':'1'});
    } else if (calcOpacity <= startOpacity) {
        elem.css({'opacity':startOpacity});
    } else {
        elem.css({'opacity':calcOpacity});
    }

}

function moveBackground(elem,factor,from, to) {
    let scrollTop = $(window).scrollTop();
    let calc;

    if (scrollTop >= to) {
        calc = (to-from)/factor;
        return;
    } else if (scrollTop >= from) {
        calc = ((scrollTop - from)/factor);
    }
    elem.css({'background-position': 'center '+ calc +'px'});
}

// function scrollOpacity (elem, range, factor) {
//
//     let scrollTop = $(this).scrollTop();
//     let height = elem.outerHeight();
//     let offset = height / factor;
//     let calc = 1 - (scrollTop - offset + range) / range;
//
//     elem.css({'opacity': calc});
//
//     if (calc > '1') {
//         elem.css({ 'opacity': 1 });
//     } else if ( calc < '0' ) {
//         elem.css({ 'opacity': 0 });
//     }
// }
//
// function scrollFloat (elem, factor, direction, from, to) {
//
//     let scrollTop = $(this).scrollTop();
//     let calc;
//
//     if (scrollTop >= to) {
//         calc = (to-from)/factor;
//         return;
//     } else if (scrollTop >= from) {
//         calc = ((scrollTop - from)/factor);
//     }
//     elem.css({'transform': 'translate' + direction + '(' + calc +'px)'});
// }

// Smooth scroll

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(e) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
            &&
            location.hostname === this.hostname
        ) {
            // Figure out element to scroll to
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500)
            }
        }
    });