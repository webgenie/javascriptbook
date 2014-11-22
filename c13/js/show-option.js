(function(){
  var form, options, other, otherText, hide;           // 변수를 선언한다
  form      = document.getElementById('how-heard');    // 폼을 가져온다
  options   = form.elements.heard;                     // 라디오 버튼을 가져온다
  other     = document.getElementById('other');        // 기타 라디오 버튼을 가져온다
  otherText = document.getElementById('other-text');   // 텍스트 상자를 가져온다
  otherText.className = 'hide';                        // 텍스트 상자를 숨긴다

  for (var i = [0]; i < options.length; i++) {         // 라디오 버튼에 대해 루프를 실행한다
    addEvent(options[i], 'click', radioChanged);       // 이벤트 리스너를 등록한다
  }

  function radioChanged() {
    hide = other.checked ? '' : 'hide';                // 기타 항목이 체크되었는지 확인한다
    otherText.className = hide;                        // 텍스트 상자의 표시 여부를 지정한다
    if (hide) {                                        // 텍스트 상자가 보이지 않으면
      otherText.value = '';                            // 텍스트 상자의 값을 제거한다
    }
  }
}());
