function showEvents(data) {                           // JSON 데이터가 로드되었는지 확인한다
  var newContent = '';                                // HTML을 저장할 변수
 
    // 새로운 콘텐츠를 생성한다 (DOM 조작을 사용한다)
    for (var i = 0; i < data.events.length; i++) {    // 루프를 실행한다
      newContent += '<div class="event">';
      newContent += '<img src="' + data.events[i].map + '" ';
      newContent += 'alt="' + data.events[i].location + '" />';
      newContent += '<p><b>' + data.events[i].location + '</b><br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';
    }

    // 새로운 콘텐츠로 페이지를 수정한다
    document.getElementById('content').innerHTML = newContent;
}