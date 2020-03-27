import { Router } from 'express';

import { addSeed } from './app/utils';

import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

routes.post('/product/store', ProductController.store);
routes.post('/product/show', ProductController.show);
routes.put('/product/update', ProductController.update);
routes.delete('/product/delete', ProductController.delete);
routes.post('/product/seed', (req, res) => {
  addSeed();
  return res.json({ ok: true });
});

export default routes;
