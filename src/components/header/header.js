import React from 'react'
import styled from 'styled-components'
import styles from './header.styled'

import Logo from '../logo/logo.js'

const HeaderContainer = styled.header`${ styles }`

export default class Header extends React.Component {
  render(){
    return(
      <HeaderContainer>
        <Logo></Logo>
      </HeaderContainer>
    )
  }
}
