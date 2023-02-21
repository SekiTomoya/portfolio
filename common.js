const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function poppu(elem){
  let tar = document.getElementById(elem);
  tar.style.setProperty("display", "flex", "important");
  tar.style.setProperty("position", "fixed", "important");
  tar.style.setProperty("align-items", "center", "important");
  tar.style.setProperty("justify-content", "center", "important");
  tar.style.setProperty("overflow-x", "inherit", "important");
  tar.style.setProperty("overflow-y", "inherit", "important");
}

function close(elem) {
  elem.style.setProperty("display", "", "");
  elem.style.setProperty("position", "", "");
  elem.style.setProperty("align-items", "", "");
  elem.style.setProperty("justify-content", "", "");
}
