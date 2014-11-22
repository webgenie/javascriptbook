// 이름과 메시지를 저장할 변수를 선언한다.
var username;
var message;

// 변수에 값을 대입한다.
username = '웹지니';
message = '우리의 변화에 주목하라';

// id 특성 값이 name인 요소를 찾는다.
var elName = document.getElementById('name');
// 찾은 요소의 콘텐츠를 수정한다.
elName.textContent = username;

// id 특성 값이 note인 요소를 찾는다.
var elNote = document.getElementById('note');
// 찾은 요소의 콘텐츠를 수정한다.
elNote.textContent = message;

// 주의: textContent 속성은 IE8 및 그 이전 버전에서는 제대로 동작하지 않는다 - 웹사이트의 설명을 참고하기 바란다.
