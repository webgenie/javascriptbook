// 필요한 정보를 저장할 세 개의 변수를 선언한다.
var price;
var quantity;
var total;

// price 변수와 quantity 변수에 값을 대입한다.
price = 5;
quantity = 14;

// privce 변수와 quantity 변수의 값을 곱하여 전체 금액을 계산한다.
total = price * quantity;

// id 특성 값이 cost인 요소를 찾는다.
var el = document.getElementById('cost');
el.textContent = '$' + total;

// 주의: textContent 속성은 IE8 및 그 이전 버전에서는 제대로 동작하지 않는다 - 웹사이트의 설명을 참고하기 바란다.
