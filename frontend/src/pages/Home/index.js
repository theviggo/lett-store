import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { productRequest } from '../../store/modules/products/actions';
import { addItem } from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    async function getProducts() {
      const product = await api.post('product/show');
      if (product) dispatch(productRequest(product.data));
    }
    getProducts();
  }, [dispatch]);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  return (
    <ProductList>
      {products
        ? products.map(i => (
            <li key={i.id}>
              <img src={i.image} alt={i.name} />
              <strong>{i.name}</strong>
              <span>{formatter.format(i.price)}</span>

              <button
                type="button"
                onClick={() => {
                  handleAddItem(i);
                }}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#fff" /> {i.quantity}
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))
        : null}
    </ProductList>
  );
}
