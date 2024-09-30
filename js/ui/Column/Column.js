/**
 * @typedef {import('./types').CategoryData} CategoryData
 */

/**
 * @function Column
 * @param {CategoryData} data
 * @returns {string} HTML
 */

export const Column = (data) => {
  const { links } = data;

  return `
    <div class="column">
      <h3 class="column__title">${data.name}</h3>
      <ul class="column__list">
        ${links.map((link) => `
          <li class="column__item">
            <a href="${link.url}">${link.content.type === 'image'? `
            <img src="${link.content.data}" alt="${data.name}" />` : link.content.data}
            </a>
          </li>`).join('')}
      </ul>
    </div>
  `;
};
