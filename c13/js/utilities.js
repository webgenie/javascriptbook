// 이벤트 리스너를 추가하는 핼퍼 함수
function addEvent (el, event, callback) {
  if ('addEventListener' in el) {                  // addEventListener 메서드가 지원되면
    el.addEventListener(event, callback, false);   // 그대로 사용한다
  } else {                                         // 그렇지 않으면
    el['e' + event + callback] = callback;         // IE용 대체 코드를 작성한다
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]);
  }
}

// 이벤트 리스너를 제거하는 핼퍼 함수
function removeEvent(el, event, callback) {
  if ('removeEventListener' in el) {                      // removeEventListener 메서드가 지원되면
    el.removeEventListener(event, callback, false);       // 그대로 사용한다
  } else {                                                // 그렇지 않으면
    el.detachEvent('on' + event, el[event + callback]);   // IE용 대체 코드를 작성한다
    el[event + callback] = null;
    el['e' + event + callback] = null;
  }
}

