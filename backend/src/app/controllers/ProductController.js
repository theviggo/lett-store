import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    const { name, price, quantity } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name not provided' });
    }

    if (!price) {
      return res.status(400).json({ error: 'Price not provided' });
    }

    if (!quantity) {
      return res.status(400).json({ error: 'Quantity not provided' });
    }

    const newProduct = await Product.create({
      name,
      price,
      quantity,
    });

    return res.json(newProduct);
  }

  async show(req, res) {
    const { search } = req.body;

    if (search.name) {
      const product = await Product.findOne({ where: { search } });
      if (!product)
        return res.status(400).json({ error: 'Product does not exists' });
      return res.json(product);
    }

    if (search.id) {
      const product = await Product.findByPk(search.id);
      if (!product)
        return res.status(400).json({ error: 'Product does not exists' });
      return res.json(product);
    }

    const allProducts = await Product.findAll();
    return res.json(allProducts);
  }
}

export default new ProductController();
