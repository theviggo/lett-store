import React, { useEffect, useState } from 'react';

import { MdAdd, MdRemove, MdClose } from 'react-icons/md';

import { useSelector } from 'react-redux';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const [total, setTotal] = useState(0);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        {cart
          ? cart.map(i => (
              <tbody>
                <td>
                  <img src={i.image} alt={i.name} />
                </td>
                <td>
                  <strong>{i.name}</strong>
                  <span>{formatter.format(i.price)}</span>
                </td>
                <td>
                  <div>
                    <button type="button">
                      <MdRemove size={20} color="#ff8c8c" />
                    </button>
                    <input type="number" readOnly value={1} />
                    <button type="button">
                      <MdAdd size={20} color="#ff8c8c" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>R$258,80</strong>
                </td>
                <td>
                  <button type="button">
                    <MdClose size={20} color="#ff8c8c" />
                  </button>
                </td>
              </tbody>
            ))
          : null}
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$312321,23</strong>
        </Total>
      </footer>
    </Container>
  );
}
