$(document).ready(function(){
    $('.nav-btn').click(function() {
        $(this).parent().find('.hidden-nav').toggle();
        console.log('btn');
    });

    /*title scroll effect*/
    let titleText = $('.title-container__text');
    let titleBG = $('.title-container');
    let titleMoon = $('.title-container__img--moon');
    let titleSun = $('.title-container__img--sun');
    $(window).scroll(function() {
        var scrolled = window.scrollY;
        var scrolledPrcnt = window.scrollY/titleBG.height()*100;
        var val1 = Math.round(Math.min(255, scrolled/titleBG.height()*255));
        var val2 = Math.round(Math.max(0, 150-scrolled/titleBG.height()*150));
        var val3 = 20-scrolledPrcnt*0.4;
        titleBG.css({
            'background-image': 'linear-gradient(rgb(' +val2+ ',' +val1+ ',' +val1+ '), rgb(' +val2+ ',' +val2+ ',' +val1+ '))'
        });
        titleText.css({
            'top': scrolled*0.5 + 'px'
        });
        
        titleMoon.css({
            'top': 50+scrolledPrcnt*0.5 + '%',
            // 'top': titleMoon.height()+scrolled/titleBG.height()*(titleBG.height()-titleMoon.height()) + 'px',
            'left': 100-scrolledPrcnt + '%',
            'transform': 'translateY(-50%)'+'rotate('+ val3 +'deg)'
        });
        titleSun.css({
            'top': 50+scrolledPrcnt*0.5 + '%',
            'left': 50-scrolledPrcnt + '%',
            'transform': 'translate(-50%, -50%)'+'rotate('+ '-' + scrolledPrcnt*0.3 +'deg)'
        });

        console.log(val2 + 'px');
    });
});
