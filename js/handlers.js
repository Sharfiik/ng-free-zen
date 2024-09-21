import { IconSun } from './ui/Icons/IconSun/index.js';
import { IconMoon } from './ui/Icons/IconMoon/index.js';

/**
 * @typedef {import('./widgets/Сlients/types.js').BrandsFromAPI} BrandsFromAPI
 */

/**
 * @function onThemeClick
 * @description in ananimus handler
 * @param {Event} event
 * @param {BrandsFromAPI} brandsFromAPI
 */

/**********************************************
  Изменение темы
**********************************************/

export const onThemeClick = (event, brandsFromAPI) => {
  /** @type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');
  const $themeButton = /** @type {HTMLElement | null} */ (event.currentTarget);
  /** @type {HTMLElement | null} */
  const $root = document.querySelector('#root');

  if (!$brandNodes  || !$themeButton || !$root) return;

  const currentTheme = $themeButton.dataset.theme;

  if (currentTheme === 'light') {
    $themeButton.dataset.theme = 'dark';
    $themeButton.innerHTML = IconSun();
    $root.dataset.theme = 'dark';
    $brandNodes.forEach ((brand, index) => {
      brand.src = brandsFromAPI[index].logo.darkSource;
    });
  }

  if (currentTheme === 'dark') {
    $themeButton.dataset.theme = 'light';
    $themeButton.innerHTML = IconMoon();
    $root.dataset.theme = 'light';
    $brandNodes.forEach ((brand, index) => {
      brand.src = brandsFromAPI[index].logo.lightSource;
    });
  }
};

/**********************************************
  Скрол на верх
**********************************************/

/**
 * @function handleLogoClick
 * @returns {void}
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**********************************************
  Вызов меню бургера
**********************************************/

/**
 * @function handleBurgerClick
 * @returns {void}
 */

export const handleBurgerClick = () => {
  const $burger = document.querySelector('#burger');
  const $menu = document.querySelector('#menu');

  $burger?.classList.toggle('active');
  $menu?.classList.toggle('active');
};

/**********************************************
  Закрыти меню бургера при нажатие на секцию и
  плавный скрол
**********************************************/

/**
 * @function handleSectionClick
 * @returns {void}
 */

export const handleBurgerClose = (event) => {
  event.preventDefault();

  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }

  const $nav = document.querySelector('#menu');
  const $burger = document.querySelector('#burger');
  $nav?.classList.toggle('active');
  $burger?.classList.toggle('active');
};
