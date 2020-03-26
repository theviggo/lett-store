import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #232020;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  font-family: Montserrat, sans-serif;

  h1 {
    font-weight: 200;
    color: #7fcd91;
  }

  a {
    text-decoration: none;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  font-family: Roboto, sans-serif;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #706c61;
    }

    span {
      font-size: 12px;
      color: #fff;
    }
  }
`;
