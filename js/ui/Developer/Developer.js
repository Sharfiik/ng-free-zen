/**
 * @typedef {import('./types').InfoData} InfoData
 */

/**
 * @function Developer
 * @param {InfoData} data
 * @returns {string} HTML
 */

export const Developer = (data) => {
  return `
    <a class="footer__dev" href="https://exaple.com">
      <img src="${data.developer.content.data}" alt="Developer">
    </a>
  `;
};
