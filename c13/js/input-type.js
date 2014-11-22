(function(){

  var pwd = document.getElementById('pwd');     // 비밀번호 입력 창을 가져온다
  var chk = document.getElementById('showPwd'); // 체크 상자를 가져온다

  addEvent(chk, 'change', function(e) {         // 사용자가 체크 상자를 클릭하면
    var target = e.target || e.srcElement;      // 해당 요소를 가져온다
    try {                                       // 코드를 실행한다
      if (target.checked) {                     // 체크 상자에 체크가 되어 있으면
        pwd.type = 'text';                      // 비밀 번호를 텍스트 형식으로 변경한다
      } else {                                  // 그렇지 않으면
        pwd.type = 'password';                  // 비밀 번호 형식으로 유지한다
      }
    } catch(error) {                            // 오류가 발생하면
      alert('이 브라우저는 입력의 종류를 변경할 수 없습니다.'); // 경로 메시지를 출력한다
    }
  });

}());
