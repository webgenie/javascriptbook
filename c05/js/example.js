// 목록의 시작과 끝에 아이템을 추가한다.
var list = document.getElementsByTagName('ul')[0];                 // <ul> 요소를 가져온다.

// 목록의 끝에 아이템을 추가한다.
var newItemLast = document.createElement('li');                    // 요소를 생성한다.
var newTextLast = document.createTextNode('크림');                 // 텍스트 노드를 생성한다.
newItemLast.appendChild(newTextLast);                              // 요소에 텍스트 노드를 추가한다.
list.appendChild(newItemLast);                                     // 목록의 끝에 요소를 추가한다.

// 목록의 시작에 아이템을 추가한다.
var newItemFirst = document.createElement('li');                   // 요소를 생성한다.
var newTextFirst = document.createTextNode('양배추');              // 텍스트 노드를 생성한다.
newItemFirst.appendChild(newTextFirst);                            // 요소에 텍스트 노드를 추가한다.
list.insertBefore(newItemFirst, list.firstChild);                  // 목록에 요소를 추가한다.



var listItems = document.querySelectorAll('li');                   // 모든 <li> 요소를 찾는다.

// 모든 아이템에 cool이라는 값을 갖는 class 특성을 추가한다.
var i;                                                             // 카운터 변수
for (i = 0; i < listItems.length; i++) {                           // 루프를 실행한다.
  listItems[i].className = 'cool';                                 // class 특성 값을cool로 변경한다.
}

// 제목에 아이템의 갯수를 추가한다.
var heading = document.querySelector('h2');                        // h2 요소를 찾는다.
var headingText = heading.firstChild.nodeValue;                    // h2 요소의 텍스트를 가져온다
var totalItems = listItems.length;                                 // <li> 요소의 갯수를 저장한다.
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // 제목 내용을 수정한다.
heading.innerHTML = newHeading;                                    // 새로운 내용이 마크업을 가지고 있으므로 (textContent) 속성 대신 innerHTML 속성을 이용하여 h2 요소의 콘텐츠를 수정한다
