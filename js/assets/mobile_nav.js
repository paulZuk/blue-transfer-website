

let hamburgerBtn = $('.mobile-navbar').find('.button');
let sideNav = $('.mobile-sidenav');
let sidenavElements = sideNav.children();
let sidenavLinks = sideNav.find('a');

//Sidenav initial state
sidenavElements.hide();

hamburgerBtn.on('click', e => {

    e.stopPropagation();

    if (!hamburgerBtn.hasClass('active')) {
        $('html,body').css({
            overflow: 'hidden'
        });
        hamburgerBtn.addClass('active');
        sideNav.addClass('active-sidenav');
        sidenavElements.show();

    } else {
        sidenavElements.hide();
        $('html,body').css({
            overflow: 'auto'
        });
        hamburgerBtn.removeClass('active');
        sideNav.removeClass('active-sidenav');
    }
});

sidenavLinks.on('click', () => {
    if (!hamburgerBtn.hasClass('active')) {
        $('html,body').css({
            overflow: 'hidden'
        });
        hamburgerBtn.addClass('active');
        sideNav.addClass('active-sidenav');
        sidenavElements.show();

    } else {
        sidenavElements.hide();
        $('html,body').css({
            overflow: 'auto'
        });
        hamburgerBtn.removeClass('active');
        sideNav.removeClass('active-sidenav');
    }
});
