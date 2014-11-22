// querySelector 메서드는 조건에 일치하는 첫 번째 요소만 리턴한다.
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAlll 메서드는 NodeList 객체를 리턴한다.
// 조건에 일치하는 두 번째 (목록에서는 세 번째) li 요소를 선택하여 특성을 변경한다.
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
