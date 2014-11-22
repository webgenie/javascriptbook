$('.accordion').on('click', '.accordion-control', function(e){ // 클릭 이벤트
  e.preventDefault();                    // 버튼의 기본 동작을 취소한다
  $(this)                                // 사용자가 클릭한 요소를 찾는다
    .next('.accordion-panel')            // 관련된 패널을 찾는다
    .not(':animated')                    // 애니메이션이 진행 중이지 않으면
    .slideToggle();                      // slideToggle() 메서드를 호출하여 패널을 보이거나 숨긴다
});
