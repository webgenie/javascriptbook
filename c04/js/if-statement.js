var score = 75;     // 점수
var msg;            // 메시지 

if (score >= 50) {  // 만일 점수가 50점보다 높으면
  msg = '축하합니다!<br/>';
  msg += ' 다음 단계를 진행합니다.';
}

document.getElementById('answer').innerHTML = msg;
