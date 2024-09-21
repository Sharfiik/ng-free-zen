import { Header } from './widgets/index.js';
import { Download } from './widgets/index.js';
import { Warranty } from './widgets/index.js';
import { Care } from './widgets/index.js';
import { Cashback } from './widgets/index.js';
import { Clients } from './widgets/index.js';
import { Footer } from './widgets/index.js';

/**
 * @typedef {import('./types').AppData} AppData
 */

/**
 * @function App
 * @param {AppData} data
 * @returns {string} HTML
 *
*/

export const App = (data) => {
  return `
    ${Header(data.primaryInfo)}
    ${Download(data.download)}
    ${Warranty(data.warranty)}
    ${Care(data.care)}
    ${Clients(data.clients)}
    ${Cashback(data.cashback)}
    ${Footer(data.secondaryInfo)}
  `
};
