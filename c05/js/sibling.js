// 기준 요소를 찾은 후 그 이웃 요소들을 찾는다.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// 이웃 요소들의 class 특성 값을 변경한다.
prevItem.className = 'complete';
nextItem.className = 'cool';
