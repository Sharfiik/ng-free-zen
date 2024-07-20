const download = {
  title: 'Peaceful shopping mindful money',
  texts: [
    'See how we can help with making your shopping experience and money management more ZEN.'
  ],
  images: {
    source: './asssts/images/1.jpg',
    description: 'Bag and device',
  },
};

console.log(download);
console.log(download.title);
console.log(download.texts[0]);
console.log(download.images)

const warranty = {
  title: '1-year warranty boost',
  texts: [
    'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.', 
    'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.'
  ],
  images: {
    source: './asssts/images/2.jpg',
    description: 'Basket',
  },
};

console.log(warranty);
console.log(warranty.title);
console.log(warranty.texts[0]);
console.log(warranty.texts[1]);
console.log(warranty.images)

const care = {
  title: 'ZEN Care',
  texts: [
    'Shopping online is usually a delightful experience. Until it\'s not.', 'Until something you buy, proves to be faulty, missing or a totallywrong item, you’re in for long product return procedures.', 
    'But, here comes ZEN Care: a free, built-in shopping protection.'
  ],
  images: {
    source: './asssts/images/3.jpg',
    description: 'Card',
  },
};

console.log(care);
console.log(care.title);
console.log(care.texts[0]);
console.log(care.texts[1]);
console.log(care.texts[2]);
console.log(care.images)

const cashback = {
  title: 'and cashback!',
  texts: [
    'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.', 
    'We gave it a thought and made cashback way more friendly.', 
    'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.'
  ],
  button: document.getElementById('#order-open'),
};

console.log(cashback);
console.log(cashback.title);
console.log(cashback.texts[0]);
console.log(cashback.texts[1]);
console.log(cashback.texts[2]);
