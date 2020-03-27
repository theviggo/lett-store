import Product from '../models/Product';

export function addSeed() {
  Product.bulkCreate([
    {
      name: 'Blusa Amarela',
      image:
        'https://colorlib.com/wp/wp-content/uploads/sites/2/t-shirt-mockups.jpg',
      price: 15.99,
      quantity: 1,
    },
    {
      name: 'Blusa Branca',
      image:
        'https://colorlib.com/wp/wp-content/uploads/sites/2/27_t-shirt-mockups.jpg',
      price: 19.99,
      quantity: 15,
    },
    {
      name: 'Blusa Colorida',
      image:
        'https://colorlib.com/wp/wp-content/uploads/sites/2/28_t-shirt-mockups.jpg',
      price: 19.99,
      quantity: 10,
    },
    {
      name: 'Blusa Preta',
      image:
        'https://colorlib.com/wp/wp-content/uploads/sites/2/29_t-shirt-mockups.jpg',
      price: 19.99,
      quantity: 3,
    },
    {
      name: 'Kit',
      image:
        'https://colorlib.com/wp/wp-content/uploads/sites/2/free-download-t-shirt-mockup.jpg',
      price: 89.99,
      quantity: 3,
    },
  ]);
}
