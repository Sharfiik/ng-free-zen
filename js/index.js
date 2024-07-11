import { handleThemeButtonClick } from './handlers.js';
import { handleOrderOpenBtnClick } from './handlers.js';
import { handleOrderCloseBtnClick } from './handlers.js';

// Theme
const $themeButton = document.querySelector('#theme');

$themeButton.addEventListener('click', handleThemeButtonClick);

// Modal
const $orderOpenBtn = document.querySelector('#order-open');
const $orderCloseBtn = document.querySelector('#order-close');

// Слушатели
$orderOpenBtn.addEventListener('click', handleOrderOpenBtnClick);
$orderCloseBtn.addEventListener('click', handleOrderCloseBtnClick);