var cache = {},                      // 캐시 객체
  request,                           // 가장 최근에 요청된 이미지
  $current,                          // 현재 보여지고 있는 이미지
  $frame = $('#photo-viewer');       // 이미지 요소
  $thumbs = $('.thumb');             // 썸네일 이미지 요소

function crossfade($img) {           // 두 이미지에 페이드 효과를 적용하는 함수
                                     // 새로운 이미지를 매개변수로 전달받는다
  if ($current) {                    // 현재 보여지고 있는 이미지가 존재하면
    $current.stop().fadeOut('slow'); // 애니메이션을 중지하고 페이드 아웃 한다
  }

  $img.css({                         // 이미지에 CSS로 여백을 지정한다
    marginLeft: -$img.width() / 2,   // 이미지의 너비의 절반에 해당하는 여백
    marginTop: -$img.height() / 2    // 이미지의 높이의 절반에 해당하는 여백
  });

  $img.stop().fadeTo('slow', 1);     // 애니메이션을 중지하고 새 이미지를 페이드 인 한다
  
  $current = $img;                   // 새 이미지를 현재 이미지로 지정한다

}

$(document).on('click', '.thumb', function(e){ // 썸네일 이미지를 클릭하면
  var $img,                               // $img 지역 변수를 생성한다
      src = this.href;                    // 이미지 경로를 저장한다
      request = src;                      // 가장 최근에 요청한 이미지 경로를 저장한다
  
  e.preventDefault();                     // 기본 동작을 중단한다
  
  $thumbs.removeClass('active');          // 모든 썸네일 이미지에서 active 값을 제거한다
  $(this).addClass('active');             // 클릭된 썸네일에 active 값을 추가한다

  if (cache.hasOwnProperty(src)) {        // 캐시가 현재 이미지를 가지고 있으면
    if (cache[src].isLoading === false) { // 그리고 isLoading 값이 false 이면
      crossfade(cache[src].$img);         // crossfade() 함수를 호출한다
    }
  } else {                                // 이미지가 캐시에 없으면
    $img = $('<img/>');                   // 빈 <img/> 요소를 $img 변수에 저장한다
    cache[src] = {                        // 이 이미지를 캐시에 저장한다
      $img: $img,                         // 이미지 경로를 저장한다
      isLoading: true                     // isLoading 속성을 false로 지정한다
    };

	// 이후의 코드는 이미지를 로드하고 처음 준비하는 코드이다
    $img.on('load', function(){           // 이미지가 로드되면
      $img.hide();                        // 우선 숨긴다
	  // is-loading 클래스를 제거한 후 새로운 이미지를 추가한다
      $frame.removeClass('is-loading').append($img);
      cache[src].isLoading = false;       // 캐시 내의 isLoading 속성 값을 수정한다
	  // 가장 최근에 요청한 이미지가 로드된 상황이면
      if (request === src) {
        crossfade($img);                  // crossfade() 함수를 호출한다
      }                                   // 비동기 로딩 이슈를 해결한다
    });

    $frame.addClass('is-loading');        // is-loading 클래스를 프레임에 추가한다

    $img.attr({                           // <img> 요소의 특성 값을 설정한다
      'src': src,                         // 이미지를 로드하기 위해 src 특성 값을 설정한다
      'alt': this.title || ''             // 타이틀이 지정되어 있으면 링크에 추가한다
    });

  }

});

// 마지막 줄은 나머지 스크립트가 로드된 후 첫 번째 이미지를 표시할 때 단 한 번 실행된다
$('.thumb').eq(0).click();                // 첫 번째 썸네일을 클릭한 것처럼 처리한다
