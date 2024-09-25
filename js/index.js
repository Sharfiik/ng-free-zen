import { dataEnFromAPI } from './api/index.js';
import { addHandlers } from './addHandlers.js';
import { App } from './app.js';

const $root = document.querySelector('#root');

const currentLang = localStorage.getItem('currentLang') ?? 'ru';
const currentTheme = localStorage.getItem('currentTheme') ?? 'dark';
localStorage.setItem('currentLang', currentLang);
localStorage.setItem('currentTheme', currentTheme);
$root?.classList.add(currentTheme);


$root?.insertAdjacentHTML('beforeend', App(dataEnFromAPI));
addHandlers();
