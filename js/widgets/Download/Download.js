/**
 * @typedef {import('./types.ts').DownloadData} DownloadData
 * @typedef {import('./types.ts').TitleData} TitleData
 */

/**
 * @function Title
 * @param {TitleData} data
 * @param {string} className
 * @returns {string} HTML
 */

const Title = (data, className) => {
  switch (data.priority) {
    case 6: return `<h6 class="${className}">${data.content}</h6>`;
    case 5: return `<h5 class="${className}">${data.content}</h5>`;
    case 4: return `<h4 class="${className}">${data.content}</h4>`;
    case 3: return `<h3 class="${className}">${data.content}</h3>`;
    case 2: return `<h2 class="${className}">${data.content}</h2>`;
    default: return `<h1 class="${className}">${data.content}</h1>`;
  }
};


/**
 * @function DownloadData
 * @param {DownloadData} data
 * @returns {string} HTML
 */

export const Download = (data) => {
  const {title, texts, links, image} = data;

  return `
    <section class="download" id="download">
      <div class="download__wrapper">
        <div class="download__text-block">
          ${Title(title, 'download__title')}
          ${texts.map((text) => `<p class="download__copy">${text}</p>`).join('')}
          <div class="download__links">Links</div>
        </div>
        <div class="download__image-block">Image</div>
      </div>
    </section>
  `;
};
