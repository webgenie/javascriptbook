var score1 = 8;   // 1회차 점수
var score2 = 8;   // 2회차 점수
var pass1 = 6;    // 1회차 합격 가능 점수
var pass2 = 6;    // 2회차 합격 가능 점수

// 사용자가 각 회차에 모두 합격했는지 검사하고 결과를 변수에 저장한다.
var passBoth = (score1 >= pass1) && (score2 >= pass2);

// 메시지를 생성한다.
var msg = '두 회차 모두 합격: ' + passBoth;

// 페이지에 메시지를 출력한다.
var el = document.getElementById('answer');
el.innerHTML = msg;
