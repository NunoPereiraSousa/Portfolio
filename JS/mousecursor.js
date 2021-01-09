let cursor = document.querySelector(".cursor");
let logo = document.getElementById("logo");
let introText = document.querySelector(".introText");
let powerBtn = document.getElementById("powerBtn");
let contactBtn = document.querySelector(".contact");
let bigText = document.querySelectorAll(".longText");
let rotatingContact = document.querySelector(".svgEmoji");

window.addEventListener("mousemove", mouseCursor);
cursor.style.opacity = 0;

function mouseCursor(e) {
  cursor.style.top = e.pageY - cursor.offsetWidth / 2 + "px";
  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
}

logo.addEventListener("mouseleave", () => {
  cursor.classList.remove("logo");
});
logo.addEventListener("mouseover", () => {
  cursor.classList.add("logo");
});

// introText.addEventListener("mouseleave", () => {
//   cursor.classList.remove("introTextCursor");
//   cursor.style.opacity = 0;
// });
// introText.addEventListener("mouseover", () => {
//   cursor.classList.add("introTextCursor");
//   cursor.style.opacity = 1;
// });

// powerBtn.addEventListener("mouseleave", () => {
//   cursor.classList.remove("powerBtnCursor");
// });
// powerBtn.addEventListener("mouseover", () => {
//   cursor.classList.add("powerBtnCursor");
// });

// contactBtn.addEventListener("mouseleave", () => {
//   cursor.classList.remove("contactBtnCursor");
// });
// contactBtn.addEventListener("mouseover", () => {
//   cursor.classList.add("contactBtnCursor");
// });

// bigText.forEach(element => {
//   element.addEventListener("mouseleave", () => {
//     cursor.classList.remove("bigTextCursor");
//     cursor.style.opacity = 0;
//   });
//   element.addEventListener("mouseover", () => {
//     cursor.classList.add("bigTextCursor");
//     cursor.style.opacity = 1;
//   });
// });

// rotatingContact.addEventListener("mouseleave", () => {
//   cursor.classList.remove("rotatingContactCursor");
//   cursor.style.opacity = 0;
// });
// rotatingContact.addEventListener("mouseover", () => {
//   cursor.classList.add("rotatingContactCursor");
//   cursor.style.opacity = 1;
// });
