import { IconMoon } from '../../ui/Icons/IconMoon/index.js';
import { IconSun } from '../../ui/Icons/IconSun/index.js';


/**
 * @function Theme
 * @param {string} className
 * @returns {string} HTML
 */

export const Theme = (className) => {
  const currentTheme = localStorage.getItem('currentTheme') ?? 'light';
  const iconSrc = currentTheme === 'light' ? IconMoon() : IconSun();

  return `
    <button class="${className}"
      type="button"
      id="theme"
      data-theme="light"
    >
      ${iconSrc}
    </button>
  `
};
