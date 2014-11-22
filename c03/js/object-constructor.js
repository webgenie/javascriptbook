// 객체를 생성한다.
var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;  
};

var elName = document.getElementById('hotelName'); // 요소를 찾는다.
elName.textContent = hotel.name;                   // 객체의 속성을 이용하여 HTML을 수정한다.

var elRooms = document.getElementById('rooms');    // 요소를 찾는다.
elRooms.textContent = hotel.checkAvailability();   // 객체의 속성을 이용하여 HTML을 수정한다.