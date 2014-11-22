function checkUsername() {                        // 함수를 선언한다
  var username = el.value;                        // 사용자 이름을 변수에 저장한다
  if (username.length < 5) {                      // 이름이 5자보다 짧으면
    elMsg.className = 'warning';                  // class 특성 값을 변경한다
    elMsg.textContent = '이름이 너무 짧습니다.'        // 메시지를 변경한다
  } else {                                        // 그렇지 않으면
    elMsg.textContent = '';                       // 메시지를 제거한다
  }
}

function tipUsername() {                          // 함수를 선언한다
  elMsg.className = 'tip';                        // class 특성 값을 변경한다
  elMsg.innerHTML = '이름은 5글자 이상이어야 합니다.';   // 메시지를 더한다
}

var el = document.getElementById('username');     // Username 입력 필드를 찾는다
var elMsg = document.getElementById('feedback');  // 메시지를 저장할 요소를 찾는다

// username 입력 필드가 포커스를 받거나 잃으면 위의 함수를 호출하도록 한다
el.addEventListener('focus', tipUsername, false); // focus이벤트는 tipUsername() 함수를 호출한다
el.addEventListener('blur', checkUsername, false);// blur이벤트는 checkUsername() 함수를 호출한다

/* IE8 (및 이전 버전)을 위한 버전

if (el.addEventListener) {
  el.addEventListener('focus', tipUsername, false);
  el.addEventListener('blur', checkUsername, false);
} else {
  el.attachEvent('onfocus', tipUsername);
  el.attachEvent('onblur', checkUsername);
}

*/