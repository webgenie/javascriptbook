// 호텔 객체를 위한 템플릿을 정의한다.
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() { 
    return this.rooms - this.booked; 
  };
}


// 두 개의 호텔 객체를 생성한다.
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);


// 페이지의 HTML을 수정한다.
var details1 = quayHotel.name + ' 남은 방: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' 남은 방: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');   
elHotel2.textContent = details2;