// 객체를 생성한다.
var hotel = {
  name : 'Park',
  rooms : 120,
  booked : 77,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// HTML을 수정한다.
var elName = document.getElementById('hotelName'); // 요소를 찾는다
elName.textContent = hotel.name;                   // 객체의 속성을 이용하여 HTML을 수정한다.

var elPool = document.getElementById('pool');      // 요소를 찾는다
elPool.className = hotel.pool;                     // 객체의 속성을 이용하여 HTML을 수정한다.

var elGym = document.getElementById('gym');        // 요소를 찾는다
elGym.className = hotel.gym;                       // 객체의 속성을 이용하여 HTML을 수정한다.
