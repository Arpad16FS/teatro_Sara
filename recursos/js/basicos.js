$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger);

    let titleTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".title",
            start: "top top",
            end: "100%",
            scrub: 1,
            markers: true,
        }        
    });

    titleTL.addLabel("titleStart")
    .to(".title__img--sun", {
        x: "-100vw",
        y: "50vh",
    }, "titleStart")
    .to(".title__img--moon", {
        x: "-100vw",
        y: "50vh",
    }, "titleStart")
    .to(".title__text", {
        y: "40vh",
    }, "titleStart")
    .to(".title", {
        backgroundImage: "linear-gradient(rgba(150,0,0,0), rgba(150,150,0,0)), linear-gradient(#4d1a6a 17%, #2f247e 40%, #1e5799 71%, #547499 100%)",
    }, "titleStart")
    ;
});
