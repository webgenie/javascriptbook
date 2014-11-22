// 페이지에 출력할 메시지를 저장하는 msg라는 이름의 변수를 선언한다.
// 문서의 제목을 찾아 msg 변수에 저장한다.
var msg = '<p><b>페이지 제목: </b>' + document.title + '<br />';
// 문서의 URL을 찾아 msg 변수에 저장한다.
//msg += '<b>페이지 주소: </b>' + document.URL + '<br />';
msg += '<b>페이지 주소: </b>http://www.javascriptbook.com/code/ch03/document-object.html<br />';
// 문서의 가장 최근 수정일을 찾아 msg 변수에 저장한다.
msg += '<b>최종 수정일: </b>' + document.lastModified + '</p>';

// el이라는 변수에 id 특성 값이 info인 요소를 저장한다.
var el = document.getElementById('footer');
// 찾은 요소에 메시지를 출력한다.
el.innerHTML = msg;