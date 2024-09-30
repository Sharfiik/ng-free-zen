/**
 * @typedef {import('./types').Navigation} Navigation
 */

/**
 * @function Navigation
 * @param {Navigation[]} navList
 * @returns {string} HTML
 */

export const Navigations = (navList) => {

  return`
    <ul class="menu" id="menu">
      ${navList.map((navItem) => `
        <li class="menu__item">
          <a href="${navItem.anchor}" data-id="burger-link">${navItem.name}</a>
        </li>`).join('')}
    </ul>
  `
};
