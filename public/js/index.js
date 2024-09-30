import { API_BASE_URL } from './API_BASE_URL.js';
import { addHandlers } from './addHandlers.js';
import { App } from './app.js';

(async () => {
  const $root = document.querySelector('#root');

  const currentLang = localStorage.getItem('currentLang') ?? 'ru';
  const currentTheme = localStorage.getItem('currentTheme') ?? 'dark';
  localStorage.setItem('currentLang', currentLang);
  localStorage.setItem('currentTheme', currentTheme);
  $root?.classList.add(currentTheme);

  const response = await fetch(`${API_BASE_URL}/${currentLang}.json`);
  const responseData = await response.json();
  if ($root) $root.innerHTML = App(responseData);

  addHandlers(responseData);
})();
