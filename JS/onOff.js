window.addEventListener("load", soundControl);

const powerButton = document.querySelector(".power");
const soundBtn = document.querySelector("#soundBtn");
const soundPath = document.querySelector(".soundPath");
const soundPathList = document.querySelectorAll(".soundPath");
const soundStatus = document.querySelector(".soundStatus");

powerButton.addEventListener("click", () => {
  document.querySelector(".dark").classList.toggle("hideDark");

  if (!powerButton.classList.contains("powerChange")) {
    powerButton.classList.add("powerChange");
  } else {
    powerButton.classList.remove("powerChange");
  }
});

document.querySelector(".closeWebsite").addEventListener("click", () => {
  window.close();
});

let tl = gsap.timeline({
  defaults: {
    ease: Power1.easeInOut
  }
});

let audio = document.getElementById("myaudio");

soundBtn.addEventListener("click", () => {
  // soundPathList;

  for (let i = 0; i < soundPathList.length; i++) {
    soundPathList[i].classList.toggle("stop");

    if (soundPathList[i].classList.contains("stop")) {
      soundPathList[i].style.animationPlayState = "paused";
    } else {
      soundPathList[i].style.animationPlayState = "running";
    }
  }

  audioStatusMessage();

  soundControl();

  tl.to(
    [".soundInfo"],
    {
      opacity: 1,
      y: "0%",
      duration: 0.5,
      onComplete() {
        gsap.to([".soundInfo"], {
          delay: 1,
          opacity: 0,
          y: "50%",
          duration: 0.5,
          onComplete() {
            soundControl();
          }
        });
      }
    },
    "+=0.4"
  );
});

function soundControl() {
  if (soundPath.classList.contains("stop")) {
    setTimeout(() => {
      audio.volume = 0;
    }, 250);
  } else {
    setTimeout(() => {
      audio.volume = 0;
    }, 250);
  }
}

function audioStatusMessage() {
  if (soundPath.classList.contains("stop")) {
    soundStatus.innerHTML = "Sound was paused";
  } else {
    soundStatus.innerHTML = "Sound is now on";
  }
}
