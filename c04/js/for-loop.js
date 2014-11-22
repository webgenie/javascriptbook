var scores = [24, 32, 17];      // 점수의 배열
var arrayLength = scores.length;// 배열 내의 아이템의 갯수
var roundNumber = 0;            // 현재 응시 회차
var msg = '';                   // 메시지

// 배열의 아이템 갯수만큼 루프를 실행한다.
for (var i = 0; i < arrayLength; i++) {

  // 배열의 인덱스는 0부터 시작한다 (따라서 0이 1회차를 의미한다.)
  // 현재 회차에 1을 더한다.
  roundNumber = (i + 1);

  // 현재 회차를 메시지에 추가한다.
  msg += '응시회차 ' + roundNumber + ': ';

  // 점수 배열에서 점수를 얻어온다.
  msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;
