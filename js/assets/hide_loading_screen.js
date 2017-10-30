//HIDE LOADING SCREEN

$(window).on('load',() => {
    $('.loading').find('div').fadeOut(1200,function() {
        $('.loading').fadeOut(600, function() {
            $('html, body').css({
                'overflow': 'auto',
                'height': 'auto'
            });
        })
    });
});
