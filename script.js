var dropdownMenu = document.querySelector('.nav');
var dropdownNavList = document.querySelector('.nav-list');
var dropdownLogo = document.querySelector('.logo');
var dropdownHamburger = document.querySelector('.hamburger');
var dropdownRotated = document.querySelector('.nav-item.rotated');

var menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', function(){
  dropdownMenu.classList.toggle('foldout');
  dropdownNavList.classList.toggle('foldout');
  dropdownLogo.classList.toggle('foldout');
  dropdownHamburger.classList.toggle('foldout');
  dropdownRotated.classList.toggle('foldout');
});