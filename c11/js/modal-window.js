var modal = (function() {                         // modal 객체를 선언한다

  var $window = $(window),                        // window 객체를 저장한다
      $modal = $('<div class="modal"/>'),         // 모달 창을 위한 마크업을 생성한다
      $content = $('<div class="modal-content"/>'),
      $close = $('<button role="button" class="modal-close">닫기</button>');

  $modal.append($content, $close);                // 모달 창에 닫기 버턴을 추가한다

  $close.on('click', function(e){                 // 사용자가 닫기 버튼을 클릭하면
    e.preventDefault();                           // 링크의 기본 동작을 취소한다
    modal.close();                                // 모달 창을 닫는다
  });

  return {                                        // modal 객체에 코드를 추가한다
    center: function() {                          // center() 메서드를 정의한다 
      // 브라우저 창의 위쪽과 왼쪽으로부터 모달 창까지의 거리를 계산한다
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2,
          left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({                                // 모달 창에 CSS 속성을 지정한다
        top:top + $window.scrollTop(),            // 세로 위치를 지정한다
        left:left + $window.scrollLeft()          // 가로 위치를 지정한다
      });
    },
    open: function(settings) {                     // open() 메서드를 정의한다 
      $content.empty().append(settings.content);   // 모달 창에 새로운 콘텐츠를 추가한다

      $modal.css({                                 // 모달 창의 크기를 지정한다
        width: settings.width || 'auto',           // 너비를 지정한다
        height: settings.height || 'auto'          // 높이를 지정한다
      }).appendTo('body');                         // 페이지에 추가한다

      modal.center();                              // center() 메서드를 호출한다
      $(window).on('resize', modal.center);        // 브라우저 창의 크기가 변경되면 다시 호출한다
    },
    close: function() {                            // close() 메서드를 정의한다
      $content.empty();                            // 모달 창의 콘텐츠를 제거한다
      $modal.detach();                             // 모달 창을 페이지에서 제거한다
      $(window).off('resize', modal.center);       // 이벤트 핸들러를 제거한다
    }
  };
}());
