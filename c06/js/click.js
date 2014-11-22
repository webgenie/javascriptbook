// 메시지를 위한 HTML 코드를 작성한다
var msg = '<div class=\"header\"><a id=\"close\" href="#">닫기 X</a></div>';
msg += '<div class=\"message\"><h2>정기 점검 중입니다</h2>';
msg += '오전 3시~4시 사이에 서버 점검이 있습니다.<br/>';
msg += '이 시간 동안에는 서비스 이용이 불가능합니다.</div>';

var elNote = document.createElement('div');       // 새 요솔ㄹ 생성한다
elNote.setAttribute('id', 'note');                // id 특성을 추가한다
elNote.innerHTML = msg;                           // 메시지를 출력한다
document.body.appendChild(elNote);                // 공지를 페이지에 추가한다

function dismissNote() {                          // 함수를 정의한다
  document.body.removeChild(elNote);              // 공지사항 레이어를 제거한다
}

var elClose = document.getElementById('close');   // 닫기 버튼을 찾는다
elClose.addEventListener('click', dismissNote, false);// 닫기 버튼이 클릭되면 공지사항 레이어를 제거한다