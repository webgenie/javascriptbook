var contacts = {                 // 연락처 정보를 생성한다
  "런던": {
    "Tel": "+44 (0)207 946 0128",
    "Country": "영국"},
  "시드니": {
    "Tel": "+61 (0)2 7010 1212",
    "Country": "호주"},
  "뉴욕": {
    "Tel": "+1 (0)1 555 2104",
    "Country": "미국"}
};

console.table(contacts);                   // 데이터를 콘솔에 출력한다

var city, contactDetails;                  // 변수를 선언한다 
contactDetails = '';                       // 페이지에 출력할 상세 정보를 저장한다

$.each(contacts, function(city, contacts) {
  contactDetails += city + ': ' + contacts.Tel + '<br />';
});
$('h2').after('<p>' + contactDetails + '</p>');