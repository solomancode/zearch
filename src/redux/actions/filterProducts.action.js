export default function( products, productName ) {
  return {
    type: 'FILTER_PRODUCTS',
    payload: {
      products,
      productName
    }
  }
}