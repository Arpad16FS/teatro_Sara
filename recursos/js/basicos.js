$(document).ready(function(){
    $('.nav-btn').click(function() {
        /*$(this).parent().find('.fa').addClass('bars-anim').on('animationend', function() {
            $(this).toggleClass('fa-bars').toggleClass('fa-ellipsis-v').removeClass('bars-anim');
        });*/
        $(this).parent().find('.fa-bars').addClass('bars-anim').on('animationend', function() {
            $(this).removeClass('fa-bars').addClass('fa-ellipsis-v').removeClass('bars-anim');
        });
        $(this).parent().find('.fa-ellipsis-v').addClass('dots-anim').on('animationend', function() {
            $(this).addClass('fa-bars').removeClass('fa-ellipsis-v').removeClass('dots-anim');
        });
        $(this).parent().find('.hidden-nav').toggle();
        console.log('btn');
    });
});
