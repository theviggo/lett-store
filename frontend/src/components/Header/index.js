import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>Lett Store</h1>
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Carrinho</strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#706c61" />
      </Cart>
    </Container>
  );
}
