var $form = $('#calculator');

$form.on('submit', function(e) {                 // 버튼을 클릭하면 실행되는 함수
  e.preventDefault();
  console.log('버튼을 클릭했습니다...');              // 버튼을 클릭했다는 것을 출력한다

  var width, height, area;
  width = $('#width').val();
  height = $('#height').val();
  area = width * height;

  console.group('면적 계산기');            // 그룹화를 시작한다
    console.info('너비 ', width);               // 너비를 출력한다
    console.info('높이 ', height);             // 높이를 출력한다
    console.log(area);                           // 면적을 출력한다
  console.groupEnd();                            // 그룹화를 종료한다

  $form.append('<p>' + area + '</p>');
});