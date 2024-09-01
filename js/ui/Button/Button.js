/**
 * @typedef {import('./types.ts').ButtonData} ButtonData
 */

/**
 * @function Button
 * @param {ButtonData} data
 * @param {string} ClassName
 * @param {string} type
 * @param {string} id
 * @returns {string} HTML
 */

export const Button = (data, ClassName, type, id) => {
  return `
    <button class="${ClassName}"
     type="${type}"
     id="${id}"
     >
      ${data}
     </button>
  `;
};
