import { HeaderLogo } from '../../ui/Icons/HeaderLogo/index.js';

/**
 * @function logo
 * @param {string} className
 * @returns {string} HTML
 */

export const Logo = (className) => {
  
  return `
  <button class="${className}"
    type="button"
    id="logo"
    >
    ${HeaderLogo()}
  </button>
  `;
};
