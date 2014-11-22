$('.tab-list').each(function(){                   // 모든 탭을 찾는다
  var $this = $(this),                            // 현재 목록을 저장한다
      $tab = $this.find('li.active'),             // 활성화된 아이템을 찾는다
      $link = $tab.find('a'),                     // 활성화된 탭의 링크를 가져온다
      $panel = $($link.attr('href'));             // 활성화된 패널을 찾는다

  $this.on('click', '.tab-control', function(e) { // 탭을 클릭하면
    e.preventDefault();                           // 기본 동작을 취소한다
    var $link = $(this),                          // 현재 링크를 저장한다
        id = this.hash;                           // 클릭한 탭의 href 특성 값을 가져온다

    if (id && !$link.is('.active')) {             // 활성화되지 않았으면
      $panel.removeClass('active');               // 현재 활성화된 패널을 숨긴다
      $tab.removeClass('active');                 // 현재 활성화된 탭을 비활성화 한다

      $panel = $(id).addClass('active');          // 새로운 패널을 보이게 한다
      $tab = $link.parent().addClass('active');   // 새로운 탭을 활성화한다
    }
  });
});
