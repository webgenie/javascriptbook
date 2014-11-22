var firstItem = document.getElementById('one'); // 목록이 첫 번째 아이템을 가져온다.
firstItem.className = 'complete';               // class 특성 값을 변경한다. 

var fourthItem = document.getElementsByTagName('li').item(3);// 네 번째 아이템을 가져온다.
fourthItem.setAttribute('class', 'cool');       // 특성을 추가한다.
