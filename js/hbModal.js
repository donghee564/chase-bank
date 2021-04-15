const hbTrigger = document.querySelector('#navBar .hbTrigger');
const hbMenu = document.querySelector('.hbMenuWrap');
const closeHb = document.querySelector('.hbMenuWrap .closeHb');
const lists = document.querySelectorAll('.hbMenu ul > li');


hbTrigger.addEventListener('click', function(){
    let aniDelay = 0;
    hbMenu.classList.add('showHbMenu');
    for(let i = 0; i < lists.length; i++){
        lists[i].style.animationDelay = `${aniDelay}s`
        aniDelay += 0.03;
    }
});

closeHb.addEventListener('click', function(){
    hbMenu.classList.remove('showHbMenu');
});


