var pass = 50;   // 합격 기준 점수
var score = 90;  // 실제 점수

// 사용자가 시험에 합격했는지를 검사한다.
var hasPassed = score >= pass;

// 페이지에 메시지를 출력한다.
var el = document.getElementById('answer');
el.innerHTML = '합격 여부: ' + hasPassed;
