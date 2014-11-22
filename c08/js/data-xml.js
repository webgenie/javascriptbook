var xhr = new XMLHttpRequest();        // XMLHttpRequest 객체를 생성한다

xhr.onload = function() {              // 응답이 로드되면
 // 아래 조건식은 로컬 환경에서는 동작하지 않으며 서버가 있어야만 동작한다
if (xhr.status === 200) {             // 서버의 응답이 정상이면

// HTML이 아닌 XML을 처리해야 하기 때문에 이 부분의 코드가 달라진다
var response = xhr.responseXML;                      // 서버에서 XML을 얻어온다
var events = response.getElementsByTagName('event'); // <event> 요소를 찾는다

function getNodeValue(obj, tag) {                   // XML에서 콘텐츠를 추출한다
 return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

for (var i = 0; i < events.length; i++) {            // 루프를 실행한다
 var container, image, location, city, newline;      // 변수를 선언한다
 container = document.createElement('div');          // <div> 요소를 생성한다
 container.className = 'event';                      // class 특성을 추가한다

 image = document.createElement('img');              // 지도 이미지를 추가한다
 image.setAttribute('src', getNodeValue(events[i], 'map'));
 image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
 container.appendChild(image);

 location = document.createElement('p');             // 위치 정보를 추가한다
 city = document.createElement('b');
 newline = document.createElement('br');
 city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
 location.appendChild(newline);
 location.insertBefore(city, newline);
 location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
 container.appendChild(location);

 document.getElementById('content').appendChild(container);
}

 // 마지막 부분은 XML 파일을 요청하는 것을 제외하면 HTML 에제와 동일하다
 }
};

xhr.open('GET', 'data/data.xml', true);             // 요청을 준비한다
xhr.send(null);                                     // 요청을 전송한다

// 주의: 파일을 로컬 환경에서 실행하면
// 서버의 상태를 가져올 수 없다.
// 이 경우 5번 줄의 조건식을 다음과 같이 변경한다
// if(true) {
