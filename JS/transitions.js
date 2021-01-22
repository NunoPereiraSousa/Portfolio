// import {
//   hoverCategories,
//   hoverFrameworks,
//   hoverLanguages,
//   landingAnimations,
//   landingLoad
// } from "./landingAnimations.js";
// import { mouseCursor } from "./mousecursor.js";

// let tl = gsap.timeline();

// function pageTransition() {
//   tl.to(["#text_name"], {
//     opacity: 1,
//     y: "100%",
//     duration: 1.25
//   }).to(
//     ["#text_name2"],
//     {
//       opacity: 1,
//       y: "100%",
//       duration: 1.25,
//       onComplete() {
//         setTimeout(() => {
//           //   document.querySelector("#fall").style.animation =
//           //     "fragile 3s linear infinite";
//         }, 750);
//       }
//     },
//     "-=1"
//   );
//   // .to(
//   //   [".line div"],
//   //   {
//   //     opacity: 1,
//   //     y: "100%",
//   //     duration: 0.95,
//   //     stagger: 0.25
//   //   },
//   //   "-=3"
//   // )
//   // .to(
//   //   [".svgsBtns"],
//   //   {
//   //     opacity: 0
//   //   },
//   //   "-=0.5"
//   // )
//   // .to(
//   //   [".path"],
//   //   {
//   //     strokeDashoffset: 0,
//   //     duration: 2,
//   //     opacity: 0
//   //   },
//   //   "-=3"
//   // )
//   // .to(
//   //   [".text_category div"],
//   //   {
//   //     y: "100%",
//   //     duration: 0.9,
//   //     stagger: 0.2
//   //   },
//   //   "-=0.75"
//   // )
//   // .to(
//   //   [".day"],
//   //   {
//   //     y: "100%",
//   //     duration: 1
//   //   },
//   //   "-=0.75"
//   // )
//   // .to(
//   //   [".info_date"],
//   //   {
//   //     opacity: 1,
//   //     x: "100%",
//   //     duration: 1
//   //   },
//   //   "-=0.75"
//   // )
//   // .to(
//   //   [".contactText"],
//   //   {
//   //     opacity: 1,
//   //     y: "100%",
//   //     duration: 1
//   //   },
//   //   "-=0.75"
//   // )
//   // .to(
//   //   [".descLine div"],
//   //   {
//   //     opacity: 1,
//   //     y: "100%",
//   //     duration: 0.9,
//   //     stagger: 0.2
//   //   },
//   //   "-=0.75"
//   // )
//   // .to(
//   //   [".info_date"],
//   //   {
//   //     y: "100%",
//   //     duration: 0.6
//   //   },
//   //   "-=0.75"
//   // );
// }

// function delay(n) {
//   n = n || 2000;
//   return new Promise(done => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }

// function contentAnimation() {
//   mouseCursor();
//   landingLoad();
//   hoverCategories();
//   hoverLanguages();
//   hoverFrameworks();
//   landingAnimations();
// }

// barba.init({
//   sync: true,
//   debug: true,

//   transitions: [
//     {
//       async leave(data) {
//         const done = this.async();

//         pageTransition();
//         await delay(2000);
//         done();
//       },

//       async after(data) {
//         contentAnimation();
//       },

//       async once(data) {
//         contentAnimation();
//       }
//     }
//   ]
// });
