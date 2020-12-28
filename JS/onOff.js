document.querySelector("#powerBtn").addEventListener("click", () => {
  $(".off").toggleClass("dark");
  $(".off").append(
    $("<h1 class='closeWebsite'></h1>").text("Enjoy your day 🤟")
  );

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
