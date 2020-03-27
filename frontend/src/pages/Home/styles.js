import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 300px;
  }

  li {
    max-width: 300px;

    margin: 20px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 20px;

    img {
      align-self: center;
      max-width: 280px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #ff8c8c;
      color: #333;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#ff8c8c')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
