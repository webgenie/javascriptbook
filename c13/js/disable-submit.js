(function(){
  var form      = document.getElementById('newPwd');  // 폼을 가져온다
  var password  = document.getElementById('pwd');     // 비밀번호 입력 창을 가져온다
  var submit    = document.getElementById('submit');  // 전송 버튼을 가져온다

  var submitted = false;                            // 폼이 전송되었는가?
  submit.disabled = true;                           // 전송 버튼을 비활성화 한다.
  submit.className = 'disabled';                    // 전송 버튼에 스타일을 적용한다

  // input 이벤트가 발생하면 전송 버튼의 활성화 여부를 결정한다
  addEvent(password, 'input', function(e) {         // 비밀 번호가 변경되면
    var target = e.target || e.srcElement;          // 이벤트의 대상을 가져온다
    submit.disabled = submitted || !target.value;   // disabled 속성 값을 설정한다
    // 폼이 전송되었거나 비밀번호에 아무런 값이 없으면 CSS를 이용해 비활성화 한다
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); 

  // submit 이벤트가 발생하면 폼을 비활성화 하여 다시 전송되지 못하도록 한다
  addEvent(form, 'submit', function(e) {            // submit 이벤트가 발생하면
    if (submit.disabled || submitted) {             // 버튼이 비활성화 되어 있거나 폼이 전송되었으면 
      e.preventDefault();                           // 폼 전송을 취소한다
      return;                                       // 함수의 실행을 종료한다
    }                                               // 그렇지 않으면 계속 실행한다
    submit.disabled = true;                         // 전송 버튼을 비활성화 한다
    submitted = true;                               // submitted 변수를 수정한다
    submit.className = 'disabled';                  // 스타일을 수정한다

	// 데모를 위해 어떤 정보가 전송되었는지를 출력한다
    e.preventDefault();                             // 폼 전송을 취소한다
    alert('비밀번호: ' + password.value);         // 텍스트를 보여준다
  });
}());
