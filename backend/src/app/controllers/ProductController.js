import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    const { name, price, quantity } = req.body;

    if (!name) {
      return res.status(401).json({ error: 'Name not provided' });
    }

    if (!price) {
      return res.status(401).json({ error: 'Price not provided' });
    }

    if (!quantity) {
      return res.status(401).json({ error: 'Quantity not provided' });
    }

    const newProduct = await Product.create({
      name,
      price,
      quantity,
    });

    return res.json(newProduct);
  }
}

export default new ProductController();
