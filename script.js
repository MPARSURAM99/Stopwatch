let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let miliSecond = document.getElementById("miliSecond");

let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let bookmarkBtn = document.getElementById("bookmark");

let noteDown = document.querySelector(".noteDown");

let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer = false;

const play = () => {
  timer = true;
  stopwatch();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  resetBtn.style.display = "block";
  bookmarkBtn.style.display = "block";
};

const pause = () => {
  timer = false;
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
};

const reset = () => {
  timer = false;
  ms = 0;
  sec = 0;
  min = 0;
  hr = 0;

  miliSecond.innerHTML = "00";
  second.innerHTML = "00";
  minute.innerHTML = "00";
  hour.innerHTML = "00";

  resetBtn.style.display = "none";
  pauseBtn.style.display = "none";
  bookmarkBtn.style.display = "none";
  playBtn.style.display = "block";

  noteDown.innerHTML = "";
};

const stopwatch = () => {
  if (timer == true) {
    ms = ms + 1;

    if (ms == 100) {
      sec = sec + 1;
      ms = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    let hrFormat = hr;
    let minFormat = min;
    let secFormat = sec;
    let msFormat = ms;

    if (hr < 10) {
      hrFormat = "0" + hr;
    }

    if (min < 10) {
      minFormat = "0" + min;
    }

    if (sec < 10) {
      secFormat = "0" + sec;
    }

    if (ms < 10) {
      msFormat = "0" + ms;
    }

    hour.innerHTML = hrFormat;
    minute.innerHTML = minFormat;
    second.innerHTML = secFormat;
    miliSecond.innerHTML = msFormat;

    setTimeout("stopwatch()", 10);
  }
};

const bookmark = () => {
  let readingMiliSecond = miliSecond.textContent;
  let readingSecond = second.textContent;
  let readingMinute = minute.textContent;
  let readingHour = hour.textContent;

  let paragraph = document.createElement("p");
  let paragraphNumber = noteDown.getElementsByTagName("p").length + 1;
  let paragraphNumberFormat = paragraphNumber;
  if (paragraphNumber < 10) {
    paragraphNumberFormat = "0" + paragraphNumber;
  }
  paragraph.textContent = `${paragraphNumberFormat}. ${readingHour}Hrs : ${readingMinute}Min : ${readingSecond}Sec : ${readingMiliSecond}Ms`;
  noteDown.appendChild(paragraph);
};
