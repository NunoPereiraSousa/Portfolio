// // function pageTransition() {
// //   let tl = gsap.timeline();

// //   //   tl.to(".landingPage", {
// //   //     opacity: 0,
// //   //     duration: 0.75
// //   //   });

// //   //   tl.to(".showcasePage", {
// //   //     opacity: 0,
// //   //     duration: 0.75
// //   //   });
// // }

// // function delay(n) {
// //   n = n || 2000;
// //   return new Promise(done => {
// //     setTimeout(() => {
// //       done();
// //     }, n);
// //   });
// // }

// // function contentAnimation() {
// //   let tl = gsap.timeline();
// // }

// function enterAnimation() {
//   let tl = gsap.timeline();
//   tl.to(["#text_name"], {
//     opacity: 1,
//     y: "15%",
//     duration: 1.25
//   })
//     .to(
//       ["#text_name2"],
//       {
//         opacity: 1,
//         y: "15%",
//         duration: 1.25,
//         onComplete() {
//           setTimeout(() => {
//             // document.querySelector("#fall").style.animation =
//             //   "fragile 3s linear infinite";
//           }, 750);
//         }
//       },
//       "-=1"
//     )
//     .to(
//       [".line div"],
//       {
//         opacity: 1,
//         y: "0%",
//         duration: 0.95,
//         stagger: 0.25
//       },
//       "-=3"
//     )
//     .to(
//       [".svgsBtns"],
//       {
//         opacity: 1
//       },
//       "-=0.5"
//     )
//     .to(
//       [".path"],
//       {
//         strokeDashoffset: 0,
//         duration: 2,
//         opacity: 1
//       },
//       "-=3"
//     )
//     .to(
//       [".text_category div"],
//       {
//         y: "15%",
//         duration: 0.9,
//         stagger: 0.2
//       },
//       "-=0.75"
//     )
//     .to(
//       [".day"],
//       {
//         y: "15%",
//         duration: 1
//       },
//       "-=0.75"
//     )
//     .to(
//       [".info_date"],
//       {
//         opacity: 1,
//         x: "0%",
//         duration: 1
//       },
//       "-=0.75"
//     )
//     .to(
//       [".contactText"],
//       {
//         opacity: 1,
//         y: "0%",
//         duration: 1
//       },
//       "-=0.75"
//     )
//     .to(
//       [".descLine div"],
//       {
//         opacity: 1,
//         y: "15%",
//         duration: 0.9,
//         stagger: 0.2
//       },
//       "-=0.75"
//     )
//     .to(
//       [".info_date"],
//       {
//         y: "0%",
//         duration: 0.6
//       },
//       "-=0.75"
//     );
// }

// function enterAnimation2() {
//   let tl = gsap.timeline();
//   tl.to(
//     [".line div"],
//     {
//       opacity: 1,
//       y: "0%",
//       duration: 0.95,
//       stagger: 0.25
//     },
//     "-=6"
//   )
//     .to(
//       [".svgsBtns"],
//       {
//         opacity: 1
//       },
//       "-=0.5"
//     )
//     .to(
//       [".path"],
//       {
//         strokeDashoffset: 0,
//         duration: 2,
//         opacity: 1
//       },
//       "-=3"
//     )
//     .to(
//       [".text_category div"],
//       {
//         y: "15%",
//         duration: 0.9,
//         stagger: 0.2
//       },
//       "-=0.75"
//     )
//     .to(
//       [".day"],
//       {
//         y: "15%",
//         duration: 1
//       },
//       "-=0.75"
//     )
//     .to(
//       [".info_date"],
//       {
//         opacity: 1,
//         x: "0%",
//         duration: 1
//       },
//       "-=0.75"
//     )
//     .to(
//       [".contactText"],
//       {
//         opacity: 1,
//         y: "0%",
//         duration: 1
//       },
//       "-=0.75"
//     )
//     .to(
//       [".descLine div"],
//       {
//         opacity: 1,
//         y: "15%",
//         duration: 0.9,
//         stagger: 0.2
//       },
//       "-=0.75"
//     )
//     .to(
//       [".info_date"],
//       {
//         y: "0%",
//         duration: 0.6
//       },
//       "-=0.75"
//     );
// }

// barba.init(
//   // sync: true,
//   // transitions: [
//   //   {
//   //     async leave(data) {
//   //       const done = this.async();
//   //       pageTransition();
//   //       await delay(1500);
//   //       done();
//   //     }
//   //       async enter(data) {
//   //         contentAnimation();
//   //       },
//   //       async leave(data) {
//   //         contentAnimation();
//   //       }
//   //   }
//   // ]
//   {
//     transitions: [
//       {
//         once() {
//           enterAnimation();
//         },
//         enter() {
//           enterAnimation2();
//         }
//       }
//     ]
//   }
// );
