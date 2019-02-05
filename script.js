const dropdownMenu = document.querySelector('.nav');
const dropdownNavList = document.querySelector('.nav-list');
const dropdownLogo = document.querySelector('.logo');
const dropdownHamburger = document.querySelector('.hamburger');
const dropdownRotated = document.querySelector('.nav-item.rotated');



const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', function(){
    dropdownMenu.classList.toggle('foldout');
    dropdownNavList.classList.toggle('foldout');
    dropdownLogo.classList.toggle('foldout');
    dropdownHamburger.classList.toggle('foldout');
    dropdownRotated.classList.toggle('foldout');
});