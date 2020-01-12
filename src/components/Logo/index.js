import React from 'react'
import Link from 'gatsby-link'
import Image from './logo.svg'
import { Wrapper } from './style'

const Logo = () =>
  <Wrapper>
    <div>
      <Link to='/'><Image width={22} height={22} /></Link>
      <div className="circle" />
    </div>
  </Wrapper>

export default Logo
