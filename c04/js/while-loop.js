var i = 1;       // 카운터 변수의 값을 1로 설정한다.
var msg = '';    // 메시지

// 구구단의 5단을 변수에 저장한다.
while (i < 10) {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
}

document.getElementById('answer').innerHTML = msg;
