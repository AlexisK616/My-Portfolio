var slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: null,
    delay: 100,
    duration: 1800
}
var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    delay: 100,
    duration: 1400
}
var slideRightx = {
    distance: '150%',
    origin: 'right',
    opacity: null,
    delay: 600,
    duration: 1000
}
var slideLeftx = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    delay: 600,
    duration: 1000
}
var slideLeft2 = {
    distance: '500%',
    origin: 'left',
    opacity: null,
    delay: 1000,
    duration: 1000
}

var slide ={
    delay:200,
    duration:800
}

ScrollReveal().reveal('.banner2', slideRight);
ScrollReveal().reveal('.banner1', slideLeft);
ScrollReveal().reveal('.btnreveal', slideLeft2);
ScrollReveal().reveal('.aboutreveal1', slideLeftx);
ScrollReveal().reveal('.aboutreveal2', slideRightx);
ScrollReveal().reveal('.aboutreveal3', slide);