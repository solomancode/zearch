import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import productStyles from './product.styled'
import productBuyStyles from './buyButton.styled'
import productCTAStyles from './productCTA.styled'
import productTitleStyles from './productTitle.styled'
import productPriceStyles from './productPrice.styled'
import productThumbStyles from './productThumb.styled'

const Product = styled.article`${ productStyles }`
const BuyButton = styled.button`${ productBuyStyles }`
const ProductTitle = styled(Link)`${ productTitleStyles }`
const ProductPrice = styled.p`${ productPriceStyles }`
const ProductThumb = styled(Link)`${ productThumbStyles }`
const ProductCTA = styled.section`${ productCTAStyles }`

export default ( props ) =>
<Product>

  {
    props.picture && (
      <ProductThumb to="/">
      <img src={ props.picture } alt={ props.name }/>
    </ProductThumb>
    )
  }

  {
    props.name && (
      <ProductTitle to="/">{ props.name }</ProductTitle>
    )
  }
  
  {
    props.price && (
      <ProductCTA>
        <BuyButton>Add to Cart</BuyButton>
        <ProductPrice>{ props.price }</ProductPrice>
      </ProductCTA>
    )
  }  
  
</Product>