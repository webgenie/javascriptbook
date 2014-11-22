(function() {

  // 데이터를 배열에 추가한다
  var people = [
    {                                              // 각 프리랜서는 객체로 표현한다
      name: '신동엽',                               // 이 객체는 이름과 시급을 저장한다
      rate: 60
    },
    {
      name: '허지웅',
      rate: 80
    },
    {
      name: '성시경',
      rate: 75
    },
    {
      name: '유세윤',
      rate: 120
    }
  ];

  var rows = [],                        // rows 배열을 생성한다
      $max = $('#value-max'),           // 최대값 입력 상자
	  $min = $('#value-min'),
      $table = $('#rates');             // 결과를 보여줄 표

  function makeRows() {                 // 표의 행과 배열을 생성한다
    people.forEach(function(person) {   // people 배열의 모든 프리랜서에 대해 루프를 실행한다
      var $row = $('<tr></tr>');        // 각 프리랜서 마다 행을 생성한다
      $row.append( $('<td></td>').text(person.name) ); // 이름을 출력한다
      $row.append( $('<td></td>').text(person.rate) ); // 시급을 출력한다
      rows.push({ // people 객체와 표의 열을 연결하기 위한 배열을 생성한다
        person: person,                 // person 객체에 대한 참조를 저장한다
        $element: $row                  // 표의 행을 참조하는 jQuery 셀렉션을 저장한다
      });
    });
  }

  function appendRows() {               // 행을 표에 추가한다
    var $tbody = $('<tbody></tbody>');  // <tbody> 요소를 생성한다
    rows.forEach(function(row) {        // 행 배열에 대해 루프를 실행한다
      $tbody.append(row.$element);      // 행을 표현하는 HTML을 추가한다
    });
    $table.append($tbody);              // 행들을 표에 추가한다
  }

  function update(min, max) {           // 표의 콘텐츠를 수정한다
    rows.forEach(function(row) {        // rows 배열의 각 행에 대해 루프를 실행한다
      if (row.person.rate >= min && row.person.rate <= max) { // 시급이 범위 내에 포함되면
        row.$element.show();            // 행을 보이게 한다
      } else {                          // 그렇지 않으면
        row.$element.hide();            // 행을 숨긴다
      }
    });
  }

  function init() {                     // 스크립트가 처음 실행될 때 수행할 작업들
    $('#slider').noUiSlider({           // 슬라이드 컨트롤을 초기화한다
      range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,
      serialization: {to: [$min, $max],resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });
    makeRows();                           // 표의 행과 배열을 생성한다
    appendRows();                         // 표에 행을 추가한다
    update($min.val(), $max.val());     // 조건에 부합하는 행만을 보이도록 한다
  }

  $(init);                              // DOM이 로드되면 init() 함수를 호출한다
}());
