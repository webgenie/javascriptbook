var feed = document.getElementById('feed');

// 올바른 피드
var response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l tins are all reduced this week","price": 30,"link": "http://www.example.com/farrow-and-ball/"},{"title": "Siecle Paints from the UK","description": "Probably the best named paints in the world","price": 28,"link": "http://www.example.com/siecle/"},{"title": "Kelly Hoppen","description": "Now stocking paints by interior designer Kelly Hoppen","price": 42,"link": "http://www.example.com/kelly-hoppen/"}]}';
// 오류가 있는 피드 - 예제가 올바르게 동작하게 하려면 다음 줄을 주석 처리 한다
response = '{"deals": [{"title": "Farrow and Ball","description": "New season 2.5l '; // JSON data

if (response) {
  try {
    var dealData = JSON.parse(response);              // JSON을 파싱한다
    showContent(dealData);                            // JSON 데이터를 보여준다
  } catch(e) {
    var errorMessage = e.name + ' ' + e.message;      // 에러 메시지를 생성한다
    console.log(errorMessage);                        // 개발자 메시지를 출력한다
    feed.innerHTML = '<em>죄송합니다, 데이터를 로드할 수 없습니다.</em>';// 사용자에게 메시지를 출력한다
  } finally {
    var link = document.createElement('a');           // Add refresh link
    link.innerHTML = ' <a href="try-catch-finally.html">새로 고침</a>';
    feed.appendChild(link);
  }
}

function showContent(dealData) {
  var newContent = '';
  for (var i in dealData.deals) {
    newContent += '<div class="deal">';
    newContent += '<h2>' + dealData.deals[i].title + '</h2>';
    newContent += '<p>' + dealData.deals[i].description + '</p>';
    newContent += '<a href="' + dealData.deals[i].link + '">';
    newContent += ' ' + dealData.deals[i].link;
    newContent +='</a>';
    newContent += '</div>';
  }
  feed.innerHTML = newContent;
}