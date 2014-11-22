$(function() {

  // 초기화 
  var $list, $newItemForm, $newItemButton;
  var item = '';                                 // 빈 문자열을 설정한다
  $list = $('ul');                               // <ul> 요소를 저장한다
  $newItemForm = $('#newItemForm');              // 새 아이템 폼을 저장한다
  $newItemButton = $('#newItemButton');          // 새 아이템 버튼을 저장한다

  $('li').hide().each(function(index) {          // 목록 아이템을 숨긴다
    $(this).delay(450 * index).fadeIn(1600);     // 그런 후 페이드 인 시킨다
  });

  // 아이템 갯수
  function updateCount() {                       // 아이템 갯수를 수정하는 함수를 생성한다
    var items = $('li[class!=complete]').length; // 목록 내의 아이템의 갯수
    $('#counter').text(items);                   // 페이지에 표시한다
  }
  updateCount();                                 // 함수를 호출한다

  // 새 아이템 폼의 이벤트
  $newItemButton.show();                         // 버튼을 보이게 한다
  $newItemForm.hide();                           // 폼을 숨긴다
  $('#showForm').on('click', function() {        // 새 아이템을 클릭하면
    $newItemButton.hide();                       // 버튼을 숨긴다
    $newItemForm.show();                         // 폼을 보이게 한다
  });

  // 새 아이템 추가하기
  $newItemForm.on('submit', function(e) {       // 새 아이템이 전송되면
    e.preventDefault();                         // 폼 전송을 중단한다
    var text = $('input:text').val();           // 입력 상자의 값을 가져온다
    $list.append('<li>' + text + '</li>');      // 아이템을 목록의 끝에 추가한다
    $('input:text').val('');                    // 입력 상자를 비운다
    updateCount();                              // 아이템 갯수를 수정한다
  });

  // 이벤트 처리 - <ul> 요소에서 이벤트 위임을 사용한다
  $list.on('click', 'li', function() {
    var $this = $(this);               // 요소를 jQuery 객체에 저장한다
    var complete = $this.hasClass('complete');  // 아이템이 완료 상태인지 확인한다

    if (complete === true) {           // 아이템이 완료 상태인지 확인한다
      $this.animate({                  // 만일 그렇다면 애니메이션을 재생한다
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {    // 애니메이션이 완료되면 콜백 함수를 호출한다
        $this.remove();                // 아이템을 제거한다
      });
    } else {                           // 그렇지 않으면 완료 상태로 처리한다
      item = $this.text();             // 목록 아이템의 텍스트를 가져온다
      $this.remove();                  // 목록 아이템을 제거한다
      $list                            // 완료된 아이템을 목록의 끝에 다시 추가한다
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);           // 아이템을 숨긴 후 페이드 인 효과를 적용한다
      updateCount();                   // 아이템 갯수를 수정한다
    }                                  // else 구문 종료
  });                                  // 이벤트 핸들러 종료

});