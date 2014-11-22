var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // 변수를 선언한다
elForm          = document.getElementById('formSignup');          // 요소를 저장한다
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                                 // 함수를 선언한다
  var package = this.options[this.selectedIndex].value;   // 선택된 항목을 알아낸다
  if (package === 'monthly') {                            // 월 단위 패키지를 선택했으면
    elPackageHint.innerHTML = '1년 패키지를 사용하시면 10불을 절약할 수 있습니다!';// 이 메시지를 보여준다
  } else {                                               // 그렇지 않으면
    elPackageHint.innerHTML = '탁월한 선택입니다!';            // 이 메시지를 보여준다
  }
}

function checkTerms(event) {                             // 함수를 선언한다
  if (!elTerms.checked) {                                // 체크 박스를 선택했으면
    elTermsHint.innerHTML = '사용권 계약에 동의해야 합니다'; // 메시지를 보여준다
    event.preventDefault();                              // 폼을 전송하지 않는다
  }
}

// 이벤트 리스너를 생성한다. submit 이벤트가 발생하면 checkTerms() 함수를 호출하고, change 이벤트가 발생하면 packageHint() 함수를 호출한다
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);