// 제거할 요소를 변수에 저장한다.
var removeEl = document.getElementsByTagName('li')[3];

// 제거할 요소의 부모 요소를 찾는다.
var containerEl = document.getElementsByTagName('ul')[0];

// 요소를 제거한다.
containerEl.removeChild(removeEl);
