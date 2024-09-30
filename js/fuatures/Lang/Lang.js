import { Select } from '../../ui/Select/index.js';
/**
 * @typedef {import('./types').LangsData} LangsData
 */

/**
 * @function Lang
 * @param {LangsData[]} data
 * @returns {string} HTML
 */

export const Lang = (data) => {
  return `
    <label class="header__lang">
      ${Select(data)}
    </label>
  `;
};
