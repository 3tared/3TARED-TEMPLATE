// Timer Elements
let days = document.querySelector("#days"); // Days
let hours = document.querySelector("#hours"); // Hours
let minutes = document.querySelector("#minutes"); // Minutes
let seconds = document.querySelector("#seconds"); // Seconds
// Event Date
let EventD = new Date("July 13, 2023 23:59:59").getTime();
const Counter = setInterval(() => {
  // Date Now
  let DateNow = new Date().getTime();
  // Diff Date
  let TimeDiff = EventD - DateNow;
  // Days
  let Days = Math.floor(TimeDiff / (1000 * 60 * 60 * 24));
  days.innerHTML = Days < 10 ? `0${Days}` : Days;
  // Hours
  let Hours = Math.floor((TimeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours.innerHTML = Hours < 10 ? `0${Hours}` : Hours;
  // Minutes
  let Minutes = Math.floor((TimeDiff % (1000 * 60 * 60)) / (1000 * 60));
  minutes.innerHTML = Minutes < 10 ? `0${Minutes}` : Minutes;
  // Seconds
  let Seconds = Math.floor((TimeDiff % (1000 * 60)) / 1000);
  seconds.innerHTML = Seconds < 10 ? `0${Seconds}` : Seconds;
  //  End Of The Timer
  if (TimeDiff < 0) {
    clearInterval(Counter);
  }
}, 1000);
// Scroll Icon
let icon = document.getElementById("icon-up");
window.onscroll = function () {
  if (window.scrollY >= 961) {
    icon.style.opacity = "1";
  } else {
    icon.style.opacity = "0";
  }
};
icon.onclick = function () {
  window.scrollTo({
    top: "0",
    left: "0",
    behavior: "smooth",
  });
};
