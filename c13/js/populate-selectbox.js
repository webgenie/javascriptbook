(function(){
  var type  = document.getElementById('equipmentType');// 종류 선택 상자
  var model = document.getElementById('model');        // 모델 선택 상자
  var cameras = {                                      // 카메라 목록을 저장하는 객체
    bolex: 'Bolex Paillard H8',
    yashica: 'Yashica 30',
    pathescape: 'Pathescape Super-8 Relax',
    canon: 'Canon 512'
  };
  var projectors = {                                  // 프로젝터 목록을 저장하는 객체
    kodak: 'Kodak Instamatic M55',
    bolex: 'Bolex Sound 715',
    eumig: 'Eumig Mark S',
    sankyo: 'Sankyo Dualux'
  };

  // 사용자가 종류 선택 상자의 옵션을 변경하면 
  addEvent(type, 'change', function() {
    if (this.value === 'choose') {                // 선택된 아이템이 없으면
      model.innerHTML = '<option>종류를 선택해 주세요</option>';
      return;                                     // 더 이상 코드를 실행하지 않는다
    }
    var models = getModels(this.value);           // 모델을 표시한다

    // 루프를 이용해 옵션을 생성한다
    var options = '<option>모델을 선택해 주세요</option>';
	var key;
    for (key in models) {                     // 루프를 실행한다
      options += '<option value="' + key + '">' + models[key] + '</option>';
    } // 옵션 텍스트에 따옴표가 있으면 이스케이프 처리 해야 한다
    model.innerHTML = options;                    // 선택 상자를 수정한다
  });

  function getModels(equipmentType) {
    if (equipmentType === 'cameras') {            // 카메라를 선택했으면
      return cameras;                             // cameras 객체를 리턴한다
    } else if (equipmentType === 'projectors') {  // 프로젝터를 선택했으면
      return projectors;                          // projectors 객체를 리턴한다
    }
  }
}());
