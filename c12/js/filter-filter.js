$(function() {

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


  // 이 함수가 필터처럼 동작한다
  function priceRange(person) {                        // priceRange() 함수를 정의한다
    return (person.rate >= 65) && (person.rate <= 90); // 시급이 지정된 범위에 포함되면 true를 리턴한다
  };

  // 프리랜서를 필터링하여 결과를 results 배열에 저장한다
  var results = [];                              // 새로운 배열을 선언한다
  results = people.filter(priceRange);           // filter() 함수는 priceRange() 메서드를 호출한다


  // 새로운 배열을 대상으로 루프를 실행하여 필터링된 프리랜서를 표에 출력한다 
  var $tableBody = $('<tbody></tbody>');           // 새로운 표
  for (var i = 0; i < results.length; i++) {       // 결과 배열에 루프를 실행한다
    var person = results[i];                       // 현재 프리랜서를 저장한다
    var $row = $('<tr></tr>');                     // 새로운 행을 생성한다
    $row.append($('<td></td>').text(person.name)); // 이름을 출력한다
    $row.append($('<td></td>').text(person.rate)); // 시급을 출력한다
    $tableBody.append( $row );                     // 새 콘텐츠를 위한 행을 추가한다
  }

  $('thead').after($tableBody);                    // thead 요소 다음에 tbody 요소를 추가한다
});
