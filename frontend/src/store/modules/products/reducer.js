import produce from 'immer';

const INITIAL_STATE = {
  products: null,
};

export default function products(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@product/PRODUCT_REQUEST': {
        draft.products = action.payload.products;
        break;
      }
      default:
    }
  });
}
