var elUsername = document.getElementById('username');  // username 입력 상자를 찾는다.
var elMsg = document.getElementById('feedback');       // feedback 요소를 찾는다.

function checkUsername(minLength) {                    // 함수를 선언한다.
  if (elUsername.value.length < minLength) {           // 사용자 이름이 너무 짧으면
    // 메시지를 생성한다.
    elMsg.innerHTML = '이름은 ' + minLength + ' 글자 이상이어야 합니다.';
  } else {                                             // 그렇지 않으면
    elMsg.innerHTML = '';                              // 메시지를 제거한다.
  }
}

if (elUsername.addEventListener) {               // 이벤트 리스너가 지원되면
  elUsername.addEventListener('blur', function(){// username 필드가 포커스를 잃을 때
    checkUsername(5);                            // checkUsername() 함수를 호출한다.
  }, false);                                     // 전파되는 이벤트를 캡쳐한다.
} else {                                         // 그렇지 않으면
  elUsername.attachEvent('onblur', function(){   // IE에서는 onblur를 사용한다.
    checkUsername(5);                            // checkUsername() 함수를 호출한다.
  });
}
