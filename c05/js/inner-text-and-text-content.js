var firstItem = document.getElementById('one'); // 목록의 첫 번째 아이템을 찾는다.
var showTextContent = firstItem.textContent;    // textContent 속성을 이용하여 텍스트를 가져온다.
var showInnerText = firstItem.innerText;        // innerText 속성을 이용하여 텍스트를 가져온다.

// 두 속성을 통해 가져온 값을 목록 다음에 추가한다.
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = '사워도우 빵';       // 첫 번째 아이템을 수정한다.
