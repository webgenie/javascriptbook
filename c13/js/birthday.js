(function () {
  var $birth = $('#birthday');                         // 생일 입력 창
  var $parentsConsent = $('#parents-consent');         // 부모 동의 체크 상자
  var $consentContainer = $('#consent-container');     // 체크 상자 부모 요소

  // jQuery UI를 이용하여 날짜 선택기를 생성한다
  $birth.prop('type', 'text').data('type', 'date').datepicker({
    dateFormat: 'yy-mm-dd'
  });

  $birth.on('blur change', checkDate);                 // 이벤트 핸들러

  function checkDate() {                               // checkDate() 함수를 선언한다
    var dob = this.value.split('-');                   // 날짜를 배열로 만든다
    // toggleParentsConsent() 함수에 Date 객체를 전달한다
    toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
  }

  function toggleParentsConsent(date) {                 // 함수를 선언한다
    if (isNaN(date)) return;                            // 날짜가 유효하지 않으면 실행을 중단한다
    var now = new Date();                               // 새 Date 객체를 생성한다
    // 두 날짜의 차이가 13년 미만인지 확인한다 (ms * seconds * mins * hours * days * years)
    // 윤년은 고려하지 않는다
    // 사용자가 13세 미만이면 부모 동의 체크 상자를 보이게 한다
    if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) { 
      $consentContainer.removeClass('hide');            // hide 클래스를 제거한다
      $parentsConsent.focus();                          // 포커스를 지정한다
    } else {                                            // 그렇지 않으면
      $consentContainer.addClass('hide');               // hdie 클래스를 추가한다
      $parentsConsent.prop('checked', false);           // checked 속성에 false를 지정한다
    }
  }
}());
