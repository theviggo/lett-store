export function addItem(item) {
  return {
    type: '@cart/ADD_ITEM',
    payload: { item },
  };
}

export function removeItem(itemId) {
  return {
    type: '@cart/REMOVE_ITEM',
    payload: { itemId },
  };
}
