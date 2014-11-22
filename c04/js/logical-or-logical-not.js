var score1 = 8;   // 1회차 점수
var score2 = 8;   // 2회차 점수
var pass1 = 6;    // 1회차 합격 가능 점수
var pass2 = 6;    // 2회차 합격 가능 점수

// 사용자가 시험에 합격했는지를 검사한 후 결과를 변수에 저장한다.
var minPass = (score1 >= pass1) || (score2 >= pass2);

// 메시지를 생성한다.
var msg = '재시험 필요: ' + !(minPass);

// 메시지를 페이지에 출력한다.
var el = document.getElementById('answer');
el.innerHTML = msg;
