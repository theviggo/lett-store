import produce from 'immer';

export default function cart(state = [], action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_ITEM': {
        const productIndex = draft.findIndex(
          p => p.id === action.payload.item.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.payload.item, amount: 1 });
        }
        break;
      }

      case '@cart/REMOVE_ITEM': {
        const productIndex = draft.findIndex(
          p => p.id === action.payload.itemId
        );
        draft[productIndex].amount -= 1;
        break;
      }

      case '@cart/DELETE_ITEM': {
        const productIndex = draft.findIndex(
          p => p.id === action.payload.itemId
        );
        draft.splice(productIndex, 1);
        break;
      }
      default:
    }
  });
}
