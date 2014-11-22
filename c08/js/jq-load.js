$('nav a').on('click', function(e) {                 // 사용자가 링크를 클릭한다
  e.preventDefault();                                // 새 링크의 기본 동작을 취소한다
  var url = this.href;                               // href 특성 값을 가져온다

  $('nav a.current').removeClass('current');         // 현재 페이지 표시를 제거한다
  $(this).addClass('current');                       // 새 링크에 현재 페이지 표시를 적용한다

  $('#container').remove();                          // 이전 페이지의 콘텐츠를 제거한다
  $('#content').load(url + ' #content').hide().fadeIn('slow'); // 새 콘텐츠를 추가한다
});