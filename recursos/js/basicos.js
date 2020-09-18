$(document).ready(function () {
    $('title__container__img').css({

    });
    $('.title__container__img').on('animationend', function (e) {
        $(this).css({
            'transform': 'rotate(50deg)',
            width: "20vw"
        });
        console.log($(this));
    });

    // $('.title__container__img').on('animationend', animEnd, false);

    // function animEnd(e) {
    //     console.log('animended');
    // }
});
