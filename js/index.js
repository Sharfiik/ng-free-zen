import { data } from './data.js';
import { Header } from './widgets/Header/index.js';
import { Download } from './widgets/Download/index.js';
import { Warranty } from './widgets/Warranty/index.js';
import { Care } from './widgets/Care/index.js';
import { Cashback } from './widgets/Cashback/index.js';
import { Clients } from './widgets/Сlients/index.js';
import { Footer } from './widgets/Footer/index.js';
import { onThemeClick } from './handlers.js';
import { handleLogoClick } from './handlers.js';
import { handleBurgerClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(data.download));
$root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
$root?.insertAdjacentHTML('beforeend', Care(data.care));
$root?.insertAdjacentHTML('beforeend', Cashback(data.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(data.clients));
$root?.insertAdjacentHTML('beforeend', Footer(data.secondaryInfo));

const $themeButton = document.querySelector('#theme');
$themeButton.addEventListener('click', (event) => {onThemeClick(event, data.clients.brands)});

const $logo = document.querySelector('#logo');
$logo.addEventListener('click', handleLogoClick);

const $burger = document.querySelector('#burger');
$burger.addEventListener('click', handleBurgerClick);
