let cursor = document.querySelector(".cursor");
let cursorText = document.querySelector(".textCursor");
let projectsTitle = document.querySelector(".projectsTitle");
let emailText = document.querySelector("#email");

window.addEventListener("mousemove", mouseCursor);
cursor.style.opacity = 0;

function mouseCursor(e) {
  cursor.style.top = e.pageY - cursor.offsetWidth / 2 + "px";
  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
}

projectsTitle.addEventListener("mouseleave", () => {
  cursor.classList.remove("projectsTitleCursor");
  cursor.style.opacity = 0;
});
projectsTitle.addEventListener("mouseover", () => {
  cursor.classList.add("projectsTitleCursor");
  cursor.style.opacity = 1;
});

talkBtn.addEventListener("click", () => {
  sendMail();
});

rotatingContact.addEventListener("click", () => {
  sendMail();
});
rotatingContact.addEventListener("mouseleave", () => {
  cursor.classList.remove("rotatingContactCursor");
  cursor.style.opacity = 0;
});
rotatingContact.addEventListener("mouseover", () => {
  cursor.classList.add("rotatingContactCursor");
  cursor.style.opacity = 1;
});

function sendMail() {
  let myEmail = "mailto:nunopereirasousa00@gmail.com";
  window.location.href = myEmail;
}
