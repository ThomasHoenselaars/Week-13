const dropdownMenu = document.querySelector('.nav');
const dropdownNavList = document.querySelector('.nav-list');
const dropdownLogo = document.querySelector('.logo');
const hamburgerChange = document.querySelector('.hamburger .fas');
const dropdownFoldout = document.querySelector('.nav-list-foldout');
const dropdownRotated = document.querySelector('.nav-item.rotated');

const menuButton = document.querySelector('.hamburger');

menuButton.addEventListener('click', function(){
    dropdownMenu.classList.toggle('foldout');
    dropdownNavList.classList.toggle('foldout');
    dropdownLogo.classList.toggle('foldout');
    dropdownRotated.classList.toggle('foldout');
    hamburgerChange.classList.toggle('fa-times');
    dropdownFoldout.classList.toggle('foldout');
});

const mobileMenu = document.querySelector('.mobile-menu');
const mobileHamburgerChange = document.querySelector('.mobile-hamburger .fas')

const mobileMenuButton = document.querySelector('.mobile-hamburger');

mobileMenuButton.addEventListener('click', function(){
    mobileMenu.classList.toggle('mobile-foldout');
    mobileHamburgerChange.classList.toggle('fa-times');
    
});
