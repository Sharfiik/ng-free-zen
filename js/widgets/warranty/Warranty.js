import { Title } from '../../ui/Title/Title.js';
import { Image } from '../../ui/Images/Image.js';

/**
 * @typedef {import('./types').WarrantyData} WarrantyData
 */

/**
 * @function WarrantyData
 * @param {WarrantyData} data
 * @returns {string} HTML
 */

export const Warranty = (data) => {
  const {title, texts, image} = data;

  return `
    <section class="warranty" id="warranty">
      <div class="warranty__wrapper">
        <div class="warranty__text-block">
          ${Title(title, 'warranty__title')}
          ${texts.map((text) => `<p class="warranty__copy">${text}</p>`).join('')}
        </div>
        <div class="warranty__image-block">
          ${Image(image)}
        </div>
      </div>
    </section>
  `;
};
