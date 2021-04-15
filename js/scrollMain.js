const icMenu = document.querySelector('#iconMenu');

document.addEventListener('scroll', function() {
    const currScrollValue = document.documentElement.scrollTop;
    console.log(currScrollValue);
    if (currScrollValue > 160){
        icMenu.style.bottom = '0px';
        icMenu.style.opacity = 1;
    }
})