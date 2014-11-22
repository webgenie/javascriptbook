var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다

xhr.onload = function() {                       // 응답이 로드되면
  // 아래 조건식은 로컬 환경에서는 동작하지 않으며 서버가 있어야만 동작한다
  if(xhr.status === 200) {                       // 서버의 응답이 정상이면
    document.getElementById('content').innerHTML = xhr.responseText; //수정 
  }
};

xhr.open('GET', 'data/data.html', true);        // 요청을 준비한다
xhr.send(null);                                 // 요청을 보낸다 

// 주의: 파일을 로컬 환경에서 실행하면
// 서버의 상태를 가져올 수 없다.
// 이 경우 5번 줄의 조건식을 다음과 같이 변경한다
// if(true) {
