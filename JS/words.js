// $(".middleText").click(() => {
//   $(".middleText").toggleClass("middleText").toggleClass("heyText");
//   $(".heyText").text("HEY");
// });
// $(".heyText").click(() => {
//   $(".heyText").toggleClass("heyText").toggleClass("commonText");
//   $(".commonText").text("there");
// });
// $(".commonText").click(() => {
//   $(".commonText").text("what's");
// });

let words = [
  "HEY",
  "there",
  "What's",
  "up!",
  "I'm",
  "Nuno",
  "a",
  "student",
  "web developer",
  "ui ux designer",
  "and",
  "coding teacher",
  "from",
  "Portugal",
  "so",
  "you're",
  "basically",
  "on",
  "a",
  "website",
  "about",
  "ME",
  "But",
  "seriously",
  "welcome",
  "Looks",
  "like",
  "you're",
  "just",
  "clicking",
  "around",
  "Now",
  "let's",
  "talk",
  "serious",
  "ENJOY"
];
let counter = 0;

document.querySelector(".middleText").addEventListener("click", () => {
  counter++;
  if (counter !== words.length) {
    if (words[counter - 1] === "HEY") {
      document.querySelector(".middleText").classList.add("heyText");
    } else {
      document.querySelector(".middleText").classList.remove("heyText");
    }
    document.querySelector(".middleText").innerHTML = words[counter - 1];

    document.querySelector(".notification").innerHTML = words[counter - 1];
  } else {
  }
});
