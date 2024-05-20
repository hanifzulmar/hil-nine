// Toggle class active untuk hamberger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle class active untuk search form
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchform.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingcart.classList.toggle('active');
    e.preventDefault();
};

// klik di luar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchform.contains(e.target)) {
        searchform.classList.remove('active');
    }

    if(!sc.contains(e.target) && !shoppingcart.contains(e.target)) {
        shoppingcart.classList.remove('active');
    }
});



