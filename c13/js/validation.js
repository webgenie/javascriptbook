// 자바스크립트 유효성 검사
// A. submit 이벤트가 발생하면 익명 함수를 호출한다
// B. 익명 함수를 통해 A 섹션의 기본 검사를 수행하는 함수들을 호출한다
// C. 익명 함수를 통해 A 섹션의 추가 검사를 수행하는 함수들을 호출한다
// D. 에러메시지를 가져오는/설정하는/보여주는/제거하는 함수들을 정의한다
// E. validateType 함수를 통해 B 섹션의 데이터의 타입을 정규표현식을 통해 검사하는 객체를 구현한다


// 의존성: jQuery, jQueryUI, birthday.js, styles.css

(function () {
  document.forms.register.noValidate = true; // HTML5 유효성 감사를 비활성화하고 자바스크립트를 사용한다
  // -------------------------------------------------------------------------
  //  A) submit 이벤트를 통해 실행되는 익명 함수
  // -------------------------------------------------------------------------
  $('form').on('submit', function (e) {      // 폼이 전송되면
    var elements = this.elements;            // 폼 컨트롤의 컬렉션
    var valid = {};                          // valid 객체
    var isValid;                             // isValid: 폼 컨트롤의 유효성 여부
    var isFormValid;                         // isFormValid: 폼 전체의 유효성 여부

	// 기본 검사를 수행한다 (이벤트 핸들러 바깥에 정의된 함수를 호출한다)
    var i;
    for (i = 0, l = elements.length; i < l; i++) {
      // 아래 코드는 validateRequired()와 validateTypes()를 모두 호출한다
      isValid = validateRequired(elements[i]) && validateTypes(elements[i]); 
      if (!isValid) {                    // 두 유효성 검사가 실패하면
        showErrorMessage(elements[i]);   // 에러 메시지를 보여준다
      } else {                           // 그렇지 않으면
        removeErrorMessage(elements[i]); // 에러 메시지를 제거한다
      }                                  // if 구문 종료
      valid[elements[i].id] = isValid;   // valid 객체에 요소를 추가한다
    }                                    // for 루프 종료

	// 추가 검사를 실행한다
	// 자기소개 (입력된 값은 캐싱해도 된다)
    if (!validateBio()) {                // validateBio() 함수를 호출한다
      showErrorMessage(document.getElementById('bio')); // 오류 메시지를 표시한다
      valid.bio = false;                 // valid 객체를 수정한다 - 객체가 유효하지 않다
    } else {                             // 그렇지 않으면 에러 메시지를 제거한다
      removeErrorMessage(document.getElementById('bio'));
    }

	// 비밀 번호 (입력된 값은 캐싱해도 된다)
    if (!validatePassword()) {          // validatePassword() 함수를 호출한다
      showErrorMessage(document.getElementById('password')); // 오류 메시지를 표시한다
      valid.password = false;           // valid 객체를 수정한다 - 객체가 유효하지 않다
    } else {                            // 그렇지 않으면 에러 메시지를 제거한다 
      removeErrorMessage(document.getElementById('password'));
    }

	// 부모 동의 (입력 값은 캐싱해도 된다)
    if (!validateParentsConsent()) {     // validateParentalConsent() 함수를 호출한다
      showErrorMessage(document.getElementById('parents-consent')); // 오류 메시지를 표시한다
      valid.parentsConsent = false;      // valid 객체를 수정한다 - 객체가 유효하지 않다
    } else {                             // 그렇지 않으면 에러 메시지를 제거한다
      removeErrorMessage(document.getElementById('parents-consent'));
    }

	// 유효성 검사를 통과했는가?
    // valid 객체에 대해 루프를 실행하고 오류가 있으면 isFormValid 변수에 false를 지정한다
    for (var field in valid) {          // valid 객체의 속성을 검사한다
      if (!valid[field]) {              // 객체가 유효하지 않으면
        isFormValid = false;            // isFormValid 변수에 false를 지정한다
        break;                          // for 루프를 중단한다
      }                                 // 그렇지 않으면
      isFormValid = true;               // 폼이 유효하므로 서버로 전송한다
    }


	// 폼이 유효하지 않으면 전송을 중단한다
    if (!isFormValid) {                 // isFormValid 변수 값이 false이면 
      e.preventDefault();               // 폼 전송을 중단한다
    }

  });                                   // 이벤트 핸들러 종료
  // 끝: submit 이벤트가 호출하는 익명 함수


  // -------------------------------------------------------------------------
  // B) 기본 검사를 수행하는 함수들
  // -------------------------------------------------------------------------

  // 필수 필드이면서 값을 가지고 있지 않은지를 검사한다
  // isRequired(), isEmpty(), setErrorMessage() 함수를 활용한다
 function validateRequired(el) {
    if (isRequired(el)) {                           // 필수 요소인가?
      var valid = !isEmpty(el);                     // 값이 비어있지 않은가?
      if (!valid) {                                 // valid 변수 값이 false이면
        setErrorMessage(el,  '필수 입력 필드입니다');  // 오류 메시지를 설정한다
      }
      return valid;                                 // valid 변수를 리턴한다
    }
    return true;                                    // 필수 필드가 아니면 true를 리턴한다
  }

  // 필수 요소인지 확인한다
  // validateRequired() 함수가 호출한다
  function isRequired(el) {
   return ((typeof el.required === 'boolean') && el.required) ||
     (typeof el.required === 'string');
  }

  // 요소가 빈 값을 가지고 있는지 확인한다
  // HTML5 브라우저들은 안내 문구와 동일한 값을 입력하는 것을 허용하지만 이번 예제는 그렇지 않다
  // validateRequired() 함수가 호출한다
  function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
  }

  // type 특성에 적합한 값을 가졌는지 검사한다
  // validateType 객체를 활용한다
  function validateTypes(el) {
    if (!el.value) return true;                     // 요소에 값이 없으면 true를 리턴한다
                                                    // 그렇지 않으면 .data() 메서드를 호출해 값을 가져온다
    var type = $(el).data('type') || el.getAttribute('type');  // 또는 input 요소의 type 특성 값을 가져온다
    if (typeof validateType[type] === 'function') { // type 변수가 함수이면
      return validateType[type](el);                // 유효성 검사를 수행한다
    } else {                                        // 그렇지 않으면
      return true;                                  // true를 리턴한다
    }
  }

  // -------------------------------------------------------------------------
  // C) 추가 검사 함수들
  // -------------------------------------------------------------------------

  // 사용자의 나이가 13세 미만이면 부모 동의 체크 상자를 검사한다
  // 의존성: birthday.js
  function validateParentsConsent() {
    var parentsConsent   = document.getElementById('parents-consent');
    var consentContainer = document.getElementById('consent-container');
    var valid = true;                          // 변수:  valid 변수에 true를 지정한다
    if (consentContainer.className.indexOf('hide') === -1) { // 체크 상자가 보이면
      valid = parentsConsent.checked;          // 체크 상자가 체크 되어 있는지 여부를 저장한다
      if (!valid) {                            // 그렇지 않으면 오류 메시지를 표시한다
        setErrorMessage(parentsConsent, '부모님의 동의가 필요합니다');
      }
    }
    return valid;                               // 유효성 여부를 리턴한다
  }

  // 자기 소개가 140자를 넘지 않는지 검사한다
  function validateBio() {
    var bio = document.getElementById('bio');
    var valid = bio.value.length <= 140;
    if (!valid) {
      setErrorMessage(bio, '자기 소개는 140자를 넘을 수 없습니다');
    }
    return valid;
  }

  // 비밀 번호가 8글자 이상이며 두 비밀 번호가 일치하는지 확인한다
  function validatePassword() {
    var password = document.getElementById('password');
    var valid = password.value.length >= 8;
    if (!valid) {
      setErrorMessage(password, '비밀번호는 8자 이상이어야 합니다');
    }
    return valid;
  }



  // -------------------------------------------------------------------------
  // D) 오류 메시지 관련 함수들
  // -------------------------------------------------------------------------

  function setErrorMessage(el, message) {
    $(el).data('errorMessage', message);                 // 요소에 오류 메시지를 저장한다
  }

  function getErrorMessage(el) {
    return $(el).data('errorMessage') || el.title;       // 오류 메시지나 요소의 제목을 가져온다
  }

  function showErrorMessage(el) {
    var $el = $(el);                                     // 오류가 있는 요소
    var errorContainer = $el.siblings('.error.message'); // 오류 메시지를 보여줄 요소

    if (!errorContainer.length) {                         // 오류가 발생한 요소가 없으면
       // 오류 메시지를 보여줄 <span> 요소를 추가한다
       errorContainer = $('<span class="error message"></span>').insertAfter($el);
    }
    errorContainer.text(getErrorMessage(el));             // 오류 메시지를 표시한다
  }

  function removeErrorMessage(el) {
    var errorContainer = $(el).siblings('.error.message'); // 오류 메시지를 출력하는 요소를 가져온다
    errorContainer.remove();                               // 해당 요소를 제거한다
  }



  // -------------------------------------------------------------------------
  // E) 형식을 검사하는 객체
  // -------------------------------------------------------------------------

  // 데이터가 유효며 오류 메시지가 설정되지 않았는지 검사한다
  // 유효하면 true를, 그렇지 않으면 false를 리턴한다
  var validateType = {
    email: function (el) {                                 // email() 메서드를 정의한다
	  // 입력된 값에 @기호가 있는지 검사하는 정규 표현식
      var valid = /[^@]+@[^@]+/.test(el.value);            // 검사 결과를 valid 변수에 저장한다
      if (!valid) {                                        // valid 변수 값이 false이면
        setErrorMessage(el, '올바른 메일 주소를 입력하세요'); // 오류 메시지를 설정한다
      }
      return valid;                                        // valid 변수 값을 리턴한다
    },
    number: function (el) {                                // number() 메서드를 정의한다
      var valid = /^\d+$/.test(el.value);                  // 검사 결과를 valid 변수에 저장한다
      if (!valid) {
        setErrorMessage(el, '올바른 숫자를 입력하세요');
      }
      return valid;
    },
    date: function (el) {                                  // date() 메서드를 정의한다 
                                                           // 검사 결과를 valid 변수 저장한다
      var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
      if (!valid) {                                        // valid 변수 값이 false이면
        setErrorMessage(el, '올바른 날짜를 입력하세요');         // 오류 메시지를 설정한다
      }
      return valid;                                        // valid 변수 값을 리턴한다
    }
  };

}());  
