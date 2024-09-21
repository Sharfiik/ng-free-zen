import { dataFromAPI } from './dataFromAPI.js';
import { App } from './app.js';
import { addHandlers } from './addHandlers.js';


const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(dataFromAPI));
addHandlers();
