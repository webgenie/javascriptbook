var firstItem = document.getElementById('one'); // 목록의 첫 번째 아이템을 가져온다.
if (firstItem.hasAttribute('class')) {          // 요소가 class 특성을 가지고 있는지 검사한다.
  var attr = firstItem.getAttribute('class');   // 특성 값을 가져온다.

  // 목록 아래에 특성의 값을 출력한다.
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>첫 번째 아이템의 클래스 이름은 ' + attr + '입니다.</p>';

}
