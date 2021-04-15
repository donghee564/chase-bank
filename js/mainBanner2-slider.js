const nextBtn = $(".fa-chevron-right");
const prevBtn = $(".fa-chevron-left");
const slides = $("#mainBanner2 > ul > li");
let current = 0;
let currentIcon = 1;

const slideBox = $(".slideBox");
const iconBox = $(".slideBox li");
const selected = "selected";

const iconNext = function () {
  /* 다음 아이콘 */
  const firstIcon = $(".slideBox li:first-child");
  const currIcon = $(".slideBox li.selected");
  currIcon.next().addClass(selected);
  currIcon.removeClass(selected);
  slideBox.animate({ left: "-130px" }, 500, function () {
    $(this).append(`<li>${firstIcon.html()}</li>`);
    $(this).find("li:first-child").remove();
    $(this).css({ left: 0 });
  });
};

const iconPrev = function () {
  /* 이전 아이콘 */
  const lastIcon = $(".slideBox li:last-child");
  const currIcon = $(".slideBox li.selected");
  currIcon.prev().addClass(selected);
  currIcon.removeClass(selected);
  slideBox.animate({ left: "130px" }, 500, function () {
    $(this).prepend(`<li>${lastIcon.html()}</li>`);
    $(this).find("li:last-child").remove();
    $(this).css({ left: 0 });
  });
};

var aniFlag = false;

const moveNext = function (currSlide, nextSlide) {
  nextSlide.css({ left: "100%" }).stop().animate({ left: 0 }, 500);
  currSlide
    .css({ left: 0 })
    .stop()
    .animate({ left: "-100%" }, 500, () => (aniFlag = false));
};

const movePrev = function (currSlide, prevSlide) {
  prevSlide.css({ left: "-100%" }).stop().animate({ left: 0 }, 500);
  currSlide
    .css({ left: 0 })
    .stop()
    .animate({ left: "100%" }, 500, () => (aniFlag = false));
};

const pageNext = function () {
  if (aniFlag) return;
  aniFlag = true;

  iconNext();
  let currSlide = slides.eq(current);
  let nextSlide = slides.eq(current + 1);
  if (current < 4) {
    moveNext(currSlide, nextSlide);
    current++;
  } else {
    nextSlide = slides.eq(0);
    moveNext(currSlide, nextSlide);
    current = 0;
  }
};

const pagePrev = function () {
  if (aniFlag) return;
  aniFlag = true;

  iconPrev();
  let currSlide = slides.eq(current);
  let prevSlide = slides.eq(current - 1);
  if (current > 0) {
    movePrev(currSlide, prevSlide);
    current--;
  } else {
    prevSlide = slides.eq(4);
    movePrev(currSlide, prevSlide);
    current = 4;
  }
};

// 오른쪽 화살표 클릭이벤트
nextBtn.click(function () {
  pageNext();
});

// 왼쪽 화살표 클릭이벤트
prevBtn.click(function () {
  pagePrev();
});

// setInterval(pageNext, 3000);
