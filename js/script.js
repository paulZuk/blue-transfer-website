//Loading screen initial state

$('html, body').css({'overflow': 'hidden', 'height': '100%'});


$(function() {

    //Hide loading screen
    $(window).on('load',function() {
        $('.loading').find('div').fadeOut(1200,function() {
                $('.loading').fadeOut(600, function() {
                    $('html, body').css({
                        'overflow': 'auto',
                        'height': 'auto'
                    });
                })
            });
        })



    //Back to top at reload

    $(this).scrollTop(0);

    //Hamburger mobile
    var hamburgerBtn = $('.mobile-navbar').find('.button');
    var sideNav = $('.mobile-sidenav');
    var logo = $('.logo');

    hamburgerBtn.on('click', function(e) {

        e.stopPropagation();

        if (!hamburgerBtn.hasClass('active')) {
            hamburgerBtn.addClass('active');
            sideNav.addClass('active-sidenav');
            logo.addClass('active-logo');
        } else {
            hamburgerBtn.removeClass('active');
            sideNav.removeClass('active-sidenav');
            logo.removeClass('active-logo');
        }

    });

    // wygaszanie elementów na scroll

    var header = $('.header-main');
    var mediaPlayerSection = $('.media-player-section');
    var backArrow = $('.back-arrow');
    var bioSection = $('.bio-section__overlay');
    var floatOne = $('.float__1');
    var floatTwo = $('.float__2');
    var floatThree = $('.float__3');
    var introductionHeader = $('.introduction-header');
    var introductionText = $('.introduction-text');
    var introductionFloatOne = $('.introduction-float-1');
    var introductionFloatTwo = $('.introduction-float-2');
    var introductionFloatThree = $('.introduction-float-3');
    var curtain = $('section');
    var headerHeight = header.outerHeight();
    var contentHeader = $('.content__header');
    var contentEvents = $('.content__events');
    var lastScroll = 0;
    var tabletMatchMedia = window.matchMedia("screen and (min-width: 600px)");

    var animationEnded = false;

    //Introduction section
    //First Float
    introductionFloatOne.on('click',function() {

        if(!animationEnded) {

            introductionFloatOne.css({
                filter:'grayscale(0)'
            });

            introductionFloatThree.animate({
                height: '0'
            });
            introductionFloatTwo.animate({
                height: '0'
            },function() {
                introductionFloatOne.animate({
                    height: '80vh'
                }, function() {
                    animationEnded = true;
                });
            });

        } else {

            introductionFloatOne.css({
                filter:'grayscale(100%)'
            });

            introductionFloatOne.animate({
                height: '27vh'
            }, function() {
                introductionFloatTwo.animate({
                    height: '27vh'
                });
                introductionFloatThree.animate({
                    height: '27vh'
                },function() {
                    animationEnded = false;
                });
            })
        }
    });

    // Middle Float
    introductionFloatTwo.on('click', function () {

        if (!animationEnded) {

            introductionFloatTwo.css({
                filter:'grayscale(0)'
            });

            introductionFloatOne.animate({
                height: '0'
            });
            introductionFloatThree.animate({
                height: '0'
            },function() {
                introductionFloatTwo.animate({
                    height:'80vh'
                },function() {
                    animationEnded = true;
                })
            });

        } else {
            introductionFloatTwo.css({
                filter: 'grayscale(100%)'
            })
            introductionFloatTwo.animate({
                height: '27vh'
            },function() {
                introductionFloatOne.animate({
                    height:'27vh'
                });
                introductionFloatThree.animate({
                    height:'27vh'
                },function() {
                    animationEnded = false;
                });
            })
        }
    });

    //Last Float
    introductionFloatThree.on('click', function() {

        introductionFloatThree.css({
            filter:'grayscale(0)'
        });

        if (!animationEnded) {
            introductionFloatTwo.animate({
                height:'0'
            });
            introductionFloatOne.animate({
                height:'0'
            }, function () {
                introductionFloatThree.animate({
                    height: '80vh'
                },500, function() {
                    animationEnded= true;
                })
            });

        } else {

            introductionFloatThree.css({
                filter:'grayscale(100%)'
            });

            introductionFloatThree.animate({
                height: '27vh'
            }, function() {
                introductionFloatOne.animate({
                    height: '27vh'
                });
                introductionFloatTwo.animate({
                    height: '27vh'
                },function() {
                    animationEnded = false;
                });

            })
        }
    });
    //Contact Section


    if (tabletMatchMedia.matches) {

    }
    // initial float text state

    var floatTextState = {
        'opacity':'0.25',
        'transform': 'translateY(100px)',
    }
    var floatDivState = {
        'opacity':'0.25',
        'transform': 'translateX(100px)',
    }

    introductionHeader.css(floatTextState);
    introductionText.css(floatTextState);
    // introductionFloatOne.css(floatDivState);
    // introductionFloatTwo.css(floatDivState);
    // introductionFloatThree.css(floatDivState);

    $(window).on('scroll', function () {


        var windowPos = $(this).scrollTop();
        // console.log(windowPos);

        // scrollOpacity(bioSection, headerHeight, 1.3);

        if(tabletMatchMedia.matches)
        {
            moveBackground(header,-3,0,headerHeight);
            moveBackground(mediaPlayerSection,-4,headerHeight*3,headerHeight*5);

            scrollFloatText(introductionHeader,5,'Y',200);
            scrollFloatText(introductionText, 5,'Y',200);

            // scrollFloat(introductionFloatOne,3,'X',0,headerHeight);
            // scrollFloat(introductionFloatTwo,2,'X',200,headerHeight);
            // scrollFloat(introductionFloatThree,1,'X',400,headerHeight);
            //
            // scrollFloat(floatOne,-4,'Y',headerHeight*2,headerHeight*3);
            // scrollFloat(floatTwo,-2,'Y',headerHeight*2,headerHeight*3);
            // scrollFloat(floatThree,-1.5,'Y',headerHeight*2,headerHeight*3);
            // scrollFloat(contentHeader,-1.5,'Y',headerHeight*2,headerHeight*3);
            // scrollFloat(contentEvents,-2,'Y',headerHeight*2,headerHeight*3);

        }

        if(windowPos > 100) {
            backArrow.fadeIn(200);
        } else {
            backArrow.fadeOut(200);
        }

        // Curtain effect

        // if(windowPos>= header.outerHeight()) {
        //     header.css('margin-bottom','0');
        //     curtain.css('position','static');
        // } else if(windowPos <= header.outerHeight()) {
        //     curtain.css('position', 'fixed');
        //     header.css('margin-bottom','100vh');
        // }

        // scroll direction

    //     if (windowPos > lastScroll) {
    //         // squareSection.css('height','100vh');
    //     } else {
    //         // squareSection.css('height','calc(100vw * 1.70 - 9%)');
    // }
    //     lastScroll = windowPos;



    });
    function scrollFloatText (elem, factor, direction, from) {

        var scrollTop = $(this).scrollTop();
        var calc;
        var calcOpacity;
        var startOpacity = 0.25;
        var startFloat = 100;

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
        var scrollTop = $(this).scrollTop();
        var calc;

        if (scrollTop >= to) {
            calc = (to-from)/factor;
            return;
        } else if (scrollTop >= from) {
            calc = ((scrollTop - from)/factor);
        }
        elem.css({'background-position': '0px '+ calc +'px'});
    }

    function scrollOpacity (elem, range, factor) {

        var scrollTop = $(this).scrollTop();
        var height = elem.outerHeight();
        var offset = height / factor;
        var calc = 1 - (scrollTop - offset + range) / range;

        elem.css({'opacity': calc});

        if (calc > '1') {
            elem.css({ 'opacity': 1 });
        } else if ( calc < '0' ) {
            elem.css({ 'opacity': 0 });
        }
    }

    function scrollFloat (elem, factor, direction, from, to) {

        var scrollTop = $(this).scrollTop();
        var calc;

        if (scrollTop >= to) {
            calc = (to-from)/factor;
            return;
        } else if (scrollTop >= from) {
            calc = ((scrollTop - from)/factor);
        }
        elem.css({'transform': 'translate' + direction + '(' + calc +'px)'});
    }


    //Swiper - bio

    var swiper = new Swiper ('.bio-swiper', {
        loop:true,
        pagination:'.swiper-pagination',
        paginationClickable: 'true',
        direction: 'horizontal',
        autoplay: '2500',
        effect: 'fade'
    });

// Swiper - gallery


    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        autoplay: '2500',
        loop:true,
        loopedSlides:10

    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop:true,
        loopedSlides:10
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;


//Audio player

    var player = document.getElementById('player'); // id for audio element
    var duration = player.duration; // Duration of audio clip, calculated here for embedding purposes
    var pButton = document.getElementById('play-button'); // play button
    var playhead = document.querySelector('.playhead'); // playhead
    var timeline = document.querySelector('.timeline'); // timeline

// timeline width adjusted for playhead

    var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// play button event listenter

    pButton.addEventListener("click", play);

// timeupdate event listener

    player.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable

    timeline.addEventListener("click", function(event) {
        moveplayhead(event);
        player.currentTime = duration * clickPercent(event);
    }, false);

// returns click as decimal (.77) of the total timelineWidth

    function clickPercent(event) {
        return (event.clientX - getPosition(timeline)) / timelineWidth;
    }

// makes playhead draggable

    playhead.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released

    var onplayhead = false;

// mouseDown EventListener

    function mouseDown() {
        onplayhead = true;
        window.addEventListener('mousemove', moveplayhead, true);
        player.removeEventListener('timeupdate', timeUpdate, false);
    }

// mouseUp EventListener
// getting input from all mouse clicks
    function mouseUp(event) {
        if (onplayhead === true) {
            moveplayhead(event);
            window.removeEventListener('mousemove', moveplayhead, true);
            // change current time
            player.currentTime = duration * clickPercent(event);
            player.addEventListener('timeupdate', timeUpdate, false);
        }
        onplayhead = false;
    }
// mousemove EventListener
// Moves playhead as user drags

    function moveplayhead(event) {
        var newMargLeft = event.clientX - getPosition(timeline);

        if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
            playhead.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            playhead.style.marginLeft = "0px";
        }
        if (newMargLeft > timelineWidth) {
            playhead.style.marginLeft = timelineWidth + "px";
        }
    }

// timeUpdate
// Synchronizes playhead position with current point in audio

    function timeUpdate() {
        var playPercent = timelineWidth * (player.currentTime / duration);
        playhead.style.marginLeft = playPercent + "px";
        if (player.currentTime === duration) {
            pButton.className = "";
            pButton.className = "play";
        }
    }

//Play and Pause

    function play() {
        // start music
        if (player.paused) {
            player.play();
            // remove play, add pause
            pButton.className = "";
            pButton.className = "pause";
        } else { // pause music
            player.pause();
            // remove pause, add play
            pButton.className = "";
            pButton.className = "play";
        }
    }

// Gets audio file duration

    player.addEventListener("canplaythrough", function() {
        duration = player.duration;
    }, false);

// getPosition
// Returns elements left position relative to top-left of viewport

    function getPosition(el) {
        return el.getBoundingClientRect().left;
    }

//Next Button

    var nextBtn = $('.next');
    var prevBtn = $('.prev');
    var playlist = $('.playlist');
    var listItems = playlist.find('li');
    var playingTitle = $('.now-playing__title').find('p');

    nextBtn.on('click', playNext);
    prevBtn.on('click',playPrev);

    function playNext() {
        for (var i = 0; i < listItems.length; i++) {
            if ($(listItems[i]).hasClass('active') && typeof listItems[i+1] !== "undefined") {
                clearActive(listItems);
                loadAndPlay($(listItems[i+1]).attr('id'));
                return;
            }
        }
    }
    function playPrev() {
        for (var i = 0; i < listItems.length; i++) {
            if ($(listItems[i]).hasClass('active') && typeof listItems[i-1] !== "undefined") {
                clearActive(listItems);
                loadAndPlay($(listItems[i-1]).attr('id'));
                return;
            }
        }
    }
//Playlist

    playlist.on('click',function(e) {

        clearActive(listItems);
        console.log(e.currentTarget);
        console.log(e.target);

       if (e.target.parentElement.id === "track1" || e.target.id ==='track1') {
           loadAndPlay('track1');
       } else if (e.target.parentElement.id ==="track2" || e.target.id ==='track2'){
           loadAndPlay('track2');
       }
    });

// Clear active track

    function clearActive(elements) {
        $(elements).removeClass('active');
    }

// Play ID track
    function loadAndPlay(track) {

        var $source = $('#source');
        var $track = $('#'+ track);
        var $trackName = $track.find('.title');

        $source.attr('src','music/' + $track.data('filename'));
        $track.addClass('active');

        playingTitle.slideUp(function() {
            playingTitle.text($trackName.text()).slideDown();
        });

        pButton.className = "";
        pButton.className = "pause";
        player.load();
        player.play();
    }

/// Smooth scroll

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                &&
                location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1500)
                }
            }
        });

});