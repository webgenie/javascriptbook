$(function() {
  var listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#four)',
    {status: '중요'},
    function(e) {
      listItem = '아이템: ' + e.target.textContent + '<br />';
      itemStatus = '상태: ' + e.data.status + '<br />';
      eventType = '이벤트: ' + e.type;
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});