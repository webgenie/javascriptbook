// 변수를 선언하고 값을 대입한다.
var inStock;
var shipping;
inStock = true;
shipping = false;

// id 특성 값이 stack인 요소를 찾는다.
var elStock = document.getElementById('stock');
// 찾은 요소의 클래스 이름을 변수의 값으로 변경한다.
elStock.className = inStock;

// id 특성 값이 shipping인 요소를 찾는다.
var elShip = document.getElementById('shipping');
// 찾은 요소의 클래스 이름을 변수의 값으로 변경한다.
elShip.className = shipping;