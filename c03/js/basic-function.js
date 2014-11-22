// 새로운 메시지를 지정할 변수를 선언한다.
var msg = '10% 할인을 받으시려면 지금 회원으로 가입하세요!';

// id 특성 값이 message인 요소를 찾아 내용을 수정하는 함수를 작성한다.
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}

// 함수를 호출한다.
updateMessage();