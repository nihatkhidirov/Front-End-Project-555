let drawer = document.querySelector(".drawer");
let BarSide = document.querySelector(".header-btn");
let CancelBtn = document.querySelector(".drawer-cancel-btn");
drawer.classList.add("drawer-right");
let body = document.querySelector("body");
BarSide.addEventListener("click", (e) => {
  e.preventDefault();
  drawer.classList.add("drawer-left");
  drawer.classList.remove("drawer-right");
  body.classList.add("black-change");
});
CancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Salam");
  drawer.classList.remove("drawer-left");
  drawer.classList.add("drawer-right");
  body.classList.remove("black-change");
});

/*SCROLL*/
let header = document.querySelector(".header-secondpart");
let headerScrolled = window.scrollY;
let navBtn = document.querySelector(".nav-btn");
let headerBtn = document.querySelector(".header-btn");

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  console.log(headerScrolled);
  if (window.scrollY >= 162) {
    header.classList.add("header-bc");
    headerBtn.classList.add("header-btn-scroll");
    navBtn.classList.remove("nav-btn");
    navBtn.classList.add("nav-btn-scroll");
  } else {
    header.classList.remove("header-bc");

    headerBtn.classList.remove("header-btn-scroll");
    navBtn.classList.remove("nav-btn-scroll");

    navBtn.classList.add("nav-btn");
  }
});

/*swipeer*/
$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  console.log(scrollValue);

  scrollProgress.style.background = `conic-gradient (#03cc65 ${scrollValue}%,#d7d7d7 ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue}%`;
};
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;
