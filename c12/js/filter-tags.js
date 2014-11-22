(function() {

  var $imgs = $('#gallery img');                  // 모든 이미지를 저장한다
  var $buttons = $('#buttons');                   // buttons 요소를 저장한다
  var tagged = {};                                // tagged 객체를 생성한다

  $imgs.each(function() {                         // 이미지에 대해 루프를 실행한다
    var img = this;                               // 이미지를 변수에 저장한다
    var tags = $(this).data('tags');              // 태그들을 저장한다

    if (tags) {                                   // 요소에 태그가 설정되어 있으면
      tags.split(',').forEach(function(tagName) { // 콤마를 이용해 값을 분리한다
        if (tagged[tagName] == null) {            // 객체에 태그가 설정되어 있지 않으면
          tagged[tagName] = [];                   // 객체에 빈 배열을 추가한다
        }
        tagged[tagName].push(img);                // 배열에 이미지를 추가한다
      });
    }
  });

  $('<button/>', {                                 // 빈 버튼을 생성한다
    text: '모두 보기',                              // '모두 보기' 텍스트를 추가한다
    class: 'active',                               // 버튼을 활성화한다
    click: function() {                            // click 핸들러를 추가한다
      $(this)                                      // 클릭된 버튼을 가져온다
        .addClass('active')                        // active 클래스를 추가한다
        .siblings()                                // 이웃 요소들를 가져온다
        .removeClass('active');                    // 이웃 요소들에서 active 클래스를 제거한다
      $imgs.show();                                // 모든 이미지를 보이게 한다
    }
  }).appendTo($buttons);                           // buttons 요소에 추가한다

  $.each(tagged, function(tagName) {               // 태그 이름에 대해 루프를 실행한다
    $('<button/>', {                               // 빈 버튼을 생성한다
      text: tagName + ' (' + tagged[tagName].length + ')', // 태그 이름을 추가한다
      click: function() {                          // click 핸들러를 추가한다
        $(this)                                    // 클릭된 버튼에
          .addClass('active')                      // active 클래스를 추가한다
          .siblings()                              // 이웃 요소들을 가져온다
          .removeClass('active');                  // active 클래스를 제거한다
        $imgs                                      // 모든 이미지들을
          .hide()                                  // 숨기고
          .filter(tagged[tagName])                 // 지정된 태그로 필터링한 후
          .show();                                 // 필터링된 이미지들을 보이게 한다
      }
    }).appendTo($buttons);                         // buttons 요소에 추가한다
  });

}());
