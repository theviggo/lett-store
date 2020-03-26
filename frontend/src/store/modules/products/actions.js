export function productRequest(products) {
  return {
    type: '@product/PRODUCT_REQUEST',
    payload: { products },
  };
}
