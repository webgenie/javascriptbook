// 객체를 생성한다.
var hotel = {
  name : 'Quay',
  rooms : 40,
  booked : 25,
  checkAvailability : function() {
    var free = this.rooms - this.booked; // 함수 내에서는 "this" 키워드가 필요하다.
    return free;
  }
};

// HTML을 수정한다.
var elName = document.getElementById('hotelName'); // 요소를 찾는다.
elName.textContent = hotel.name;                   // 객체의 속성을 이용하여 HTML을 수정한다.

var elRooms = document.getElementById('rooms');    // 요소를 찾는다.
elRooms.textContent = hotel.checkAvailability();   // 객체의 속성을 이용하여 HTML을 수정한다.