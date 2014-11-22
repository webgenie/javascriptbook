// 변수를 선언한 후 해석기에게 이 변수가 배열임을 알려준다.
// 그런 후 괄호 안에 배열의 값을 나열한다 
var colors = new Array('white', 'black','custom');
// 배열의 첫 번째 아이템을 출력한다.
var el = document.getElementById('colors');
el.textContent = colors[0];

// 주의: textContent 속성은 IE8 또는 그 이전 버전에서 동작하지 않는다 - 웹사이트의 설명을 참고하기 바란다.
