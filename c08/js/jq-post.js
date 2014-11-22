$('#register').on('submit', function(e) {           // 폼 전송 이벤트가 발생
  e.preventDefault();                               // 기본 동작을 취소한다
  var details = $('#register').serialize();         // 폼 데이터를 수집한다
  $.post('register.php', details, function(data) {  // $.post() 메서드를 이용하여 데이터를 전송한다
    $('#register').html(data);                    // 결과를 출력한다
  });
});