// 탐색을 시작할 요소를 선택한 후 그 자식 요소들을 찾는다.
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// 자식 요소들의 class 특성 값을 변경한다.
firstItem.className = 'complete';
lastItem.className = 'cool';
