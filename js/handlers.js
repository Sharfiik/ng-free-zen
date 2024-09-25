import { dataEnFromAPI } from './api/index.js';
import { dataRuFromAPI } from './api/index.js';
import { App } from './app.js';
import { addHandlers } from './addHandlers.js';
import { IconSun } from './ui/Icons/IconSun/index.js';
import { IconMoon } from './ui/Icons/IconMoon/index.js';

/**********************************************
  Изменение темы
**********************************************/

/**
 * @typedef {import('./widgets/Сlients/types.js').BrandsFromAPI} BrandsFromAPI
 */

/**
 * @function onThemeClick
 * @description in ananimus handler
 * @param {Event} event
 * @param {BrandsFromAPI} brandsFromAPI
 */

export const onThemeClick = (event, brandsFromAPI) => {
  /** @type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');
  const $themeButton = /** @type {HTMLElement} */ (event.currentTarget);
  /** @type {HTMLElement | null} */
  const $root = document.querySelector('#root');

  const currentTheme = localStorage.getItem('currentTheme');

  if (currentTheme === 'light') {
    $themeButton.innerHTML = IconSun();
    $root?.classList.remove('light');
    $root?.classList.add('dark');
    localStorage.setItem('currentTheme', 'dark');
    $brandNodes.forEach ((brand, index) => {
      brand.src = brandsFromAPI[index].logo.darkSource;
    });
  }

  if (currentTheme === 'dark') {
    $themeButton.innerHTML = IconMoon();
    $root?.classList.remove('dark');
    $root?.classList.add('light');
    localStorage.setItem('currentTheme', 'light');
    $brandNodes.forEach ((brand, index) => {
      brand.src = brandsFromAPI[index].logo.lightSource;
    });
  }
};

/**********************************************
  Скрол по клике на лого
**********************************************/

/**
 * @function handleLogoClick
 * @returns {void}
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**********************************************
  Открытие и закрытие бургера
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
  Закрытие бургера при скроле
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

/**********************************************
 Смена языка
**********************************************/

/**
 * @function onLangChange
 * @description Change language
 * @param {Event} event
 */

export const onLangChange = (event) => {
  const $langSelect = /** @type {HTMLSelectElement | null} */ (event.target);
  /** @type {HTMLElement | null} */
  const $root = document.querySelector('#root');

  if (!$langSelect || !$root) return;

  const selectedLang = $langSelect.value;
  localStorage.setItem('currentLang', selectedLang)
  const data = selectedLang === 'en' ? dataEnFromAPI : dataRuFromAPI;
  $root.innerHTML = App(data);

  addHandlers();
};
