const bgBtn = document.querySelector(".bg-img-btn");
const cardBg = document.querySelector(".cstm-bg");
const closeBgBtn = document.querySelector(".close-card-bg");
const imgList = document.querySelectorAll(".card-bg");
const currCard = document.querySelector(".cstm-card");
const sectionBg = document.querySelector(".sub2-content2");

//배경선택창 보이기
bgBtn.addEventListener("click", function () {
  cardBg.classList.remove("hide");
});

//배경선택창 숨기기
closeBgBtn.addEventListener("click", function () {
  cardBg.classList.add("hide");
});

//클릭한 배경으로 바꾸기
imgList.forEach(function (bg) {
  bg.addEventListener("click", function () {
    const thisImg = this.getAttribute("src");
    currCard.style.background = `url(${thisImg}) no-repeat center/cover`;
    sectionBg.style.background = `url(${thisImg}) no-repeat center/cover`;
  });
});
