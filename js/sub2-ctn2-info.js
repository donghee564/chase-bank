const cardItems = document.querySelectorAll(".sub2-content2 .cards > ul > li");
const cardInfos = document.querySelectorAll(".travel-info");
const cardList = document.querySelector(".travel > ul");
const closeBtns = document.querySelectorAll(".close-info");

cardItems.forEach(function (cardItem, i) {
  cardItem.addEventListener("click", function () {
    cardList.style.marginLeft = `-${404 * i}px`;
    cardInfos[i].style.left = "405px";
  });
});

closeBtns.forEach(function (closeBtn, i) {
  closeBtn.addEventListener("click", function () {
    cardList.style.marginLeft = `0px`;
    cardInfos[i].style.left = "1400px";
  });
});
