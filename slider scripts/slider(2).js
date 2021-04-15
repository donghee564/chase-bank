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


let curIndex = 0;
const pageNavList = document.querySelectorAll('.pageNav > li');
for(var i=0; i<pageNavList.length; i++){
    pageNavList[i].addEventListener('click', function(idx){
        
        // 현재 active 된 위치 
        // 클릭된 위치
        
        move();
    });
}


function move(distance){
	if(distance == 0) return;
	
	var absDistance = distance;
	var flag = true;
	if(distance < 0) {
		absDistance = distance * (-1);
		flag = false;
	}
	
	// 페이지네이션 이동
	const pageNavList = document.querySelectorAll('.pageNav > li');
	var pageLength = pageNavList.length;
	var curPos = 0;
	var flagClass = "active";
	for(var i = 0; i < pageLength; i++) {
		var tempClassList = pageNavList[i].classList;
		if(tempClassList.contains(flagClass)){
			tempClassList.remove(flagClass);
			curPos = i;
			break;
		}
	}
	
	var movePos = curPos + distance;
	if(movePos < 0) {
		movePos += pageLength;
	} else if(movePos >= pageLength) {
		movePos -= pageLength;
	}
	
	pageNavList[movePos].classList.add(flagClass);
	
	// 이미지 이동
	var distPixel = ((150 * distance) * (-1)) + 'px';// 우측으로 이동하려면 -로 이동해야하므로 -1을 곱해줌
	var slideBox = $('.slideBox');
	
	for(var i = 0; i < absDistance; i++) {
		if(flag) slideBox.append('<li>' + slideBox.find('li:first').html() + '</li>');
		else slideBox.prepend('<li>' + slideBox.find('li:last').html() + '</li>');
	}
	
	slideBox.animate({left: distPixel}, 300, function(){
        for(var i = 0; i < absDistance; i++) { 
			slideBox.find(flag ? "li:first" : "li:last").remove();
		}
        slideBox.css('left', '0');
    })
}


$('.ar').click(function(){
    slideNext();
    pageNext();
});

$('.al').click(function(){
    slidePrev();
    pagePrev();
});

