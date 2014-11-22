(function(){
  var form     = document.getElementById('interests'); // 폼을 가져온다 
  var elements = form.elements;                      // 폼의 모든 요소들을 가져온다
  var options  = elements.genre;                     // 장르 체크 상자 배열
  var all      = document.getElementById('all');     // '모두 선택' 체크 상자

  function updateAll() {
    for (var i = 0; i < options.length; i++) {       // 모든 체크 상자에 대해 루프를 실행한다
      options[i].checked = all.checked;              // checked 속성 값을 수정한다
      console.log(options[i].name);
    }
  }
  addEvent(all, 'change', updateAll);                // 이벤트 리스너를 추가한다

  function clearAllOption(e) {
    var target = e.target || e.srcElement;           // 이벤트가 발생한 요소를 가져온다
    if (!target.checked) {                           // 체크 되어 있지 않으면
      all.checked = false;                           // '모두 선택' 체크 상자를 해제한다
    }
  }
  for (var i = 0; i < options.length; i++) {         // 체크 상자에 대해 루프를 실행한다
    addEvent(options[i], 'change', clearAllOption);  // 이벤트 리스너를 추가한다
  }

}());
