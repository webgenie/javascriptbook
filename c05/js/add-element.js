// 새로운 요소를 생성하여 변수에 저장한다.
var newEl = document.createElement('li');

// 텍스트 노드를 생성한 후 변수에 저장한다.
var newText = document.createTextNode('퀴노아');

// 새로 생성한 텍스트 노드를 새 요소에 추가한다.
newEl.appendChild(newText);

// 새 요소가 추가될 위치를 선정한다.
var position = document.getElementsByTagName('ul')[0];

// 새로운 요소를 해당 위치에 추가한다.
position.appendChild(newEl);
