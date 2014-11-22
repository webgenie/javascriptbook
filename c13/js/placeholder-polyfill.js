(function() {                                        // 즉시 실행되는 함수
  // input 요소를 생성하고 placeholder 특성이 지원되는지 확인한다
  if ('placeholder' in document.createElement('input')) {
    return;
  }

  var length = document.forms.length;               // 폼의 갯수를 가져온다
  for (var i = 0, l = length; i < l; i++ ) {        // 루프를 실행한다
    showPlaceholder(document.forms[i].elements);    // showPlaceholder() 함수를 호출한다
  }

  function showPlaceholder(elements) {              // 함수를 호출한다
    for (var i = 0, l = elements.length; i < l; i++) { // 루프를 실행한다
      var el = elements[i];                         // 현재 요소를 저장한다

      if (!el.placeholder) {                        // placeholder가 지정되어 있지 않으면
        continue;                                   // 다음 요소르 이동한다
      }                                             // Otherwise

      el.style.color = '#666666';                   // 글자 색을 회색으로 지정한다
      el.value = el.placeholder;                    // 안내 메시지를 출력한다

      addEvent(el, 'focus', function () {           // 포커스를 받으면
        if (this.value === this.placeholder) {      // value 특성 값이 placeholder 특성 값과 같으면
          this.value = '';                          // 입력 창을 비운다
          this.style.color = '#000000';             // 글자 색을 검은 색으로 바꾼다
        }
      });

      addEvent(el, 'blur', function () {            // blur 이벤트가 발생하면
        if (this.value === '') {                    // 입력된 값이 없으
          this.value = this.placeholder;            // placeholder 특성 값을 출력한
          this.style.color = '#666666';				// 글자 색을 회색으로 바꾼다
        }
      }); 
    }                                                // 루프 종료
  }                                                  // showPlaceholder() 함수 종료
}());
