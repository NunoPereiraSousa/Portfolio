let cursor = document.querySelector(".cursor");
let quote = document.querySelector(".quote h1");

window.addEventListener("mousemove", mouseCursor);
cursor.style.opacity = 0;

function mouseCursor(e) {
  cursor.style.top = e.pageY - cursor.offsetWidth / 2 + "px";
  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
}

quote.addEventListener("mouseleave", () => {
  cursor.classList.remove("quoteCursor");
  cursor.style.opacity = 0;
});
quote.addEventListener("mouseover", () => {
  cursor.classList.add("quoteCursor");
  cursor.style.opacity = 1;
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
