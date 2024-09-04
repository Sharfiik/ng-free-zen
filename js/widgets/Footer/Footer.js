import { Column } from '../../ui/Column/Column.js';
import { Developer } from '../../ui/Developer/Developer.js';

/**
 * @typedef {import('./types.ts').FooterData} FooterData
 */

/**
 * @function Footer
 * @param {FooterData} data
 * @returns {string} HTML
 */

export const Footer = (data) => {
  const {categories, info} = data;

  return `
    <footer class="footer" id="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          ${categories.map((category) => Column(category)).join('')}
        </div>
        <div class="footer__info">
            <a class="footer__logo" href="https://example.com">
              <img src="assets/icons/logo2.svg" alt="logo" />
            </a>
          ${info.texts.map((text) => `<p class="footer__copy">${text}</p>`).join('')}
          ${Developer(info)}
        </div>
      </div>
    </footer>
  `;
};
