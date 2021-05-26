burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav_list = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');


burger.addEventListener('click',()=>{
nav_list.classList.toggle('v-class-resp');
rightNav.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');
})