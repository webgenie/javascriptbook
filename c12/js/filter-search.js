(function() {                             // 즉시 실행되는 함수에 코드를 작성한다
  var $imgs = $('#gallery img');          // 이미지를 가져온다
  var $search = $('#filter-search');      // 입력 상자를 가져온다
  var cache = [];                         // cache 배열을 생성한다

  $imgs.each(function() {                 // 모든 이미지에 대해 루프를 실행한다
    cache.push({                          // cache 배열에 이미지를 추가한다
      element: this,                      // 현재 이미지를 저장한다
      text: this.alt.trim().toLowerCase() // 이미지의 대체 텍스트를 저장한다
    });
  });

  function filter() {                     // filter() 함수를 정의한다
    var query = this.value.trim().toLowerCase();  // 검색어를 가져온다
    cache.forEach(function(img) {         // cache 배열의 모든 아이템에 대해 루프를 실행한다
      var index = 0;                      // index 변수 값을 0으로 설정한다

      if (query) {                        // 검색어가 입력되었으면
        index = img.text.indexOf(query);  // 해당 검색어를 포함하는지 확인한다
      }

      img.element.style.display = index === -1 ? 'none' : '';  // 보이거나 숨긴다
    });
  }

  if ('oninput' in $search[0]) {          // 브라우저가 input 이벤트를 지원하면
    $search.on('input', filter);          // input 이벤트가 발생할 때 filter() 메서드를 호출한다
  } else {                                // 그렇지 않으면
    $search.on('keyup', filter);          // keyup 이벤트가 발생할 때 filter() 메서드를 호출한다
  }              

}());
