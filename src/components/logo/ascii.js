import React from 'react'
import styled from 'styled-components'
import styles from './ascii.styled'
import glassesAscii from './glasses.ascii'

const AsciiContainer = styled.pre`${ styles }`

export default class AsciiLogo extends React.Component {
  render(){
    return(
      <AsciiContainer>
        { glassesAscii } zearch...
      </AsciiContainer>
    )
  }
}