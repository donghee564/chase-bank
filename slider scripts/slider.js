function slideNext(index){
    $('.slideBox').animate({left: '-150px'}, 300, function(){
        $(this).append('<li>' + $(this).find('li:first').html() + '</li>');
        $(this).find('li:first').remove();
        $(this).css('left', '0px');
    })
};

function slidePrev(){
    $('.slideBox').animate({left: '150px'}, 300, function(){
        $(this).prepend('<li>' + $(this).find('li:last').html() + '</li>');
        $(this).find('li:last').remove();
        $(this).css('left', '0');
    })
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


// const slideBox = document.querySelector('.slideBox');
// pageBtns.forEach(function(btn){
//     btn.addEventListener('click', function(index){
//         let currentIndex = index;
//         const currentPage = document.querySelector('.active');
//         currentPage.classList.remove('active');
//         this.classList.add('active');
//         slideBox.style.transform = `translateX(-${150*(currentIndex + 1)}px)`
//     });
// });



$('.ar').click(function(){
    slideNext();
    pageNext();
});

$('.al').click(function(){
    slidePrev();
    pagePrev();
});







// const slideBox = document.querySelector('.slideBox');
// const slideItems = document.querySelectorAll('.slideBox li');
// const slideWidth = 150;
// const nextBtn = document.querySelector('.ar');
// const prevBtn = document.querySelector('.al');
// slideBox.style.width = slideWidth * slideItems.length + 'px';

// let curIndex = 0;


// nextBtn.addEventListener('click', function(){
//     if(curIndex <= slideItems.length - 1){
//         slideBox.style.trasition = 'all 1s'
//         slideBox.style.transform = `translateX(-${slideWidth * (curIndex -1)}px)`;
//     }
//     curIndex++;
//     curSlide = slideItems[curIndex];
// });

// function copySlide(){
//     const firstSlide = document.querySelector('.slideBox li:first-child');
//     const newSlide = document.createElement('li');
//     newSlide.innerHTML = firstSlide.innerHTML;
//     slideBox.appendChild(newSlide);
//     slideBox.removeChild(firstSlide);
// }

// function slideNext(){
//     slideBox.classList.add('animated');
//     slideBox.style.left = `-150px`;
//     slideBox.style.left = 0;
//     copySlide();
// }

// const btns = document.querySelectorAll('.btn');
// const btnsArr = Array.prototype.slice.call(btns);

// for(let i = 0; i < btns.length ; i++){
//     btns[i].addEventListener('click', function(){

//     })
// }
// btns.forEach(function btn(){
//     btn.addEventListener('click', function(){

//     })
// })