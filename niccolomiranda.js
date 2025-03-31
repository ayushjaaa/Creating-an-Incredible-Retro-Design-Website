const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// this locomtive use for the smoth scrol//
// and it wll only apliabe bacuse the height and the width is not given sda

var t1 = gsap.timeline()

t1.to("#page1",{
    y:"100vh",
    duration:0,
    scale:0.5,
})
// here ther are two methord to and from but you can use the to even it wok both for to and from .. if you ar using th to inted of to and from then the code wikll execute line by line and to by to mans the to writen in th first will execute in first and the second to will be in 2 time exected and 3 will the third
t1.to("#page1",{
    y:"0vh",
    duration:1,
    
})
t1.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,

})