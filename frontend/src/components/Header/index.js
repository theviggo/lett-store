import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Cart } from './styles';

export default function Header() {
  const cart = useSelector(state => state.cart);
  return (
    <Container>
      <Link to="/">
        <h1>Lett Store</h1>
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Carrinho</strong>
          <span>
            {cart.length === 0
              ? `Não há items no seu carrinho`
              : `${cart.length} items`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#ffbaba" />
      </Cart>
    </Container>
  );
}
