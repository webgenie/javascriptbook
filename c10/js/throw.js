var width = 12;                                     // width 변수
var height = 'test';                                // height 변수

function calculateArea(width, height) {
  try {
    var area = width * height;                      // 면적을 계산한다
    if (!isNaN(area)) {                             // 결과가 숫자이면
      return area;                                  // 면적을 리턴한다
    } else {                                        // 그렇지 않으면 오류를 발생시킨다
      throw new Error('calculateArea() 함수에 잘못된 값이 전달되었습니다.');
    }
  } catch(e) {                                     // 오류가 발생했으면
    console.log(e.name + ' ' + e.message);          // 오류를 콘솔에 출력한다
    return '면적을 계산할 수 없습니다.'; // 사용자에게 메시지를 보여준다
  }
}

// 페이지에 면적을 출력한다
document.getElementById('area').innerHTML = calculateArea(width, height);