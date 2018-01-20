import { combineReducers } from 'redux'

import products from './products.reducer'
import filteredProducts from './filteredProducts.reducer'

export default combineReducers({
  products,
  filteredProducts
})