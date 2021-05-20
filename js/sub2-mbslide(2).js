const slideNext = $(".sub2-mainbanner .fa-chevron-right");
const slidePrev = $(".sub2-mainbanner .fa-chevron-left");
const slides = $(".sub2-mb-slides li");
const pnBtns = $(".sub2-mb-pn li");
const on = "pn-active";
let curr = 0;

slideNext.click(function () {
  moveNext();
});

slidePrev.click(function () {
  movePrev();
});

// pnBtns.click(function () {
//   const currPn = $(on).index();
//   const clickedPn = $(this).index();
//   const dist = clickedPn - currPn;
//   if (dist > 0) {
//     for (let i = 0; i <= dist; i++) {
//       moveNext();
//     }
//   } else if (dist < 0) {
//     for (let i = 0; i <= -dist; i++) {
//       movePrev();
//     }
//   }
//   pnBtns.removeClass(on);
//   $(this).addClass(on);
// });

function moveNext() {
  const currSlide = slides.eq(curr);
  pnBtns.removeClass(on);
  currSlide.css({ left: 0 }).stop().animate({ left: "-100%" });
  curr++;
  if (curr == slides.length) curr = 0;
  const nextSlide = slides.eq(curr);
  pnBtns.eq(curr).addClass(on);
  nextSlide.css({ left: "100%" }).stop().animate({ left: 0 });
}

function movePrev() {
  const currSlide = slides.eq(curr);
  pnBtns.removeClass(on);
  currSlide.css({ left: 0 }).stop().animate({ left: "100%" });
  curr--;
  if (curr < 0) curr = 2;
  const prevSlide = slides.eq(curr);
  pnBtns.eq(curr).addClass(on);
  prevSlide.css({ left: "-100%" }).stop().animate({ left: 0 });
}
