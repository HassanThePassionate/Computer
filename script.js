function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotive()

let tl = gsap.timeline();
tl.from('.navbar .logo img,.navbar .logo h5, .navbar .list-iteams,.btns',{
  y:-100,
  duration: 1,
  stagger: 0.2,
  // scrub: 1
  delay: 1.8
})
tl.from('.page1 .left ',{
  x:-100,
  opacity:0,
  duration:1,
  // stagger:1
})
tl.from('.page1 .right ',{
  x:100,
  opacity:0,
  duration:1,
  // stagger:1
})
tl.to('.page2',{
  // x:100,
  duration:1,
  backgroundColor: '#284A8B',
  opacity:100,
  scrollTrigger:{
    scroller: '.main',
    trigger:'.page2',
    // markers:true,
    start: 'top 30%',
    end: 'top 30%',
    
    scrub : 3
  }
})

// let a = 0;
// function lop(){
//   setInterval(function(){
//     a = a+ Math.floor(Math.random()*10)
//     document.querySelector('.loader h1').innerHTML = a + '%'
//   },90)
// }
// lop()
gsap.from('.loader h1',{
  scale : 0.1,
  duration: 1,
  delay : 0.1
})
gsap.to('.loader',{
  transform: 'translateY(-100%)',
  duration: 1,
  delay : 1.5
})

// gsap.from('.loader h1',{
//   scale : 1
//   duration: 1,
//   delay : 0.1
// })
