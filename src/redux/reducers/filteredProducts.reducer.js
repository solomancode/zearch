export default function ( state = [], action ){
  
  if ( action.type === 'FILTER_PRODUCTS' ) {
    let { products, productName } = action.payload
    if ( productName === '' ) return []
    let namesList = products.map( product => product.name )
    let searchString = namesList.join('\n')
    let regex = new RegExp( `.*${ productName }.*\n`, 'g' )
    let filtered = searchString.match( regex ) || []
    return filtered
  }

  return state
}