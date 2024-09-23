import { dataEnFromAPI } from './api/index.js';
import { App } from './app.js';
import { addHandlers } from './addHandlers.js';

const currentLang = localStorage.getItem('currentLang') ?? 'ru'
localStorage.setItem('currentLang', currentLang)

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(dataEnFromAPI));
addHandlers();
