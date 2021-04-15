const travelCardItems = document.querySelectorAll(".travel > ul > li");
const cardInfos = document.querySelectorAll(".cards-info .info-box");
const travelCardList = document.querySelector(".travel > ul");
const closeBtns = document.querySelectorAll(".close-info");
const slideBtns = document.querySelectorAll(".cards-wrap > i");
const businessCardItems = document.querySelectorAll(".business > ul > li");
const businessCardList = document.querySelector(".business > ul");

// 비즈니스 카드들 클릭시 디테일창 등장
businessCardItems.forEach(function (cardItem, i) {
  cardItem.addEventListener("click", function () {
    businessCardList.style.marginLeft = `-${404 * i}px`;
    cardInfos[i + 3].style.left = "405px";
    slideBtns.forEach(function (btn) {
      btn.style.display = "none";
    });
  });
});

// travel 카드들 클릭시 디테일창 등장
travelCardItems.forEach(function (cardItem, i) {
  cardItem.addEventListener("click", function () {
    travelCardList.style.marginLeft = `-${404 * i}px`;
    cardInfos[i].style.left = "405px";
    slideBtns.forEach(function (btn) {
      btn.style.display = "none";
    });
  });
});

// 닫기 버튼 누르면 원위치로
closeBtns.forEach(function (closeBtn, i) {
  closeBtn.addEventListener("click", function () {
    travelCardList.style.marginLeft = `0px`;
    businessCardList.style.marginLeft = `0px`;
    cardInfos[i].style.left = "1400px";
    slideBtns.forEach(function (btn) {
      btn.style.display = "block";
    });
  });
});
