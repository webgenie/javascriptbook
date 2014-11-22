var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('버튼을 클릭했습니다.');

  width = $('#width').val();
  height = $('#height').val();
  area = (width * height);

  if (area < 100) {
    debugger;             // 개발자 도구를 열면 이 곳에 중단점을 생성한다
  }

  $form.append('<p>' + area + '</p>');
});