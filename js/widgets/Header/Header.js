import { Logo } from '../../fuatures/Logo/Logo.js';
import { Navigation } from '../../fuatures/Navigation/Navigation.js';

/**
 * @typedef {import('./types.ts').HeaderData} HeaderData
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
        ${Navigation(data.navigation)}

        <div class="header__actions">
          <!-- Lang -->
          <label class="header__lang">
            <svg viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 6L0 1.49973L1.50071 0L4.5 3.00053L7.49929 0L9 1.49973L4.5 6Z"/>
            </svg>
            <select id="lang">
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </label>
            <!-- Theme -->
          <button class="header__theme" type="button" id="theme" data-theme="light">
            <img src="assets/icons/moon.svg" alt="Moon" />
          </button>
            <!-- Burger -->
          <button class="burger" type="button" id="burger">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;
};
