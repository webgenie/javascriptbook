if (Modernizr.localstorage) {

  var txtUsername = document.getElementById('username'); // 폼 요소를 가져온다
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');  // localStorage 객체에 저장된 데이터를 이용하여
  txtAnswer.value = localStorage.getItem('answer');      // 요소를 조작한다

  txtUsername.addEventListener('input', function () {    // 데이터를 저장한다
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // 데디터를 저장한다
    localStorage.setItem('answer', txtAnswer.value);
  }, false);
}