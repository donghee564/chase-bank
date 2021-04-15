const slideBox = document.querySelector('.slideBox');
const slideItems = document.querySelectorAll('.slideBox li');
const slideWidth = 150;
const nextBtn = document.querySelector('.fa-chevron-right');
const prevBtn = document.querySelector('.fa-chevron-left');
slideBox.style.width = slideWidth * slideItems.length + 'px';


function nextEvent(){
    const firstSlide = document.querySelector('.slideBox li:first-child'); 
    const newSlide = document.createElement('li');
    newSlide.innerHTML = firstSlide.innerHTML;
    slideBox.appendChild(newSlide);
    slideBox.removeChild(firstSlide);
    slideBox.style.transition = 'none';
    slideBox.style.transform = 'none';
};

function prevEvent(){
    const lastSlide = document.querySelector('.slideBox li:last-child'); 
    const newSlide = document.createElement('li');
    newSlide.innerHTML = lastSlide.innerHTML;
    slideBox.prepend(newSlide);
    slideBox.removeChild(lastSlide);
    slideBox.style.transition = 'none';
    slideBox.style.transform = 'none';
};

function slideNext(){
    slideBox.removeEventListener('transitionend', prevEvent);
    slideBox.addEventListener('transitionend', nextEvent);
    slideBox.style.transition = 'transform 0.3s';
    slideBox.style.transform = `translateX(-${slideWidth}px)`;
};

function slidePrev(){
    slideBox.removeEventListener('transitionend', nextEvent);
    slideBox.addEventListener('transitionend', prevEvent);
    slideBox.style.transition = 'transform 0.3s';
    slideBox.style.transform = `translateX(${slideWidth}px)`;
};

const firstPage = document.querySelector('#mainBanner2 ul li:first-child');
const lastPage = document.querySelector('#mainBanner2 ul li:last-child');
function pageNext(){
    const currentPage = document.querySelector('.active');
    if(currentPage){
        currentPage.classList.remove('active');
        const nextPage = currentPage.nextElementSibling;
        if(nextPage){
        nextPage.classList.add('active');
        }else{
            firstPage.classList.add('active');
        }
    }
}

function pagePrev(){
    const currentPage = document.querySelector('.active');
    if(currentPage){
        currentPage.classList.remove('active');
        const prevPage = currentPage.previousElementSibling;
        if(prevPage){
            prevPage.classList.add('active');
        } else{
            lastPage.classList.add('active');
        }
    } 
}

nextBtn.addEventListener('click', function(){
    const currIcon = document.querySelector('.selected');
    currIcon.classList.remove('selected');
    const addSelected = document.querySelector('#iconMenu ul li:nth-child(4)');
    addSelected.classList.add('selected');
    slideNext();
    pageNext();
});
prevBtn.addEventListener('click', function(){
    const currIcon = document.querySelector('.selected');
    currIcon.classList.remove('selected')
    const addSelected = document.querySelector('#iconMenu ul li:nth-child(2)');
    addSelected.classList.add('selected');
    slidePrev();
    pagePrev();  
});
