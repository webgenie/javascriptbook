var i = 1;       // 카운터 변수에 1을 설정한다.
var msg = '';    // 메시지 

// 구구단의 5단을 변수에 저장한다.
do {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
} while (i < 1); 
// i 변수에 이미 1을 대입했지만 코드가 실행된 점에 유의하자.

document.getElementById('answer').innerHTML = msg;
