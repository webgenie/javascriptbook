(function(){ 
  var form = document.getElementById('login');       // 폼 요소를 가져온다

  addEvent(form, 'submit', function(e) {             // 사용자가 폼을 전송하면
    e.preventDefault();                              // 폼 전송을 취소한다
    var elements = this.elements;                    // 모든 폼 요소를 가져온다
    var username = elements.username.value;          // 입력된 사용자 이름을 가져온다
    var msg      = '환영합니다 ' + username;            // 환영 메시지를 생성한다
    document.getElementById('main').textContent = msg; // 환영 메시지를 출력한다
  });
}());
