var firstItem = document.getElementById('one'); // 목록의 첫 번째 아이템을 선택한다.
if (firstItem.hasAttribute('class')) {          // class 특성이 존재하는지 확인한다.
  firstItem.removeAttribute('class');           // class 특성을 제거한다.
}
