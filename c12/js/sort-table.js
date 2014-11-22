var compare = {                           // compare 객체를 생성한다
  name: function(a, b) {                  // name 메서드를 정의한다
    a = a.replace(/^the /i, '');          // 매개변수에서 the를 제거한다
    b = b.replace(/^the /i, '');          // 매개변수에서 the를 제거한다

    if (a < b) {                          // a가 b보다 작으면
      return -1;                          // -1을 리턴한다
    } else {                              // 그렇지 않으면
      return a > b ? 1 : 0;               // a가 b보다 크면 1을 리턴하고
    }                                     // 두 값이 같으면 0을 리턴한다
  },
  duration: function(a, b) {              // duration 메서드를 정의한다 
    a = a.split(':');                     // 시간을 콜론으로 분리한다
    b = b.split(':');                     // 시간을 콜론으로 분리한다

    a = Number(a[0]) * 60 + Number(a[1]); // 시간을 초로 변환한다
    b = Number(b[0]) * 60 + Number(b[1]); // 시간을 초로 변환한다

    return a - b;                         // a - b를 리턴한다
  },
  date: function(a, b) {                  // date 메서드를 정의한다
    a = new Date(a);                      // 날짜를 저장할 Date 객체를 생성한다
    b = new Date(b);                      // 날짜를 저장할 Date 객체를 생성한다

    return a - b;                         // a - b를 리턴한다
  }
};

$('.sortable').each(function() {
  var $table = $(this);                     // 정렬이 가능한 표
  var $tbody = $table.find('tbody');        // 표의 몸체
  var $controls = $table.find('th');        // 표의 제목 행
  var rows = $tbody.find('tr').toArray();   // 각 행을 저장한 배열

  $controls.on('click', function() {        // 사용자가 제목열을 클릭하면
    var $header = $(this);                  // 제목열을 가져온다
    var order = $header.data('sort');       // data-sort 특성 값을 가져온다
    var column;                             // column 배열을 생성한다

    // 선택된 아이템이 ascending 또는 descending 클래스를 가지고 있으면 반대 값으로 변경한다
    if ($header.is('.ascending') || $header.is('.descending')) {  
      $header.toggleClass('ascending descending');    // 다른 클래스를 토글한다
      $tbody.append(rows.reverse());                // 배열을 뒤집는다
    } else {                                        // 그렇지 않으면 정렬을 수행한다
      $header.addClass('ascending');                // 제목열에 클래스를 추가한다
      // Remove asc or desc from all other headers
      $header.siblings().removeClass('ascending descending'); 
      if (compare.hasOwnProperty(order)) {		// compare 객체가 메서드를 가지고 있으면
        column = $controls.index(this);         // 열의 인덱스 번호를 찾아낸다

        rows.sort(function(a, b) {               // rows 배열의 sort() 메서드를 호출한다
          a = $(a).find('td').eq(column).text(); // a행의 열의 텍스트를 가져온다
          b = $(b).find('td').eq(column).text(); // b행의 열의 텍스트를 가져온다
          return compare[order](a, b);           // compare 메서드를 호출한다
        });

        $tbody.append(rows);
      }
    }
  });
});
