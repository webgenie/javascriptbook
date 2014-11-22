$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
  $.getJSON('data/rates.json')
  .done( function(data){                                 // 서버가 데이터를 리턴한 경우
    var d = new Date();                                  // Date 객체를 생성한다
    var hrs = d.getHours();                              // 시간을 가져온다
    var mins = d.getMinutes();                           // 분을 가져온다
    var msg = '<h2>환율 정보</h2>';                        // 메시지를 작성한다
    $.each(data, function(key, val) {                    // 환율 정보를 추가한다
      msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
    });
    msg += '<br>최종 수정 시간: ' + hrs + ':' + mins + '<br>'; // 수정 시간을 표시한다
    $('#rates').html(msg);                               // 환율 정보를 페이지에 표시한다
  }).fail( function() {                                  // 오류가 발생한 경우
    var msg = '<h2>환율 정보</h2>';                        // 메시지를 작성한다
    msg += '<div>환율 정보를 로드하지 못했습니다.</div>';
    $('#rates').html(msg);                          
  }).always( function() {                                // 항상 실행
     var reload = '<a id="refresh" href="#">';           // 새로 고침 링크를 추가한다
     reload += '<img src="img/refresh.png" alt="refresh" /></a>';
     $('#reload').html(reload);                          // 새로 고침 링크를 페이지에 표시한다
     $('#refresh').on('click', function(e) {             // click 이벤트 핸들러를 추가한다
       e.preventDefault();                               // 기본 동작을 취소한다
       loadRates();                                      // loadRates() 함수를 호출한다
     });
  }); 
}

loadRates();                                             // loadRates() 함수를 호출한다