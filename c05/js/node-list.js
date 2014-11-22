var hotItems = document.querySelectorAll('li.hot'); // NodeList 객체를 변수에 저장한다.
if (hotItems.length > 0) {                          // 발견된 요소가 존재하는지 확인한다.

  for (var i = 0; i < hotItems.length; i++) {       // 각 아이템마다 루프를 실행한다.
    hotItems[i].className = 'cool';					// class 특성 값을 변경한다.
  }

}
