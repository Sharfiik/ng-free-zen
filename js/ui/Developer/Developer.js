/**
 * @typedef {import('./types').DeveloperData} DeveloperData
 */

/**
 * @function Developer
 * @param {DeveloperData} data
 * @returns {string} HTML
 */

export const Developer = (data) => {
  return `
    <a class="footer__dev" href="https://exaple.com">
      <img src="${data.developer.content.data}" alt="Developer">
    </a>
  `;
};
