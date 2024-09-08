import { IconApple } from '../Icons/IconApple/index.js';
import { IconGoogle } from '../Icons/IconGoogle/index.js';

/**
 * @typedef {import('./types').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} data
 * @param {string} className
 * @returns {string} HTML
 */

export const Link = (data, className) => `
  <a class="${className}" href="${data.url}">
    ${data.name === 'Apple' ? IconApple() : ''}
    ${data.name === 'Google' ? IconGoogle() : ''}
  </a>
`;
