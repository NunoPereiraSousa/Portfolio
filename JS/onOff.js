document.querySelector("#powerBtn").addEventListener("click", () => {
  $(".off").toggleClass("dark");
  // let txt2 = $("<h1></h1>").text("Enjoy your day 🤟");
  // $(".off").append($("<h1></h1>").text("Enjoy your day 🤟"));

  $(".heart").hasClass(".heartChange")
    ? $(".heart").toggleClass("heart")
    : $(".heart").toggleClass("heartChange");

  $(".power").hasClass(".powerChange")
    ? $(".power").toggleClass("heart")
    : $(".power").toggleClass("powerChange");
});

document.querySelector(".closeWebsite").addEventListener("click", () => {
  window.close();
});
