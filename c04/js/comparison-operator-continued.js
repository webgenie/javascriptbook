var score1 = 90;     // 첫 번째 응시 사용자 점수
var score2 = 95;     // 두 번째 응시 사용자 점수 
var highScore1 = 75; // 첫 번째 응시 최고 점수 
var highScore2 = 95; // 두 번째 응시 최고 점수 

// 사용자의 점수가 현재의 최고 점수보다 높은지 검사한다.
var comparison = (score1 + score2) > (highScore1 + highScore2);

// 페이지에 메시지를 출력한다.
var el = document.getElementById('answer');
el.innerHTML = '신기록 달성: ' + comparison;
