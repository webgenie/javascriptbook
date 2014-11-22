var itemTwo = document.getElementById('two');  // 목록의 두 번째 아이템을 가져온다.

var elText  = itemTwo.firstChild.nodeValue;    // 텍스트 내용을 가져온다.

elText = elText.replace('잣', '양배추');  // 잣을 양배추로 변경한다.

itemTwo.firstChild.nodeValue = elText;         // 목록 아이템을 변경한다.
