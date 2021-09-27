'use strict';

import React from 'react';
import {Nav, NavLink, Bar, NavMenu, NavBtn, NavBtnLink} from './navbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bar />

        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            contact
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;