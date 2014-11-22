$(function() {                                  // DOM이 로드되면 동작한다 
  function loadContent(url){                    // 페이지에 새로운 콘텐츠를 로드한다
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {          // click 이벤트 핸들러
    e.preventDefault();                         // 기본 동작을 취소한다
    var href = this.href;                       // href 특성에서 링크를 가져온다
    var $this = $(this);                        // 링크를 jQuery 객체에 저장한다
    $('a').removeClass('current');              // 링크에서 current 클래스를 제거한다
    $this.addClass('current');                  // 현재 링크 표시를 수정한다
    loadContent(href);                          // loadContent 함수를 호출한다
    history.pushState('', $this.text, href);    // 히스토리를 수정한다
  });

  window.onpopstate = function() {              // 이번/다음 버튼의 동작을 처리한다
    var path = location.pathname;               // 파일 경로를 가져온다
    loadContent(path);                          // 페이지를 로드한다
￼￼￼￼var page = path.substring(location.pathname.lastIndexOf("/") + 1);
    $('a').removeClass('current');              // 링크에서 current 클래스를 제거한다
    $('[href="' + page + '"]').addClass('current'); // 현재 링크 표시를 수정한다
  };
});