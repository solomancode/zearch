import React from 'react'
import styled from 'styled-components'
import Product from './product'

import gridStyles from '../layout/grid.styled'
import listStyles from '../layout/list.styled'

const Grid = styled.ul`${ gridStyles }`
const List = styled.ul`${ listStyles }`

class ProductsList extends React.Component {  

  renderProduct( product, index ){
    let key = index.toString()
    return (
      <li key={ key }>        
          <Product
            name={ product.name }
            price={ product.price }
            picture={ product.picture }>
          </Product>
      </li>
    )
  }
  
  renderProducts( products ){
    return products.map( this.renderProduct )
  }
  
  render(){
    return(
      <Grid>
        { this.renderProducts( this.props.products ) }
      </Grid>
    )
  }
}

export default ProductsList