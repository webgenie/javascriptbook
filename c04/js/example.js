var table = 3;             // 계산에 사용될 숫자
var operator = 'addition'; // 계산의 종류
var i = 1;                 // 카운터 변수에 1을 설정한다.
var msg = '';              // 메시지

if (operator === 'addition') {
  // 덧셈을 수행한다.
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
} else {
  // 곱셈을 수행한다.
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// 페이지에 메시지를 출력한다.
var el = document.getElementById('blackboard');
el.innerHTML = msg;
