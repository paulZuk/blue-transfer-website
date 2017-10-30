//MEDIA PLAYER

let player = document.getElementById('player'); // id for audio element
let duration = player.duration; // Duration of audio clip, calculated here for embedding purposes
let pButton = document.getElementById('play-button'); // play button
let playhead = document.querySelector('.playhead'); // playhead
let timeline = document.querySelector('.timeline'); // timeline
let timelineWidth = timeline.offsetWidth - playhead.offsetWidth; //adjust playhead to timeline
let onplayhead = false; //update only if playhead is released

// Play button

pButton.addEventListener("click", play);

// timeupdate event listener

player.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable

timeline.addEventListener("click", function(event) {
    moveplayhead(event);
    player.currentTime = duration * clickPercent(event);
}, false);

function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable

playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    player.removeEventListener('timeupdate', timeUpdate, false);
}

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
    let newMargLeft = event.clientX - getPosition(timeline);

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

// Synchro function

function timeUpdate() {
    let playPercent = timelineWidth * (player.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    if (player.currentTime === duration) {
        pButton.className = "";
        pButton.className = "play";
    }
}

//Play and Pause

function play() {
    if (player.paused) {
        player.play();
        pButton.className = "";
        pButton.className = "pause";
    } else {
        player.pause();
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

//Next and Prev button

let nextBtn = $('.next');
let prevBtn = $('.prev');
let playlist = $('.playlist');
let listItems = playlist.find('li');
let playingTitle = $('.now-playing__title').find('p');

nextBtn.on('click', playNext);
prevBtn.on('click',playPrev);

function playNext() {
    for (let i = 0; i < listItems.length; i++) {
        if ($(listItems[i]).hasClass('active') && typeof listItems[i+1] !== "undefined") {
            clearActive(listItems);
            loadAndPlay($(listItems[i+1]).attr('id'));
            return;
        }
    }
}
function playPrev() {
    for (let i = 0; i < listItems.length; i++) {
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
    loadAndPlay(e.target.parentElement.id);

});

// Clear active track

function clearActive(elements) {
    $(elements).removeClass('active');
}

// Play ID track
function loadAndPlay(track) {

    let trackSelector = "#" + track;

    let $source = $('#source');
    let $track = $(trackSelector);
    let $trackName = $track.find('.title');

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