const slideNext = $(".sub2-mainbanner .fa-chevron-right");
const slidePrev = $(".sub2-mainbanner .fa-chevron-left");
const slideList = $(".sub2-mb-slides");
const slides = $(".sub2-mb-slides li");
const pnBtns = $(".sub2-mb-pn li");
const slideWidth = 720;
const on = "pn-active";
let curr = 0;

slideNext.click(function () {
  moveNext();
});

pnBtns.click(function () {
  //   pnBtns.removeClass(on);
  const pnIndex = $(this).index();
  //   curr = pnIndex;
  slideList.animate({ left: `-${slideWidth * pnIndex}px` }, function () {});
  //   $(this).addClass(on);
  slideList.css({ left: 0 });
});

const moveNext = function () {
  //   const currPn = $(on);
  //   $(on).next().addClass(on);
  //   currPn.removeClass(on);
  const firstSlide = $(".sub2-mb-slides li:first-child");
  slideList.animate({ left: `-${slideWidth}px` }, 500, function () {
    $(this).append(`<li>${firstSlide.html()}</li>`);
    $(this).find("li:first-child").remove();
    $(this).css({ left: 0 });
  });
  //   curr < slideList.length ? curr++ : (curr = 0);
  //   pnBtns.eq(curr).addClass(on);
  //   console.log(curr);
};
