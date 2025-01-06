const page = gsap.timeline();

page.from(".details h2", {
    opacity: 0,
    duration: 1,
    y: 50
});
page.from(".image img", {
    opacity: 0,
    duration: 1,
    x: 100
});
page.from(".input-box", {
    opacity: 0,
    duration: 1,
    x: -50
});
page.from(".box", {
    opacity: 0,
    duration: 1,
    y: -80,
    stagger: .3
});


const header = gsap.timeline();

header.from("header", {
    opacity: 0,
    duration: 1,
    y: -50,
    delay: 3
});
header.from("header nav a, .top h2, header .logo, .right-items", {
    opacity: 0,
    duration: 1,
    y: -50,
    stagger: .3
});
header.from(".top", {
    opacity: 0,
    duration: 1,
    y: -50
});

const menuAnimation = gsap.timeline(); 

menuAnimation.from(".profile, .connection input", {
    opacity: 0,
    duration: 1,
    delay: .3,
    y: -80
});
menuAnimation.from(".mylinks", {
    opacity: 0,
    duration: .5,
    x: -50,
    stagger: .3
});

menuAnimation.pause();

const menuEl = document.querySelector('.btn');
const closeEl = document.querySelector('.icon-close');

menuEl.addEventListener('click', () => {
    menuAnimation.play();
});
closeEl.addEventListener('click', () => {
    menuAnimation.reverse();
});