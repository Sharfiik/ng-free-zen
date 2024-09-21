import { dataFromAPI } from './dataFromAPI.js';
import { onThemeClick } from './handlers.js';
import { handleLogoClick } from './handlers.js';
import { handleBurgerClick } from './handlers.js';
import { handleBurgerClose } from './handlers.js';

export const addHandlers = () => {
  const $themeButton = document.querySelector('#theme')
  const $logo = document.querySelector('#logo');
  const $burger = document.querySelector('#burger');
  const $nav = document.querySelector('#menu');

  $themeButton?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands))
  $logo?.addEventListener('click', handleLogoClick);
  $burger?.addEventListener('click', handleBurgerClick);
  $nav?.addEventListener('click', handleBurgerClose);
};
