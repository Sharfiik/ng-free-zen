import { IconLang } from '../../ui/Icons/IconLang/IconLang.js';

/**
 * @typedef {import('./types').LangsData} LangsData
 */

/**
 * @function Lang
 * @param {LangsData} data
 * @returns {string} HTML
 */

export const Lang = (data) => `
    <label class="header__lang">
      ${IconLang()}
      <select id="lang">
        ${data.map((lang) => `<option value="${lang.key}">${lang.name}</option>`).join('')}
      </select>
    </label>
`;
