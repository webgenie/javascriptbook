(function () {
  var password = document.getElementById('password'); // 비밀번호 입력 창을 저장한다
  var passwordConfirm = document.getElementById('conf-password');
 
  function setErrorHighlighter(e) {
    var target = e.target || e.srcElement;             // 이벤트가 발생한 요소를 가져온다
    if (target.value.length < 8) {                     // 길이가 8자 미만이면
      target.className = 'fail';                       // fail 클래스를 추가한다
    } else {                                           // 그렇지 않으면
      target.className = 'pass';                       // pass 클래스를 추가한다
    }
  }

  function removeErrorHighlighter(e) {
    var target = e.target || e.srcElement;              // 이벤트가 발생한 요소를 가져온다
    if (target.className === 'fail') {                  // fail 클래스가 지정되어 있으면 
      target.className = '';                            // class 특성 값을 제거한다
    }
  }

  function passwordsMatch(e) {
    var target = e.target || e.srcElement;               // 이벤트가 발생한 요소를 가져온다
    // 두 비밀 번호가 일치하며 길이가 8자 이상이면
    if ((password.value === target.value) && target.value.length >= 8) { 
      target.className = 'pass';                         // pass 클래스를 지정한다 
    } else {                                             // 그렇지 않으면
      target.className = 'fail';                         // fail 클래스를 지정한다
    }
  }

  addEvent(password, 'focus', removeErrorHighlighter); 
  addEvent(password, 'blur', setErrorHighlighter);
  addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
  addEvent(passwordConfirm, 'blur', passwordsMatch);
}());
