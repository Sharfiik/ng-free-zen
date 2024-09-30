import { Title } from '../../ui/Title/index.js';
import { Image } from '../../ui/Images/index.js';

/**
 * @typedef {import('./types').CareData} CareData
 */

/**
 * @function Care
 * @param {CareData} data
 * @returns {string} HTML
 */

export const Care = (data) => {
  const {title, texts, images} = data;

  return `
    <section class="care" id="care">
      <div class="care__wrapper">
        <div class="care__text-block">
          ${Title(title, 'care__title')}
          ${texts.map((text) => `<p class="care__copy">${text}</p>`).join('')}
        </div>
        <div class="care__image-block">
          ${Image(images)}
        </div>
      </div>
    </section>
  `;
};
