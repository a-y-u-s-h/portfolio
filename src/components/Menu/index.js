import React from 'react'
import EmailMe from '../EmailMe'
import { Wrapper, Nav, NavItem, NavLink } from './style'

const Menu = () =>
  <Wrapper>
    <Nav>
      <NavItem>
        <a href="https://twitter.com/taggosaurus" rel="noopener noreferrer" target="_blank">Twitter</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/a-y-u-s-h" rel="noopener noreferrer" target="_blank">Github</a>
      </NavItem>
      <NavItem>
        <a href="https://gitlab.com/a-y-u-s-h" rel="noopener noreferrer" target="_blank">Gitlab</a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink to='/'>Index</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/works'>Works</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/profile'>Profile</NavLink>
      </NavItem>
      <NavItem highlight><EmailMe text="Contact"/>
    </NavItem>
    </Nav>
  </Wrapper>

export default Menu
