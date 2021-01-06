let tl = gsap.timeline({
  defaults: {
    ease: Power1.easeInOut
  }
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
        duration: 1.25,
        opacity: 1
      },
      "-=1.5"
    )
    .to([".text_category"], {
      y: "15%",
      duration: 0.6
    })
    .to([".day"], {
      y: "0%",
      duration: 1
    })
    .to([".info_date"], {
      opacity: 1,
      x: "0%",
      duration: 1
    });
  // .to(
  //   [".info_date"],
  //   {
  //     y: "0%",
  //     duration: 0.6
  //   },
  //   "-=4.65"
  // );
});
