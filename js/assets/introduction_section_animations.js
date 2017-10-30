//INTRODUCTION SECTION ANIMATIONS

let introductionFloatOne = $('.introduction-float-1');
let introductionFloatTwo = $('.introduction-float-2');
let introductionFloatThree = $('.introduction-float-3');
let animationEnded = false;

//First float
introductionFloatOne.on('click',() => {

    if(!animationEnded) {

        introductionFloatOne.css({
            filter:'grayscale(0)',
        });

        introductionFloatThree.animate({
            height: '0'
        });
        introductionFloatTwo.animate({
            height: '0'
        },() => {
            introductionFloatOne.animate({
                height: '80vh'
            }, () => {
                animationEnded = true;
            });
        });

    } else {

        introductionFloatOne.css({
            filter:'grayscale(100%)'
        });

        introductionFloatOne.animate({
            height: '27vh'
        }, () => {
            introductionFloatTwo.animate({
                height: '27vh'
            });
            introductionFloatThree.animate({
                height: '27vh'
            }, () => {
                animationEnded = false;
            });
        })
    }
});

//Middle float
introductionFloatTwo.on('click', () => {

    if (!animationEnded) {

        introductionFloatTwo.css({
            filter:'grayscale(0)'
        });

        introductionFloatOne.animate({
            height: '0'
        });
        introductionFloatThree.animate({
            height: '0'
        }, () => {
            introductionFloatTwo.animate({
                height:'80vh'
            }, () => {
                animationEnded = true;
            })
        });

    } else {
        introductionFloatTwo.css({
            filter: 'grayscale(100%)'
        });
        introductionFloatTwo.animate({
            height: '27vh'
        }, () => {
            introductionFloatOne.animate({
                height:'27vh'
            });
            introductionFloatThree.animate({
                height:'27vh'
            }, () => {
                animationEnded = false;
            });
        })
    }
});

//Last float
introductionFloatThree.on('click', () => {

    introductionFloatThree.css({
        filter:'grayscale(0)'
    });

    if (!animationEnded) {
        introductionFloatTwo.animate({
            height:'0'
        });
        introductionFloatOne.animate({
            height:'0'
        }, () => {
            introductionFloatThree.animate({
                height: '80vh'
            },500, () => {
                animationEnded= true;
            })
        });

    } else {

        introductionFloatThree.css({
            filter:'grayscale(100%)'
        });

        introductionFloatThree.animate({
            height: '27vh'
        }, () => {
            introductionFloatOne.animate({
                height: '27vh'
            });
            introductionFloatTwo.animate({
                height: '27vh'
            }, () => {
                animationEnded = false;
            });

        })
    }
});