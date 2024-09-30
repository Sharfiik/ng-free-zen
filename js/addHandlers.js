import { onThemeClick } from './handlers.js';
import { handleLogoClick } from './handlers.js';
import { handleBurgerClick } from './handlers.js';
import { handleBurgerClose } from './handlers.js';
import { onLangChange } from './handlers.js';

export const addHandlers = (responseData) => {
  const $themeButton = document.querySelector('#theme')
  const $logo = document.querySelector('#logo');
  const $burger = document.querySelector('#burger');
  const $nav = document.querySelector('#menu');
  const $langSelect = document.querySelector('#lang');

  $themeButton?.addEventListener('click', (event) =>
    onThemeClick(event, responseData.clients.brands))
  $logo?.addEventListener('click', handleLogoClick);
  $burger?.addEventListener('click', handleBurgerClick);
  $nav?.addEventListener('click', handleBurgerClose);
  $langSelect?.addEventListener('change', onLangChange);
};
