$(function() {

  $('#arrival').datepicker();      // 날짜 선택기를 적용한다

  var $amount = $('#amount');      // 입력 상자를 변수에 저장한다
  var $range = $('#price-range');  // 가격 범위를 선택하는 <div> 요소를 변수에 저장한다
  $('#price-range').slider({       // 가격 범위 요소에 슬라이더를 적용한다
    range: true,                   // 값의 범위를 선택하게 하면 슬라이더는 두 개의 핸들을 갖게 된다
    min: 0,                        // 최소 값
    max: 400,                      // 최대 값
    values: [175, 300],            // 기본 값
    slide: function(event, ui) {   // 값이 변경된 경우
      $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
    }
  });
  $amount                          // 선택된 기본 가격을 출력한다
    .val('$' + $range.slider('values', 0)     // 최소 가격
    + ' - $' + $range.slider('values', 1)); // 최대 가격

});