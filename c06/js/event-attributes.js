function checkUsername() {                             // 함수를 선언한다.
  var elMsg = document.getElementById('feedback');     // feedback 요소를 가져온다.
  var elUsername = document.getElementById('username');// username 입력 창을 가져온다.
  if (elUsername.value.length < 5) {                   // 이름의 길이가 5글자 미만이면
    elMsg.textContent = '이름은 5글자 이상이어야 합니다.'; // 메시지를 표시한다.
  } else {                                              // 그렇지 않으면
    elMsg.textContent = '';                             // 메시지를 제거한다.
  }
}
