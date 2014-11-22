var msg;        // 메시지
var level = 2;  // 레벨

// 레벨에 따라 메시지를 결정한다.
switch (level) {
case 1:
    msg = '첫 번째 단계입니다. 행운을 빕니다!';
    break;

case 2:
    msg = '3단계 중 두 번째 단계를 완료했습니다. 힘내세요!';
    break;

case 3:
    msg = '마지막 단계입니다. 이제 막바지에요!';
    break;

default:
    msg = '행운을 빕니다!';
    break;
}

document.getElementById('answer').innerHTML = msg;
