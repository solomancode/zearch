import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Product from '../productsList/product'
import filterProducts from '../../redux/actions/filterProducts.action'

import searchFormStyles from './searchForm.styled'
import searchFormInputStyles from './searchForm__input.styled'
import suggestionsListStyles from './suggestionsList.styled'
import suggestionsBoxStyles from './suggestionsBox.styled'
import suggestionStyles from './suggestion.styled'

const FormContainer = styled.form`${ searchFormStyles }`
const SearchFormInput = styled.input`${ searchFormInputStyles }`
const SuggestionsList = styled.section`${ suggestionsListStyles }`
const SuggestionsBox = styled.section`${ suggestionsBoxStyles }`
const Suggestion = styled.p`${ suggestionStyles }`

class SearchForm extends React.Component {

  constructor( props ){
    super( props )
    this.state = { suggestionsIsEnabled: false }
    this.resolveProduct = this.resolveProduct.bind( this )
    this.filterProducts = this.filterProducts.bind( this )
    this.viewSuggestions = this.viewSuggestions.bind( this )
    this.hideSuggestions = this.hideSuggestions.bind( this )
  }

  resolveProduct( name ){
    name = name.replace(/\n/g,'')
    if ( this.props.products.length === 0 ) return [];
    return this.props.products.find( product => product.name === name )
  }
  
  renderFilteredProducts( limit ){
    return (
      this.props.filteredProducts
      .map(( productName, i ) =>
        <Suggestion key={ i.toString() }>{ productName }</Suggestion>
      )
      .slice( 0, limit )
    )
  }

  filterProducts( productName ) {
    let filtered = this.props.filterProducts(
      this.props.products,
      ( productName || '' )
    )
    return filtered
  }

  viewSuggestions(){
    this.setState({ suggestionsIsEnabled: true })
  }

  hideSuggestions(){
    this.setState({ suggestionsIsEnabled: false })
  }
  
  render(){
    return(
      <FormContainer>
        <SuggestionsBox>
          <SearchFormInput
            placeholder="Type Something..."
            onFocus={ this.viewSuggestions }
            onBlur={ this.hideSuggestions }
            onChange={ e => this.filterProducts( e.target.value ) }>
          </SearchFormInput>
          {
            this.state.suggestionsIsEnabled &&
            <SuggestionsList>
              { this.renderFilteredProducts( 5 ) }
            </SuggestionsList>
          }
        </SuggestionsBox>
      </FormContainer>
    )
  }
}

function mapStateToProps( state ) {
  return {
    products: state.products,
    filteredProducts: state.filteredProducts
  }
}

function matchDispatchToProps( dispatch ) {
  return bindActionCreators({ filterProducts }, dispatch)
}

export default connect( mapStateToProps, matchDispatchToProps )( SearchForm )