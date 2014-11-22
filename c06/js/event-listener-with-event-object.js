function checkLength(e, minLength) {         // 함수를 선언한다. 
  var el, elMsg;                             // 변수를 선언한다.
  if (!e) {                                  // event 객체가 존재하지 않으면
    e = window.event;                        // IE를 위한 우회 방법을 적용한다.
  }
  el = e.target || e.srcElement;             // 이벤트가 발생한 요소를 가져온다.
  elMsg = el.nextSibling;                    // 이웃 요소를 가져온다.

  if (el.value.length < minLength) {         // 이름이 너무 짧으면 메시지를 설졍한다.
    elMsg.innerHTML = '이름은 ' + minLength + ' 글자 이상이어야 합니다.';
  } else {                                   // 그렇지 않으면
    elMsg.innerHTML = '';                    // 메시지를 제거한다.
  }
}

var elUsername = document.getElementById('username');// username 입력창을 가져온다.
if (elUsername.addEventListener) {           // 이벤트 리스너가 지원되면
  elUsername.addEventListener('blur', function(e) {  // blur 이벤트를 처리한다.
	// 주의: 이 함수는 checkLength()로 변경되었다.
    checkLength(e, 5);                             // checkLength() 함수를 호출한다.
  }, false);                                       // 이벤트를 버블링한다.
} else {                                           // 그렇지 않으면
  elUsername.attachEvent('onblur', function(e){    // IE로 간주하고 onblur이벤트를 처리한다.
	// 주의: 이 함수는 checkLength()로 변경되었다.
    checkLength(e, 5);                             // checkLength() 함수를 호출한다.
  });
}
