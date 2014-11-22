$('.slider').each(function() {              // 모든 슬라이더를 찾는다
  var $this   = $(this);                    // 현재 슬라이더를 저장한다
  var $group  = $this.find('.slide-group'); // 모든 슬라이드의 부모 요소를 찾는다
  var $slides = $this.find('.slide');       // 모든 슬라이드를 저장하는 jQuery 객체를 생성한다
  var buttonArray  = [];                    // 탐색 버튼을 저장할 배열을 생성한다
  var currentIndex = 0;                     // 현재 슬라이드의 인덱스 번호를 저장한다
  var timeout;                              // 자동 슬라이드의 간격을 지정한다

  function move(newIndex) {          // 이전 슬라이드에서 새 슬라이드로 이동한다
    var animateLeft, slideLeft;      // 변수를 선언한다

    advance();                       // 슬라이드가 이동할 때 advanced() 함수를 다시 호출한다

	// 현재 슬라이드가 보여지고 있으며 애니메이션이 진행 중이면 아무것도 하지 않는다
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // 아이템에서 클래스를 제거한다
    buttonArray[newIndex].addClass('active');        // 새 아이템에 클래스를 추가한다

    if (newIndex > currentIndex) {   // 새 슬라이드의 인덱스가 현재 슬라이드의 인덱스보다 크면
      slideLeft = '100%';            // 새 슬라이드를 오른쪽에 배치한다
      animateLeft = '-100%';         // 현재 슬라이드 그룹을 왼쪽으로 이동한다
    } else {                         // 그렇지 않으면
      slideLeft = '-100%';           // 새 슬라이드를 왼쪽에 배치한다Sit the new slide to the left
      animateLeft = '100%';          // 현재 슬라이드 그룹을 오른쪽으로 이동한다
    }
	// 새 슬라이드를 왼쪽(인덱스가 작은 경우) 또는 오른쪽 (인덱스가 큰 경우)에 배치한다
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    // 슬라이드에 애니메이션을 적용하고
      $slides.eq(currentIndex).css( {display: 'none'} ); // 이전 슬라이드를 숨긴다
      $slides.eq(newIndex).css( {left: 0} ); // 새 슬라이드의 위치를 지정한다
      $group.css( {left: 0} );               // 슬라이드 그룹의 위치를 지정한다
      currentIndex = newIndex;               // 새로운 이미지의 인덱스를 currentIndex 변수에 저장한다
    });
  }

  function advance() {                     // 타이머를 설정한다
    clearTimeout(timeout);                 // 이전 타이머를 제거한다
    timeout = setTimeout(function() {      // 새로운 타이머를 설정한다
      if (currentIndex < ($slides.length - 1)) { // 슬라이드 < 전체 슬라이드
        move(currentIndex + 1);            // 다음 슬라이드로 이동한다
      } else {                             // 그렇지 않으면
        move(0);                           // 첫 번째 슬라이드로 이동한다
      }
    }, 4000);                              // 대기할 시간을 밀리 초로 지정한다
  }

  $.each($slides, function(index) {
	// button 요소를 생성한다
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // 인덱스가 현재 아이템의 인덱스와 동일하면
      $button.addClass('active');    // active 클래스를 추가한다
    }
    $button.on('click', function() { // 버튼의 이벤트 핸들러를 등록한다
      move(index);                   // move() 함수를 호출한다
    }).appendTo('.slide-buttons');   // 버튼을 가지고 있는 요소로 돌아간다
    buttonArray.push($button);       // 버튼 배열에 추가한다
  });

  advance();                          // 스크립트의 초기화가 완료되었으므로 advance() 메뉴를 홏루하여 슬라이드가 이동하게 한다


});
