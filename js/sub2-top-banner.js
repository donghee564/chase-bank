const topBanner = document.querySelector(".sub2-top-banner");
const topBannerCnt = document.querySelector(".top-banner-wrap");
const closeTb = document.querySelector(".close-top-banner");

document.addEventListener("scroll", function () {
  const currScroll = document.documentElement.scrollTop;
  if (currScroll > 500) {
    topBanner.classList.add("show-tb");
    topBannerCnt.classList.add("show-tb");
  } else {
    topBanner.classList.remove("show-tb");
    topBannerCnt.classList.remove("show-tb");
  }
});

closeTb.addEventListener("click", function () {
  topBanner.style.display = "none";
});
