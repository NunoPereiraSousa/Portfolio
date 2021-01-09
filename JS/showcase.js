window.addEventListener("load", () => {
  gsap.to([".asd"], {
    opacity: 1,
    x: "0%",
    duration: 1
  });
});

gsap.to(".right1 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer1",
    // toggleActions: "resume pause resume resume",
    start: "100% 80%"
    // markers: true
  },
  y: "20%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".left1 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer2",
    // toggleActions: "resume pause resume resume",
    start: "120% 80%"
  },
  y: "20%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".right2 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer3",
    // toggleActions: "resume pause resume resume",
    start: "100% 80%"
  },
  y: "20%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".left2 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer4",
    // toggleActions: "resume pause resume resume",
    start: "120% 80%"
  },
  y: "20%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".right3 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer5",
    // toggleActions: "resume pause resume resume",
    start: "100% 80%"
  },
  y: "20%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".left3 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer6",
    // toggleActions: "resume pause resume resume",
    start: "120% 80%"
  },
  y: "20%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".lineContact div", {
  scrollTrigger: {
    trigger: ".contactSection",
    start: "30% bottom",
    markers: true
  },
  y: "0%",
  stagger: 0.2,
  duration: 0.4
});
