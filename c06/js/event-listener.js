function checkUsername() {                             // 함수를 선언한다.
  var elMsg = document.getElementById('feedback');     // feedback 요소를 가져온다.
  if (this.value.length < 5) {                         // 이름이 짧으면
    elMsg.textContent = 'Username must be 5 characters or more'; // 메시지를 표시한다.
  } else {                                             // 그렇지 않으면
    elMsg.textContent = '';                            // 메시지를 제거한다. 
  }
}

var elUsername = document.getElementById('username');  // username 요소를 가져온다.
// 요소가 포커스를 잃을 때 checkUsername() 함수를 호출한다.
elUsername.addEventListener('blur', checkUsername, false);
