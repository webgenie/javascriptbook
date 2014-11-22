// 인삿말을 변수에 저장한다.
var greeting = '안녕하세요, ';

// 사용자의 이름을 변수에 저장한다.
var name = '웹지니';

// 두 변수의 값을 결합하여 환영 메시지에 사용할 문자열을 만든다.
var welcomeMessage = greeting + name + '!';

// id 특성 값이 greeting인 요소를 찾는다.
var el = document.getElementById('greeting');

// 찾은 요소의 콘텐츠를 환영 메시지로 변경한다.
el.textContent = welcomeMessage;

// 주의: textContent 속성은 IE8 혹은 그 이전 버전에서는 동작하지 않는다 - 웹사이트의 설명을 참고하기 바란다.
