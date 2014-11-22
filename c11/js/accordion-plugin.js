(function($) {                                    // $기호를 변수 이름처럼 사용한다
  $.fn.accordion = function (speed) {        // jQuery 셀렉션을 리턴한다
    this.on('click', '.accordion-control', function (e) {
      e.preventDefault();
      $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle(speed);
    });
    return this;                                 // jQuery 셀렉션을 리턴한다
  };
}(jQuery));                                      // jQUery 객체를 전달한다
