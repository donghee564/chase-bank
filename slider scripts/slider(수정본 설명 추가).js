
// distance만큼 좌(음수)/우(양수)로 이동
function move(distance){
	if(distance == 0) return; // 0이면 동일한 위치이므로 바로 return하여 종료
	
	var absDistance = distance;// distance의 절대값을 가지고 있을 변수 선언
	var flag = true;// 좌/우 방향을 기억하고 있을 변수 선언
	if(distance < 0) { // 음수. 즉, 좌로 이동할 경우
		absDistance = distance * (-1);// 절대값으로 만들기 위해 -1을 곱함
		flag = false;
	}
	
	// 페이지네이션 이동
	const pageNavList = document.querySelectorAll('.pageNav > li');// pageNav 안에 있는 li를 전부 가져옴
	var pageLength = pageNavList.length;// li의 개수
	var curPos = 0;// 현재 위치를 가지고 있을 변수 선언. 초기값은 상관 없음.
	var flagClass = "active";// 추가/제거할 클래스명 선언. 유지보수에 용이하도록 따로 빼놓은것. 원하시면 기존대로 필요한 위치마다 각각 "active"로 넣어주셔도 됩니다.
	for(var i = 0; i < pageLength; i++) {// 현재 active된 li의 위치를 찾기 위해 li의 개수만큼 반복 탐색
		var tempClassList = pageNavList[i].classList;// 유지 보수, 성능, 가독성을 위해 classList를 따로 변수를 만들어서 선언.
		if(tempClassList.contains(flagClass)){// 현재 탐색중인 li에 탐색하고있는 class가 있는지 확인
			// 포함된 것을 찾으면
			tempClassList.remove(flagClass);// 클래스 삭제
			curPos = i;// 현재 위치 기억하기 위해 curPos에 저장
			break;// 찾았으니까 for문 탈출
		}
	}
	
	var movePos = curPos += distance;// 최종적으로 움직여질 위치
	if(movePos < 0) {// 0번째에서 왼쪽으로 이동시에는 마지막위치가 와야하므로 if를 통해 탐색
		movePos += pageLength;// 간단한 계산식이므로 설명 생략합니다.
	} else if(movePos >= pageLength) {// 위의 것의 반대 과정
		movePos -= pageLength;
	}
	
	pageNavList[movePos].classList.add(flagClass);// 구해진 최종 active될 위치에 active 클래스 추가
	
	// 이미지 이동
	var distPixel = ((150 * distance) * (-1)) + 'px';// 우측으로 이동하려면 -로 이동해야하므로 -1을 곱해줌
	var slideBox = $('.slideBox');// 유지보수, 성능, 가독성을 위해 slideBox를 변수로 따로 지정.
	
	// distance의 절대값. 즉, 차이값만큼 for문 반복
	// 반복하는 이유는, 차이값만큼 이동을 해야하므로 미리 li를 생성하는 것임.
	// 만약 이 부분이 없어질 경우, 0보다 왼쪽으로 가거나 최대 길의보다 더 가려고 하거나 한다면, 이동 animation 도중 빈 화면이 나올 수 있음.
	for(var i = 0; i < absDistance; i++) {
		// 위에서 선언했던 좌/우를 기억하고있는 변수 flag를 통해 작동을 control
		if(flag) slideBox.append('<li>' + slideBox.find('li:nth-child('+i+')').html() + '</li>');// 우로가야하니까 우측. 즉, 뒤쪽에 li를 복사. nth-child인 이유는, first로만 하면, 앞에것을 제거하면서 복사하는 것이 아니므로 순서대로 복사하기 위함
		else slideBox.prepend('<li>' + slideBox.find('li:nth-last-child('+i+')').html() + '</li>');// 위의 것의 반대
	}
	
	//애니메이션 시작
	slideBox.animate({left: distPixel}, 300, function(){
        for(var i = 0; i < absDistance; i++) { // 움직이는 만큼. 즉, 추가한 만큼 제거해야하므로 동일하게 차이값의 절대값만큼 반복
			slideBox.find(flag ? "li:first" : "li:last").remove();// flag에 따라 앞/뒤쪽의 li를 삭제
		}
        slideBox.css('left', '0');//left값을 0으로 초기화
    })
}
