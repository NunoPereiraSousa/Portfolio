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

hoverCategories();
hoverLanguages();
hoverFrameworks();

let tl = gsap.timeline({
  defaults: {
    ease: Power1.easeInOut
  }
});

ScrollTrigger.defaults({
  toggleActions: "resume pause resume none"
  // markers: true
});

document.querySelectorAll(".what").forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      // toggleActions: "resume pause resume resume",
      start: "-150% 80%"
    },
    y: "10%",
    duration: 1
  });
});

document.querySelectorAll(".exp").forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      // toggleActions: "resume pause resume resume",
      start: "-180% 80%",
      // end: "center center",
      markers: true
      // scrub: true
    },
    y: "10%",
    duration: 1
  });
});

gsap.to(".paused1", {
  scrollTrigger: {
    trigger: ".paused1",
    start: "-50% 80%",
    onEnter: () => {
      setTimeout(() => {
        document.querySelector(".paused1").style.animationPlayState = "running";
      }, 1500);
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

// gsap.to(".exp", {
//   scrollTrigger: {
//     trigger: ".exp",
//     start: "-130% 80%",
//     markers: true
//   },
//   y: "10%",
//   duration: 1
// });

gsap.to(".carouselLine", {
  scrollTrigger: {
    trigger: ".exp",
    start: "-0% 80%"
    // markers: true
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

gsap.to(".contactSection", {
  scrollTrigger: {
    trigger: ".contactSection",
    toggleActions: "restart none none none",
    start: "top 100%",
    end: "top 30%",
    pin: ".talkToMe",
    pinSpacing: false
    // markers: true
  },
  y: "10%",
  duration: 1
});

document.querySelector(".outside").addEventListener("mouseenter", e => {
  document.querySelector(".emoji").innerHTML = "📤";
});

document.querySelector(".outside").addEventListener("mouseleave", e => {
  document.querySelector(".emoji").innerHTML = "📥";
});

function thingsWord() {
  gsap.to("#rotate", {
    webkitTextFillColor: "#fcfcfc",
    textShadow: "-1px 4px 50px transparent",
    webkitTextStroke: "0.5px transparent"
  });
}

function hoverCategories() {
  document.querySelectorAll(".group_skills_fe").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".iDo", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4a8aaf"
      });
      thingsWord();
    });
  });
  document.querySelectorAll(".group_skills_be").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".iDo", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #c47555"
      });
      thingsWord();
    });
  });
  document.querySelectorAll(".group_skills_uiux").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".iDo", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #b44e81"
      });
      thingsWord();
    });
  });
  document.querySelectorAll(".group_skills_tt").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".iDo", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #aca359"
      });
      thingsWord();
    });
  });
  document.querySelectorAll(".group_skills_mdev").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".iDo", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4e9c6b"
      });
      thingsWord();
    });
  });
  document.querySelectorAll(".group_skills_st").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".iDo", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #c54f4e"
      });
      thingsWord();
    });
  });
  document.querySelectorAll(".slide").forEach(element => {
    element.addEventListener("mouseleave", e => {
      gsap.to(".iDo", {
        webkitTextFillColor: "#fcfcfc",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #fcfcfc"
      });
      gsap.to("#rotate", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #fcfcfc"
      });
    });
  });
}

function tInWords() {
  gsap.to(".stroke", {
    webkitTextFillColor: "#fcfcfc",
    textShadow: "-1px 4px 50px transparent",
    webkitTextStroke: "0.2.5px transparent"
  });
}

function hoverLanguages() {
  document.querySelectorAll(".js").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4a8aaf"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #4a8aaf"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".html").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4a8aaf"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #4a8aaf"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".css").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4a8aaf"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #4a8aaf"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".python").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #c47555"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #c47555"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".nodejs").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #c47555"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #c47555"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".vuejs").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4a8aaf"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #4a8aaf"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".java").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4e9c6b"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #4e9c6b"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".adobexd").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #b44e81"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #b44e81"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".slide2").forEach(element => {
    element.addEventListener("mouseleave", e => {
      gsap.to(".stroke", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #fcfcfc"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "#fcfcfc",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #fcfcfc"
      });
      gsap.to(".strokeText", {
        webkitTextFillColor: "#fcfcfc",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #fcfcfc"
      });
    });
  });
}

function hoverFrameworks() {
  document.querySelectorAll(".treejs").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4a8aaf"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #4a8aaf"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".scss").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4a8aaf"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #4a8aaf"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".mysql").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #c47555"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #c47555"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".git").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #c47555"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #c47555"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".wordpress").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #4a8aaf"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #4a8aaf"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".mongodb").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #c47555"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #c47555"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".adobecc").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #b44e81"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #b44e81"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".adobeai").forEach(element => {
    element.addEventListener("mouseenter", e => {
      gsap.to(".strokeText", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #b44e81"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "0.5px #b44e81"
      });
      tInWords();
    });
  });
  document.querySelectorAll(".slide3").forEach(element => {
    element.addEventListener("mouseleave", e => {
      gsap.to(".stroke", {
        webkitTextFillColor: "transparent",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #fcfcfc"
      });
      gsap.to("#smallT", {
        webkitTextFillColor: "#fcfcfc",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #fcfcfc"
      });
      gsap.to(".strokeText", {
        webkitTextFillColor: "#fcfcfc",
        textShadow: "-1px 4px 50px transparent",
        webkitTextStroke: "1.5px #fcfcfc"
      });
    });
  });
}
