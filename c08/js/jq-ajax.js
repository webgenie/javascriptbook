$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                      // 로드할 URL
  var $content = $('#content');                             // 객체 집합을 저장한다

  $('nav a.current').removeClass('current');                // 링크를 수정한다
  $(this).addClass('current');
  $('#container').remove();                                 // 콘텐츠를 제거한다

  $.ajax({
    type: "POST",                                           // GET이나 POST 중 하나를 지정한다
    url: url,                                               // 경로를 지정한다
    timeout: 2000,                                          // 대기 시간을 설저한다
    beforeSend: function() {                                // Ajax 요청을 전송하기 전
      $content.append('<div id="load">로드 중</div>');        // 로딩 중 메시지를 표시한다
    },
    complete: function() {                                  // 요청이 완료되면
      $('#loading').remove();                               // 로딩 중 메시지를 제거한다
    },
    success: function(data) {                               // 콘텐츠를 표시한다
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    fail: function() {                                      // 에러 메시지를 표시한다
      $('#panel').html('<div class="loading">잠시 후에 다시 시도해 주세요.</div>');
    }
  });

});