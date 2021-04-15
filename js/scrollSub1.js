// Content 1 Scroll Event
const ctn1Imgs = document.querySelectorAll(".content1 img");
const ctn1Img1 = document.querySelector(".article1 .imgBox img");
const ctn1Img2 = document.querySelector(".article2 .imgBox img");
const ctn1Img3 = document.querySelector(".article3 .imgBox img");
const cnt1ImgOn = "cnt1ImgOn";

const ctn1Txt1 = document.querySelector(".article1 .txtCol .txtWrap");
const ctn1Txt2 = document.querySelector(".article2 .txtCol .txtWrap");
const ctn1Txt3 = document.querySelector(".article3 .txtCol .txtWrap");
const cnt1TxtOn = "cnt1TxtOn";

const ctn1Box1 = document.querySelector(".article1 .txtCol .subInfoBox");
const ctn1Box2 = document.querySelector(".article2 .txtCol .subInfoBox");
const ctn1Box3 = document.querySelector(".article3 .txtCol .subInfoBox");
const boxUp = "boxUp";
const mcIcons = document.querySelector(".content2 .iconsWrap ul");
let s1, s2, s3, s4;

document.addEventListener("DOMContentLoaded", scrollHandler);
document.addEventListener("resize", scrollHandler);

function scrollHandler() {
  s1 =
    document.querySelector(".subPageTitle > h1").getBoundingClientRect().top -
    140;
  s2 = document.querySelector(".article1").getBoundingClientRect().top;
  s3 = document.querySelector(".article2").getBoundingClientRect().top;
  s4 = document.querySelector(".article3 .txtCol").getBoundingClientRect().top;
}

document.addEventListener("scroll", function () {
  const currScrollValue = document.documentElement.scrollTop;
  console.log(currScrollValue);
  if (currScrollValue > s1) {
    ctn1Img1.classList.add(cnt1ImgOn);
    ctn1Txt1.classList.add(cnt1TxtOn);
    ctn1Box1.classList.add(boxUp);
  }
  if (currScrollValue > s2) {
    ctn1Img2.classList.add(cnt1ImgOn);
    ctn1Txt2.classList.add(cnt1TxtOn);
    ctn1Box2.classList.add(boxUp);
  }
  if (currScrollValue > s3) {
    ctn1Img3.classList.add(cnt1ImgOn);
    ctn1Txt3.classList.add(cnt1TxtOn);
    ctn1Box3.classList.add(boxUp);
  }
  if (currScrollValue > s4) {
    mcIcons.style.transform = "translateY(0)";
  }
  // if(currScrollValue < 300){
  //     for(let i = 0; i < ctn1Imgs.length; i ++){
  //         ctn1Imgs[i].classList.remove(cnt1ImgOn);
  //         ctn1Txt[i].classList.remove(cnt1TxtOn);
  //         ctn1Box[i].classList.remove(boxUp);
  //     }
  // }
});
