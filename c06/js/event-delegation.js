function getTarget(e) {                          // 함수를 선언한다 
  if (!e) {                                      // event 객체가 존재하지 않으면
    e = window.event;                            // IE의 event 객체를 사용한다
  }
  return e.target || e.srcElement;               // 이벤트가 발생한 요소를 가져온다
}

function itemDone(e) {                           // 함수를 선언한다
  // 목록에서 아이템을 제거한다
  var target, elParent, elGrandparent;           // 변수를 선언한다
  target = getTarget(e);                         // 링크가 클릭된 아이템을 가져온다
  elParent = target.parentNode;                  // 해당 요소의 부모 요소 가져온다
  elGrandparent = target.parentNode.parentNode;  // 부모 요소의 부모 요소를 가져온다
  elGrandparent.removeChild(elParent);           // 부모 요소를 제거한다

  // 링크의 기본 동작이 실행되지 않도록 한다
  if (e.preventDefault) {                        // preventDefault() 메서드가 동작하면
    e.preventDefault();                          // preventDefault() 메서드를 사용한다
  } else {                                       // 그렇지 않으면
    e.returnValue = false;                       // IE의 속성을 사용한다.
  }
}

// click 이벤트가 발생하면 itemDone() 함수를 호출하도록 이벤트 리스너를 지정한다
var el = document.getElementById('shoppingList');// 물품 목록을 가져온다
if (el.addEventListener) {                       // 이벤트 리스너가 지원되면
  el.addEventListener('click', function(e) {     // click 이벤트에 리스너를 지정한다
    itemDone(e);                                 // itemDone()  메서드를 호출한다
  }, false);                                     // 이벤트 버블링을 사용한다
} else {                                         // 그렇지 않으면
  el.attachEvent('onclick', function(e){         // IE의 onclick 이벤트를 사용한다
    itemDone(e);                                 // itemDone() 메서드를 호출한다
  });
}
