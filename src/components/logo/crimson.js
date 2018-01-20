import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import styles from './crimson.styled'

import zearch from 'file-loader!./zearch.svg'

const CrimsonLink = styled(Link)`${ styles }`

export default class CrimsonLogo extends React.Component {
  render(){
    return(
      <CrimsonLink to="/">
        <img src={ zearch } alt="zearch"/>
      </CrimsonLink>
    )
  }
}
