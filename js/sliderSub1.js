const firstSlide = document.querySelector('#mainBannerSub1 > ul li:first-child');
const lastSlide = document.querySelector('#mainBannerSub1 > ul li:last-child');
const firstNav = document.querySelector('#mainBannerSub1 .pageNav ul li:first-child');
const lastNav = document.querySelector('#mainBannerSub1 .pageNav ul li:last-child');
const showingSlide = 'showingSlide';
const active = 'active';
const slides = document.querySelectorAll('#mainBannerSub1 > ul li');


function pageNext(){ /*슬라이드 다음 페이지 넘기기 */
    const currentSlide = document.querySelector('.showingSlide');
    const currNav = document.querySelector('.active');
    if(currentSlide){
        currentSlide.classList.remove(showingSlide);
        currNav.classList.remove(active);
        const nextSlide = currentSlide.nextElementSibling;
        const nextNav = currNav.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(showingSlide);
            nextNav.classList.add(active);
        }else{
            firstSlide.classList.add(showingSlide);
            firstNav.classList.add(active);
        }
    }
}

function pagePrev(){ /*슬라이드 이전 페이지 넘기기 */
    const currentSlide = document.querySelector('.showingSlide');
    const currNav = document.querySelector('.active');
    if(currentSlide){
        currentSlide.classList.remove(showingSlide);
        currNav.classList.remove(active);
        const prevSlide = currentSlide.previousElementSibling;
        const prevNav = currNav.previousElementSibling;
        if(prevSlide){
            prevSlide.classList.add(showingSlide);
            prevNav.classList.add(active);
        }else{
            lastSlide.classList.add(showingSlide);
            lastNav.classList.add(active);
        }
    }
}

const nextBtn = document.querySelector('#aR');
const prevBtn = document.querySelector('#aL');
const playBtn = document.querySelector('#play');

//슬라이드 인터벌 
let interval = setInterval(pageNext, 3000)
window.onload = interval;
let flag = 1;
function slidePlay(){
    if(flag === 1){
        clearInterval(interval);
        flag = 0;
        playBtn.classList.add('fa-play');
        playBtn.classList.remove('fa-pause');
    }else{
        interval = setInterval(pageNext, 3000);
        flag = 1;
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');  
    }
}


nextBtn.addEventListener('click', pageNext);
prevBtn.addEventListener('click', pagePrev);
playBtn.addEventListener('click', slidePlay);

const navBtns = document.querySelectorAll('.pageNav ul li');
for(let i = 0; i < navBtns.length; i++){
    navBtns[i].addEventListener('click', function(){
        const currNav = document.querySelector('.active');
        currNav.classList.remove(active);
        const currentSlide = document.querySelector('.showingSlide');
        currentSlide.classList.remove(showingSlide);
        slides[i].classList.add(showingSlide);
        this.classList.add(active);
    })
}

