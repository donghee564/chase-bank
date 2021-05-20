(function () {
  const nextBtn = document.querySelector(".sub2-mainbanner .fa-chevron-right");
  const prevBtn = document.querySelector(".sub2-mainbanner .fa-chevron-left");
  const slideList = document.querySelector(".sub2-mb-slides");
  const slides = document.querySelectorAll(".sub2-mb-slides li");
  const pnBtns = document.querySelectorAll(".sub2-mb-pn li");
  const slideLength = slides.length;
  const slideWidth = 720;
  const on = "pn-active";
  let currIdx = 0;
  slideList.style.width = slideWidth * (slideLength + 2) + "px";

  //   첫번째, 마지막 슬라이드 복사
  let firstSlide = slideList.firstElementChild;
  let lastSlide = slideList.lastElementChild;
  let clonedFirst = firstSlide.cloneNode(true);
  let clonedLast = lastSlide.cloneNode(true);

  //복사된 슬라이드 추가
  slideList.appendChild(clonedFirst);
  slideList.insertBefore(clonedLast, firstSlide);

  //첫번째슬라이드 앞에 복사되었으므로 위치이동
  slideList.style.transform = `translateX(-${slideWidth}px)`;

  //   다음 슬라이드 버튼
  nextBtn.addEventListener("click", function () {
    if (currIdx <= slideLength - 1) {
      slideList.style.transition = "500ms";
      slideList.style.transform = `translateX(-${
        slideWidth * (currIdx + 2)
      }px)`;
    }
    if (currIdx === slideLength - 1) {
      setTimeout(function () {
        slideList.style.transition = "0ms";
        slideList.style.transform = `translateX(-${slideWidth}px)`;
      }, 500);
      currIdx = -1;
    }
    pnBtns.forEach(function (pnBtn) {
      pnBtn.classList.remove(on);
    });
    currIdx++;
    pnBtns[currIdx].classList.add(on);
  });

  //   이전 슬라이드 버튼
  prevBtn.addEventListener("click", function () {
    if (currIdx >= 0) {
      slideList.style.transition = "500ms";
      slideList.style.transform = `translateX(-${slideWidth * currIdx}px)`;
    }
    if (currIdx === 0) {
      setTimeout(function () {
        slideList.style.transition = "0ms";
        slideList.style.transform = `translateX(-${
          slideWidth * slideLength
        }px)`;
      }, 500);
      currIdx = slideLength;
    }
    pnBtns.forEach(function (pnBtn) {
      pnBtn.classList.remove(on);
    });
    currIdx--;
    pnBtns[currIdx].classList.add(on);
  });

  // 페이져 버튼 클릭 이벤트
  let currPb;
  pnBtns.forEach(function (pnBtn, i) {
    pnBtn.addEventListener("click", function () {
      currPb = document.querySelector(on);
      currPb.classList.remove(on);
      currPb = this;
      this.classList.add(on);

      currIdx = this.getAttribute("data-indx");
    });
  });
})();
