/**
 * @typedef {import('./types').ClientsData } ClientsData
 */

/**
 * @function Clients
 * @param {ClientsData} data
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
            <img
              src="${brand.logo.lightSource}"
              alt="${brand.name}"
            />
          </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
};
