import { Logo } from '../../fuatures/Logo/Logo.js';
import { Navigation } from '../../fuatures/Navigation/Navigation.js';
import { Lang } from '../../fuatures/Lang/index.js';
import { Theme } from '../../fuatures/Theme/index.js';
import { Burger } from '../../fuatures/Burger/Burger.js';

/**
 * @typedef {import('./types').HeaderData} HeaderData
 */

/**
 * @function Header
 * @param {HeaderData} data
 * @returns {string} HTML
 */

export const Header = (data) => {

  return `
    <header class="header" id="header">
      <div class="header__wrapper">
        ${Logo('header__logo')}
        <nav class="header__nav">
          ${Navigation(data.navigation)}
        </nav>
        <div class="header__actions">
          ${Lang(data.langs)}
          ${Theme('header__theme')}
          ${Burger('burger')}
        </div>
      </div>
    </header>
  `;
};
