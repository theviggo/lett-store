import produce from 'immer';

export default function cart(state = [], action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_ITEM': {
        console.log(action.payload.item);
        draft.push(action.payload.item);
        break;
      }

      case '@cart/REMOVE_ITEM': {
        break;
      }
      default:
    }
  });
}
