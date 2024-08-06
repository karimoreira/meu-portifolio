const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}

document.getElementById('toggle-contrast').addEventListener('click', function() {
  var body = document.body;
  var img = this.querySelector('img');
  
  body.classList.toggle('high-contrast');

  if (body.classList.contains('high-contrast')) {
    img.src = 'img/accessibility-icon-black.svg';
  } else {
    img.src = 'img/accessibility-icon.svg';
  }
});

  
