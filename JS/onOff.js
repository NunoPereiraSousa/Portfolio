document.querySelector("#powerBtn").addEventListener("click", () => {
  $(".off").toggleClass("dark");

  $(".heart").hasClass(".heartChange")
    ? $(".heart").toggleClass("heart")
    : $(".heart").toggleClass("heartChange");

  $(".power").hasClass(".powerChange")
    ? $(".power").toggleClass("heart")
    : $(".power").toggleClass("powerChange");
});
