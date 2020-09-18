$(document).ready(function () {
    /*title scroll effect*/
    var titleText = $('.title-container__text');
    var titleBG = $('.title-container');
    var titleMoon = $('.title-container__img--moon');
    var titleSun = $('.title-container__img--sun');
    var vpHeight = $(window).height();
    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // IE Fallback, you can even fallback to onscroll
        function (callback) { window.setTimeout(callback, 1000 / 60) };

    var lastPosition = -1;
    function loop() {
        // Avoid calculations if not needed
        if (lastPosition == window.pageYOffset) {
            scroll(loop);
            return false;
        } else lastPosition = window.pageYOffset;
        // do the onscroll stuff you want here
        var scrolled = window.pageYOffset;
        let scrolledPrcnt = Math.round(window.pageYOffset / vpHeight * 50);
        // let txtYOffset = -50+(scrolledPrcnt*0.5);
        let txtYOffset2 = 50+(scrolledPrcnt*1.5);
        let sunXOffset = -50-scrolledPrcnt;
        let sunXOffset2 = 50-scrolledPrcnt;
        let imgYOffset2 = 50+(scrolledPrcnt*2);
        let moonXOffset = Math.max(0, 100-scrolledPrcnt);
        let moonRotation = Math.round(30 - Math.min(60, scrolledPrcnt*0.6));
        let sunRotation = Math.round(-Math.min(30, scrolledPrcnt*0.6));
        let val1 = scrolledPrcnt/100;
        let val2 = 1-scrolledPrcnt/100;
        titleBG.css({
            'background-image': 'linear-gradient(rgba(150,150,0,'+val2+'), rgba(150,0,0,'+val2+')), linear-gradient(rgba(0,150,150,1), rgba(0,0,150,1))'
        });
        titleText.css({
            'transform': 'translate3d(calc(-50% + 50vw),calc(-50% + '+txtYOffset2+ 'vh),0)'
        });

        titleSun.css({
            'transform': 'translate3d(calc('+sunXOffset+'% + ' +sunXOffset2+ 'vw),calc(-50% + ' +imgYOffset2+ 'vh),0)'+
            'rotate('+sunRotation+'deg)'
        });
        titleMoon.css({
            'transform': 'translate3d(calc(-'+scrolledPrcnt+'% + ' +moonXOffset+ 'vw),calc(-50% + ' +imgYOffset2+ 'vh),0)'+
            'rotate('+moonRotation+'deg)'
        });
        console.log(scrolledPrcnt + '%');
        // Recall the loop
        scroll(loop)
    }

    // Call the loop for the first time
    loop();
    /*ETSFx*/
});
