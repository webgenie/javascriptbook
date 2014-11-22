$('li[id!="one"]').hide().delay(500).fadeIn(1400); //세미콜론은 체이닝이 종료됨을 의미한다 - 다른 줄에 나누어 작성해도 된다
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');