var elList, addLink, newEl, newText, counter, listItems; // 변수를 선언한다

elList  = document.getElementById('list');               // 목록을 가져온다
addLink = document.querySelector('a');                   // 아이템을 추가하는 버튼을 가져온다
counter = document.getElementById('counter');            // 아이템의 갯수를 출력할 요소를 가져온다

function addItem(e) {                                    // 함수를 선언한다
  e.preventDefault();                                    // 링크의 동작을 취소한다
  newEl = document.createElement('li');                  // 새로운 <li> 요소를 생성한다
  newText = document.createTextNode('New list item');    // 새로운 텍스트 노드를 생성한다
  newEl.appendChild(newText);                            // <li> 요소에 텍스트를 추가한다
  elList.appendChild(newEl);                             // <li> 요소를 목록에 추가한다
}

function updateCount() {                                 // 함수를 선언한다
  listitems = list.getElementsByTagName('li').length;    // <li> 요소의 갯수를 센다
  counter.innerHTML = listitems;                         // 갯수를 출력한다
}

addLink.addEventListener('click', addItem, false);       // 버튼의 click 이벤트를 처리한다
elList.addEventListener('DOMNodeInserted', updateCount, false); // DOM 변형 이벤트를 처리한다