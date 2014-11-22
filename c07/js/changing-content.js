$(function() {
  $('li:contains("잣")').text('아몬드');
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#one').remove();
});