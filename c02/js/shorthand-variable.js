// 첫 번째 방법
var price = 5;
var quantity = 14;
var total = price * quantity;

/* 두 번째 방법
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/* 세 번째 방법
var price = 5, quantity = 14;
var total = price * quantity;
*/

// id 특성 값이 cost인 요소에 전체 금액을 출력한다.
var el = document.getElementById('cost');    // id 특성 값이 cost인 요소를 찾는다.
el.textContent = '$' + total;                // 해당 요소의 콘텐츠를 수정한다.


// 주의: textContent 속성은 IE8 혹은 그 이전 버전에서 동작하지 않는다. - 웹사이트의 설명을 참고하기 바란다.
