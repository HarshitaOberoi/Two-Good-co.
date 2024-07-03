gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


let time=gsap.timeline()

gsap.to(".i", {
    transform: "translateY(-260%)",
    
    scrollTrigger: {
      trigger: ".nav",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
      pin:true,
    },
  });
  gsap.to(".c", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".nav",
      scroller: ".main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
      
    },
  });
    let v = document.querySelector("video")
    let play = document.querySelector(".pla")
    v.addEventListener("mouseenter", function () {
        gsap.to(play, {
            opacity: 1,
            scale: 1

        }

        )
    })
    v.addEventListener("mouseleave", function () {
        gsap.to(play, {
            opacity: 0,
            scale: 0

        }

        )
    })
    v.addEventListener("mousemove", function (dets) {
        gsap.to(play, {

            top: dets.y - 5,
            left: dets.x - 70
        }

        )
    })
    let header=document.querySelectorAll(".page1 h1")
    time.from(header,{
        y:40,

        opacity:0,
        duration:0.8,
        delay:1,
        stagger:0.6
        
    })
    time.to(v,{
        scale:1,
        duration:1,
        delay:0.2
    })
    let container=document.querySelector(".container")
    let e=document.querySelector(".e")

time.from(container,{
    scale:1
    
})
time.from(e,{
    y:20,
    
    opacity:0,
    duration:0.6,
    delay:0.2,
    stagger:0.2,
    scrub:1
})

document.addEventListener("mousemove",function(dets){
        gsap.to(".cursor",{
            top:dets.y,
            left:dets.x
        })

    })
    let prod=document.querySelector(".prod")
    prod.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            scale:1
        })
    })
    
    prod.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            scale:0
        })
    })



