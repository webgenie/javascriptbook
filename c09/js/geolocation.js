var elMap = document.getElementById('loc');                 // HTML 요소 
var msg = '현재 위치 정보를 얻을 수 없습니다.';    // 위치 정보 로드 실패 메시지

if (Modernizr.geolocation) {                                // 지리 위치가 지원되면
  navigator.geolocation.getCurrentPosition(success, fail);  // 위치 정보를 요청한다
  elMap.textContent = '위치 확인 중...';                       // 확인 중 메시지를 출력한다
} else {                                                    // 지원되지 않으면
  elMap.textContent = msg;                                  // 오류 메시지를 출력한다
}

function success(location) {                                // 위치 정보를 얻었을 때
  msg = '<h3>위도:<br>';                                     // 메시지를 생성한다
  msg += location.coords.latitude + '</h3>';                // 위도 추가
  msg += '<h3>경도:<br>';                                    // 메시지를 생성한다
  msg += location.coords.longitude + '</h3>';               // 경도 추가
  elMap.innerHTML = msg;                                    // 위치 정보 출력
}

function fail(msg) {                                        // 위치 정보를 얻지 못했을 때 
  elMap.textContent = msg;                                  // 오류 메시지를 출력한다
  console.log(msg.code);                                    // 오류 코드를 출력한다
}