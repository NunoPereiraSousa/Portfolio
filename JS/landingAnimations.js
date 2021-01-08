// gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: {
    ease: Power1.easeInOut
  }
});

ScrollTrigger.defaults({
  toggleActions: "restart pause resume reset",

  markers: true
});

gsap.to(".what", {
  scrollTrigger: {
    trigger: ".what",
    // toggleActions: "resume pause resume resume",
    start: "-150% 80%",
    // end: "center center",
    markers: true
    // scrub: true
  },
  y: "10%",
  duration: 1
});

window.addEventListener("load", () => {
  tl.to(["#text_name"], {
    opacity: 1,
    y: "15%",
    duration: 1.25
  })
    .to(
      ["#text_name2"],
      {
        opacity: 1,
        y: "15%",
        duration: 1.25,
        onComplete() {
          setTimeout(() => {
            document.querySelector("#fall").style.animation =
              "fragile 3s linear infinite";
          }, 750);
        }
      },
      "-=0.75"
    )
    .to(
      [".path"],
      {
        strokeDashoffset: 0,
        duration: 2,
        opacity: 1
      },
      "-=3"
    )
    .to(
      [".text_category"],
      {
        y: "15%",
        duration: 0.6
      },
      "-=0.75"
    )
    .to(
      [".day"],
      {
        y: "15%",
        duration: 1
      },
      "-=0.75"
    )
    .to(
      [".info_date"],
      {
        opacity: 1,
        x: "0%",
        duration: 1
      },
      "-=0.75"
    )
    .to(
      [".descLine"],
      {
        opacity: 1,
        y: "0%",
        duration: 1
      },
      "-=0.75"
    )
    .to(
      [".info_date"],
      {
        y: "0%",
        duration: 0.6
      },
      "-=0.75"
    );
});
//   [".path"],
//   {
//     scrollTrigger: ".path",
//     strokeDashoffset: 0,
//     duration: 2,
//     opacity: 1
//   },
//   "-=2.5"
// )
//   .to(
//     [".text_category"],
//     {
//       y: "15%",
//       duration: 0.6
//     },
//     "-=1"
//   )
//   .to(
//     [".day"],
//     {
//       y: "0%",
//       duration: 1
//     },
//     "-=1"
//   )
//   .to(
//     [".info_date"],
//     {
//       opacity: 1,
//       x: "0%",
//       duration: 1
//     },
//     "-=1"
//   )
//   .to(
//     [".descLine"],
//     {
//       opacity: 1,
//       y: "0%",
//       duration: 1
//     },
//     "-=0.5"
//   );
