import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { productRequest } from '../../store/modules/products/actions';

// import { Container } from './styles';

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
  console.log(products);
  return <h1>{products ? products.map(i => <p>{i.name}</p>) : null}</h1>;
}
