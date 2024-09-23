/**
 * @function Theme
 * @param {string} className
 * @returns {string} HTML
 */

export const Theme = (className) =>
  `
  <button class="${className}"
    type="button"
    id="theme"
    data-theme="light"
  >
    <img src="assets/icons/moon.svg" alt="Moon" />
  </button>
`;
