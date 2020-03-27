import React, { useEffect, useState } from 'react';

import { MdAdd, MdRemove, MdClose } from 'react-icons/md';

import { useSelector, useDispatch } from 'react-redux';
import { Container, ProductTable, Total } from './styles';
import {
  addItem,
  removeItem,
  deleteItem,
} from '../../store/modules/cart/actions';

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalValue = 0;
    cart.forEach(i => {
      totalValue += i.amount * i.price;
    });
    setTotal(totalValue);
  }, [cart]);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }

  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
  }

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
              <tbody key={i.id}>
                <tr>
                  <td>
                    <img src={i.image} alt={i.name} />
                  </td>
                  <td>
                    <strong>{i.name}</strong>
                    <span>{formatter.format(i.price)}</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        handleRemoveItem(i.id);
                      }}
                      disabled={i.amount === 0}
                    >
                      <MdRemove
                        size={20}
                        color={i.amount === 0 ? '#ddd' : '#ff8c8c'}
                      />
                    </button>
                    <input type="number" readOnly value={i.amount} />
                    <button
                      type="button"
                      onClick={() => {
                        handleAddItem(i);
                      }}
                    >
                      <MdAdd size={20} color="#ff8c8c" />
                    </button>
                  </td>
                  <td>
                    <strong>{formatter.format(i.price * i.amount)}</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdClose
                        size={20}
                        color="#ff8c8c"
                        onClick={() => {
                          handleDeleteItem(i.id);
                        }}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          : null}
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{formatter.format(total)}</strong>
        </Total>
      </footer>
    </Container>
  );
}
