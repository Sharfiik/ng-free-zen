import { handleThemeButtonClick } from './handlers.js';
import { handleOrderOpenBtnClick } from './handlers.js';
import { handleOrderCloseBtnClick } from './handlers.js';
import { primaryInfo, download, warranty, care, cashback, clients, secondaryInfo } from './data.js';

// Theme
const $themeButton = document.querySelector('#theme');

$themeButton.addEventListener('click', handleThemeButtonClick);

// Modal
const $orderOpenBtn = document.querySelector('#order-open');
const $orderCloseBtn = document.querySelector('#order-close');

// Слушатели
$orderOpenBtn.addEventListener('click', handleOrderOpenBtnClick);
$orderCloseBtn.addEventListener('click', handleOrderCloseBtnClick);


// Burger
const $burger = document.querySelector('#burger');
const $menu = document.querySelectorAll('#menu');

$burger.addEventListener('click', function() {
  this.classList.toggle('active')
});

function toggleBurger() {
    $menu.forEach((line) => line.classList.toggle('active'));
};

$burger.addEventListener('click', toggleBurger);