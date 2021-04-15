const slideBox = document.querySelector('.slideBox');
const slideItems = document.querySelectorAll('.slideBox li');
const slideWidth = 150;
const nextBtn = document.querySelector('.ar');
const prevBtn = document.querySelector('.al');
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

const pageBtns = document.querySelectorAll('.pageNav li');
const firstPage = document.querySelector('.pageNav li:first-child');
const lastPage = document.querySelector('.pageNav li:last-child');
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
    slideNext();
    pageNext();
});
prevBtn.addEventListener('click', function(){
    slidePrev();
    pagePrev();  
});
