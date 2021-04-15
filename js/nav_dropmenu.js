//  JQUERY
// $('.dropTrigger').hover(function(){
//     $(this).css('cursor','pointer');
//     $('#dropMenu').slideDown();
// }, $('#dropMenu').mouseleave(function() {
//     $(this).slideUp();
// }));

const dropMenu = document.querySelector("#dropMenu");
const dropTrigger = document.querySelector(".dropTrigger");
const icons = document.querySelectorAll("#dropMenu ul li");
const nav = document.querySelector("nav");
const logoChase = document.querySelector(".logo img:first-child");

function showIcons() {
  let trs = 0;
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.transitionDelay = trs + "s";
    trs += 0.12;
    icons[i].classList.add("showIcons");
  }
}

function hideIcons() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.remove("showIcons");
  }
}

dropTrigger.addEventListener("mouseover", function () {
  /*nav바 hover*/ dropMenu.classList.add("showDropMenu");
  nav.style.height = "200px";
  showIcons();
  if (window.pageYOffset < 420) {
    nav.style.background = "rgba(0, 0, 0, 0.8)";
  } else if (window.pageYOffset >= 420) {
    nav.style.background = "rgb(17, 80, 182)";
  }
});
dropMenu.addEventListener("mouseleave", function () {
  /*nav바 hover end*/ this.classList.remove("showDropMenu");
  nav.style.height = "70px";
  hideIcons();
  if (window.pageYOffset < 420) {
    nav.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0))";
  } else if (window.pageYOffset >= 420) {
    nav.style.background = "#126bc5";
  }
});

window.addEventListener("scroll", function () {
  /*nav바 스크롤*/ if (window.pageYOffset > 420) {
    nav.style.background = "#126bc5";
    logoChase.classList.add("hideChase");
  } else {
    nav.style.background = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0,0,0,0))";
    logoChase.classList.remove("hideChase");
  }
});
