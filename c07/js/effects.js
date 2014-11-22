$(function() {

  $('h2').hide().slideDown();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(1700);
  });

  $li.on('click', function() {
    $(this).fadeOut(700);
  });

});