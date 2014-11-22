var elements = document.getElementsByTagName('li'); // <li> 요소들을 찾는다.

if (elements.length > 0) {                          // 1개 이상의 요소가 발견되었는지 검사한다.

  var el = elements[0];            // 배열 문법을 이용하여 첫 번째 아이템을 선택한다.
  el.className = 'cool';           // 선택된 요소의 class 특성 값을 변경한다.

}
