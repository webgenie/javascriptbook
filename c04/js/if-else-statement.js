var pass = 50;      // 합격 가능 점수
var score = 75;    // 현재 점수
var msg;            // 메시지

// 점수를 토대로 메시지를 선택한다.
if (score > pass) {
  msg = '축하합니다, 합격입니다!';
} else {
  msg = '다시 한 번!';
}

var el = document.getElementById('answer').innerHTML = msg;
