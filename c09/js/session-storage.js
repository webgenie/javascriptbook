if (Modernizr.sessionstorage) {

  var txtUsername = document.getElementById('username'),  // 폼 요소를 가져온다
      txtAnswer = document.getElementById('answer');

  txtUsername.value = sessionStorage.getItem('username'); // sessionStorage 객체의 데이터를 이용하여
  txtAnswer.value = sessionStorage.getItem('answer');     // 요소를 조작한다

  txtUsername.addEventListener('input', function () {     // 데이터를 저장한다
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {       // 데이터를 저장한다
    sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}