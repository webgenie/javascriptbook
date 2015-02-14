var username, noteName, textEntered, target;     // 변수를 선언한다

noteName = document.getElementById('noteName');  // 이름을 출력할 요소를 찾는다

function writeLabel(e) {                         // 함수를 선언한다 j
  if (!e) {                                      // event 객체가 없으면
    e = window.event;                            // IE5-8용 대체 코드를 실행한다
  }
  target = event.target || event.srcElement;     // 이벤트가 발생한 요소를 찾는다
  textEntered = e.target.value;                  // 해당 요소의 값을 가져온다
  noteName.textContent = textEntered;            // 노트 제목을 수정한다
}


function recorderControls(e) {                   // recorderControls() 함수를 선언한다
  if (!e) {                                      // event 객체가 존재하지 않으면
    e = window.event;                            // IE5-8 대체 코드를 실행한다
  }
  target = event.target || event.srcElement;     // 이벤트가 발생한 요소를 찾는다
  if (event.preventDefault) {                    // preventDefault() 함수가 지원되면
    e.preventDefault();                          // 기본 동작을 취소한다
  } else {                                       // 그렇지 않으면
    event.returnValue = false;                   // IE 대체 코드를 통해 기본 동작을 취소한다
  }

  switch(target.getAttribute('data-state')) {      // data-state 특성 값을 가져온다
    case 'record':                                 // 값이 record 이면
      record(target);                              // record() 함수를 호출한다
      break;                                       // 함수 실행을 중단한다
    case 'stop':                                   // 값이 stop이면
      stop(target);                                // stop() 함수를 호출한다
      break;                                       // 함수 실행을 중단한다
      // 다른 버튼에 대한 처리를 추가할 수 있다.
  }
}

function record(target) {                        // 함수를 선언한다
  target.setAttribute('data-state', 'stop');   // data-state 특성 값을 stop으로 변경한다
  target.textContent = '중지';                 // 텍스트를 '중지'로 변경한다
}

function stop(target) {
  target.setAttribute('data-state', 'record'); //data-state 특성 값을 record로 변경한다
  target.textContent = '녹화';               // 텍스트를 '녹화'로 변경한다
}


if (document.addEventListener) {                 // 이벤트 리스너가 지원되면
  document.addEventListener('click', function(e) {// click 이벤트에 바인딩한다
    recorderControls(e);                         // recorderControls() 함수를 호출한다
  }, false);                                     // 이벤트를 캡쳐한다
  // username 요소에서 input 이벤트가 발생하면 writeLabel() 함수를 호출한다
  username.addEventListener('input', writeLabel, false);
} else {                                         // 그렇지 않으면
  document.attachEvent('onclick', function(e) {  // IE 대체 코드를 실행한다
    recorderControls(e);                         // recorderControls() 함수를 호출한다
  });
  // username 요소에서 keyup 이벤트가 발생하면 writeLabel() 함수를 호출한다
  username.attachEvent('onkeyup', writeLabel, false);
}
