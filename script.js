let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header-link');
let icon = document.querySelector('.icon');
let search = document.querySelector('.search-form');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

icon.onclick = () => {
    search.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};



