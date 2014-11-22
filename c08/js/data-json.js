var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다

xhr.onload = function() {                       // readystate 값이 변경되면
  // 아래 조건식은 로컬 환경에서는 동작하지 않으며 서버가 있어야만 동작한다
  if(xhr.status === 200) {                      // 서버의 응답이 정상이면
    responseObject = JSON.parse(xhr.responseText);

    // 새로운 콘텐츠를 생성한다 (DOM 조작을 사용한다)
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // 루프를 실행한다
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // 새로운 콘텐츠로 페이지를 수정한다
    document.getElementById('content').innerHTML = newContent;

  }
};

xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다
xhr.send(null);                                 // 요청을 전송한다

// 주의: 파일을 로컬 환경에서 실행하면
// 서버의 상태를 가져올 수 없다.
// 이 경우 5번 줄의 조건식을 다음과 같이 변경한다
// if(true) {
