function checkUsername() {                            // 함수를 선언한다.
  var elMsg = document.getElementById('feedback');    // feedback 요소를 가져온다.
  if (this.value.length < 5) {                        // 사용자 이름이 짧으면
    elMsg.textContent = '이름은 5글자 이상이어야 합니다.';  // 메시지를 출력한다.
  } else {                                            // 그렇지 않으면
    elMsg.textContent = '';                           // 메시지를 제거한다.
  }
}

var elUsername = document.getElementById('username'); // username 입력 상자를 가져온다.
elUsername.onblur = checkUsername;  // 요소가 포커스를 잃을 때 checkUsername() 함수를 실행한다.
