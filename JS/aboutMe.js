let left1Text = document.querySelectorAll(".left1 h3 .title_achievement div");
let right1Text = document.querySelectorAll(".right1 h3 .title_achievement div");
let left2Text = document.querySelectorAll(".left2 h3 .title_achievement div");
let right2Text = document.querySelectorAll(".right2 h3 .title_achievement div");

window.addEventListener("load", () => {
  gsap.to([".line div"], {
    opacity: 1,
    y: "0%",
    duration: 0.95,
    stagger: 0.2
  });
});

gsap.to(left1Text, {
  scrollTrigger: {
    trigger: ".left1",
    // toggleActions: "resume pause resume resume",
    start: "60% 50%"
  },
  y: "16%",
  duration: 0.9,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(right1Text, {
  scrollTrigger: {
    trigger: ".right1",
    // toggleActions: "resume pause resume resume",
    start: "45% 80%"
  },
  y: "16%",
  duration: 0.9,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(left2Text, {
  scrollTrigger: {
    trigger: ".left2",
    // toggleActions: "resume pause resume resume",
    start: "60% 50%"
  },
  y: "16%",
  duration: 0.9,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(right2Text, {
  scrollTrigger: {
    trigger: ".right2",
    // toggleActions: "resume pause resume resume",
    start: "45% 80%"
  },
  y: "16%",
  duration: 0.9,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".lineContact div", {
  scrollTrigger: {
    trigger: ".contactSection",
    toggleActions: "restart none none none",
    start: "30% bottom",
    end: "top top",
    pin: ".accomplishmentsGrid",
    pinSpacing: false,
    markers: true
  },
  y: "0%",
  stagger: 0.2,
  duration: 0.4
});
