let tl2 = gsap.timeline({
  defaults: {
    ease: Power1.ease
  }
});

window.addEventListener("load", () => {
  tl2
    .to(["a .line div"], {
      y: "0%",
      duration: 0.9,
      stagger: 0.1
    })
    .to(
      [".svgsBtns"],
      {
        opacity: 1
      },
      "-=0.5"
    )
    .to(
      [".projectsTitle"],
      {
        opacity: 1,
        y: "10%",
        duration: 1
      },
      "-=0.5"
    )
    .to(
      [".right1", ".left1"],
      {
        y: "0%",
        duration: 1.2,
        stagger: 0.2,
        opacity: 1
      },
      "-=0.5"
    );
});

let images = document.querySelectorAll(".gridCell");

gsap.to(".right2", {
  scrollTrigger: {
    trigger: ".right2",
    start: "-20% 80%"
  },
  y: "0%",
  duration: 0.7,
  stagger: 1
});

gsap.to(".left2", {
  scrollTrigger: {
    trigger: ".left2",
    start: "-20% 80%"
  },
  y: "0%",
  duration: 0.7,
  stagger: 1
});

gsap.to(".right3", {
  scrollTrigger: {
    trigger: ".right3",
    start: "-20% 80%"
  },
  y: "0%",
  duration: 0.7,
  stagger: 1
});

gsap.to(".left3", {
  scrollTrigger: {
    trigger: ".left3",
    start: "-20% 80%"
  },
  y: "0%",
  duration: 0.7,
  stagger: 1
});

gsap.to(".right1 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer1",
    start: "75% 80%"
  },
  y: "14%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".left1 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer2",
    start: "75% 80%"
  },
  y: "14%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".right2 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer3",
    start: "75% 80%"
  },
  y: "14%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".left2 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer4",
    start: "75% 80%"
  },
  y: "14%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".right3 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer5",
    start: "75% 80%"
  },
  y: "14%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".left3 .projectDesc .line div", {
  scrollTrigger: {
    trigger: ".imageContainer6",
    start: "75% 80%"
  },
  y: "14%",
  duration: 0.7,
  stagger: 0.2,
  ease: Power1.easeInOut
});

gsap.to(".lineContact div", {
  scrollTrigger: {
    trigger: ".contactSection",
    start: "30% bottom",
    end: "top top",
    pin: ".grid",
    pinSpacing: false
  },
  y: "0%",
  stagger: 0.2,
  duration: 0.4
});

gsap.to(".lineContact div", {
  scrollTrigger: {
    trigger: ".contactSection",
    start: "30% bottom"
  },
  y: "0%",
  stagger: 0.2,
  duration: 0.4
});
