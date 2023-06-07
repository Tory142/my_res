let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header-link');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let icon = document.querySelector('.icon');
let search = document.querySelector('.search-form');

icon.onclick = () => {
    search.classList.toggle('active');
};