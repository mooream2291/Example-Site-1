import React from 'react'
import { Nav, NavbarContainer } from './Navbar.elements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA LOGO
          </NavLogo>
          Some text here mate.
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
