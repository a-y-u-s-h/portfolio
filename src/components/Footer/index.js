import React from 'react'
import { getCurrentYear } from '../../utils/functions'
import { Wrapper, Item } from './style'

const Footer = () =>
  <Wrapper>
    <Item position='left'>
      Made (with 💜) in {getCurrentYear()}
    </Item>
    <Item position='right'>
      <span>Quantity * leads to * Quality</span>
    </Item>
  </Wrapper>

export default Footer
