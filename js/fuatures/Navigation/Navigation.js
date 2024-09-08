/**
 * @typedef {import('./types').NavigationData} NavigationData
 */

/**
 * @function Navigation
 * @param {NavigationData} data
 * @returns {string} HTML
 */

export const Navigation = (data) => `
    <ul class="menu" id="menu">
      ${data.map((navItem) => `
        <li class="menu__item">
          <a href="#${navItem.key}">${navItem.name}</a>
        </li>`).join('')}
    </ul>
`;
