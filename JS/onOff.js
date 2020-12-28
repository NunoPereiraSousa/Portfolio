$("#powerBtn").click(() => {
  $(".dark").toggleClass("hideDark");

  $(".heart").hasClass(".heartChange")
    ? $(".heart").toggleClass("heart")
    : $(".heart").toggleClass("heartChange");

  $(".power").hasClass(".powerChange")
    ? $(".power").toggleClass("heart")
    : $(".power").toggleClass("powerChange");
});

// document.querySelector(".closeWebsite").addEventListener("click", () => {
//   window.close();
// });

// document.querySelector("#hide_arrow").addEventListener("click", () => {
//   $(".landingPage").toggleClass("hide");
//   $(".showcasePage").toggleClass("hide");
// });
