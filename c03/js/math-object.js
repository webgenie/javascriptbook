// 1부터 10 사이의 임의의 값을 저장할 변수를 선언한다.
var randomNum = Math.floor((Math.random() * 10) + 1);

// id 특성 값이 info인 요소를 찾아 el 변수에 저장한다.
var el = document.getElementById('info');
// 요소에 숫자를 출력한다.
el.innerHTML = '<h2>임의의 숫자</h2><p>' + randomNum + '</p>';