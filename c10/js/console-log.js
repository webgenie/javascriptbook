console.log('스크립트 시작');               // 스크립트가 시작되었음을 표시한다.
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() { // 입력 상자가 포커스를 잃으면 
  console.log('입력된 값 ', this.value );          // 입력한 값을 출력한다
});

$('#calculator').on('submit', function(e) {     // 사용자가 버튼을 클릭하면
  e.preventDefault();                           // 폼 전송을 취소한다
  console.log('버튼을 클릭했음');             // 버튼이 클릭되었음을 표시한다

  width = $('#width').val();
  console.log('너비 ' + width);                // 콘솔에 너비를 출력한다

  height = $('#height').val();
  console.log('높이 ', height);               // 콘솔에 높이를 출력한다

  area = width * height;
  console.log(area);                            // 콘솔에 면적을 출력한다

  $form.append('<p>' + area + '</p>')
});