$(function() {                                    // DOM이 로드되면 실행한다

  var times;                                      // 전역 변수를 선언한다
  $.ajax({
    beforeSend: function(xhr) {                   // 요청을 전송하기 전에 실행
      if (xhr.overrideMimeType) {                 // 지원되면
        xhr.overrideMimeType("application/json"); // 오류를 방지하기 위해 MIME 타입을 설정한다
      }
    }
  });

  // JSON 파일에서 데이터를 수집하는 함수
  function loadTimetable() {                    // 함수를 선언한다
    $.getJSON('data/example.json')              // JSON 데이터를 수집한다
    .done( function(data){                      // 데이터를 가져왔으면
      times = data;                             // 변수에 저장한다
    }).fail( function() {                       // 문제가 있으면 오류를 표시한다
      $('#event').html('데이터를 가져오지 못했습니다.');
    });
  }

  loadTimetable();                              // 함수를 호출한다


  // 행사를 클릭하면 시간표를 가져온다
  $('#content').on('click', '#event a', function(e) {  // 행사를 클릭했으면

    e.preventDefault();                                // 페이지 이동을 취소한다
    var loc = this.id.toUpperCase();                   // id 특성 값을 가져온다

    var newContent = '';                               // 시간표를 생성한다
    for (var i = 0; i < times[loc].length; i++) {      // 루프를 실행한다
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>'); // 페이지에 시간표를 출력한다

    $('#event a.current').removeClass('current');       // 현재 메뉴를 수정한다
    $(this).addClass('current');

    $('#details').text('');                             // 세 번째 열을 비운다
  });

  // 세션을 클릭하면 상세 정보를 보여준다
  $('#content').on('click', '#sessions li a', function(e) { // 세션을 클릭하면
    e.preventDefault();                                     // 페이지 이동을 취소한다
    var fragment = this.href;                               // 경로를 가져온다

    fragment = fragment.replace('#', ' #');                 // # 앞에 공백을 추가한다
    $('#details').load(fragment);                           // 상세 정보를 로드한다
    $('#sessions a.current').removeClass('current');        // 현재 메뉴를 수정한다
    $(this).addClass('current');
  });


  // 상단 네비게이션을 처리한다
  $('nav a').on('click', function(e) {                       // 상단 메뉴를 클릭하면
    e.preventDefault();                                      // 페이지 이동을 취소한다
    var url = this.href;                                     // 로드할 페이지의 URL을 가져온다

    $('nav a.current').removeClass('current');               // 현제 페이지 표시를 수정한다
    $(this).addClass('current');

    $('#container').remove();                                // 이전 콘텐츠를 지운다
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // 새 콘텐츠를 추가한다
  });

});