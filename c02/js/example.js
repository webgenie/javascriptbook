// 환영 메시지를 저장할 변수를 선언한다.
var greeting = '안녕하세요, ';
var name = '웹지니';
var message = ', 주문 내역을 확인해 주세요:';

// 세 변수 값을 결합하여 환영 메시지를 만든다.
var welcome = greeting + name + message;

// 명찰의 상세 정보를 저장할 변수를 선언한다.
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// id 특성 값이 greeting인 요소를 찾는다.
var el = document.getElementById('greeting');
// 환영 메시지를 출력한다.
el.textContent = welcome;

// id 특성 값이 userSign인 요소를 찾아 내용을 수정한다.
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// id 특성 값이 tiles인 요소를 찾아 내용을 수정한다.
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// id 특성 값이 subTotal인 요소를 찾아 내용을 수정한다.
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

// id 특성 값이 shipping인 요소를 찾아 내용을 수정한다.
var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = '$' + shipping;

// id 특성 값이 grandTotal인 요소를 찾아 내용을 수정한다.
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

// 주의: textContent 속성은 IE8 혹은 그 이전 버전에서는 동작하지 않는다 - 웹사이트의 설명을 참고하기 바란다.
