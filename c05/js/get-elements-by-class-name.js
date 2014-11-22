var elements = document.getElementsByClassName('hot'); // hot 아이템들만 찾는다.

if (elements.length > 2) {                            // 아이템이 세 개 이상 탐색되었는지 확인한다.

  var el = elements[2];              // NodeList 객체에서 세 번째 아이템을 선택한다.
  el.className = 'cool';             // 선택된 요소의 class 특성 값을 변경한다.

}
