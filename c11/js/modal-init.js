(function(){
  var $content = $('#share-options').detach();   // 페이지에서 콘텐츠를 제거한다

  $('#share').on('click', function() {           // 모달 창을 열기 위한 click 이벤트 핸들러
    modal.open({content: $content, width:340, height:300});
  });
}());
