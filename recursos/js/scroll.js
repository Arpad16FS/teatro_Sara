// $(document).ready(function () {
//     /*title scroll effect*/
//     var titleText = $('.title-container__text');
//     var titleBG = $('.title-container');
//     var titleMoon = $('.title-container__img--moon');
//     var titleSun = $('.title-container__img--sun');
//     // Detect request animation frame
//     var scroll = window.requestAnimationFrame ||
//         window.webkitRequestAnimationFrame ||
//         window.mozRequestAnimationFrame ||
//         window.msRequestAnimationFrame ||
//         window.oRequestAnimationFrame ||
//         // IE Fallback, you can even fallback to onscroll
//         function (callback) { window.setTimeout(callback, 1000 / 60) };

//     var lastPosition = -1;
//     function loop() {
//         // Avoid calculations if not needed
//         if (lastPosition == window.pageYOffset) {
//             scroll(loop);
//             return false;
//         } else lastPosition = window.pageYOffset;
//         var scrolled = window.pageYOffset;
//         // do the onscroll stuff you want here
//         // let scrolled = window.scrollY;
//         let scrolledPrcnt = Math.round(window.scrollY / titleBG.height() * 100);
//         let val1 = Math.round(Math.min(255, scrolled / titleBG.height() * 255));
//         let val2 = Math.round(Math.max(0, 150 - scrolled / titleBG.height() * 150));
//         let val3 = Math.round(20 - scrolledPrcnt * 0.4);
//         titleBG.css({
//             'background-image': 'linear-gradient(rgb(' + val2 + ',' + val1 + ',' + val1 + '), rgb(' + val2 + ',' + val2 + ',' + val1 + '))'
//         });
//         titleText.css({
//             'top': Math.round(scrolled * 0.5) + 'px'
//         });

//         titleMoon.css({
//             'top': 50 + Math.round(scrolledPrcnt * 0.5) + '%',
//             'left': 100 - scrolledPrcnt + '%',
//             'transform': 'translateY(-50%)' + 'rotate(' + Math.round(20 - scrolledPrcnt * 0.4) + 'deg)'
//         });
//         titleSun.css({
//             'top': 50 + Math.round(scrolledPrcnt * 0.5) + '%',
//             'left': 50 - scrolledPrcnt + '%',
//             'transform': 'translate(-50%, -50%)' + 'rotate(' + '-' + Math.round(scrolledPrcnt * 0.3) + 'deg)'
//         });
//         console.log(scrolled + 'px');
//         // Recall the loop
//         scroll(loop)
//     }

//     // Call the loop for the first time
//     loop();
//     /*ETSFx*/
// });
