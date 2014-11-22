$(function() {

  // 첫 번째 목록 아이템의 배경 색을 가져온다
  var backgroundColor = $('li').css('background-color');

  // 알아낸 배경 색을 목록 다음에 출력한다
  $('ul').append('<p>배경색: ' + backgroundColor + '</p>');

  // 모든 목록 아이템의 여러 속성을 설정한다
  $('li').css({
    'background-color': '#c5a996',
    'border': '1px solid #fff',
    'color': '#000',
    'text-shadow': 'none',
    'font-family': 'Georgia',
    'padding-left': '+=75'
  });
});