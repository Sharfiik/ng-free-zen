/**
 * @typedef {import('./types').BrandsFromAPI } BrandsFromAPI
 */

/**
 * @function Clients
 * @param {BrandsFromAPI} data
 * @returns {string} HTML
 */

export const Clients = (data) => {
  const {brands} = data;

  return `
    <section class="clients" id="clients">
      <div class="clients__wrapper">
        <ul class="clients__brands">
          ${brands.map((brand) => `
            <li class="clients__brand">
            <img src="${brand.logo.lightSource}"
              alt="${brand.name}"
              data-id="brand"
            />
            </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
};
