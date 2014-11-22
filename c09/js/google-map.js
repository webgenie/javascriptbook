function init() {
  var mapOptions = {                                 // 지도 옵션을 설정한다
    center: new google.maps.LatLng(37.516683,127.125818),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true,
    zoom: 13
  };
  var venueMap;                                      // Map() 생성자를 호출하여 지도를 그린다
  venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');     // <script> 요소를 생성한다
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);                 // 요소를 페이지에 추가한다
}

window.onload = loadScript;                          // onload 이벤트가 발생하면 loadScript 함수를 호출한다