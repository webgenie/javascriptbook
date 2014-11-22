function setup() {                                  // 함수를 선언한다 
  var textInput;                                    // 변수를 생성한다
  textInput = document.getElementById('username');  // username 입력 필드를 가져온다
  textInput.focus();                                // username 입력 필드에 포커스를 지정한다
}

window.addEventListener('load', setup, false); // 페이지가 로드되면 setup() 함수를 호출한다


/* IE8 (및 그 이전 버전)을 위한 코드

if (el.addEventListener) {
      el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onload', function(e){
      itemDone(e);
    });
}

*/
