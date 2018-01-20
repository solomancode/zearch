import React from 'react'
import styled, { withTheme } from 'styled-components'
import styles from './logo.styled'
import AsciiLogo from './ascii'
import CrimsonLogo from './crimson'

const LogoContainer = styled.h1`${ styles }`

class Logo extends React.Component {
  
  render(){
    return(
      <LogoContainer>
        { this.themeLogo() }        
      </LogoContainer>
    )
  }

  themeLogo(){
    switch ( this.props.theme.name ) {
      case 'terminal': return <AsciiLogo></AsciiLogo>
      case 'tamata'    : return <CrimsonLogo></CrimsonLogo>
      default: null
    }
  }
}

export default withTheme( Logo )