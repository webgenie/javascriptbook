var score = 75;    // 점수
var msg = '';      // 메시지

function congratulate() {
    msg += '축하합니다! ';
}

if (score >= 50) {  // 점수가 50점보다 같거나 높으면
  congratulate();
  msg += '<br/>다음 단계를 진행합니다.';
}

document.getElementById('answer').innerHTML = msg;
