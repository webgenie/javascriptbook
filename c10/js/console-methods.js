console.info('스크립트 시작');                    // Info: 스크립트가 시작되었음을 표시한다

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {  // blur 이벤트를 처리
  console.warn('입력된 값 ', this.value);           // Warn: 입력ㅎㄴ 값을 출력한다
});

$('#calculator').on('submit', function(e) {           // 폼 버튼을 클릭하면
  e.preventDefault();

  width = $('#width').val();
  height = $('#height').val();

  area = width * height;
  console.error(area);                                // Error: 면적을 출력한다

  $form.append('<p class="result">' + area + '</p>');
});