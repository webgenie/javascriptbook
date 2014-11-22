$(function() {
  $('ul').before('<p class="notice">변경됨</p>');
  $('li.hot').prepend('+ ');
  var $newListItem = $('<li><em>무방부제</em> 간장</li>');
  $('li:last').after($newListItem);
});