(function () {
  var bio      = document.getElementById('bio'),        // <textarea> 요소
      bioCount = document.getElementById('bio-count');  // 글자 수 요소

  addEvent(bio, 'focus', updateCounter);       // updateCounter() 함수를 호출한다
  addEvent(bio, 'input', updateCounter);       // updateCounter() 함수를 호출한다

  addEvent(bio, 'blur', function () {          // 객체가 포커스를 잃으면
    if (bio.value.length <= 140) {             // 입력된 글자 수가 제한을 초과하지 않으면
      bioCount.className = 'hide';             // 카운터를 숨긴다
    }
  });

  function updateCounter(e) {
    var target = e.target || e.srcElement;      // 이벤트가 발생한 요소를 가져온다
    var count = 140 - target.value.length;      // 남은 글자 수를 계산한다
    if (count < 0) {                            // 남은 글자 수가 0보다 작다면
      bioCount.className = 'error';             // error 클래스를 추가한다
    } else if (count <= 15) {                   // 남은 글자 수가 15 자 이하면
      bioCount.className = 'warn';              // warn 클래스를 추가한다
    } else {                                    // 그렇지 않으면
      bioCount.className = 'good';              //  good 클래스를 추가한다
    }
    var charMsg = '<b>' + count + '</b>' + ' 글자'; // 표시할 메시지
    bioCount.innerHTML = charMsg;               // 메시지를 표시한다
  }

}());
