var elUsername = document.getElementById('username');   // Username 입력 필드 
var elMsg      = document.getElementById('feedback');   // 에러 메시지를 표시할 요소

function checkUsername(minLength) {                     // 함수를 선언한다.
  if (elUsername.value.length < minLength) {            // 사용자의 이름이 너무 짧으면
    // 에러 메시지를 생성한다.
    elMsg.innerHTML = '이름은 ' + minLength + ' 글자 이상이어야 합니다.';
  } else {                                             // 그렇지 않으면
    elMsg.innerHTML = '';                              // 에러 메시지를 제거한다.
  }
}

elUsername.addEventListener('blur', function() {        // 입력 필드가 포커스르 잃으면
  checkUsername(5);                                     // 여기서 인수를 전달한다.
}, false);
