//CONCERTS SECTION ANIMATION

let float1 = $('.float__1');
let float2 = $('.float__2');
let float3 = $('.float__3');
let concertsAnimEnd = false;

float1.on('click', () => {

    if (!concertsAnimEnd) {

        float1.css({
            filter: 'grayscale(0)'
        });

        float2.animate( {
            width: '0'
        }, ()=> {
            float3.animate({
                height:0
            });
            float1.animate({
                width: '40vw'
            }, () => {
                float1.animate({
                    height: '80vh'
                }, ()=> {
                    concertsAnimEnd=true;
                    });
            });
        });

    } else {

        float1.css({
            filter: 'grayscale(100%)'
        });

        float1.animate({
            height: '41vh'
        }, () => {
            float3.animate({
                height: '41vh'
            }, () => {
                float1.animate({
                    width: '20vw'
                }, () => {
                    float2.animate({
                        width: '20vw'
                    }, () => {
                        concertsAnimEnd = false;
                    })
                })
            })
        })
    }
});

float2.on('click', () => {

    if(!concertsAnimEnd) {

        float2.css({
            filter: 'grayscale(0)'
        });

        float3.animate({
            height: '0'
        }, ()=> {
            float1.animate({
                width: '0'
            }, () => {
                float2.animate({
                    width: '40vw',
                    height: '80vh',
                }, () => {
                    concertsAnimEnd = true;
                })
            });
        });

    } else {

        float2.css({
            filter: 'grayscale(100%)'
        });

        float2.animate({
            height: '41vh',
        }, () => {
            float3.animate({
                height: '41vh'
            }, () => {
                float2.animate({
                    width: '20vw',
                }, () => {
                    float1.animate({
                        width: '20vw',
                    }, () => {
                        concertsAnimEnd = false;
                    })
                })
            });
        })

    }
        
});

float3.on('click', () => {

    if(!concertsAnimEnd) {

        float3.css({
            filter: 'grayscale(0)'
        });

        float1.animate({
            height: '0',
        });

        float2.animate({
            height: '0',
        }, () => {
            float3.animate({
                height: '80vh',
            }, () => {
                concertsAnimEnd = true;
            });
        });
    } else {

        float3.css({
            filter: 'grayscale(100%)'
        });
        float3.animate({
            height: '41vh'
        }, () => {

            float1.animate({
                height: '41vh'
            });

            float2.animate({
                height: '41vh'
            }, () => {
                concertsAnimEnd = false;
            });
        })

    }



});