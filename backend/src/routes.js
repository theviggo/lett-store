import { Router } from 'express';

import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

routes.post('/product/store', ProductController.store);
routes.post('/product/show', ProductController.show);
routes.put('/product/update', ProductController.update);
routes.delete('/product/delete', ProductController.delete);

export default routes;
