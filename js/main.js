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
// Scroll
let icon = document.getElementById("icon-up");
let ArticlesSection = document.querySelector(".articles");
// Skills
let Spans = document.querySelectorAll(".skills .info .bar span");
let SkillsSec = document.querySelector(".skills");
// Numbers
let Nums = document.querySelectorAll(".stats .number");
let SectionNums = document.querySelector(".stats");
let Started = false;
window.onscroll = function () {
  if (window.scrollY >= ArticlesSection.offsetTop) {
    icon.style.opacity = "1";
  } else {
    icon.style.opacity = "0";
  }

  // Our Skills Section
  if (window.scrollY >= SkillsSec.offsetTop - 300) {
    Spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // Increase Numbers Section
  if (window.scrollY >= SectionNums.offsetTop) {
    if (!Started) {
      Nums.forEach((nums) => CountNums(nums));
    }
    Started = true;
  }
};
function CountNums(ele) {
  const Target = ele.dataset.goal;
  let counter = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == Target) {
      clearInterval(counter);
    }
  }, 2000 / Target);
}
icon.onclick = function () {
  window.scrollTo({
    top: "0",
    left: "0",
    behavior: "smooth",
  });
};
