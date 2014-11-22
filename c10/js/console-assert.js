var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // 이 메시지는 입력된 숫자가 10보다 작은 경우에만 보여진다
  console.assert(this.value > 10, '사용자가 10보다 작은 값을 입력했습니다');
});

$('#calculator').on('submit', function(e) { 
  e.preventDefault();
  console.log('버튼을 클릭했습니다');

  width = $('#width').val();
  height = $('#height').val();
  area = width * height;
  // 이 메시지는 사용자가 숫자가 아닌 값을 입력할때만 보여진다
  console.assert($.isNumeric(area), '사용자가 숫자가 아닌 값을 입력했습니다');

  $form.append('<p>' + area + '</p>');
});