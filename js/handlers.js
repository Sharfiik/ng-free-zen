// Theme
import { generateSunIcon } from './ui/generateSunIcon.js';
import { generateMoonIcon } from './ui/generateMoonIcon.js';

// Получить доступ к app через дом дерево
const $app = document.querySelector('#app'); 

export const handleThemeButtonClick = (event) => {
  const $themeButton = event.currentTarget;
  const theme = $themeButton.dataset.theme;
  if (theme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = generateSunIcon();
    $app.classList.add('dark');
    $app.classList.remove('light');
  }

  if (theme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = generateMoonIcon();
    $app.classList.add('light');
    $app.classList.remove('dark');
  }
};


// Modal
const $modalOrder = document.querySelector('#modal-order');

export const handleOrderOpenBtnClick = () => {
  $modalOrder.classList.add('active');
};

export const handleOrderCloseBtnClick = () => {
  $modalOrder.classList.remove('active');
};
