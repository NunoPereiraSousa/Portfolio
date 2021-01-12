window.addEventListener("load", () => {
  gsap.to(["#mobile .line div"], {
    opacity: 1,
    y: "0%",
    duration: 0.95,
    stagger: 0.25
  });
});
