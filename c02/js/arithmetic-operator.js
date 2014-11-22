// 변수를 선언하고 계산식을 실행한다.
var subtotal = (13 + 1) * 5; // 결과는 70이 된다.

// 변수를 선언하고 계산식을 수행한다.
var shipping = 0.5 * (13 + 1); // 결과는 7이 된다.

// 변수를 선언하고 두 변수의 값을 더한다.
var total = subtotal + shipping; // 결과는 77이 된다.

// 전체 결과를 화면에 출력한다.
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

// 주의: textContent 속성은 IE8 또는 그 이전 버전에서는 동작하지 않는다 - 웹사이트의 설명을 참고하기 바란다.
