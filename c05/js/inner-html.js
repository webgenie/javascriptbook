// 목록의 첫 번째 아이템을 변수에 저장한다.
var firstItem = document.getElementById('one');

// 아이템의 콘텐츠를 가져온다.
var itemContent = firstItem.innerHTML;

// 첫 번째 아이템의 콘텐츠를 링크로 수정한다.
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';
