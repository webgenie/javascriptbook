// 페이지에 출력할 메시지를 저장하는 msg라는 이름의 변수를 선언한다.
// 브라우저 창의 너비를 찾아 msg 변수에 저장한다.
var msg = '<h2>브라우저 창 </h2><p>너비: ' + window.innerWidth + '</p>';
// 창의 높이를 찾아 msg 변수에 저장한다.
msg += '<p>높이: ' + window.innerHeight + '</p>';
// 브라우저 창의 히스토리에 저장된 페이지의 갯수를 msg 변수에 저장한다.
msg += '<h2>히스토리</h2><p>아이템: ' + window.history.length + '</p>';
// 컴퓨터 화면의 너비를 찾아 msg 변수에 저장한다.
msg += '<h2>화면</h2><p>너비: ' + window.screen.width + '</p>';
// 컴퓨터 화면의 높이를 찾아 msg 변수에 저장한다.
msg += '<p>높이: ' + window.screen.height + '</p>';

// el이라는 변수에 id 특성 값이 info인 요소를 저장한다.
var el = document.getElementById('info');
// 메시지를 요소에 출력한다.
el.innerHTML = msg;
// 현재 페이지의 위치를 찾아 경고창에 출력한다.
alert('현재 페이지: ' + window.location);
