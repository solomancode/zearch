import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import Header from '../header/header'
import SearchForm from '../searchForm/searchForm'
import ProductsList from '../productsList/productsList'

import mainViewStyles from './mainView.styled'
import productsStyles from './products.styled'

const MainViewContainer = styled.main`${ mainViewStyles }`
const ProductsContainer = styled.section`${ productsStyles }`

class MainView extends React.Component {
  
  view( products ){
    return (
      <ProductsContainer>
        <SearchForm></SearchForm>
        <ProductsList products={ products }></ProductsList>
      </ProductsContainer>
    )
  }
  
  render(){    
    return(
      <MainViewContainer>
        <Header></Header>
        <Route exact path="/" render={ e => this.view( this.props.products ) }/>
      </MainViewContainer>
    )
  }
}

function mapStateToProps( state ) {
  return { products: state.products }
}

export default connect( mapStateToProps )( MainView )