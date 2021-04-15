const nextCardList = document.querySelector(".next-card");
const prevCardList = document.querySelector(".prev-card");
const cardSlideList = document.querySelector(".sub2-content3 .cards-list");
const ctn3Tit = document.querySelector(".sub2-content3 .cards-wrap > h1 span");

nextCardList.addEventListener("click", function () {
  cardSlideList.style.transition = "all 0.35s ease-in";
  cardSlideList.style.transform = "translateX(-1200px)";
  ctn3Tit.innerHTML = "Business";
});

prevCardList.addEventListener("click", function () {
  cardSlideList.style.transition = "all 0.35s ease-in";
  cardSlideList.style.transform = "translateX(0)";
  ctn3Tit.innerHTML = "Travel";
});
