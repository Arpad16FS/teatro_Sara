$(document).ready(function(){
    $('.nav-btn').click(function() {
        $(this).parent().find('.hidden-nav').toggle();
        console.log('btn');
    });

    /*title scroll effect*/
    let titleText = $('.title-container__text');
    let titleBG = $('.title-container');
    $(window).scroll(function() {
        var scrolled = window.scrollY;
        var val2 = 150-scrolled;
        titleBG.css({
            'background-image': 'linear-gradient(rgb(' +val2+ ',' +scrolled+ ',' +scrolled+ '), rgb(' +val2+ ',' +val2+ ',' +scrolled+ '))'
        });
        console.log(val2 + 'px');
    });
});
