function pageTransition() {
  let tl = gsap.timeline();

  //   tl.to(".landingPage", {
  //     opacity: 0,
  //     duration: 0.75
  //   });

  //   tl.to(".showcasePage", {
  //     opacity: 0,
  //     duration: 0.75
  //   });
}

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

// function contentAnimation() {
//   let tl = gsap.timeline();
// }

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      }

      //   async enter(data) {
      //     contentAnimation();
      //   },

      //   async leave(data) {
      //     contentAnimation();
      //   }
    }
  ]
});
