const slideUpBanner = document.querySelector("#slideUpBanner");
const upBtn = document.querySelector(".fa-chevron-up");
const downBtn = document.querySelector(".fa-chevron-down");

document.addEventListener("scroll", function () {
  const currScrollValue = document.documentElement.scrollTop;
  if (currScrollValue > 2100) {
    slideUpBanner.style.transform = "translateY(-120px)";
    upBtn.addEventListener("click", function () {
      slideUpBanner.style.height = "220px";
      downBtn.style.display = "block";
      upBtn.style.display = "none";
    });
    downBtn.addEventListener("click", function () {
      slideUpBanner.style.height = "120px";
      downBtn.style.display = "none";
      upBtn.style.display = "block";
    });
  } else if (currScrollValue <= 2000) {
    slideUpBanner.style.height = "120px";
    slideUpBanner.style.transform = "none";
    downBtn.style.display = "none";
    upBtn.style.display = "block";
  }
});
