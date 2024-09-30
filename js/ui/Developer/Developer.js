/**
 * @typedef {import('./types').InfoData} InfoData
 */

/**
 * @function Developer
 * @param {InfoData} info
 * @returns {string} HTML
 */

export const Developer = (info) => {
  
  return `
    <a class="footer__dev" href="https://exaple.com">
      <img src="${info.developer.content.data}" alt="Developer">
    </a>
  `;
};
