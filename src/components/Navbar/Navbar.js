import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon } from './Navbar.elements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            LOGO
          </NavLogo>
          Some text here mate.
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
