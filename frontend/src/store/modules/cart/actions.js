export function addItem(itemId) {
  return {
    type: '@cart/ADD_ITEM',
    payload: { itemId },
  };
}

export function removeItem(itemId) {
  return {
    type: '@cart/REMOVE_ITEM',
    payload: { itemId },
  };
}
