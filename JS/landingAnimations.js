// gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: {
    ease: Power1.easeInOut
  }
});

ScrollTrigger.defaults({
  toggleActions: "resume pause resume none"

  // markers: true
});

gsap.to(".what", {
  scrollTrigger: {
    trigger: ".what",
    // toggleActions: "resume pause resume resume",
    start: "-200% 80%",
    // end: "center center",
    markers: true
    // scrub: true
  },
  delay: 0.5,
  y: "10%",
  duration: 1
});

gsap.to(".paused1", {
  scrollTrigger: {
    trigger: ".paused1",
    start: "-50% 80%",
    onEnter: () => {
      setTimeout(() => {
        document.querySelector(".paused1").style.animationPlayState = "running";
      }, 1000);
    }
  },
  duration: 1
});

gsap.to(".slide h3", {
  scrollTrigger: {
    trigger: ".slide h3",
    start: "-175% 80%"
  },
  y: "10%",
  duration: 1
});

gsap.to(".exp", {
  scrollTrigger: {
    trigger: ".exp",
    start: "-100% 80%",
    markers: true
  },
  y: "10%",
  duration: 1
});

gsap.to(".carouselLine", {
  scrollTrigger: {
    trigger: ".exp",
    start: "-0% 80%",
    markers: true
  },
  width: "100%",
  duration: 1.6
});

gsap.to([".up", ".up2"], {
  scrollTrigger: {
    trigger: ".up",
    start: "-150% 80%"
  },
  y: "-10%",
  duration: 1
});

gsap.to(".paused2", {
  scrollTrigger: {
    trigger: ".paused2",
    onEnter: () => {
      setTimeout(() => {
        document.querySelector(".paused2").style.animationPlayState = "running";
        document.querySelector(".paused3").style.animationPlayState = "running";
      }, 1000);
    }
  },
  duration: 1
});

document.querySelectorAll(".longTextDiv").forEach((element, i) => {
  i++;
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "-125% 80%"
    },
    y: "0%",
    duration: 1
  });
});

window.addEventListener("load", () => {
  document.querySelector(".slide-track").style.animationPlayState = "paused";
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
      [".contactText"],
      {
        opacity: 1,
        y: "0%",
        duration: 1
      },
      "-=1.75"
    )
    .to(
      [".descLine"],
      {
        opacity: 1,
        y: "15%",
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

// let emoji = $(".emoji");
// let emojiBox = [
//   emoji.offset().left + emoji.width() / 2,
//   emoji.offset().top + emoji.height() / 2
// ];

// $(document).mousemove(function (e) {
//   let angle =
//     Math.atan2(e.pageX - emojiBox[0], -(e.pageY - emojiBox[1])) *
//     (180 / Math.PI);

//   emoji.css({ "-webkit-transform": "rotate(" + angle + "deg)" });
//   emoji.css({ "-moz-transform": "rotate(" + angle + "deg)" });
//   emoji.css({ transform: "rotate(" + angle + "deg)" });
// });

document.querySelector(".outside").addEventListener("mouseenter", e => {
  document.querySelector(".emoji").innerHTML = "📤";
});

document.querySelector(".outside").addEventListener("mouseleave", e => {
  document.querySelector(".emoji").innerHTML = "📥";
});
