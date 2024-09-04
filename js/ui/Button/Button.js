/**
 * @typedef {import('./types.ts').ButtonData} ButtonData
 */

/**
 * @function Button
 * @param {ButtonData} data
 * @param {string} className
 * @param {string} type
 * @param {string} id
 * @returns {string} HTML
 */

export const Button = (data, className, type, id) => {
  return `
    <button class="${className}"
     type="${type}"
     id="${id}"
     >
      ${data}
     </button>
  `;
};
