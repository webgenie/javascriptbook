// 숫자를 저장할 변수를 선언한다.
var originalNumber = 10.23456;
// 페이지에 보여질 메시지를 저장할 변수를 선언한다.
var msg = '<h2>원래 숫자</h2><p>' + originalNumber + '</p>';
// 소숫점 이하 세 자리까지 반올림한 후 결과를 msg 변수에 저장한다. 
msg += '<h2> 소숫점 반올림</h2><p>' + originalNumber.toFixed(3); + '</p>';
// 총 세 자리까지의 숫자를 반올림한 후 그 결과를 msg 변수에 저장한다.
msg += '<h2>3자리 반올림</h2><p>' + originalNumber.toPrecision(3) + '</p>';

// id 특성 값이 info인 요소를 찾아 el 변수에 저장한다.
var el = document.getElementById('info');
// 요소에 메시지를 출력한다.
el.innerHTML = msg;